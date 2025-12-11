import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Smartphone, Layers, Server, 
  ShieldCheck, Puzzle, Settings, CheckCircle2 
} from 'lucide-react';

import img from "../assets/web/img5.avif";

const MobileAppDevelopment = () => {
  
  // Load hone par page top par shuru ho
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data based on Image 1 (Grid Section)
  const mobileServices = [
    {
      title: "iOS & Android Apps",
      desc: "Native-feel apps with consistent performance across all devices.",
      icon: <Smartphone className="w-6 h-6" />,
      points: ["React Native / Flutter", "Native Modules", "Offline-first", "Push Notifications"]
    },
    {
      title: "App UI/UX",
      desc: "Mobile design systems and interaction patterns that users love.",
      icon: <Layers className="w-6 h-6" />,
      points: ["Design Systems", "Animations", "Accessibility", "Dark Mode Theming"]
    },
    {
      title: "APIs & Backends",
      desc: "Secure, scalable backends for your mobile apps.",
      icon: <Server className="w-6 h-6" />,
      points: ["Node.js / Python", "Auth & Payments", "File/Media Storage", "Real-time Analytics"]
    },
    {
      title: "Testing & Release",
      desc: "Reliable release pipelines and app health monitoring.",
      icon: <ShieldCheck className="w-6 h-6" />,
      points: ["Unit/E2E Tests", "Crash Reporting", "App Store/Play Console", "OTA Updates"]
    },
    {
      title: "Integrations",
      desc: "Connect to payments, maps, social media, and more.",
      icon: <Puzzle className="w-6 h-6" />,
      points: ["Stripe/PayPal", "Google Maps/Location", "Camera & Media", "Social SDKs"]
    },
    {
      title: "Maintenance",
      desc: "Keep apps up-to-date and optimized over time.",
      icon: <Settings className="w-6 h-6" />,
      points: ["Performance Tuning", "Dependency Updates", "Security Patches", "Feature Roadmap"]
    }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma
    "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg", // WP
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", // Flutter (Added for mobile context)
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Mobile Application <br /> Development
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Welcome to <span className="font-bold text-black">WILDOAT TECH</span>, your premier mobile development partner. We specialize in creating powerful iOS and Android applications that deliver exceptional user experiences and drive business growth.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/quote">
                <button className="bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                  Get A Free Quote
                  <ArrowRight size={18} />
                </button>
              </Link>
              <span className="text-sm font-semibold text-gray-400 tracking-wider hidden sm:block">
                — WILDOAT TECH
              </span>
            </div>
          </div>
          
          {/* Hero Illustration (Floating Screens) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/app-development-2974930-2477361.png" 
              alt="Mobile App Development Hero" 
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. Partners Strip */}
      <section className="bg-white py-12">
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

      {/* 3. Middle Feature Section (Zig Zag) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
              TRANSFORM YOUR IDEAS INTO POWERFUL MOBILE APPLICATIONS!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mobile apps development
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlock the potential of mobile technology with <span className="font-semibold text-black">Wildoat Tech</span>. Our dedicated team of mobile developers excels in creating high-performance iOS and Android applications that engage users and drive business growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From native development to cross-platform solutions, we transform your vision into seamless mobile experiences. Partner with us and elevate your project to new heights.
            </p>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center text-[#FF6B35] font-bold text-base hover:text-[#e05a2b] transition-colors"
            >
              Learn more
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image Content (Phone Illustration) */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
             <div className="relative">
                {/* Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10"></div>
                <img 
                  src={img}
                  alt="Mobile App Feature" 
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
            <h2 className="text-3xl font-bold text-gray-900">Our Mobile Application Development Services</h2>
            <p className="text-gray-500 mt-3 text-sm uppercase tracking-wide">
              Launch performant mobile apps with great UX and maintainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileServices.map((service, index) => (
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

export default MobileAppDevelopment;