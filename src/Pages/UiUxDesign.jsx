import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, PenTool, Layout, Search, 
  MousePointerClick, Eye, Heart, Layers 
} from 'lucide-react';
import img1 from "../assets/uiux/img1.gif";
import img2 from "../assets/uiux/img2.avif";


const UiUxDesign = () => {
  
  // Page load hone par scroll top par set karein
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data extraction from Image (Grid Services)
  const uiUxServices = [
    {
      title: "UX Research",
      desc: "User interviews, personas, and journey maps to align with real needs.",
      icon: <Search className="w-6 h-6" />,
      points: ["User Interviews", "Personas", "Journey Mapping", "Heuristic Review"]
    },
    {
      title: "Wireframing",
      desc: "Low/high-fidelity wireframes that set clear structure and flows.",
      icon: <Layout className="w-6 h-6" />,
      points: ["Low/High Fidelity", "User Flows", "IA & Sitemap", "Content Strategy"]
    },
    {
      title: "UI Design",
      desc: "Pixel-perfect visual design with brand consistent components.",
      icon: <PenTool className="w-6 h-6" />,
      points: ["Design Systems", "Component Libraries", "Responsive Design", "Design Tokens"]
    },
    {
      title: "Prototyping",
      desc: "Interactive prototypes for stakeholder buy-in and usability tests.",
      icon: <MousePointerClick className="w-6 h-6" />,
      points: ["Clickable Prototypes", "Micro-interactions", "Animation Specs", "Dev Handoffs"]
    },
    {
      title: "Usability Testing",
      desc: "Validate design decisions and iterate with real user feedback.",
      icon: <Eye className="w-6 h-6" />,
      points: ["Test Plans", "Moderated/Unmoderated", "Reporting", "Insights"]
    },
    {
      title: "Accessibility (a11y)",
      desc: "Inclusive design meeting WCAG standards across devices.",
      icon: <Heart className="w-6 h-6" />,
      points: ["WCAG 2.1", "Keyboard/Screen Reader", "Color Contrast", "Docs & Training"]
    }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // Figma (Key for UI/UX)
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15]">
              UI/UX Design & <br /> Wireframing
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Welcome to <span className="font-bold text-black">WILDOAT TECH</span>, your premier UI/UX design partner. We specialize in creating intuitive user interfaces, comprehensive wireframes, and engaging user experiences that drive conversions and user satisfaction.
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
              alt="UI/UX Hero" 
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

      {/* 3. Feature Section (Right Image Layout) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
              CREATE EXCEPTIONAL USER EXPERIENCES WITH OUR UI/UX DESIGN EXPERTISE!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              UI/UX Design & Wireframing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlock the potential of exceptional user interface and user experience design with <span className="font-semibold text-black">Wildoat Tech</span>. Our dedicated team of UX/UI professionals excels in creating intuitive wireframes, user-centered designs, and engaging digital experiences that drive conversions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From comprehensive user research to interactive prototypes, we transform your vision into compelling digital solutions. Partner with us and elevate your project to new heights with our expertise and creativity.
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-50 rounded-full blur-3xl -z-10"></div>
                <img 
                  src={img2}
                  alt="UI UX Feature" 
                  className="w-full max-w-md object-contain"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (Bullet Points Style) */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our UI/UX & Wireframing Services</h2>
            <p className="text-gray-500 mt-3 text-sm uppercase tracking-wide">
              Design systems and experiences that are beautiful, usable, and conversion-focused
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiUxServices.map((service, index) => (
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

export default UiUxDesign;