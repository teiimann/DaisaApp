import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import {
  Calendar,
  MessageSquare,
  Headphones,
  CheckCircle,
  MoveRight,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Select a Date & Time",
      description: "Choose your preferred date and time from our availability calendar.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Tell Us About Your Event",
      description: "Provide details about your event type, venue, and specific requirements.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Consultation Call",
      description: "Our team will contact you to discuss your needs in detail.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Confirmation",
      description: "Receive your booking confirmation and prepare for an amazing event.",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for large events or peak season dates (May-September and December).",
    },
    {
      question: "Is a deposit required to secure a booking?",
      answer:
        "Yes, a 30% deposit is required to secure your booking. The remaining balance is due one week before your event date.",
    },
    {
      question: "What happens after I submit my booking request?",
      answer:
        "Our team will review your request and contact you within 24-48 hours to discuss details and provide a customized quote.",
    },
    {
      question: "Do you provide all necessary equipment?",
      answer:
        "Yes, we provide all sound and lighting equipment needed for your event, including setup, operation, and teardown.",
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer:
        "Yes, modifications can be made up to 2 weeks before your event, subject to equipment and staff availability.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 30+ days before the event receive a full deposit refund. Cancellations within 14-30 days receive a 50% deposit refund. Cancellations under 14 days are non-refundable.",
    },
  ];

  return (
    <div className="pt-[150px]">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Book Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Ready to elevate your event with professional sound and lighting? Use our simple
              booking process to secure your date.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">How Booking Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes booking our services easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-psyco-green-DEFAULT/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Select a Date & Time</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our available slots and tell us about your event
            </p>
          </div>
          <BookingCalendar />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our booking process and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need to Speak With Us Directly?
                </h2>
                <p className="text-gray-300 mb-6">
                  If you have specific questions or prefer to discuss your requirements over the
                  phone, our team is here to help.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">+44 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">booking@psycotikcrew.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-psyco-green-DEFAULT" />
                    <span className="text-white">Mon-Fri: 9am-6pm | Sat: 10am-4pm</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                {[
                  {
                    title: "Emergency Support",
                    desc: "24/7 support line for existing bookings",
                  },
                  {
                    title: "Custom Packages",
                    desc: "Speak with our team about bespoke solutions",
                  },
                  {
                    title: "Site Visits",
                    desc: "Request a venue assessment before your event",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-psyco-green-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
