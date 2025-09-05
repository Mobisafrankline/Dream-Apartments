import React, { useRef } from 'react';

// Import local images (you'll need to add these to your assets folder)
import singleRoomImg from '../assets/single-room.png';
import bedsitterImg from '../assets/bedsitter-room.jpg';
import oneBedroomImg from '../assets/one-bedroom.jpg';
import twoBedroomImg from '../assets/two-bedroom.jpg';

const houseTypes = [
  {
    title: 'Single Room',
    description: 'Affordable single room houses suitable for individuals or students.',
    image: singleRoomImg,
    link: '/houses/single-room'
  },
  {
    title: 'Bedsitter',
    description: 'Spacious bedsitter units ideal for young professionals.',
    image: bedsitterImg,
    link: '/houses/bedsitter'
  },
  {
    title: 'One Bedroom',
    description: 'Comfortable one bedroom apartments perfect for couples.',
    image: oneBedroomImg,
    link: '/houses/one-bedroom'
  },
  {
    title: 'Two Bedroom',
    description: 'Large two bedroom houses suitable for families.',
    image: twoBedroomImg,
    link: '/houses/two-bedroom'
  },
  {
    title: 'Three Bedroom',
    description: 'Large three bedroom houses suitable for families.',
    image: twoBedroomImg,
    link: '/houses/two-bedroom'
  }
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320 + 24; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* House Types Section - Moved to appear first */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Houses</h1>

        {/* Navigation Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors -left-4"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors -right-4"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &gt;
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
        >
          {houseTypes.map((house) => (
            <div
              key={house.title}
              className="min-w-[280px] max-w-[320px] flex-none rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={house.image}
                alt={`${house.title} illustration`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{house.title}</h2>
                <p className="text-gray-600">{house.description}</p>
              </div>
              <div className="p-4 text-center">
                <button
                  onClick={() => window.location.href = house.link}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View {house.title} Photos
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hide scrollbar styles */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;