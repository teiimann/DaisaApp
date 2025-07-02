import React, { useEffect } from "react";
import { 
  Package, 
  Building2,
  TrainFront, 
  Refrigerator,
  Shapes,
  Lock, 
  Heater, 
  MonitorSmartphone,
  Cylinder,
   MoveRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import UIbutbook from "../components/ui/UIbutbook3";
import UIbutton from "../components/ui/UIbutton";
import AdditionalServiceCard from "../components/AdditionalServiceCard";
import warehouseImg from "../img/warehouse.jpeg";
import officeImg from "../img/office.jpeg";
import railwayImg from "../img/railway.jpeg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "warehouse",
      icon: <Package size={32} />,
      title: "Warehouse Facilities",
      description:
        "14,000 m² of storage space including heated, cold, and dry warehouses. Perfect for goods, equipment, or containers.",
      image: warehouseImg,
      features: [
        "14,000 m² total storage area",
        "Cold and heated warehouse blocks",
        "Storage for containers, equipment, and goods",
        "Separate units for flexibility",
        "Perimeter security and video surveillance",
      ]
    },
    {
      id: "office",
      icon: <Building2 size={32} />,
      title: "Office Infrastructure",
      description:
        "Modern office facilities including a 3-floor administrative building (7,159 m²) and a single-floor office (188 m²).",
      image: officeImg,
      features: [
        "3-story main office building (7,159 m²)",
        "Separate one-floor office (188 m²)",
        "Utilities included (gas heating, reserve power)",
        "Separate entrance and parking",
        "Ideal for logistics, administration, or coworking",
      ]
    },
    {
      id: "railway",
      icon: <TrainFront size={32} />,
      title: "Private Railway Access",
      description:
        "A 775-meter-long private railway line directly connects the DAISA complex to regional and national cargo networks.",
      image: railwayImg,
      features: [
        "775 m private railway branch",
        "Direct connection to logistics hubs",
        "Efficient cargo handling",
        "Supports container and bulk deliveries",
        "Strategic advantage for distributors",
      ]
    }
  ];
  

  const additionalServices = [
    {
      icon: <Refrigerator size={24} />,
      title: "Cold Storage Units",
      description: "Refrigerated blocks ideal for food, pharmaceuticals, and perishables."
    },
    {
      icon: <Shapes size={24} />,
      title: "Flexible Storage",
      description: "Individual warehouse options tailored for various industries."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Perimeter",
      description: "Fenced territory with 24/7 security and video surveillance."
    },
    {
      icon: <Heater size={24} />,
      title: "Utilities and Heating",
      description: "Gas-powered heating and private backup generator."
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: "Office & Coworking",
      description: "Ready-to-use office areas for logistics or operations."
    },
    {
      icon: <Cylinder size={24} />,
      title: "Container Storage",
      description: "Spacious outdoor and indoor container storage zones."
    }
  ];
  

  return (
    <div className="pt-[150px]">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
  Our Infrastructure
</h1>
<p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
  DAISA offers a multifunctional logistics complex equipped with warehouses, office space, railway access, and secure perimeter — all in a strategic location in Shymkent.
</p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Book a Service
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Our Logistics Capabilities</h2>
<p className="text-gray-400 max-w-2xl mx-auto">
  Integrated solutions for warehousing, administration, and transport — all in one strategic location.
</p>

          </div>

          {mainServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                <div className="relative w-full h-full overflow-hidden rounded-xl group">
  <img
    src={service.image}
    alt={service.title}
    className="object-cover w-full h-full transition-all duration-700 ease-in-out opacity-40 group-hover:opacity-100 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700 ease-in-out"></div>
</div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">
                    {service.id === "sound" ? "Our Equipment:" : "What's Included:"}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized equipment and services to enhance your event
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
  Ready to Optimize Your Logistics?
</h2>
<p className="text-gray-300 max-w-2xl mx-auto mb-8">
  Reach out to DAISA to learn how our infrastructure can support your business with reliable warehousing and transport access.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UIbutbook text="Book Now" to="/booking" />
              <UIbutton text="View On Map" to="https://go.2gis.com/jvmYC" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
