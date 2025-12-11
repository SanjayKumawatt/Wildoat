import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img1 from "../assets/s/img1.svg";
import img2 from "../assets/s/img2.svg";
import img3 from "../assets/s/img3.svg";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      subtitle: "ALWAYS SCALABLE",
      title: "UI/UX Design & Full-Stack Development",
      description: "For businesses seeking high-performance digital assets, our development services offer the cutting edge in technology. Combining React, Node.js, and modern frameworks, we deliver responsive, fast-loading, and scalable web applications designed for growth.",
      image:img1, // Vector illustration
      link: "/services/web-development"
    },
    // {
    //   id: 2,
    //   subtitle: "LEVEL UP YOUR PRESENCE",
    //   title: "Strategic SEO & Social Media Marketing",
    //   description: "Elevate your brand visibility with our data-backed marketing strategies. We leverage advanced SEO techniques and engaging social media campaigns to amplify your reach, drive organic traffic, and foster meaningful interactions with your target audience.",
    //   image: img2,
    //   link: "/services/digital-marketing"
    // },
    {
      id: 3,
      subtitle: "THE POWER OF INSIGHTS",
      title: "Business Intelligence & Data Analysis",
      description: "Data is the heartbeat of informed decision-making. We transform raw data into strategic insights using predictive analytics and actionable reporting. Whether optimizing operations or exploring new markets, our analysis empowers you to act with confidence.",
      image: img3,
      link: "/services/data-analysis"
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className="flex-1 text-left">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                {feature.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {feature.description}
              </p>
              
              <Link 
                to={feature.link} 
                className="group inline-flex items-center text-[#FF6B35] font-bold text-base hover:text-[#e05a2b] transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Decorative blob behind image (Optional) */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-20 blur-3xl -z-10 
                  ${index % 2 === 0 ? 'bg-blue-200' : 'bg-orange-200'}`}>
                </div>
                
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;