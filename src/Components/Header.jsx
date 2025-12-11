import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Globe, Smartphone, PenTool, Monitor, 
  Heart, Sparkles, Megaphone, Settings, 
  Table, Zap, Lock 
} from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Structure with LINKS added
  const navItems = [
    {
      title: "Development",
      items: [
        { name: "Web Development", desc: "Custom websites & web applications", icon: <Globe size={20} />, link: "/services/web-development" },
        { name: "Mobile Application Development", desc: "iOS & Android mobile applications", icon: <Smartphone size={20} />, link: "/services/mobile-app-development" },
        { name: "UI/UX Design & Wireframing", desc: "User interface design & wireframing", icon: <PenTool size={20} />, link: "/services/ui-ux" },
        { name: "Software Development", desc: "Custom software solutions & enterprise apps", icon: <Monitor size={20} />, link: "/services/software-development" },
        { name: "Dating App Development", desc: "Custom dating apps & platforms", icon: <Heart size={20} />, link: "/services/dating-app-development" },
        { name: "AI Character Dating", desc: "Virtual companion & AI dating apps", icon: <Sparkles size={20} />, link: "/services/ai-character-dating" },
      ]
    },
    // {
    //   title: "Digital Marketing",
    //   items: [
    //     { name: "SEO", desc: "Search engine optimization", icon: <Globe size={20} />, link: "/services/seo" },
    //     { name: "Email Marketing", desc: "Campaigns, automation & deliverability", icon: <Megaphone size={20} />, link: "/services/email-marketing" },
    //     { name: "Content Marketing", desc: "Blogs, landing pages & content strategy", icon: <PenTool size={20} />, link: "/services/content-marketing" },
    //     { name: "Influencer Marketing", desc: "Creators, UGC & partnerships", icon: <Megaphone size={20} />, link: "/services/influencer-marketing" },
    //     { name: "Google Ads Management", desc: "PPC strategy & optimization", icon: <Settings size={20} />, link: "/services/google-ads" },
        
    //     { name: "Marketing Automation", desc: "Workflows & personalization", icon: <Settings size={20} />, link: "/services/marketing-automation" },
    //   ]
    // },
    {
      title: "Other Services",
      items: [
        { name: "Data Analysis", desc: "Business intelligence & analytics", icon: <Table size={20} />, link: "/services/data-analysis" },
        { name: "AI Automations", desc: "AI-powered automation solutions", icon: <Zap size={20} />, link: "/services/ai-automation" },
        { name: "Cyber Security", desc: "Security solutions & consulting", icon: <Lock size={20} />, link: "/services/cyber-security" },
        { name: "Ads Management", desc: "High-ROI paid social campaigns", icon: <Megaphone size={20} />, link: "/services/ads-management" },
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex flex-col">
               <div className="flex items-center gap-2">
                 <div className="h-10 w-10 bg-gray-900 text-white rounded flex items-center justify-center font-bold text-xl">W</div>
                 <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 leading-none">WILDOAT</h1>
                    <p className="text-[10px] text-gray-500 font-medium tracking-wider">TECH PRIVATE LIMITED</p>
                 </div>
               </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((category) => (
              <div 
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 
                    ${activeDropdown === category.title 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {category.title}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === category.title ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === category.title && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 grid grid-cols-2 gap-4">
                      {category.items.map((item, index) => (
                        <Link 
                          key={index} 
                          to={item.link} // Changed from '#' to item.link
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                          onClick={() => setActiveDropdown(null)} // Close dropdown on click
                        >
                          <div className="flex-shrink-0 p-2 bg-gray-100 rounded-md text-gray-600 group-hover/item:text-gray-900 group-hover/item:bg-gray-200 transition-colors">
                            {item.icon}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">{item.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/quote">
                <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-gray-800 transition-all uppercase tracking-wide">
                Get a Quote
                </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-black p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((category) => (
              <div key={category.title} className="border-b border-gray-100 pb-2 last:border-0">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === category.title ? null : category.title)}
                  className="flex justify-between items-center w-full py-2 text-left font-semibold text-gray-900 text-lg"
                >
                  {category.title}
                  <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === category.title ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Dropdown Items */}
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === category.title ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pl-2">
                    {category.items.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.link} // Changed from '#' to item.link
                        className="flex items-center p-2 rounded-lg bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)} // Close menu on click
                      >
                         <div className="p-2 bg-white rounded-md shadow-sm text-gray-700 mr-3">
                            {React.cloneElement(item.icon, { size: 18 })}
                         </div>
                         <div>
                            <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                         </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-4">
               <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                 <button className="w-full bg-black text-white py-3 rounded-md font-bold uppercase tracking-wide">
                    Get a Quote
                 </button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;