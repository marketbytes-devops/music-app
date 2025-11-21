import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; // ← Added
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReviewEvents from "../../assets/Icons/Events/ReviewEvents"


import eventsData from "../../Data/Event";

// ── Image Imports ──
import eventsBanner from "../../assets/Images/Events/eventsbanner.jpg";

import music1 from "../../assets/Images/Events/MusicParties/EventCard1.png";
import music2 from "../../assets/Images/Events/MusicParties/EventCard2.jpg";
import music3 from "../../assets/Images/Events/MusicParties/EventCard3.jpg";
import music4 from "../../assets/Images/Events/MusicParties/EventCard4.jpg";

import wedding1 from "../../assets/Images/Events/Wedding/Wedding1.jpg";
import wedding2 from "../../assets/Images/Events/Wedding/Wedding2.jpg";
import wedding3 from "../../assets/Images/Events/Wedding/Wedding3.jpg";
import wedding4 from "../../assets/Images/Events/Wedding/Wedding4.jpg";

import corp1 from "../../assets/Images/Events/Corporate/Corporate1.png";
import corp2 from "../../assets/Images/Events/Corporate/Corporate2.jpg";
import corp3 from "../../assets/Images/Events/Corporate/Corporate3.jpg";
import corp4 from "../../assets/Images/Events/Corporate/Corporate4.jpg";

import anniv1 from "../../assets/Images/Events/Anniversaries/EventCard1.png";
import anniv2 from "../../assets/Images/Events/Anniversaries/EventCard2.jpg";
import anniv3 from "../../assets/Images/Events/Anniversaries/EventCard3.jpg";
import anniv4 from "../../assets/Images/Events/Anniversaries/EventCard4.jpg";

import special1 from "../../assets/Images/Events/Special/EventCard1.png";
import special2 from "../../assets/Images/Events/Special/EventCard2.jpg";
import special3 from "../../assets/Images/Events/Special/EventCard3.jpg";
import special4 from "../../assets/Images/Events/Special/EventCard4.jpg";
import reviewevents from "../../assets/Icons/Events/ReviewEvents";
import QualityEvents from "../../assets/Icons/Events/QualityEvents";
import Trustevents from "../../assets/Icons/Events/TrustEvents";
import Secureevents from "../../assets/Icons/Events/SecureEvents";
import Careevents from "../../assets/Icons/Events/CareerEvents";
import Supportevents from "../../assets/Icons/Events/SupportEvents";

// ── Image Map ──
const imageMap = {
  music1,
  music2,
  music3,
  music4,
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  corp1,
  corp2,
  corp3,
  corp4,
  anniv1,
  anniv2,
  anniv3,
  anniv4,
  special1,
  special2,
  special3,
  special4,
};

