import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Lightbulb, Users, Trophy, 
  Rocket, HeartHandshake, CheckCircle2, ArrowRight 
} from 'lucide-react';
import img1 from "../assets/hero.webp";
import img2 from "../assets/dataanalysis.gif";

const About = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const values = [
    {
      title: "Innovation First",
      desc: "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the curve.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Client Centric",
      desc: "Your success is our success. We tailor every strategy to align perfectly with your business goals.",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Transparency",
      desc: "No hidden costs, no jargon. We believe in open communication and honest partnerships.",
      icon: <HeartHandshake className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Excellence",
      desc: "We don't settle for 'good'. We strive for perfection in every line of code and every pixel designed.",
      icon: <Trophy className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left z-10">
            <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider mb-2 block">
              About Wildoat Tech
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.15]">
              We Are Architects of <br /> Digital Future
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              At <span className="font-bold text-black">WILDOAT TECH PRIVATE LIMITED</span>, we don't just build software; we build legacies. We are a team of passionate innovators dedicated to transforming businesses through technology.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/contact">
                <button className="bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                  Work With Us
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
             <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10"></div>
                <img 
                  src={img1} 
                  alt="About Hero" 
                  className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </section>

    
      {/* 3. Our Story / Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="flex-1">
            <img 
              src={img2}
              alt="Our Mission" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses of all sizes with scalable, secure, and innovative digital solutions. We aim to bridge the gap between complex technology and business growth, making digital transformation accessible to everyone.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the global leader in technology services, recognized for our commitment to quality, integrity, and the ability to turn ambitious ideas into reality.
              </p>
            </div>
            
            <ul className="space-y-3 mt-4">
              {['Global Standards', 'Agile Methodology', '24/7 Support'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-all">
                <div className="bg-gray-50 p-4 rounded-lg flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-[#FF6B35] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trusted Wildoat Tech for their digital transformation.
            </p>
            <Link to="/contact">
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-transform hover:-translate-y-1 shadow-lg">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;