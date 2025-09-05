import React from 'react'
import Navbar from './Navbar'

const Header = () => {
return (
    <div
        className='min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/header_img.png')" }}
        id='Header'
    >
        <Navbar />
        <div className="bg-transparent rounded-lg p-6 mt-10 shadow-lg text-center max-w-xl">
            <h1 className="text-5xl font-bold mb-4 text-white">
                Discover your dream home, apartment, or house with us
            </h1>
            <p className="text-1xl text-white">
                Find beautiful spaces tailored to your lifestyle. Start your journey to the perfect place today!
            </p>
            <div>
                <a href="#Projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Explore Now
                </a>
                <a href="#Contact" className="mt-6 inline-block ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                    Contact Us
                </a>
            </div>
        </div>
    </div>
)
}

export default Header