export default function SectionTwo() {
  const features = [
    { icon: reviewevents, title: "EXPERIENCE" },
    { icon: QualityEvents, title: "QUALITY" },
    { icon: Trustevents, title: "TRUST" },
    { icon: Secureevents, title: "SECURITY" },
    { icon: Careevents, title: "WE CARE" },
    { icon: Supportevents, title: "SUPPORTING ARTISTS" },
  ];
 
  // Fixed slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",   
    cssEase: "ease-in-out",
  };

  return (
    <>
      {/* HERO SECTION */}
      <section>
        <div
          className="relative lg:min-h-screen min-h-[10vh] flex flex-col justify-between bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${eventsBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 ">
            <div className="mb-9">
              <p className="inline-block bg-white text-gray-800 text-sm font-medium px-16 py-4 rounded-full shadow-xl">
                WHAT IS LOREM IPSUM?
              </p>
            </div>

            <h2 className=" text-white text-center font-medium leading-tight tracking-wide">
              INCREDIBLE EVENTS
              <br />
              START HERE
            </h2>

            <div className="mt-12 w-full max-w-2xl">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-10 py-3 text-lg bg-white bg-opacity-95 rounded-full shadow-2xl focus:outline-none placeholder-gray-500"
                />
                <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600">
                  <svg
                    className="w-8 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className=" w-full space-y-20 py-16">
        {/* FILTER BAR - DROPDOWN ARROW */}
        <div className="relative -mt-28 px-4 z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white lg:rounded-full shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Event Type - DROPDOWN */}
              <div className="relative flex-1 min-w-[180px]">
                <select className="w-full px-4 py-4 pl-12 pr-12 bg-gray-100 rounded-full text-gray-600 font-medium text-base appearance-none focus:outline-none cursor-pointer hover:bg-gray-200 transition">
                  <option>Your Event Type</option>
                  <option>Concert</option>
                  <option>Conference</option>
                  <option>Party</option>
                  <option>Wedding</option>
                  <option>Seminar</option>
                </select>

                {/* Custom Dropdown Arrow -*/}
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h- Defensive5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Event Type - */}
              <div className="relative flex-1 min-w-[180px]">
                <select className="w-full px-6 py-4 pl-12 pr-12 bg-gray-100 rounded-full text-gray-600 font-medium text-base appearance-none focus:outline-none cursor-pointer hover:bg-gray-200 transition">
                  <option>Your Event Location</option>
                  <option>Concert</option>
                  <option>Conference</option>
                  <option>Party</option>
                  <option>Wedding</option>
                  <option>Seminar</option>
                </select>

                {/* Custom Dropdown Arrow -  */}
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h- Defensive5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#990000] hover:bg-red-800 text-white font-bold text-lg px-15 py-4 rounded-full transition-all hover:scale-105 shadow-lg flex items-center gap-3 min-w-[160px] justify-center">
                Search
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {eventsData.map((category) => (
          <CarouselSection
            key={category.slugCategory}
            title={category.category}
            slugCategory={category.slugCategory}
            cards={category.items}
          />
        ))}
      </section>
      
      {/* last SECTION */}
      <section className="container bg-white ">
      <div className=" mx-auto ">
        {/* Main Title */}
        <h2 className="font-medium text-gray-900 text-center mb-8">
          WHY BOOK WITH US?
        </h2>
 
        {/* Subtitle */}
        <h3 className="text-black tracking-[1px] max-w-4xl mx-auto text-center leading-tight font-medium mb-12">
          10 years providing you with the very best live music & entertainment
          for weddings, corporate events, and parties
        </h3>
 
        {/* Mobile: Carousel | Desktop: Grid */}
        <div className="block lg:hidden">
          <Slider {...sliderSettings}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="px-4">
                  <div className="flex flex-col items-center text-center"> 
                    <div className="mb-6 p-4 bg-[#F0EFE9] rounded-2xl">
                      <Icon className="w-12 h-12 text-gray-800" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 mb-3">
                      {feature.title}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs text-center"> {/* ← Added text-center */}
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s.
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
 
        {/* Desktop: Original Grid (100% unchanged) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <div className="flex flex-row items-center">
                  <div className="mb-6 p-4 bg-[#F0EFE9] rounded-2xl">
                    <Icon className="w-8 h-8 text-gray-800" />
                  </div>
                  <span className="text-lg ml-2 font-medium -mb-4 text-gray-800">
                    {feature.title}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}

function CarouselSection({ title, slugCategory, cards }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: cards.length > 4 ? 4 : cards.length - 0.01,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3.5, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      direction === "left"
        ? sliderRef.current.slickPrev()
        : sliderRef.current.slickNext();
    }
  };

  return (
    <section className="container w-full">
      <div className="flex items-center justify-between sm:mt-10 mt-8 sm:mb-8 mb-5">
        {/* Badge */}
        <div
          className="flex gap-3 items-center bg-[#F5F5F5] rounded-full
                    px-4 py-2.5"
        >
          <div className="w-5 h-5 bg-black rounded-full"></div>
          <p className="font-semibold text-sm tracking-wider uppercase">
            {title}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-gray-300 hover:bg-[#E9E9E9] transition cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-gray-300 hover:bg-[#E9E9E9] transition cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card) => {
          const detailUrl = `/events/${slugCategory}/${card.slug}`;

          return (
            <div key={card.slug} className="px-3">
              <div className="group cursor-pointer">
                {/* Clickable Image */}
                <Link to={detailUrl}>
                  <div className="overflow-hidden rounded-3xl ">
                    <img
                      src={imageMap[card.imageKey]}
                      alt={card.title}
                      className="w-full h-[340px] object-cover rounded-3xl transition-transform duration-500
                                group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Card Info */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-sm text-gray-600">{card.location}</p>
                    <p className="font-bold text-lg mt-1">{card.title}</p>
                  </div>

                  {/* Arrow Button Link */}
                  <Link
                    to={detailUrl}
                    className="bg-white border-2 border-gray-200 rounded-full p-3
    hover:bg-[#990000] hover:border-[#990000]
    transition-all duration-300 hover:scale-110 group"
                    aria-label={`View details for ${card.title}`}
                  >
                    <ArrowUpRight
                      size={18}
                      className="text-gray-800 group-hover:text-white transition-all duration-300 "
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
