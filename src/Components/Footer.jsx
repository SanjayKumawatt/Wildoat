import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Linkedin, Instagram,
  MapPin, Mail, ArrowRight
} from 'lucide-react';

import img from "../assets/hero.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Orange CTA Section (Floating Look) */}
        <div className="relative bg-[#FF6B35] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl mb-20">

          {/* Text Content */}
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start A New Project Today
            </h2>
            <p className="text-orange-100 text-lg mb-8 font-medium">
              Unlock Your Digital Potential - Schedule a Call with Our IT Experts Today!
            </p>
            <Link to="/contact">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-gray-900 transition-transform hover:-translate-y-1 shadow-lg flex items-center gap-2 mx-auto lg:mx-0">
                Schedule A Free Call
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Illustration Image */}
          <div className="relative z-10 w-full max-w-md lg:w-1/2 flex justify-center lg:justify-end">
            {/* Decorative circles background */}
            <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl scale-75"></div>

            {/* 3D Illustration Placeholder */}
            <img
              src={img}
              alt="Start Project Illustration"
              className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 2. Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16 border-b border-gray-100 pb-12">

          {/* Column 1: Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gray-900 text-white rounded flex items-center justify-center font-bold text-xl">W</div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">WILDOAT</h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wider">TECH PRIVATE LIMITED</p>
              </div>
            </Link>

            {/* Address & Email */}
            <div className="text-sm text-gray-500 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Plot No 12 & 12a, 3rd Floor First Office, <br />
                  Madhapur, Hyderabad, Shaikpet, <br />
                  Telangana, India, 500081
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                <a href="mailto:support@wildoattech.in" className="hover:text-black transition-colors">
                  support@wildoattech.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-development" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Web Development
                </Link>
              </li>

              <li>
                <Link to="/services/ui-ux" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  UI/UX Design & Wireframing
                </Link>
              </li>
{/* 
              <li>
                <Link to="/services/seo" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Digital Marketing (SEO)
                </Link>
              </li> */}

              <li>
                <Link to="/services/data-analysis" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Data Analysis
                </Link>
              </li>

              <li>
                <Link to="/services/ai-automation" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  AI Automation
                </Link>
              </li>

              <li>
                <Link to="/services/cyber-security" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm font-medium">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>





        </div>

        {/* 3. Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">

          <p>© {currentYear} WILDOAT TECH PRIVATE LIMITED. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;