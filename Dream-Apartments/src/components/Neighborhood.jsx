import React from 'react'

import MurangaImg from '../assets/Muranga.jpeg';
import NyeriImg from '../assets/Nyeri.jpeg';
import KirinyagaImg from '../assets/Kirinyaga.jpeg';
import KiambuImg from '../assets/Kiambu.jpeg';

const Neighborhood = () => {
  const neighborhoods = [
    {
      name: 'Murang"a',
      image: MurangaImg,
      link: '/neighborhoods/layington'
    },
    {
      name: 'Nyeri',
      image: NyeriImg,
      link: '/neighborhoods/kileleshwa'
    },
    {
      name: 'Kirinyaga',
      image: KirinyagaImg,
      link: '/neighborhoods/layington'
    },
    {
      name: 'Kiambu',
      image: KiambuImg,
      link: '/neighborhoods/kileleshwa'
    }
  ];

  return (
    <div className="bg-green-100">
      {/* Neighborhoods Section - Moved to appear after house types */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore The Best Neighborhoods In Mount Kenya Region
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the best neighborhoods where we have the perfect home for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {neighborhoods.map((neighborhood, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={neighborhood.image} 
                alt={neighborhood.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-3xl font-bold text-center mb-2">HOMES</h3>
                <p className="text-white text-2xl font-semibold text-center">
                  IN {neighborhood.name.toUpperCase()}
                </p>
                <button
                  onClick={() => window.location.href = neighborhood.link}
                  className="mt-4 mx-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore {neighborhood.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Neighborhood;