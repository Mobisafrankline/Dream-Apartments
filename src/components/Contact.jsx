import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Let’s Connect
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Have questions or want to work with us? Reach out through the form or
            using the details below.
          </p>

          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-600 w-6 h-6" />
              <span className="text-gray-800 text-lg">734-1200, Murang'a, Kenya</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-600 w-6 h-6" />
              <span className="text-gray-800 text-lg">+254 700554725</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-600 w-6 h-6" />
              <span className="text-gray-800 text-lg">info@dreamapartments.com</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
