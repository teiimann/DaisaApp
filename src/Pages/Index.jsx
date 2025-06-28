import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MoveRight,
  Package, 
  Building2,
  TrainFront,
  ReceiptText,
  SunSnow,
  Container, 
  Users
} from "lucide-react";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import UIbutton from "../components/ui/UIbutton";
import UIbutbook from "../components/ui/UIbutbook3";
import EventTypeCard from "../components/ui/EventTypeCard";
import ModelCarousel3D from "../components/ModelCarousel";
import warehouseImg from "../img/warehouse.jpeg";
import officeImg from "../img/office.jpeg";
import railwayImg from "../img/railway.jpeg";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      title: "Warehouse Space",
      description: "Over 14,000 m² of various storage types, including heated and cold storage blocks.",
      icon: <Package size={24} />,
      imageSrc: warehouseImg,
      link: "/services#warehouse",
    },
    {
      title: "Office Complex",
      description: "Separate 3-story administrative building with 7,159 m² and an additional single-floor office space.",
      icon: <Building2 size={24} />,
      imageSrc: officeImg,
      link: "/services#office",
    },
    {
      title: "Railway Access",
      description: "Private railway line (775m) directly connected to the complex for cargo transport.",
      icon: <TrainFront size={24} />,
      imageSrc: railwayImg,
      link: "/services#railway",
    },
  ];
  

  const eventTypes = [
    { name: "Concerts", icon: <ReceiptText size={32} /> },
    { name: "Weddings", icon: <SunSnow size={32} /> },
    { name: "Corporate", icon: <Container size={32} /> },
    { name: "Festivals", icon: <Users size={32} /> },
  ];

  return (
    <div>
      <HeroSection />
      {/* <MainModels /> */}
      <ModelCarousel3D />
      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
            <h2 className="text-3xl font-bold text-white mb-2">Our Facilities</h2>
<p className="text-gray-400 max-w-2xl">
  A wide range of secure, heated, and cold storage warehouses with office space and private railway access.
</p>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Logistics Solutions</h2>
<p className="text-gray-400 max-w-2xl mx-auto">
  DAISA offers tailored infrastructure for retail distribution, cold storage, container storage, and corporate warehousing.
</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
  { 
    name: "Retail Distribution", 
    icon: <ReceiptText size={50} />, 
    description: "Strategically located near rail and city infrastructure for efficient retail logistics." 
  },
  { 
    name: "Cold Storage", 
    icon: <SunSnow size={50} />, 
    description: "Refrigerated warehouse units designed for perishables and sensitive cargo." 
  },
  { 
    name: "Container Storage", 
    icon: <Container size={50} />, 
    description: "Spacious outdoor and indoor container storage with secure perimeter." 
  },
  { 
    name: "Corporate Warehousing", 
    icon: <Users size={50} />, 
    description: "Office-equipped warehouse zones for e-commerce and corporate logistics." 
  }
]
.map((event, index) => (
              <EventTypeCard
                key={index}
                name={event.name}
                icon={event.icon}
                description={event.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Book Your Event
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Looking for Reliable Storage or Logistics?</h2>
<p className="text-gray-300 max-w-2xl mx-auto mb-8">
  DAISA Logistics Hub is ready to support your business with full infrastructure, private rail access, and secure warehousing. Contact us to learn more.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <UIbutbook text="Book Now" to="/booking"/>
              <UIbutton text="view services" to="/services" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
