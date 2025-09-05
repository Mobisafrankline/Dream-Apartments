import React, { useState } from "react";

const DiverseInvestmentOptions = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Diverse Investment Options in Mount Kenya Region
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Do you wish to invest in the Mount Kenya region? Investing in this
            thriving real estate market offers diverse investment options,
            providing investors with a robust portfolio that can mitigate risks
            and enhance returns. The region encompasses a wide range of
            properties, including residential developments, commercial spaces,
            and agricultural ventures.
          </p>
        </div>

        {/* Highlights + Catalogue */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-stretch">
          {/* Investment Highlights */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Investment Highlights
            </h2>
            <ul className="space-y-4">
              {[
                "Residential properties with scenic mountain views",
                "Commercial spaces in growing towns",
                "Agricultural land with high fertility",
                "Properties in Nyeri, Murang'a, Embu, Meru, and Tharaka Nithi",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalogue Download */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Download Our Latest Catalogue
            </h2>
            <p className="text-gray-600 mb-6">
              Get exclusive access to our premium property listings with detailed
              information, pricing, and location insights across the Mount Kenya
              region.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
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

        {/* Property Tour */}
        <div className="bg-gray-800 text-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">
                WATCH OUR PROPERTY TOUR SERIES
              </h2>
              <p className="text-gray-300 mb-8">
                Take virtual tours of our premium properties across the Mount
                Kenya region from the comfort of your home.
              </p>
              <a
                href="#"
                className="flex items-center text-green-300 hover:text-white font-semibold transition"
              >
                VISIT OUR CHANNEL →
              </a>
            </div>
            <div className="bg-gray-700 flex items-center justify-center p-8">
              <div className="relative w-full max-w-lg aspect-video bg-gray-600 rounded-lg flex items-center justify-center">
                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We Are The Leading Real Estate Agency in Mount Kenya Region
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With an extensive catalogue, Mount Kenya Realty Group can match you
            with a property to call home.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Residential homes with mountain views",
                  "Agricultural land investments",
                  "Commercial properties in growing towns",
                  "Vacation homes and rental properties",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Areas */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Popular Areas</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Nyeri",
                  "Murang'a",
                  "Embu",
                  "Meru",
                  "Tharaka Nithi",
                  "Kirinyaga",
                  "Nanyuki",
                  "Karatina",
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition">
              Explore Mount Kenya Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiverseInvestmentOptions;
