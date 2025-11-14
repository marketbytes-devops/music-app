import ServiceImg1 from "../../../assets/Images/Home/ServiceImg1.jpg";
import ServiceImg2 from "../../../assets/Images/Home/ServiceImg2.jpg";
import ServiceImg3 from "../../../assets/Images/Home/ServiceImg3.jpg";
import ServiceImg4 from "../../../assets/Images/Home/ServiceImg4.jpg";

import { LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";

const SectionFour = () => {
  return (
    <section className="container sm:py-12 py-10 bg-[#F5F5F5] sm:px-14 px-8 rounded-3xl">
      <div className="p-10">
        <div className="flex items-center justify-center">
          <p className="flex items-center gap-3 font-medium text-[#000000]">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            WHAT WE DO FOR YOU
          </p>
        </div>
        <h2 className="text-center">OUR SERVICES</h2>
      </div>

      <div className="grid lg:grid-cols-2 md:gap-20 sm:gap-12 gap-8">
        <div className="flex flex-col sm:gap-16 gap-8">
          <div className="overflow-hidden flex flex-col items-center text-left ">
            <img
              src={ServiceImg1}
              alt="Solo Singer"
              className="w-full sm:h-[394px] object-cover"
            />
           <div className="py-2 flex  items-center mt-2">
              <div>
                <span className="text-[#1B1B1A]">SOLO SINGER</span>
                <p className="text-[#555555] font-medium mt-2 ">
                  Our solo singers bring emotion and elegance to any event...
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400">
                <LuMoveUpRight className="w-12 h-12 text-[#555555]" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center text-left ">
            <img
              src={ServiceImg2}
              alt="Band"
              className="w-full sm:h-[394px] object-cover"
            />
            <div className="py-2 flex  items-center mt-2">
              <div>
                <span className="text-[#1B1B1A]">DJ</span>
                <p className="text-[#555555] font-medium mt-2  ">
                  Our DJs bring the party to life with the best mixes and smooth transitions.
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400">
                <LuMoveUpRight className="w-12 h-12 text-[#555555]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:gap-14 gap-8">
          <div className=" overflow-hidden flex flex-col items-center text-left ">
            <img
              src={ServiceImg3}
              alt="DJ"
              className="w-full sm:h-[479px] object-cover"
            />
            <div className="py-2 flex  items-center mt-2">
              <div>
                <span className="text-[#1B1B1A]">VIOLIN BAND</span>
                <p className="text-[#555555] font-medium mt-2  ">
                 Our violin band creates a sophisticated atmosphere with beautiful classical and contemporary music.
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400">
                <LuMoveUpRight className="w-12 h-12 text-[#555555]" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-center text-left ">
            <img
              src={ServiceImg4}
              alt="Instrumentalist"
              className="w-full h-auto sm:h-[332px] object-cover"
            />
            <div className="py-2 flex  items-center mt-2">
              <div>
                <span className="text-[#1B1B1A]">GRACEFUL NOTES</span>
                <p className="text-[#555555] font-medium mt-2  ">
                  Let the enchanting sound of the flute elevate your event. Perfect for weddings, anniversaries,..
                </p>
              </div>
              <div className="flex items-center justify-center sm:p-6 p-2 rounded-full border border-gray-400">
                <LuMoveUpRight className="w-12 h-12 text-[#555555]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="px-10 py-3 rounded-full border mt-8 hover:bg-[#990000] hover:border-0">View Full Services</button>
      </div>
    </section>
  );
};

export default SectionFour;
