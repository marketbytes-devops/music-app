
import React from "react";
import eventsBanner from "../../assets/Images/Events/eventsbanner.jpg"; 

export default function HeroEventSection() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${eventsBanner})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Top Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20">
        {/* Floating Badge */}
        <div className="mb-8">
          <span className="inline-block bg-white text-gray-800 text-sm font-semibold px-8 py-3 rounded-full shadow-xl">
            WHAT IS LOREM IPSUM?
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-center leading-tight tracking-wide">
          INCREDIBLE EVENTS
          <br />
          START HERE
        </h1>

        {/* Large Search Input */}
        <div className="mt-12 w-full max-w-3xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-10 py-6 text-lg bg-white bg-opacity-95 rounded-full shadow-2xl focus:outline-none placeholder-gray-500"
            />
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Filter Bar - 100% like your image */}
      <div className="relative z-10 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-full shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Event Type */}
            <div className="relative flex-1 min-w-[180px]">
              <select className="w-full px-8 py-5 bg-gray-100 rounded-full text-gray-600 font-medium text-base appearance-none focus:outline-none cursor-pointer hover:bg-gray-200 transition">
                <option>Your Event Type</option>
                <option>Concert</option>
                <option>Conference</option>
                <option>Party</option>
              </select>
              <svg className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Location */}
            <div className="relative flex-1 min-w-[180px]">
              <select className="w-full px-8 py-5 bg-gray-100 rounded-full text-gray-600 font-medium text-base appearance-none focus:outline-none cursor-pointer hover:bg-gray-200 transition">
                <option>Your Event Location</option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
              </select>
              <svg className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Date */}
            <div className="relative flex-1 min-w-[180px]">
              <input
                type="text"
                readOnly
                placeholder="Your Event Date"
                className="w-full px-8 py-5 pr-16 bg-gray-100 rounded-full text-gray-600 font-medium text-base focus:outline-none cursor-pointer hover:bg-gray-200 transition"
              />
              <svg className="absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Red Search Button */}
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-105 shadow-lg flex items-center gap-3 min-w-[160px] justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}