import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, Layout, BarChart3, Bot, ShieldCheck,
  Share2, Mail, PenTool, MousePointerClick, Users,
  Search, Megaphone, LineChart, Zap, Workflow,
  Laptop,
  Smartphone
} from 'lucide-react';

const AllServices = () => {
  const services = [
    {
      icon: <Globe size={32} className="text-blue-600" />,
      bg: "bg-blue-100",
      title: "Web Development",
      desc: "Transforming your ideas into interactive and responsive web applications. Let us build your digital presence with cutting-edge technology.",
      link: "/services/web-development"
    },
    {
      icon: <Layout size={32} className="text-purple-600" />,
      bg: "bg-purple-100",
      title: "UI/UX Design & Wireframing",
      desc: "Crafting intuitive user interfaces, comprehensive wireframes, and engaging user experiences that drive conversions and satisfaction.",
      link: "/services/ui-ux"
    },
    {
      icon: <BarChart3 size={32} className="text-green-600" />,
      bg: "bg-green-100",
      title: "Business / Data Analysis",
      desc: "Unlock the power of your data with our expert analysis. Make informed decisions and drive business growth through insightful analytics.",
      link: "/services/data-analysis"
    },
    {
      icon: <Bot size={32} className="text-emerald-600" />,
      bg: "bg-emerald-100",
      title: "AI Automations",
      desc: "Automate your processes with advanced AI solutions. Increase efficiency and reduce costs with intelligent automation tailored to your needs.",
      link: "/services/ai-automation"
    },
    {
      icon: <ShieldCheck size={32} className="text-indigo-600" />,
      bg: "bg-indigo-100",
      title: "Cyber Security",
      desc: "Safeguarding your digital world with cutting-edge cybersecurity solutions. Protect your assets and customer data confidently.",
      link: "/services/cyber-security"
    },
    // {
    //   icon: <Share2 size={32} className="text-pink-600" />,
    //   bg: "bg-pink-100",
    //   title: "Social Media Marketing",
    //   desc: "Build your brand presence and engage your audience across all major social media platforms with strategic content and management.",
    //   link: "/services/smm"
    // },
    // {
    //   icon: <Mail size={32} className="text-yellow-600" />,
    //   bg: "bg-yellow-100",
    //   title: "Email Marketing",
    //   desc: "Drive revenue and build lasting relationships with strategic email campaigns that deliver personalized experiences.",
    //   link: "/services/email-marketing"
    // },
    // {
    //   icon: <PenTool size={32} className="text-orange-600" />,
    //   bg: "bg-orange-100",
    //   title: "Content Marketing",
    //   desc: "Create valuable, engaging content that attracts your ideal customers, builds trust, and drives profitable customer action.",
    //   link: "/services/content-marketing"
    // },
    // {
    //   icon: <MousePointerClick size={32} className="text-red-600" />,
    //   bg: "bg-red-100",
    //   title: "PPC Advertising",
    //   desc: "Drive immediate results with strategic pay-per-click campaigns that target your ideal customers and maximize return on ad spend.",
    //   link: "/services/ppc"
    // },
    // {
    //   icon: <Users size={32} className="text-teal-600" />,
    //   bg: "bg-teal-100",
    //   title: "Influencer Marketing",
    //   desc: "Connect with your target audience through authentic partnerships with influential content creators who align with your brand values.",
    //   link: "/services/influencer-marketing"
    // },
    // {
    //   icon: <Search size={32} className="text-blue-500" />,
    //   bg: "bg-blue-50",
    //   title: "Search Engine Optimization",
    //   desc: "Increase your website visibility and organic traffic with proven SEO strategies that help you rank higher on search engines.",
    //   link: "/services/seo"
    // },
    {
      icon: <Megaphone size={32} className="text-violet-600" />,
      bg: "bg-violet-100",
      title: "Ads Management",
      desc: "Maximize your ROI with expertly managed Google Ads campaigns that drive qualified traffic and conversions to your business.",
      link: "/services/ads-management"
    },
    {
      icon: <Laptop size={32} className="text-blue-600" />,
      bg: "bg-blue-100",
      title: "Software Development",
      desc: "Build powerful and scalable software solutions tailored to your business needs with modern technologies.",
      link: "/services/software-development"
    },

    {
      icon: <Smartphone size={32} className="text-green-600" />,
      bg: "bg-green-100",
      title: "Mobile App Development",
      desc: "Create high-performance Android and iOS mobile apps with seamless user experience and modern designs.",
      link: "/services/mobile-app-development"
    }

    // {
    //   icon: <LineChart size={32} className="text-rose-600" />,
    //   bg: "bg-rose-100",
    //   title: "Marketing Analytics",
    //   desc: "Transform your marketing data into actionable insights with comprehensive analytics, reporting, and performance tracking.",
    //   link: "/services/marketing-analytics"
    // },
    // {
    //   icon: <Zap size={32} className="text-amber-600" />,
    //   bg: "bg-amber-100",
    //   title: "Conversion Rate Optimization",
    //   desc: "Turn more visitors into customers with scientifically proven optimization strategies that maximize your website conversion potential.",
    //   link: "/services/cro"
    // },
    // {
    //   icon: <Workflow size={32} className="text-cyan-600" />,
    //   bg: "bg-cyan-100",
    //   title: "Marketing Automation",
    //   desc: "Scale your marketing efforts with intelligent automation workflows that nurture leads, increase conversions, and grow 24/7.",
    //   link: "/services/marketing-automation"
    // },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
            <div className="h-1 w-20 bg-black rounded"></div>
          </div>
          <p className="text-gray-500 text-sm font-medium mt-4 md:mt-0 uppercase tracking-wide">
            Discover the Range of Services We Offer
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* Arrow Button at Bottom */}
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllServices;