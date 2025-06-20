import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1f1a] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Logo + Description */}
        <div>
          <h3 className="text-xl font-bold mb-2">SwapAM</h3>
          <p className="text-gray-400 text-sm mb-4">
            Trade crypto securely and easily, anywhere you are.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-12">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Home</li>
              <li>Market</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} SwapAm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
