import React, { useState, useEffect, useRef } from 'react';
import flowImgFirst from '../../../assets/Images/Home/banner-flow-1.png';
import flowImgSecond from '../../../assets/Images/Home/banner-flow-2.png';
import Form from "../../../Components/Form";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgContainerRef = useRef(null);
  const lastScrollY = useRef(0);
  const modalRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  // Block scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isModalOpen]);

  // Parallax effect 
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

  // NEW: Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <style jsx>{`
        @keyframes rainbow {
          0%, 100% { color: #3b82f6; }
          20% { color: #06b6d4; }
          40% { color: #8b5cf6; }
          80% { color: #a855f7; }
        }
        .animate-rainbow { animation: rainbow 6s linear infinite; }
        @keyframes slideUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .slide-up-animation { animation: slideUp 1.2s ease-out forwards; }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-enter { animation: modalFadeIn 0.35s ease-out forwards; }
      `}</style>

    
      <div className="relative bg-white flex flex-col justify-center overflow-visible lg:min-h-0 pb-12 sm:pb-4 md:pb-35 lg:pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="text-center max-w-5xl mx-auto">
            <p className="inline-block mt-10 sm:mt-26 bg-[#F5F5F5] text-gray-800 font-medium tracking-wider rounded-full px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base shadow-sm">
              “BOOK EFFORTLESSLY, CREATE UNFORGETTABLE MOMENTS!”
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight slide-up-animation">
              <span className="text-[#1B1B1A] inline-block pr-2 sm:pr-4">DISCOVER TOP</span>
              <MusiciansRainbow />
              <span className="text-[#1B1B1A] inline-block pl-2 sm:pl-4">,</span>
            </h1>

            <h2 className="font-black text-[#1B1B1A] mt-2 slide-up-animation" style={{ animationDelay: '0.3s' }}>
              MAKE YOUR EVENT UNFORGETTABLE!
            </h2>

            <div className="mt-6 sm:mt-8 md:mt-2 lg:mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-2 bg-transparent text-black font-normal rounded-full border border-black overflow-hidden transition-all duration-300 hover:bg-[#990000] hover:text-white text-sm sm:text-base slide-up-animation cursor-pointer"
              >
                <span className="relative z-10 flex items-center font-semibold gap-2 sm:gap-3">
                  Get Booking
                  <svg width="17" height="16" viewBox="0 0 17 16" className="duration-300 transition-transform group-hover:translate-x-1 sm:group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0134 1.45517C16.0385 0.903459 15.6116 0.435829 15.0599 0.410692L6.06924 0.00105431C5.51753 -0.0240834 5.0499 0.40279 5.02476 0.954502C4.99963 1.50621 5.4265 1.97384 5.97821 1.99898L13.9699 2.3631L13.6058 10.3548C13.5807 10.9065 14.0075 11.3742 14.5592 11.3993C15.111 11.4244 15.5786 10.9976 15.6037 10.4458L16.0134 1.45517ZM0.674194 14.5001L1.34838 15.2386L15.6886 2.14821L15.0144 1.40966L14.3402 0.671098L4.58956e-06 13.7615L0.674194 14.5001Z"
                      className="transition-colors duration-300 group-hover:fill-white" fill="black"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#990000] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Parallax Images */}
        <div ref={imgContainerRef} className="absolute inset-x-0 bottom-0 sm:bottom-4 md:-bottom-10 pointer-events-none z-10 hidden sm:block" style={{ transform: 'translateY(0px)' }}>
          <div className="relative flex justify-between items-end px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="transform rotate-6 sm:rotate-12 drop-shadow-2xl">
              <img src={flowImgFirst} alt="Musician" className="w-40 h-48 sm:w-48 sm:h-56 md:w-70 md:h-74 object-cover rounded-3xl" />
            </div>
            <div className="drop-shadow-2xl isolate">
              <img src={flowImgSecond} alt="Live Performance" className="w-40 h-48 sm:w-48 sm:h-56 md:w-70 md:h-74 object-cover rounded-3xl -rotate-6 sm:-rotate-12" style={{ position: 'relative', zIndex: -1 }} />
            </div>
          </div>
        </div>

        <div className="h-auto sm:h-28 md:h-36 lg:h-48"></div>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div 
            ref={modalRef} 
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 modal-enter"
          >
           
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-14 right-0 text-white text-5xl hover:text-gray-300"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold text-center mb-3">GET IN TOUCH</h3>
            <p className="text-center text-gray-600 text-sm mb-8 leading-relaxed">
              Reach out with inquiries about tickets, partnerships, or event details.
            </p>

            <Form
              title=""
              description=""
              fields={["name", "email", "phone", "subject", "message"]}
              buttonText="Send message"
              onSubmit={handleSubmit}
              wrapperClass="!p-0 !bg-transparent [&_.sm\\:grid-cols-2]:!grid-cols-1 [&_.sm\\:grid-cols-2]:grid-cols-1 [&_.sm\\:col-span-2]:!col-span-1 [&_.sm\\:col-span-2]:col-span-1"
            />
          </div>
        </div>
      )}
    </>
  );
}