import Guitar from "../../../assets/Icons/Home/Guitar";
import Band from "../../../assets/Icons/Home/Band";
import CraftImg1 from "../../../assets/Images/Home/Craft-img-1.jpg";
import CraftImg2 from "../../../assets/Images/Home/Craft-img-2.jpg";
import CraftImg3 from "../../../assets/Images/Home/Craft-img-3.jpg";
import Artist1 from "../../../assets/Images/Home/Artist1.png";
import Artist2 from "../../../assets/Images/Home/Artist2.png";
import Artist3 from "../../../assets/Images/Home/Artist3.png";
import Button from "../../../Components/Button";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SectionTwo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // LEFT image animation
    gsap.fromTo(
      ".img-left",
      { x: -50, y: 80, rotation: -24, opacity: 0 },
      {
        x: 0,
        y: 0,
        rotation: -12,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img-middle",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    // RIGHT image animation
    gsap.fromTo(
      ".img-right",
      { x: 50, y: 80, rotation: 24, opacity: 0 },
      {
        x: 0,
        y: 0,
        rotation: 12,
        opacity: 1,
        scrollTrigger: {
          trigger: ".img-middle",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="container ">
        <div className="w-full flex flex-col lg:flex-row ">
          {/* LEFT SECTION - IMAGES */}
          <div className="lg:w-[55%] w-full flex flex-col lg:items-start items-center">
            <p
              className="flex items-center gap-3 font-medium text-[#000000] bg-[#F5F5F5]
                         rounded-full px-4 py-2 mb-5 lg:mb-6"
            >
              <div className="w-5 h-5 bg-black rounded-full"></div>
              WHO WE ARE
            </p>

            <div className="flex relative">
              {/* Image 1 */}
              <div className="hidden sm:block z-30 img-left ">
                <img
                  src={CraftImg2}
                  alt="Guitarist"
                  className="sm:w-[280px] h-[340px] object-cover rounded-3xl transform -rotate-12"
                />
              </div>

              {/* Image 2 - slightly overlapped */}
              <div className="ml-0 sm:-ml-8 z-40 img-middle">
                <img
                  src={CraftImg1}
                  alt="Singer"
                  className="sm:w-[280px] w-full sm:h-[340px] h-auto object-cover rounded-3xl"
                />
              </div>

              {/* Image 3 - more overlap */}
              <div className="hidden sm:block -ml-8 z-10 img-right">
                <img
                  src={CraftImg3}
                  alt="Instruments"
                  className="w-[280px] h-[340px] object-cover rounded-3xl transform rotate-12"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - TEXT */}
          <div className="lg:w-[45%] w-full flex flex-col lg:items-end items-center">
            
            <h2 className="hidden lg:block lg:text-right lg:!text-[38px] text-center font-bold leading-snug mt-4 lg:mt-0">
              Crafting <br />
              Unforgettable <br /> Experiences
              <br /> Through Music
            </h2>

            <h2 className="lg:hidden text-center font-bold leading-snug mt-4">
              Crafting Unforgettable <br /> Experiences Through Music
            </h2>

            <p className="lg:text-right  text-center text-[#555555] mt-3 lg:ml-8 ml-0">
              At Book Your Musician, we’re more than just a booking platform -
              we’re your partner in creating unforgettable experiences through
              the power of live music. Whether you’re planning an intimate
              celebration, a grand event, or simply searching for the perfect
              artist to bring your vision to life, we make it effortless.
            </p>
            <Button
              text="Learn more about us"
              className="mt-3"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div className="lg:mt-12 xl:mt-24 mt-2">
          <div className="w-full container text-center font-medium text-[#1B1B1A]">
            <h3>
              With thousands of bands already on board, We connect artists with
              paid gigs and talent seekers with exceptional performers. The
              stage is set for great talent to shine!
            </h3>
          </div>
        </div>

        <div className="lg:mt-10 mt-4">
          <div
            className="
      container 
      grid grid-cols-1 
      lg:grid-cols-12 
      items-stretch
    "
          >
            {/* LEFT TEXT */}
            <Link
              to="/"
              className="lg:col-span-4 flex flex-col text-center lg:text-left"
            >
              <h4 className="font-bold">ARTISTS & BANDS</h4>
              <p className="text-[#555555]">
                Book top artists and bands for your next event — it's that
                simple!
              </p>
              {/* Overlapping images below left text */}
              <div className="flex -space-x-3 self-center lg:self-auto mt-4 ">
                <img
                  className="w-12 h-12 rounded-full object-cover z-10 relative
                             transition-transform duration-300 hover:scale-105"
                  src={Artist1}
                  alt="Artist 1"
                />

                <img
                  className="w-12 h-12 rounded-full object-cover z-30 -ml-3 relative
                             transition-transform duration-300 hover:scale-105"
                  src={Artist2}
                  alt="Artist 2"
                />

                <img
                  className="w-12 h-12 rounded-full object-cover z-30 -ml-3 relative
                             transition-transform duration-300 hover:scale-105"
                  src={Artist3}
                  alt="Artist 3"
                />

                <div
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs
                               font-bold text-gray-600 shadow-md z-40 -ml-3 relative border border-gray-200
                               transition-transform duration-300 hover:scale-105"
                >
                  100+
                </div>
              </div>
            </Link>

            {/* LEFT ICON */}
            <div className="lg:col-span-1  hidden  sm:flex justify-center items-start mt-2 lg:mt-0">
              <Guitar />
            </div>

            {/* DIVIDER */}
            <div className="lg:col-span-2 hidden sm:flex justify-center mt-5 h-full">
              <span className="text-[#555555] font-normal">
                ---------------
              </span>
            </div>

            {/* RIGHT ICON */}
            <div className="lg:col-span-1  hidden  sm:flex justify-center items-start">
              <Band />
            </div>

            {/* RIGHT TEXT */}
            <Link
              to="/"
              className="lg:col-span-4 flex flex-col text-center lg:text-left justify-between sm:mt-0 mt-4"
            >
              <div>
                <h4 className="font-bold">AUDIENCE & EVENT PLANNERS</h4>
                <p className="text-[#555555]">
                  Event planners and audiences, find the perfect artists and
                  bands to make your event amazing!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
