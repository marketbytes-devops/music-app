import React, { useEffect, useRef } from 'react';
import flowImgFirst from '../../../assets/Images/Home/banner-flow-1.png';
import flowImgSecond from '../../../assets/Images/Home/banner-flow-2.png';

// Rainbow MUSICIANS
const MusiciansRainbow = () => {
  const text = 'MUSICIANS';
  return (
    <span className="inline-block">
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-rainbow"
          style={{
            animationDelay: `${index * 0.15}s`,
            animationDuration: '7s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default function HeroSection() {
  const imgContainerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgContainerRef.current) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      const currentTranslate = parseFloat(
        imgContainerRef.current.style.transform.replace(/[^0-9.-]/g, '') || '0'
      );
      const newTranslate = currentTranslate - delta * 1.2;

      imgContainerRef.current.style.transform = `translateY(${newTranslate}px)`;

      lastScrollY.current = currentScrollY;
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes rainbow {
          0%   { color: #3b82f6; }
          20%  { color: #06b6d4; }
          40%  { color: #8b5cf6; }
          80%  { color: #a855f7; }
          100% { color: #3b82f6; }
        }
        .animate-rainbow {
          animation: rainbow 6s linear infinite;
        }

        .isolate {
          isolation: isolate;
        }

        .parallax-img {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* NEW: Slide-up animation */
        @keyframes slideUp {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-up-animation {
          animation: slideUp 1.2s ease-out forwards;
        }
      `}</style>

      <div className="relative bg-white flex flex-col justify-center overflow-visible lg:min-h-0 pb-12 sm:pb-4 md:pb-35 lg:pb-4">
       
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="text-center max-w-5xl mx-auto">
            <p className="inline-block mt-10 sm:mt-26 bg-[#F5F5F5] text-gray-800 font-medium tracking-wider rounded-full px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base shadow-sm">
              “BOOK EFFORTLESSLY, CREATE UNFORGETTABLE MOMENTS!”
            </p>

            {/* Slides up from bottom */}
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up-animation">
              <span className="text-[#1B1B1A] inline-block pr-2 sm:pr-4">
                DISCOVER TOP
              </span>
              <MusiciansRainbow />
              <span className="text-[#1B1B1A] inline-block pl-2 sm:pl-4">,</span>
            </h1>

            {/* Also slides up (slightly delayed for better effect) */}
            <h2 className="font-black text-[#1B1B1A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 slide-up-animation"
                style={{ animationDelay: '0.3s' }}>
              MAKE YOUR EVENT UNFORGETTABLE!
            </h2>

            <div className="mt-6 sm:mt-8 md:mt-2 lg:mt-10">
              <button className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-2 lg:py-6 bg-transparent text-black font-normal rounded-full border border-black overflow-hidden transition-all duration-300 hover:bg-amber-800 hover:text-white text-sm sm:text-base">
                <span className="relative z-10 flex items-center font-semibold gap-2 sm:gap-3">
                  Get Booking
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1 sm:group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Images hidden on mobile */}
        <div
          ref={imgContainerRef}
          className="absolute inset-x-0 bottom-0 sm:bottom-4 md:bottom-32 lg:bottom-12 pointer-events-none z-10 hidden sm:block"
          style={{ transform: 'translateY(0px)' }}
        >
          <div className="relative flex justify-between items-end px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="transform rotate-6 sm:rotate-12 drop-shadow-2xl">
              <img
                src={flowImgFirst}
                alt="Musician"
                className="w-40 h-48 sm:w-48 sm:h-56 md:w-34 md:h-45 lg:w-50 lg:h-62 object-cover rounded-3xl"
              />
            </div>

            <div className="drop-shadow-2xl isolate">
              <img
                src={flowImgSecond}
                alt="Live Performance"
                className="w-40 h-48 sm:w-48 sm:h-56 md:w-34 md:h-45  lg:w-50 lg:h-62 object-cover rounded-3xl -rotate-6 sm:-rotate-12 parallax-img"
                style={{ position: 'relative', zIndex: -1 }}
              />
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-auto sm:h-28 md:h-36 lg:h-48"></div>
      </div>
    </>
  );
}