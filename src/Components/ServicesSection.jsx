import React from 'react';
import { ArrowRight, Triangle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Link import kar liya

const ServicesSection = () => {
  const services = [
    {
      title: "AI Development",
      description: "Empowering your business with intelligent algorithms that optimize efficiency and drive smarter decision-making.",
    },
    {
      title: "Generative AI",
      description: "Custom GenAI models designed to automate creativity, streamline workflows, and significantly boost user engagement.",
    },
    {
      title: "Blockchain Solutions",
      description: "Secure, decentralized architectures including DApps and smart contracts built for transparency and trust.",
    },
    {
      title: "Smart Chatbots",
      description: "24/7 intelligent conversational agents that provide instant support and elevate your customer experience.",
    },
  ];

  return (
    <section className="bg-[#080808] py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & CTA Card */}
          <div className="flex flex-col h-full justify-between space-y-12">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight">
                Redefining Possibilities with Next-Gen Tech - <br className="hidden lg:block" />
                <span className="text-gray-300">Faster, Smarter, and Built for Scale.</span>
              </h2>
            </div>

            {/* CTA Card with Link */}
            <Link to="/contact" className="block w-full max-w-md group">
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2e1025] border border-gray-800 rounded-2xl p-8 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-900/10">
                {/* Logo Icon */}
                <div className="mb-6">
                  <div className="h-10 w-10 bg-white rounded flex items-center justify-center">
                    <Triangle className="text-black fill-black rotate-180" size={20} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Launch Your Digital Transformation</h3>
                <p className="text-gray-400 mb-8 text-sm">Backed by a team of elite innovators ready to deploy.</p>
                
                <span className="inline-block bg-[#D62F7F] group-hover:bg-[#b52569] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-lg">
                  Start Your Project
                </span>

                {/* Decorative Blur Effect */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-900/30 blur-3xl rounded-full pointer-events-none"></div>
              </div>
            </Link>
          </div>

          {/* Right Column: Services List (Linked) */}
          <div className="flex flex-col space-y-5">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.path}
                className="group p-6 rounded-2xl border border-gray-800 bg-[#0f0f0f] hover:bg-[#141414] hover:border-gray-600 transition-all duration-300 flex justify-between items-center gap-4"
              >
                <div className="max-w-[85%]">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;