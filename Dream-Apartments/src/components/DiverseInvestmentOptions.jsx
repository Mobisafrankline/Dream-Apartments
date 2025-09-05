import React, { useState } from 'react';

const DiverseInvestmentOptions = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Diverse Investment Options in Mount Kenya Region
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Do you wish to invest in the Mount Kenya region? Investing in this thriving real estate market offers diverse investment options, providing investors with a robust portfolio that can mitigate risks and enhance returns. The region encompasses a wide range of properties, including residential developments, commercial spaces, and agricultural ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Investment Highlights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Investment Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Residential properties with scenic mountain views</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Commercial spaces in growing towns</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Agricultural land with high fertility</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Properties in Nyeri, Murang'a, Embu, Meru, and Tharaka Nithi</span>
              </li>
            </ul>
          </div>

          {/* Catalogue Download */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Download Our Latest Catalogue To Get A Variety Of Property Options in Mount Kenya Region.
            </h2>
            <div className="border-t-2 border-green-500 w-16 my-6"></div>
            <p className="text-gray-600 mb-6">
              Get exclusive access to our premium property listings with detailed information, pricing, and location insights across the Mount Kenya region.
            </p>
            
            <div className="text-center py-6 mb-6 bg-green-50 rounded-lg">
              <div className="text-green-800 font-bold text-lg mb-2">DOWNLOAD PROPERTY CATALOGUE</div>
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-green-500"></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your email to download
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
              >
                Download Now
              </button>
              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg mt-4">
                  Thank you! The catalogue has been sent to your email.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Property Tour Series */}
        <div className="bg-gray-800 text-white rounded-2xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">WATCH OUR PROPERTY TOUR SERIES</h2>
              <p className="text-gray-300 mb-8">
                Take virtual tours of our premium properties across the Mount Kenya region from the comfort of your home. Get a real feel of the spaces, amenities, and beautiful landscapes.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center group text-green-300 hover:text-white transition-colors">
                  <span className="mr-2 font-semibold">VISIT OUR CHANNEL</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Watch on</span>
                  <div className="flex space-x-3">
                    <div className="bg-white text-gray-800 rounded px-3 py-1 font-medium">YouTube</div>
                    <div className="bg-white text-gray-800 rounded px-3 py-1 font-medium">Instagram</div>
                  </div>
                </div>
                <div className="pt-4">
                  <span className="font-semibold">Series Progress</span>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full">
                    <div className="h-full bg-green-500 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-700 flex items-center justify-center p-8">
              <div className="relative w-full max-w-md">
                <div className="aspect-w-16 aspect-h-9 bg-gray-600 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Real Estate Agency */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We Are The Leading Real Estate Agency in Mount Kenya Region
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Are you looking to live in the beautiful Mount Kenya region? With an extensive catalogue, Mount Kenya Realty Group can match you with a property to call home. Get exclusive insights into popular areas such as Nyeri, Murang'a, Embu, Meru, and Tharaka Nithi. Filter down to what's important for you.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Residential homes with mountain views</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Agricultural land investments</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Commercial properties in growing towns</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Vacation homes and rental properties</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Areas</h3>
              <div className="flex flex-wrap gap-3">
                {['Nyeri', 'Murang\'a', 'Embu', 'Meru', 'Tharaka Nithi', 'Kirinyaga', 'Nanyuki', 'Karatina'].map((area) => (
                  <span key={area} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Explore Mount Kenya Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiverseInvestmentOptions;