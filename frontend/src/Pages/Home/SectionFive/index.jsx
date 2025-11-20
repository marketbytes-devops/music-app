import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import celeb1 from '../../../assets/Images/Home/celeb1.png';
import celeb2 from '../../../assets/Images/Home/celeb2.png';
import celeb3 from '../../../assets/Images/Home/celeb3.png';
import celeb4 from '../../../assets/Images/Home/celeb4.png';
import celeb5 from '../../../assets/Images/Home/celeb5.png';

const celebrities = [
  { name: 'Beyoncé', img: celeb1 },
  { name: 'Taylor Swift', img: celeb2 },
  { name: 'Justin Bieber', img: celeb3 },
  { name: 'Celina', img: celeb4 },
  { name: 'Selena Gomez', img: celeb5 },
 
];

export default function Section5() {
  // Desktop Carousel Settings (Your original cool 3D effect)
  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 768,  settings: { slidesToShow: 2 }},
      { breakpoint: 640,  settings: { slidesToShow: 1, slidesToScroll: 1 }}
    ]
  };

  // Mobile-Only Simple Slider
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition-all"></div>
    )
  };

  return (
    <>
      {/* Custom 3D Styles for Desktop Carousel */}
      <style jsx>{`
        @media (min-width: 640px) {
          .desktop-carousel .slick-slider {
            perspective: 1200px;
          }

          .desktop-carousel .slick-slide {
            transform: translate3d(0, 0, -80px) scale(0.95);
            transition: transform 0.6s ease;
            opacity: 1;
          }

          .desktop-carousel .slick-current {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
            z-index: 10;
          }

          .desktop-carousel .slick-slide.slick-active:first-of-type {
            transform: translate3d(-120px, 0, 60px) scale(1.38) rotateY(20deg);
            z-index: 12;
            filter: brightness(1.18);
          }

          .desktop-carousel .slick-slide img {
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
        }

        /* Hide mobile slider on desktop */
        @media (min-width: 640px) {
          .mobile-only-slider {
            display: none !important;
          }
        }

        /* Hide desktop carousel on mobile */
        @media (max-width: 639px) {
          .desktop-only-carousel {
            display: none !important;
          }
        }
      `}</style>

      <section className="lg:py-16 lg:px-4 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
<div className="mb-12">
  <div className="flex flex-col items-center sm:flex-row sm:justify-start sm:items-center gap-6 lg:gap-12 w-full">
    

    <span className="inline-flex items-center gap-3 px-6 py-3 text-black bg-[#F5F5F5] rounded-full text-sm md:text-base font-medium tracking-wider whitespace-nowrap shrink-0">
      <div className="w-5 h-5 bg-black rounded-full"></div>
      OUR STARS AND PERFORMERS
    </span>

    <h2 className="text-4xl md:text-5xl font-medium font-lemon lg:ml-16 text-black text-center sm:text-left">
      CELEBRITIES & MUSICIANS
    </h2>
  </div>
</div>
          {/* Desktop Carousel -  */}
          <div className="desktop-only-carousel">
            <Slider {...desktopSettings} className="desktop-carousel">
              {celebrities.map((celeb, index) => (
                <div key={`${celeb.name}-${index}`} className="px-4">
                  <div className="text-center">
                    <img
                      src={celeb.img}
                      alt={celeb.name}
                      className="w-full h-auto max-w-xs mx-auto object-cover rounded-3xl"
                    />
                    <p className="mt-6 text-xl font-semibold text-gray-800">
                      {celeb.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Mobile-Only Simple Slider */}
          <div className="mobile-only-slider block sm:hidden">
            <Slider {...mobileSettings}>
              {celebrities.slice(0, 5).map((celeb, index) => ( 
                <div key={index} className="px-4">
                  <div className="text-center">
                    <img
                      src={celeb.img}
                      alt={celeb.name}
                      className="w-72 h-96 mx-auto object-cover rounded-3xl "
                    />
                    <p className="mt-6 text-2xl font-bold text-gray-900">
                      {celeb.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}