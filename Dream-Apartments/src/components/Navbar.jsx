import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white/40 via-white/10 to-transparent backdrop-blur-lg shadow-lg transition-all">
            <div className="container mx-auto flex items-center justify-between px-8 py-3">
                <a href="#Header" className="flex items-center gap-2">
                    <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-blue-700 tracking-tight">Dream Apartments</span>
                </a>
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <a href="#Header" className="text-base font-medium text-gray-900 hover:text-blue-700 transition">Home</a>
                    </li>
                    <li>
                        <a href="#Projects" className="text-base font-medium text-gray-900 hover:text-blue-700 transition">Projects</a>
                    </li>
                    <li>
                        <a href="#Testimonials" className="text-base font-medium text-gray-900 hover:text-blue-700 transition">Testimonials</a>
                    </li>
                    <li>
                        <a href="#Footer" className="text-base font-medium text-gray-900 hover:text-blue-700 transition">Contact</a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white/60 border border-gray-300 rounded-full pl-4 pr-10 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                        />
                        <button className="absolute right-2 top-1.5 text-blue-600 hover:text-blue-800">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </div>
                    <button className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
