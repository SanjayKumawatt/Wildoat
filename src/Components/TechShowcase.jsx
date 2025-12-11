import React from 'react';
import img from "../assets/product.svg";

const TechShowcase = () => {
  // Real logos URLs for a professional look
  const partners = [
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Shopify", url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "Next.js", url: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
    { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "PowerBI", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "WordPress", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
    { name: "Tableau", url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "Tailwind", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "MongoDB", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" }
  ];

  return (
    <div className="w-full">
      
      {/* 1. Dashboard Showcase Section (Orange Background) */}
      <section className="relative bg-[#FF6B35] pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decorative Circle (Subtle) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          {/* Dashboard Image Container */}
          <div className="relative z-10 mx-auto max-w-5xl rounded-xl shadow-2xl bg-white p-2 sm:p-4">
             {/* NOTE: Maine yahan ek placeholder dashboard image use ki hai.
                Aap apni actual dashboard screenshot 'src' me laga lena.
             */}
            <img 
              src={img}
              alt="Platform Overview Dashboard" 
              className="w-full h-auto rounded-lg border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Technology Partners Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Technology Partners
          </h3>
          
          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:scale-110 transition-transform duration-300">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechShowcase;