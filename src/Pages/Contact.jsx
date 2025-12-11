import React, { useState, useEffect } from 'react';
import { 
  MapPin, Mail, Phone, Clock, Send, CheckCircle, 
  Loader2, ArrowRight 
} from 'lucide-react';

const Contact = () => {
  
  // Page load hone par scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Saari Services ki List "Requirement For" ke liye
  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design & Wireframing",
    "Software Development",
    "Dating App Development",
    "AI Character Dating",
    "Data Analysis & BI",
    "AI Automation",
    "Cyber Security",
    "Ads Management (PPC)",
    
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // 5 seconds baad success message hata denge (optional)
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-white pt-20">
      
      {/* 1. Header Section */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Plot No 12 & 12a, 3rd Floor First Office, <br />
                    Madhapur, Hyderabad, Shaikpet, <br />
                    Telangana, India, 500081
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600 mt-1">support@wildoattech.in</p>
                  <p className="text-gray-500 text-sm mt-1">We reply within 24 hours.</p>
                </div>
              </div>

              
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative">
            
            {/* Success Message Overlay (Custom - No Browser Alert) */}
            {isSubmitted ? (
              <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300 z-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm mx-auto mb-8">
                  Thank you for contacting Wildoat Tech. We have received your inquiry and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Requirement For Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirement For *</label>
                <div className="relative">
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>Select a Service</option>
                    {servicesList.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {/* Custom Arrow Icon for Select */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project goals and timeline..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#FF6B35] text-white font-bold py-4 rounded-lg hover:bg-[#e05a2b] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Map Section (Optional - Visual touch) */}
     
    </div>
  );
};

export default Contact;