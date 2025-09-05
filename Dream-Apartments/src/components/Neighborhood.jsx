import React from "react";

import MurangaImg from "../assets/Muranga.jpeg";
import NyeriImg from "../assets/Nyeri.jpeg";
import KirinyagaImg from "../assets/Kirinyaga.jpeg";
import KiambuImg from "../assets/Kiambu.jpeg";

const Neighborhood = () => {
  const neighborhoods = [
    { name: "Murang'a", image: MurangaImg, link: "/neighborhoods/muranga" },
    { name: "Nyeri", image: NyeriImg, link: "/neighborhoods/nyeri" },
    { name: "Kirinyaga", image: KirinyagaImg, link: "/neighborhoods/kirinyaga" },
    { name: "Kiambu", image: KiambuImg, link: "/neighborhoods/kiambu" },
  ];

  return (
    <div className="bg-green-50">
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore The Best Neighborhoods In Mount Kenya Region
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            These are the top neighborhoods where we can match you with the
            perfect home.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <img
                src={neighborhood.image}
                alt={neighborhood.name}
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold text-center tracking-wide">
                  HOMES IN {neighborhood.name.toUpperCase()}
                </h3>
                <button
                  onClick={() => (window.location.href = neighborhood.link)}
                  className="mt-4 w-full px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                >
                  Explore {neighborhood.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Neighborhood;
