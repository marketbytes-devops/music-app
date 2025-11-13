import React from 'react';
import { Play } from 'lucide-react';
import testimonial2 from '../../../assets/Images/Home/Testimonial3.jpg';
import testimonial3 from '../../../assets/Images/Home/Testimonaial2.jpg';

const SectionSix = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Our Testimonials Badge */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#F5F5F5] rounded-[50px] px-6 py-3 flex items-center gap-2">
          <div className="w-5 h-5 bg-black rounded-full"></div>
          <span className="text-black font-medium text-sm">OUR TESTIMONIALS</span>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-[#1B1B1A] text-center text-5xl font-bold mb-16">
        WHAT OUR CLIENTS SAY
      </h2>

      {/* Main Container with 2 Sections */}
      <div className="max-w-[1394px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
        
        {/* Section 1 - Dr. Emily Carter (2 cards) */}
        <div className="bg-[#F5F5F5] rounded-[24px] w-[679px] h-[521px] flex items-center justify-center">
          <div className="grid grid-cols-2 -space-x-12 h-full w-full">
          {/* Content Card 1 */}
          <div className="flex items-center justify-center">
            <div className="bg-[#DEDEE0] rounded-[50px] w-[295px] h-[452px] p-8 flex flex-col justify-center">
              <h3 className="text-[#1C1A1A] text-3xl font-bold mb-4">
                Dr. Emily Carter
              </h3>
              <p className="text-[#555555] text-lg font-medium leading-[18px] tracking-[0.06em] mb-8">
                "The performance was nothing short of magical! The solo singer made our wedding unforgettable, and the music created the perfect atmosphere. Highly recommend!"
              </p>
              <p className="text-[#1C1A1A] text-xl font-normal leading-[30px]">
                Wedding Clients
              </p>
            </div>
          </div>

          {/* Video Card 1 */}
          <div className="flex items-center justify-center">
            <div className="relative w-[295px] h-[452px] rounded-[50px] overflow-hidden">
              <img 
                src={testimonial2}
                alt="Dr. Emily Carter"
                className="w-full h-full object-cover grayscale"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-black fill-black ml-2" />
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Section 2 - Mark (2 cards) */}
        <div className="bg-[#F5F5F5] rounded-[24px] w-[679px] h-[521px] flex items-center justify-center">
          <div className="grid grid-cols-2 -space-x-12 gap-0 h-full w-full">
          {/* Content Card 2 */}
          <div className="flex items-center justify-center">
            <div className="bg-[#DEDEE0] rounded-[50px] w-[295px] h-[452px] p-8 flex flex-col justify-center">
              <h3 className="text-[#1C1A1A] text-3xl font-bold mb-4">
                Mark
              </h3>
              <p className="text-[#555555] text-lg font-medium leading-[18px] tracking-[0.06em] mb-8">
                "From start to finish, the service was impeccable. The team helped us pick the right artists, and everything went smoothly. The musicians were top-notch, and our guests had a fantastic time!"
              </p>
              <p className="text-[#1C1A1A] text-xl font-normal leading-[30px]">
                Special Occasion Planner
              </p>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="flex items-center justify-center">
            <div className="relative w-[295px] h-[452px] rounded-[50px] overflow-hidden">
              <img 
                src={testimonial3}
                alt="Mark"
                className="w-full h-full object-cover grayscale"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-black fill-black ml-2" />
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionSix;