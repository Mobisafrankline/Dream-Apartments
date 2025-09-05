import React, { useState } from "react";
import { assets } from "../assets/assets";

const links = [
  { href: "#Header", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Testimonials", label: "Testimonials" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const SearchBar = ({ mobile }) => (
    <form
      className={`flex items-center rounded-full px-3 py-1 ${
        mobile ? "bg-white/20 mt-4" : "bg-white/20 mx-4"
      }`}
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white placeholder-gray-200 px-2 flex-grow"
      />
      <button type="submit" className="text-white px-2 hover:text-blue-300">
        🔍
      </button>
    </form>
  );

  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-50">
      <div className="flex items-center justify-between px-6">
        <img src={assets.logo} alt="Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-blue-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <SearchBar />
          <button className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-md rounded-lg mt-2 mx-4 p-4 space-y-4 text-white">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <SearchBar mobile />
          <button className="w-full bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
