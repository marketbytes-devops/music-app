import ServiceImg1 from "../../../assets/Images/Home/ServiceImg1.jpg";
import ServiceImg2 from "../../../assets/Images/Home/ServiceImg2.jpg";
import ServiceImg3 from "../../../assets/Images/Home/ServiceImg3.jpg";
import ServiceImg4 from "../../../assets/Images/Home/ServiceImg4.jpg";
import Button from "../../../Components/Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link, useNavigate } from "react-router-dom";

import { LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";

const SectionFour = () => {

  const navigate = useNavigate();

  return (
    <section className="container sm:py-12 py-4 bg-[#F5F5F5] sm:px-14 px-8 rounded-3xl">
      <div className="sm:p-10 p-5">
        <div className="flex items-center justify-center">
          <p className="flex items-center gap-3 font-medium text-[#000000]">
            <div className="md:w-5 w-3 h-3 md:h-5 bg-black rounded-full"></div>
            WHAT WE DO FOR YOU
          </p>
        </div>
        <h2 className="text-center">OUR SERVICES</h2>
      </div>

      <div className=" hidden sm:grid lg:grid-cols-2 md:gap-20 sm:gap-12 gap-8">
        {/* card sec-1 */}

        <div className="flex flex-col sm:gap-16 gap-8">

          <Link to='/' className="overflow-hidden flex flex-col items-center text-left group">
            <div className="w-full sm:h-[394px] overflow-hidden">
              <img
                src={ServiceImg1}
                alt="Solo Singer"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="py-2 flex  items-center mt-2">
              <div>
                <h4 className="text-[#1B1B1A] font-bold uppercase">solo singer</h4>
                <p className="text-[#555555] font-medium mt-2 line-clamp-3 ">
                   Our solo singers create unforgettable moments with soulful performances, 
  delivering emotion, elegance...
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400 transition-all duration-300 group-hover:bg-[#990000] group-hover:border-transparent">
                <LuMoveUpRight className="w-12 h-12 text-[#555555] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </div>
            </div>
          </Link>

          <Link to='/' className="overflow-hidden flex flex-col items-center text-left group">
            <div className="w-full sm:h-[394px] overflow-hidden">
              <img
                src={ServiceImg2}
                alt="Band"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="py-2 flex  items-center mt-2">
              <div>
                <h4 className="text-[#1B1B1A] font-bold">DJ</h4>
                <p className="text-[#555555] font-medium mt-2  ">
                  Our DJs bring the party to life with the best mixes and smooth
                  transitions.
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400 transition-all duration-300 group-hover:bg-[#990000] group-hover:border-transparent">
                <LuMoveUpRight className="w-12 h-12 text-[#555555] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </div>
            </div>
          </Link>

        </div>

        {/* card sec-2 */}

        <div className="flex flex-col sm:gap-14 gap-8">

          <Link to='/' className=" overflow-hidden flex flex-col items-center text-left group">
            <div className="w-full sm:h-[479px] overflow-hidden">
              <img
                src={ServiceImg3}
                alt="DJ"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="py-2 flex  items-center mt-2">
              <div>
                <h4 className="text-[#1B1B1A] font-bold">VIOLIN BAND</h4>
                <p className="text-[#555555] font-medium mt-2 line-clamp-3 ">
                  Our violin band creates a sophisticated atmosphere with
                  beautiful classical and contemporary music.
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400 transition-all duration-300 group-hover:bg-[#990000] group-hover:border-transparent">
                <LuMoveUpRight className="w-12 h-12 text-[#555555] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </div>
            </div>
          </Link>

          <Link to='/' className="overflow-hidden flex flex-col items-center text-left group">
            <div className="w-full sm:h-[332px] overflow-hidden">
              <img
                src={ServiceImg4}
                alt="Instrumentalist"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="py-2 flex  items-center mt-2">
              <div>
                <h4 className="text-[#1B1B1A] font-bold">GRACEFUL NOTES</h4>
                <p className="text-[#555555] font-medium mt-2  ">
                  Let the enchanting sound of the flute elevate your event.
                  Perfect for weddings, anniversaries,..
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400 transition-all duration-300 group-hover:bg-[#990000] group-hover:border-transparent">
                <LuMoveUpRight className="w-12 h-12 text-[#555555] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
              </div>
            </div>
          </Link>

        </div>

      </div>

      {/* MOBILE SLICK SLIDER */}
      <div className="sm:hidden p-3">
        <Slider
          dots={false}
          infinite={true}
          speed={600}
          autoplay={true}
          autoplaySpeed={3000}
          cssEase="ease-in-out"
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          centerPadding="10px"        
          className="-mx-4"
          
        >
          {/* CARD 1 */}
          <Link to='/'>
            <div className="overflow-hidden flex flex-col text-left group px-2">
              <div className="w-full h-[260px] overflow-hidden">
                <img src={ServiceImg1} className="w-full h-full object-cover" />
              </div>
              <div className="py-2 flex items-center mt-2">
                <div>
                  <h4 className="font-bold">SOLO SINGER</h4>
                  <p className="text-[#555] mt-2">
                    Our solo singers bring emotion and elegance to any event...
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 rounded-full border border-gray-400 group-hover:bg-[#990000]">
                  <LuMoveUpRight className="w-8 h-8 text-[#555] group-hover:text-white group-hover:rotate-45 duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link to='/'>
            <div className="overflow-hidden flex flex-col text-left group px-2">
              <div className="w-full h-[260px] overflow-hidden">
                <img src={ServiceImg2} className="w-full h-full object-cover" />
              </div>
              <div className="py-2 flex items-center mt-2">
                <div>
                  <h4 className="font-bold">DJ</h4>
                  <p className="text-[#555] mt-2">
                    Our DJs bring the party to life with the best mixes...
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 rounded-full border border-gray-400 group-hover:bg-[#990000]">
                  <LuMoveUpRight className="w-8 h-8 text-[#555] group-hover:text-white group-hover:rotate-45 duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* CARD 3 */}
          <Link to='/'>
            <div className="overflow-hidden flex flex-col text-left group px-2">
              <div className="w-full h-[260px] overflow-hidden">
                <img src={ServiceImg3} className="w-full h-full object-cover" />
              </div>
              <div className="py-2 flex items-center mt-2">
                <div>
                  <h4 className="font-bold">VIOLIN BAND</h4>
                  <p className="text-[#555] mt-2">
                    Our violin band creates a sophisticated atmosphere...
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 rounded-full border border-gray-400 group-hover:bg-[#990000]">
                  <LuMoveUpRight className="w-8 h-8 text-[#555] group-hover:text-white group-hover:rotate-45 duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* CARD 4 */}
          <Link to='/'>
            <div className="overflow-hidden flex flex-col text-left group px-2">
              <div className="w-full h-[260px] overflow-hidden">
                <img src={ServiceImg4} className="w-full h-full object-cover" />
              </div>
              <div className="py-2 flex items-center mt-2">
                <div>
                  <h4 className="font-bold">GRACEFUL NOTES</h4>
                  <p className="text-[#555] mt-2">
                    Let the enchanting sound of the flute elevate your event...
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 rounded-full border border-gray-400 group-hover:bg-[#990000]">
                  <LuMoveUpRight className="w-8 h-8 text-[#555] group-hover:text-white group-hover:rotate-45 duration-300" />
                </div>
              </div>
            </div>
          </Link>
          
        </Slider>
      </div>

      <div className="flex justify-center mt-4">
        <Button text="View Full Services" onClick={() => navigate("/")} />
      </div>
    </section>
  );
};

export default SectionFour;
