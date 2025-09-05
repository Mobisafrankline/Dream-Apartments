import React, { useState } from "react";
import { assets } from "../assets/assets";

const links = [
  { href: "#Header", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Testimonials", label: "Testimonials" },
  { href: "#Contact", label: "Contact" },
];

const houseLinks = [
  { href: "#single-room", label: "Single Room" },
  { href: "#bedsitters", label: "Bedsitters" },
  { href: "#one-bedroom", label: "One Bedroom" },
  { href: "#two-bedroom", label: "Two Bedroom" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [houseOpen, setHouseOpen] = useState(false);

  const SearchBar = ({ mobile }) => (
    <form
      className={`flex items-center rounded-full px-3 py-1 border ${
        mobile ? "bg-gray-100 mt-4" : "bg-gray-100 mx-4"
      }`}
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-gray-700 placeholder-gray-500 px-2 flex-grow"
      />
      <button type="submit" className="text-gray-600 px-2 hover:text-blue-600">
        🔍
      </button>
    </form>
  );

  return (
    <nav className="fixed top-0 left-0 w-full py-4 md:py-5 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="h-12 w-auto sm:h-14 md:h-16"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-blue-600">
                {l.label}
              </a>
            </li>
          ))}

          {/* House Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setHouseOpen(true)}
            onMouseLeave={() => setHouseOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center">
              House ▼
            </button>
            {houseOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg text-gray-700">
                {houseLinks.map((h) => (
                  <li key={h.label}>
                    <a
                      href={h.href}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                      {h.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Desktop Search + Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <SearchBar />
          <a
            href="/login"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300"
          >
            Login
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white rounded-lg mt-2 mx-4 p-4 space-y-4 text-gray-800 shadow-lg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          {/* Mobile House Dropdown */}
          <div>
            <p className="font-semibold">House</p>
            <ul className="pl-4 space-y-2 mt-2">
              {houseLinks.map((h) => (
                <li key={h.label}>
                  <a
                    href={h.href}
                    className="block hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {h.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <SearchBar mobile />
          <a
            href="/login"
            className="block w-full text-center bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300"
          >
            Login
          </a>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
