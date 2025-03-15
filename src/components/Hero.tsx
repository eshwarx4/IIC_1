import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-200/80"></div>
      </div>

      {/* Content */}
      <div id='home' className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
            <span className="block">Innovate. Incubate.</span>
            <span className="[text-shadow:_2px_2px_4px_rgba(255,255,255,0.4)] block text-[#ed502e]">Transform Tomorrow.</span>
          </h1>
          <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
            Join IIT Kharagpur's premier innovation hub where groundbreaking ideas meet world-class mentorship and resources.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#apply"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#ed502e] bg-white hover:bg-[#ed502e] hover:text-white md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Apply for Incubation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#join"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#ed502e] bg-white hover:bg-[#ed502e] hover:text-white md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <button className="fixed bottom-8 right-8 bg-[#ed502e]/80 p-4 rounded-full shadow-lg hover:bg-[#ed502e] hover:scale-110 transition-all duration-200 z-50">
        <MessageCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Hero