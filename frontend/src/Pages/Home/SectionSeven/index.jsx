import React from "react";
import CompanyLogo from "../../../assets/Icons/Home/CompanyLogo.png";
import AbstractLogo from "../../../assets/Icons/Home/AbstractLogo.png";
import ASPENLOGO from "../../../assets/Icons/Home/ASPENLOGO.png";
import CropLogo from "../../../assets/Icons/Home/CropLogo.png";
import NLogo from "../../../assets/Icons/Home/NLogo.png";
import MissyLogo from "../../../assets/Icons/Home/MissyLogo.png";
import PepperMintLogo from "../../../assets/Icons/Home/PepperMintLogo.png";
import PixieLogo from "../../../assets/Icons/Home/PixieLogo.png";
import Marquee from "react-fast-marquee";

const SectionSeven = () => {
  // Partner logos data
  const partners = [
    { icon: CompanyLogo },
    { icon: AbstractLogo },
    { icon: ASPENLOGO },
    { icon: CropLogo },
    { icon: NLogo },
    { icon: MissyLogo },
    { icon: PepperMintLogo },
    { icon: PixieLogo },
  ];
  return (
    <div className="container w-full flex justify-center mx-auto">
      {/* Main Container */}
      <div
        className="w-full bg-[#F5F5F5] rounded-3xl py-4 md:py-8 flex flex-col items-center"
      >
        {/* Together We Make Badge */}
        <div
          className="bg-[#555555] rounded-3xl px-6 py-4 flex items-center gap-3 md:mb-8 mb-4 "
          style={{ height: "48px" }}
        >
          {/* White Circle Dot */}
          <div className="w-5 h-5 bg-white rounded-full"></div>
          {/* Text */}
          <p
            className="text-white font-medium uppercase tracking-[0.06em] leading-none"
          >
            Together, we make
          </p>
        </div>
        {/* Main Heading */}
        <h2
          className="text-[#1B1B1A] font-medium uppercase tracking-[0.06em] leading-none 
                    lg:mb-12 mb-10 text-center"
        >
          Our Trusted Partners
        </h2>
        {/* Partners Logo Marquee */}
        <div className="w-full overflow-hidden">
          <Marquee
            speed={50}
            direction="left"
            loop={0}
            gradient={false}
            pauseOnHover={true}
            autoFill={true}
            className="flex items-center gap-4"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center opacity-50
                          hover:opacity-100 transition-opacity duration-300 cursor-pointer "
              >
                <img
                  src={partner.icon}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-32 object-contain mb-2"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default SectionSeven;