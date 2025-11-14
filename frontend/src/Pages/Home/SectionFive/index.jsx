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
  { name: 'Enrique Iglesias', img: celeb2 },
  { name: 'Ariana Grande', img: celeb3 },
  { name: 'Justin Bieber', img: celeb4 },
  { name: 'Selena Gomez', img: celeb5 },
];

export default function Section5() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    rtl: true,                     
    cssEase: 'linear',            
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 px-2 bg-white">
      <div className="container mx-auto">
       
        {/* Header - unchanged */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-20 mb-8">
          <div className="flex items-center">
            <span className="inline-flex items-center gap-3 bg-[#F5F5F5] rounded-full pl-2 pr-2 py-3 text-md font-medium tracking-wider text-gray-700">
              <div className="w-5 h-5 bg-black rounded-full"></div>
              OUR STARS & PERFORMERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl ml-30 font-medium font-lemon text-black">
            CELEBRITIES & MUSICIANS
          </h2>
        </div>

        {/* Slick Slider */}
        <Slider {...settings}>
          {celebrities.map((celeb) => (
            <div key={celeb.name} className="px-3">
              <div className="group cursor-pointer transition-transform duration-300 hover:scale-102">
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={celeb.img}
                    alt={celeb.name}
                    className="w-full h-75 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="mt-5 text-center text-lg font-semibold text-gray-800">
                  {celeb.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}