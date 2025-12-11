import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // Agar routing use karni ho to
import img from "../assets/hero.webp";

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Text Content */}
          <div className="flex flex-col items-start text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight">
              Turning Your Vision <br className="hidden lg:block" />
              Into Digital Reality
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              Ready to elevate your business? At Wildoat Tech, we craft innovative digital solutions tailored to your needs. From concept to launch, we deliver exceptional results that drive growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {/* Button */}
              <Link to={"/contact"}>
                <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 group">
                  Request Project
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </Link>

              {/* Company Tag */}
              <span className="text-gray-500 font-medium text-sm sm:text-base">
                — Wildoat Tech
              </span>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Background Blob Effect (Optional for better look) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Illustration Image */}
            {/* Note: Maine yahan ek free illustration URL use kiya hai jo tumhare screenshot se milta julta hai. 
                Tum apni image 'src' mein laga lena. */}
            <img
              src={img}
              alt="Wildoat Tech Creative Team"
              className="w-full max-w-lg object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;