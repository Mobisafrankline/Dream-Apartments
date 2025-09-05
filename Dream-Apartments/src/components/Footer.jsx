import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../assets/logo.svg"; // 👈 ensure path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={Logo}
              alt="Dream Apartments Logo"
              className="h-20 w-auto" // 🔥 increased logo size
            />
            <h2 className="text-3xl font-bold text-white">Dream Apartments</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Affordable & modern living spaces designed for your comfort and lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-indigo-500" />
              Murang'a, Kenya
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" />
              +254 700554725
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" />
              info@dreamapartments.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dream Apartments. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
