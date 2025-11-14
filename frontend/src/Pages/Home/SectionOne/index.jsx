import React from 'react';
import flowImgFirst from '../../../assets/Images/Home/banner-flow-1.png';
import flowImgSecond from '../../../assets/Images/Home/banner-flow-1.png';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-center overflow-visible">
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <p className="inline-block bg-[#F5F5F5] text-gray-800 font-medium text-sm md:text-base tracking-wider rounded-full px-10 py-4 shadow-sm">
            “BOOK EFFORTLESSLY, CREATE UNFORGETTABLE MOMENTS!”
          </p>
          <h1>
            <span className="text-[#1B1B1A] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] inline-block">
              DISCOVER TOP{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] inline-block">
              MUSICIANS,
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1B1B1A] -mt-4">
            MAKE YOUR EVENT UNFORGETTABLE!
          </h2>
          <div className="mt-2">
            <button className="group relative px-10 py-2 bg-transparent text-black text-lg font-normal rounded-full border-1 border-black overflow-hidden transition-all duration-300 hover:bg-black hover:text-white">
              <span className="relative z-10 flex items-center gap-3">
                Get Booking
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-23 pointer-events-none ">
        <div className="relative flex justify-between items-end px-10 ">
          <div className="transform rotate-12 px-16 drop-shadow-2xl">
            <img
              src={flowImgFirst}
              alt="Musician"
              className="w-56 md:w-72 lg:w-50 h-64 md:h-80 lg:h-60 object-cover rounded-3xl  "
            />
          </div>
          <div className="transform -rotate-12 px-20 drop-shadow-2xl">
            <img
              src={flowImgSecond}
              alt="Live Performance"
              className="w-56 md:w-72 lg:w-50 h-64 md:h-80 lg:h-60 object-cover rounded-3xl "
            />
          </div>
        </div>
      </div>
      <div className="h-32 md:h-48 lg:h-64"></div>
    </div>
  );
}