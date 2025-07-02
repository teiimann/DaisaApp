import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await fetchGPTResponse([...messages, userMessage]);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't process your request. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      }]);
    }

    setIsLoading(false);
  };

  const fetchGPTResponse = async (conversation) => {
    const systemPrompt = {
      role: "system",
      content: `You are a professional AI assistant representing the logistics and industrial complex “DAISA”, located in Shymkent, Kazakhstan.

DAISA provides large-scale warehouse infrastructure including:
- More than 14,000 m² of warehouse space (cold and dry)
- A 3-story main building (7,200 m²)
- Detached office buildings (186 m² and 188 m²)
- Private railway spur (775 meters)
- Gas heating, backup generators
- Secure fenced territory with surveillance and access control
- Parking for light and heavy vehicles
- Strategic cooperation options: distribution center, coworking, e-commerce fulfillment, and more

Your role is to help users in both Russian and English — respond in the language they use.

Assist users with questions about:
- Warehouse and office rental
- Logistics solutions
- E-commerce storage and fulfillment
- Visiting the facility
- Getting price quotes or site details

If the user asks for specifics — mention square meters, types of buildings, heating, or security features.

If you can't fully help — politely ask for their name, phone, or email so a human team member can assist.

---

Вы — профессиональный AI-ассистент, представляющий логистический и складской комплекс “DAISA”, расположенный в городе Шымкент, Казахстан.

DAISA предлагает:
- Складские помещения более 14 000 м² (в том числе холодные склады)
- Основное 3-этажное здание (7 200 м²)
- Отдельные офисные помещения (186 и 188 м²)
- Собственный железнодорожный тупик (775 метров)
- Газовое отопление, резервные генераторы
- Охраняемая огороженная территория с видеонаблюдением
- Парковка для легкового и грузового транспорта
- Возможности стратегического сотрудничества: распределительный центр, коворкинг, e-commerce логистика и др.

Ваша задача — помогать пользователям как на русском, так и на английском языке (в зависимости от того, на каком языке пишет пользователь).

Отвечайте на вопросы о:
- Аренде складов и офисов
- Логистических решениях
- Хранении и обработке заказов для интернет-магазинов
- Посещении объекта
- Получении ценовых предложений и характеристик

Если не можете полностью помочь — вежливо попросите оставить имя, телефон или email для связи с живым менеджером.
    `
    };

    const chatMessages = [systemPrompt, ...conversation.map(msg => ({
      role: msg.isUser ? "user" : "assistant",
      content: msg.text,
    }))];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: chatMessages,
        temperature: 0.7
      })
    });

    if (!response.ok) throw new Error("GPT request failed");

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 h-[600px] bg-psyco-black-light border border-psyco-green-DEFAULT/20 rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-psyco-green-DEFAULT/20 bg-gradient-to-r from-psyco-green-DEFAULT/10 to-transparent">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bot className="h-8 w-8 text-psyco-green-DEFAULT animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
              <p className="text-xs text-gray-400">Online now</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-psyco-green-DEFAULT/10 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start space-x-3 animate-fade-in",
                message.isUser ? "flex-row-reverse space-x-reverse" : ""
              )}
            >
              <div className="flex-shrink-0">
                {message.isUser ? (
                  <div className="w-8 h-8 bg-psyco-green-DEFAULT rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-psyco-green-DEFAULT to-psyco-green-light rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div
                className={cn(
                  "max-w-[70%] p-3 rounded-2xl",
                  message.isUser
                    ? "bg-psyco-green-DEFAULT text-white rounded-br-none"
                    : "bg-gray-800 text-gray-100 rounded-bl-none"
                )}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start space-x-3 animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-psyco-green-DEFAULT to-psyco-green-light rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-psyco-green-DEFAULT" />
                  <span className="text-sm text-gray-300">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-psyco-green-DEFAULT/20 bg-gradient-to-r from-transparent to-psyco-green-DEFAULT/5">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-800 border border-psyco-green-DEFAULT/30 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-psyco-green-DEFAULT focus:ring-2 focus:ring-psyco-green-DEFAULT/20 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="p-2 bg-psyco-green-DEFAULT hover:bg-psyco-green-dark disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
