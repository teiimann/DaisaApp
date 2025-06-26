import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './All.css'
import VerseInput from './ui/VerseInput';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <div className="logowhite-1-22218 pos-abs">
              <img
                src="https://s3-alpha-sig.figma.com/img/1d58/671d/95562e887d251e63810a51f9cc17ade5?Expires=1751846400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CaXOC4uBgJkAVPno-7~Pi4rbmhPA9iHVc91fncMLrG91GqpC-yE-Ju6k3wYxLwXawznAbwLqIlzkJOR9HkNYgYxC6Oqy8bDECUvoMpy1R1Fqjmjn9lejD~AZJN6HWOtU1Ch1StlrWUGS24IHIWJ3bBzmJhjYad9nNFRL8qDCh5Nk83dRKBSDidSgXQIIUurEA~~ysQNF5MimwBFgVHSqGyZF94qAQA8Moo8xjJ0VAmkM7tzp-GlPUq1xB44kQL89ntaGzTkui5abpHJrJ2kWcvsFoOJztY5KmfLsaD9twvwBCAc2wP183GMBRRFTsHjSjvQMIN4rurR~if6HVR~ZUg__"
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-22218 "
                alt="22218-ALT"
              />{" "}
            </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Modern logistics complex in Shymkent, Kazakhstan. Providing high-quality infrastructure and logistics real estate for cargo storage, distribution, and e-commerce operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-blue-500/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/references" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/booking" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact & Booking
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-blue-500/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-blue-500" />
                <span>+7 701 111 05 22</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-blue-500" />
                <span>Putevaya Street 6/1, Shymkent, Kazakhstan</span>
              </li>
            </ul>
            <VerseInput />
          </div>
        </div>

        <div className="border-t border-blue-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DAISA HOLDING. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
