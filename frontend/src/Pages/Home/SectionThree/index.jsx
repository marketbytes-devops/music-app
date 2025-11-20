import React, { useState } from 'react';
import event1 from '../../../assets/Images/Home/event1.jpg';
import event2 from '../../../assets/Images/Home/event2.jpg';
import event3 from '../../../assets/Images/Home/event3.jpg';
import event4 from '../../../assets/Images/Home/event4.jpg';
import event5 from '../../../assets/Images/Home/event5.jpg';

export default function SectionThree() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorX, setCursorX] = useState(0); // track mouse movement inside text

  const events = [
    'Wedding Entertainment',
    'Corporate Entertainment',
    'Anniversaries',
    'Special Occasions',
    'Music Parties',
  ];

  const eventImages = [event1, event2, event3, event4, event5];

  const handleMouseMove = (e) => {
    const { offsetX, target } = e.nativeEvent;
    const width = target.clientWidth;
    const relativeX = (offsetX / width - 0.5) * 40; // range: -20 to +20
    setCursorX(relativeX);
  };

  return (
    <section className="lg:py-20 py-5 px-0 text-white">
      <div className="container mx-auto">
        <div className="mx-auto bg-black rounded-3xl  p-0 sm:p-2 lg:p-6 border
                       border-gray-800 overflow-visible">
          <div className="grid md:grid-cols-2 md:gap-12 gap-3 items-start relative">
            
            {/* Left Side */}
            <div className="space-y-3 lg:space-y-1 items-center lg:ml-0 md:ml-5 ml-0">
              <div className="flex items-center justify-center md:justify-normal">
                <span className="inline-flex items-center gap-3  mt-8 md:mt-29 text-white
                           bg-[#4C4C4C] rounded-full pl-4 pr-6 py-2 
                           text-md font-medium tracking-wider">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                  <p>OUR EVENTS FOR YOU</p>
                </span>
              </div>

              <h2 className=" font-medium leading-tight md:text-left text-center">
                EVENTS THAT SHINE,
                <br />
                MOMENTS THAT LAST
              </h2>

              <p className=" text-white leading-relaxed max-w-md md:text-left text-center">
                Bringing your celebrations to life with the <br /> perfect music and talent!
              </p>
            </div>

            {/* Right Side - Event List */}
            <div className="space-y-2 mt-5 md:mt-10 mb-8 px-4 sm:px-0">
              {events.map((event, index) => {
                const isOdd = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="group relative py-4 border-b border-gray-800 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onMouseMove={handleMouseMove}
                  >
                    {/* Hover Image */}
                    <div
                      className={`absolute left-1/2 -top-40 -translate-x-1/2 pointer-events-none z-20 transition-all duration-500 ease-out ${
                        hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{
                        transform: `translateX(${cursorX}px) ${
                          isOdd ? 'rotate(-6deg)' : 'rotate(6deg)'
                        }`,
                      }}
                    >
                      <img
                        src={eventImages[index]}
                        alt={event}
                        className="w-72 h-50 md:w-96 md:h-60 object-cover rounded-3xl shadow-2xl transition-transform duration-300"
                      />
                    </div>

                    {/* Text + Arrow */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl lg:text-4xl  font-medium text-white group-hover:text-amber-500 transition-colors select-none">
                        {event}
                      </span>

                      <svg
                        className="w-6 h-9 text-white group-hover:text-amber-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={5}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2 24L26 2M8 2h18v18"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
