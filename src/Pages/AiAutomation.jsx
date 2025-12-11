import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Bot, Workflow, BrainCircuit, 
  Megaphone, Database, ShieldCheck, Cpu 
} from 'lucide-react';

import img1 from "../assets/ai/img2.gif";
import img2 from "../assets/ai/img1.avif";

const AiAutomation = () => {
  
  // Page load hone par scroll top par set karein
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data extracted from Image (AI Automation Services)
  const automationServices = [
    {
      title: "Process Automation",
      desc: "Automate repetitive tasks and approvals to save time and reduce errors.",
      icon: <Workflow className="w-6 h-6" />,
      points: ["RPA Implementation", "Workflow Engines", "Form Automation", "Doc Processing"]
    },
    {
      title: "AI Assistants",
      desc: "Chatbots and copilots that help teams move faster and serve customers better.",
      icon: <Bot className="w-6 h-6" />,
      points: ["LLMs Integration", "Retrieval (RAG)", "Multi-channel Chat", "Sentiment Analysis"]
    },
    {
      title: "Predictive Models",
      desc: "Forecast demand, churn, and risk using advanced Machine Learning models.",
      icon: <BrainCircuit className="w-6 h-6" />,
      points: ["Time Series", "Propensity Models", "Anomaly Detection", "Resource Optimization"]
    },
    {
      title: "Marketing Automation",
      desc: "Personalize journeys and optimize campaigns for higher conversion rates.",
      icon: <Megaphone className="w-6 h-6" />,
      points: ["Smart Segmentation", "Lead Scoring", "Journey Builder", "ROI Attribution"]
    },
    {
      title: "Data Pipelines",
      desc: "Reliable data flows designed specifically for high-performance ML/AI systems.",
      icon: <Database className="w-6 h-6" />,
      points: ["ETL/ELT Flows", "Vector Stores", "Feature Stores", "Real-time Monitoring"]
    },
    {
      title: "MLOps & Governance",
      desc: "Ship models reliably with full visibility, controls, and compliance.",
      icon: <Cpu className="w-6 h-6" />,
      points: ["Model Registry", "CI/CD for ML", "Drift Monitoring", "Cost Control"]
    }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15]">
              AI Automation <br /> Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Welcome to <span className="font-bold text-black">WILDOAT TECH</span>, your AI automation partner. We streamline operations with cutting-edge AI solutions, enhancing efficiency and productivity. Experience the future of automation with our innovative technologies.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/quote">
                <button className="bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                  Get A Free Quote
                  <ArrowRight size={18} />
                </button>
              </Link>
              <span className="text-sm font-semibold text-gray-400 tracking-wider hidden sm:block">
                - WILDOAT TECH
              </span>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img 
              src={img1}
              alt="AI Automation Hero" 
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. Partners Strip */}
      <section className="bg-white py-12 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Our Technology Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16">
            {partners.map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt="Partner" 
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Section (Zig Zag) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
              STREAMLINE OPERATIONS WITH OUR CUTTING-EDGE AI AUTOMATION!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Automation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlock the potential of AI automation with <span className="font-semibold text-black">Wildoat Tech</span>. Our dedicated team of experts excels in developing innovative AI solutions that streamline your processes and enhance efficiency.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From intelligent data analysis to automated workflows, we transform your vision into reality. Partner with us and elevate your project to new heights with our expertise and creativity in AI automation.
            </p>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center text-[#FF6B35] font-bold text-base hover:text-[#e05a2b] transition-colors"
            >
              Learn more
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center">
             <div className="relative">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50 rounded-full blur-3xl -z-10"></div>
                {/* Robot/Phone Illustration */}
                <img 
                  src={img2} 
                  alt="AI Automation Feature" 
                  className="w-full max-w-md object-contain"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (Detailed Cards with Bullets) */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our AI Automation Services</h2>
            <p className="text-gray-500 mt-3 text-sm uppercase tracking-wide">
              Automate workflows and decisions with AI that scales with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-colors">
                     {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-sm text-gray-500 mb-6 leading-relaxed border-b border-gray-100 pb-4">
                  {service.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 bg-black rounded-sm mr-2.5"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AiAutomation;