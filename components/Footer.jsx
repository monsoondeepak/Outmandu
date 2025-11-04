import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-600">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full text-blue-600 animate-wavePingPong"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96V0H0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 bg-white/90">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-300/30">
          {/* Brand Section */}
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl text-gray-900">
              <span className="text-orange-600">Out</span>mandu.
            </h2>
            <p className="mt-5 text-sm leading-6 max-w-md">
              Discover your next adventure with Outmandu. From local tours to
              global getaways, we make travel planning effortless and inspiring.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 md:flex md:justify-center">
            <div>
              <h2 className="font-semibold text-gray-900 mb-4">Company</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Destinations</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex-1 md:flex md:justify-end">
            <div>
              <h2 className="font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <ul className="text-sm space-y-2">
                <li>📞 +977-9876543210</li>
                <li>📧 contact@outmandu.com</li>
                <li>🌍 Kathmandu, Nepal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Outmandu. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
