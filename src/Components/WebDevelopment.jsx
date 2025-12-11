import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShoppingCart, Code2, Layers, 
  Zap, LifeBuoy, Plug 
} from 'lucide-react';

import img1 from "../assets/web/img1.gif";
import img2 from "../assets/web/img2.gif";
import img3 from "../assets/web/img3.gif";
import img4 from "../assets/web/img4.gif";

const WebDevelopment = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCards = [
    {
      title: "E-commerce Websites",
      desc: "High-converting stores with secure checkout and integrations.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      features: ["Shopify/WooCommerce", "Payment Gateways", "Inventory & Orders", "Analytics & SEO"]
    },
    {
      title: "Custom WordPress",
      desc: "Custom themes, plugins, and CMS setups for flexibility.",
      icon: <Layers className="w-8 h-8 text-blue-600" />,
      features: ["Theme Development", "Plugin Development", "Headless WP", "Speed Optimization"]
    },
    {
      title: "Full-Stack Apps",
      desc: "MERN/Next.js apps with robust APIs and SSR/SSG.",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      features: ["Next.js/React", "Node.js/Express", "REST/GraphQL", "Auth & RBAC"]
    },
    {
      title: "Performance & SEO",
      desc: "Improve Core Web Vitals and search visibility.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      features: ["CWV Optimization", "Lazy Loading", "Image Optimization", "Semantic HTML"]
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing updates, backups, and security hardening.",
      icon: <LifeBuoy className="w-8 h-8 text-blue-600" />,
      features: ["Uptime Monitoring", "Backup & Restore", "Patching", "Issue Resolution"]
    },
    {
      title: "Integrations & APIs",
      desc: "Connect your site with CRMs, ERPs, and third-party tools.",
      icon: <Plug className="w-8 h-8 text-blue-600" />,
      features: ["REST/GraphQL", "Webhook Flows", "OAuth/SAML", "Custom Connectors"]
    }
  ];

  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Web Development
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Welcome to <span className="font-bold text-black">WILDOAT TECH</span>, your premier web development partner. We specialize in creating stunning, responsive websites tailored to boost your online presence and drive business growth. Let's build your digital success together.
            </p>
            <Link to="/quote">
              <button className="bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                Get A Free Quote
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <img 
              src={img1}
              alt="Web Development Hero" 
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Technology Partners Strip */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Our Technology Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70">
            {partners.map((url, idx) => (
              <img key={idx} src={url} alt="Tech Partner" className="h-10 w-auto object-contain hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid (From Image 2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Web Development Services</h2>
          <p className="text-gray-500 mt-4">Fast, scalable websites and apps built with modern best practices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-600 transition-colors">
                 {React.cloneElement(card.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{card.desc}</p>
              
              <ul className="space-y-3">
                {card.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Zig-Zag Detailed Features (From Image 1 Bottom) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        
        {/* Feature 1: E-commerce */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold text-black">Wildoat Tech</span>, we transform your e-commerce vision into a thriving online reality with cutting-edge solutions that propel digital success. Our adept team of professionals excels in crafting visually captivating and user-centric e-commerce websites that harmonize flawlessly with your brand identity and objectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you require a streamlined online store or a sophisticated e-commerce platform, we possess the expertise and ingenuity to bring your project to fruition. Partner with us to elevate your online presence.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={img2} alt="E-commerce" className="w-full max-w-lg object-contain" />
          </div>
        </div>

        {/* Feature 2: WordPress (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wordpress Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold text-black">Wildoat Tech</span>, we excel in WordPress development, turning your online vision into a dynamic reality. Our proficient team of experts harnesses the robust capabilities of WordPress to craft visually stunning websites that seamlessly integrate with your brand and objectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you envision a sleek blog or a multifaceted e-commerce platform, we have the expertise and creativity to bring your project to life. Partner with us on your next WordPress endeavor.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={img3} alt="Wordpress" className="w-full max-w-lg object-contain" />
          </div>
        </div>

        {/* Feature 3: Full-Stack */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full-Stack Website</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlock the potential of full-stack technology with <span className="font-semibold text-black">Wildoat Tech</span>. Our dedicated team of professionals excels in crafting innovative projects that leverage the power of full-stack development to enhance your digital presence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From seamless integrations to state-of-the-art solutions, we transform your vision into reality. Partner with us and elevate your project to new heights with our expertise in full-stack development.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
             {/* Using a placeholder for coding illustration */}
            <img src={img4} alt="Full Stack" className="w-full max-w-lg object-contain" />
          </div>
        </div>

      </section>

    </div>
  );
};

export default WebDevelopment;