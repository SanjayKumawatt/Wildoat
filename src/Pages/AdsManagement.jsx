import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Search, Megaphone, ShoppingBag, 
  Youtube, Smartphone, Monitor, Target, BarChart, 
  TrendingUp, MousePointerClick, Image, Video, Layers 
} from 'lucide-react';

const AdsManagement = () => {
  
  // Page load hone par scroll top par set karein
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data from Image 1 (Services Grid)
  const adServices = [
    {
      title: "Google Search Ads",
      desc: "Target customers actively searching for your products or services with strategic keyword campaigns.",
      icon: <Search className="w-6 h-6" />,
      points: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Landing Page Optimization"]
    },
    {
      title: "Google Display Ads",
      desc: "Reach your audience across millions of websites with visually compelling banner advertisements.",
      icon: <Monitor className="w-6 h-6" />,
      points: ["Creative Design", "Audience Targeting", "Remarketing Campaigns", "Performance Tracking"]
    },
    {
      title: "Facebook & Instagram Ads",
      desc: "Engage your ideal customers on social media with high-converting ad campaigns.",
      icon: <Smartphone className="w-6 h-6" />,
      points: ["Image & Video Ads", "Story Ads", "Carousel Ads", "Lead Generation"]
    },
    {
      title: "Google Shopping Ads",
      desc: "Showcase your products directly in Google search results with product images and pricing.",
      icon: <ShoppingBag className="w-6 h-6" />,
      points: ["Product Feed Setup", "Merchant Center", "Shopping Campaigns", "Product Optimization"]
    },
    {
      title: "YouTube Ads",
      desc: "Engage viewers with video advertisements on YouTube and across Google's video network.",
      icon: <Youtube className="w-6 h-6" />,
      points: ["Video Ad Creation", "Audience Targeting", "In-Stream Ads", "Video Performance"]
    },
    {
      title: "Social Media Advertising",
      desc: "Comprehensive social media advertising across Facebook, Instagram, and other platforms.",
      icon: <Megaphone className="w-6 h-6" />,
      points: ["Multi-Platform Campaigns", "Audience Insights", "Creative Testing", "Social Commerce"]
    }
  ];

  // Data from Image 1 (Campaign Types List)
  const campaignTypes = [
    {
      title: "Google Search Campaigns",
      desc: "Text ads that appear when people search for your products or services.",
      platform: "Google Ads"
    },
    {
      title: "Google Display Campaigns",
      desc: "Visual ads that reach people on websites and apps they visit.",
      platform: "Google Ads"
    },
    {
      title: "Facebook & Instagram Campaigns",
      desc: "Social media ads that reach 3.2B+ monthly active users.",
      platform: "Meta Ads"
    },
    {
      title: "YouTube Video Campaigns",
      desc: "Engaging video ads on YouTube and across the web.",
      platform: "YouTube"
    },
    {
      title: "Google Shopping Campaigns",
      desc: "Product ads that show your inventory with images and prices.",
      platform: "Google Ads"
    }
  ];

  // Data from Image 2 (Ad Formats)
  const adFormats = [
    {
      title: "Image Ads",
      desc: "High-impact single image advertisements that capture attention.",
      icon: <Image className="w-6 h-6" />,
      points: ["Facebook Feed", "Instagram Feed", "Stories", "Banners"]
    },
    {
      title: "Video Ads",
      desc: "Engaging video content that tells your story and showcases products.",
      icon: <Video className="w-6 h-6" />,
      points: ["Facebook Video", "Instagram Reels", "IGTV", "Stories"]
    },
    {
      title: "Carousel Ads",
      desc: "Multiple images or videos in a single ad, perfect for product catalogs.",
      icon: <Layers className="w-6 h-6" />,
      points: ["Facebook Carousel", "Instagram Carousel", "Collection Ads"]
    },
    {
      title: "Story Ads",
      desc: "Full-screen vertical ads that appear between user stories for maximum impact.",
      icon: <Smartphone className="w-6 h-6" />,
      points: ["Facebook Stories", "Instagram Stories", "Messenger Stories"]
    }
  ];

  // Data from Image 2 (Why Choose Us)
  const features = [
    {
      title: "Data-Driven Optimization",
      desc: "Continuous testing and optimization based on performance data across all platforms.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Precision Targeting",
      desc: "Advanced audience targeting to reach your ideal customers across Google and social platforms.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Budget Optimization",
      desc: "Smart budget allocation and bid management to maximize your advertising ROI.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Multi-Platform Expertise",
      desc: "Comprehensive management across Google, Facebook, Instagram, and other advertising platforms.",
      icon: <MousePointerClick className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Hero Section with Stats */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
          Professional Ads Management
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Maximize your ROI with expertly managed advertising campaigns across Google, Facebook, Instagram, and more. Our certified specialists create, optimize, and manage campaigns that drive qualified traffic and conversions.
        </p>


        <Link to="/quote">
          <button className="bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all inline-flex items-center gap-2">
            Get Free Ads Audit
            <ArrowRight size={18} />
          </button>
        </Link>
      </section>

      {/* 2. Services Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Advertising Services</h2>
            <p className="text-gray-500 mt-3">Comprehensive advertising management across Google, Facebook, Instagram, and other key platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-colors">
                     {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-sm text-gray-500 mb-6 leading-relaxed border-b border-gray-100 pb-4">
                  {service.desc}
                </p>

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

      {/* 3. Campaign Types List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Campaign Types We Manage</h2>
          <p className="text-gray-500 mt-3">Expert management across Google Ads, Facebook Ads, and more for maximum reach</p>
        </div>

        <div className="space-y-4">
          {campaignTypes.map((campaign, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-lg font-bold text-gray-900">{campaign.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{campaign.desc}</p>
              </div>
              <div className="flex-shrink-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {campaign.platform}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ad Formats Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Social Media Ad Formats</h2>
            <p className="text-gray-500 mt-3">From single images to immersive experiences, we create compelling ads</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adFormats.map((format, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                 <div className="mb-4 text-gray-900">
                   {format.icon}
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">{format.title}</h3>
                 <p className="text-sm text-gray-500 mb-4 h-16">{format.desc}</p>
                 <ul className="space-y-1">
                  {format.points.map((p, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {p}
                    </li>
                  ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Dark Section or Highlight) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Ads Management?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AdsManagement;