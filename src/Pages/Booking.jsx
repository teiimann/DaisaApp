import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import FAQCard from "../components/FAQCard";
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
      title: "Choose Preferred Date",
      description: "Pick a suitable date and time to meet with our logistics consultant.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Describe Your Needs",
      description: "Tell us about your storage, transport, or office space requirements.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Personal Consultation",
      description: "We’ll arrange a call or on-site meeting to go over the details.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Get Proposal & Confirm",
      description: "Receive a tailored solution and finalize your booking.",
    },
  ];
  

  const faqs = [
    {
      question: "What services can I book?",
      answer: "You can book consultations for warehouse rental, office space, railway access, or full logistics solutions.",
    },
    {
      question: "Do you allow site visits?",
      answer: "Yes, site visits are available by appointment. Please schedule in advance for guided tours.",
    },
    {
      question: "Is a deposit required?",
      answer: "Some bookings, like warehouse rentals, require a security deposit. Details will be provided during consultation.",
    },
    {
      question: "Can I combine services?",
      answer: "Absolutely. We offer bundled logistics packages including storage, office, and transport access.",
    },
    {
      question: "Can I modify a confirmed booking?",
      answer: "Yes, changes can be made up to 14 days before activation, depending on availability.",
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations 30+ days prior receive full refund. 14–30 days: 50% refund. Less than 14 days: non-refundable.",
    },
  ];
  

  return (
    <div className="pt-[150px]">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
  Book a Logistics Consultation
</h1>
<p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
  Schedule a consultation with our logistics experts to explore warehouse space, office rentals, or custom infrastructure solutions.
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
          <h2 className="text-3xl font-bold text-white mb-2">Schedule a Meeting</h2>
<p className="text-gray-400 max-w-2xl mx-auto">
  Book a date and time to visit our logistics center or consult with our team online.
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
                            <FAQCard
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          />
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
  Have Questions About Our Facilities?
</h2>
<p className="text-gray-300 mb-6">
  Contact our team directly to discuss availability, pricing, or schedule a site visit.
</p>

<div className="flex items-center space-x-3">
  <Phone className="h-5 w-5 text-psyco-green-DEFAULT" />
  <span className="text-white">+7 701 111 05 22</span>
</div>
<div className="flex items-center space-x-3">
  <Mail className="h-5 w-5 text-psyco-green-DEFAULT" />
  <span className="text-white">info@daisa.kz</span>
</div>
<div className="flex items-center space-x-3">
  <Clock className="h-5 w-5 text-psyco-green-DEFAULT" />
  <span className="text-white">Mon-Fri: 9am–6pm</span>
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
