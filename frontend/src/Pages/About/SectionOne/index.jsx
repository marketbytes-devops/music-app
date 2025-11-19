import React from 'react';

const MissionVisionSection = () => {
  return (
      <div className="container mx-auto">
    <div className="w-full max-w-7xl mx-auto lg:py-16 px-4 lg:px-8 bg-gray-100">
      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:mb-24 mb-5">
        {/* Left: Text */}
        <div className="lg:space-y-6 space-y-4">
          <span className="inline-block lg:px-4 lg:py-2  md:px-4 md:py-2 px-6 py-2 lg:text-lg text-sm md:text-md font-medium justify-start text-gray-600 bg-gray-200 rounded-full">
            OUR SUCCESSFUL JOURNEY STARTED RIGHT HERE
          </span>
        <div className="flex flex-row md:flex-col lg:flex-row">

  <span className="md:mt-1 lg:mt-0 text-3xl lg:text-7xl font-bold"> Our Mission</span>
</div>

          <div className="text-2xl text-gray-600 lg:py-6 py-2 ">
            <h8 className='  text-lg md:text-xl lg:text-2xl'>
              To design meaningful brands and digital experiences that inspire action and spark connection.<br></br>
                 We believe creativity should drive results. Our mission is to elevate brands through intentional design, strategic thinking, and collaborative partnerships.
            </h8>
             </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end ">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            alt="Team collaborating on design"
            className="lg:w-125 lg:h-128 w-90 h-50 rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start order-last lg:order-first">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            alt="Business handshake"
            className="lg:w-125 lg:h-128 w-90 h-50  max-w-lg rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="lg:space-y-6 space-y-4">
          <span className="inline-block px-4 py-2 mt-4 lg:mt-0 text-lg font-medium text-gray-600 bg-gray-200 rounded-full">
            DESIGN, STRATEGY, RESULTS—NO COMPROMISE
          </span>
         <div className="flex flex-row md:flex-col lg:flex-row">

  <span className="md:mt-1 lg:mt-0 text-3xl lg:text-7xl font-bold"> Our Vision</span>
</div>
           <div className=" text-gray-600 lg:py-6 py-6 md:py-2 ">
            <h8 className='  text-lg md:text-xl lg:text-2xl'>
              To become a trusted creative partner for forward-thinking brands worldwide.<br></br>
We envision a world where every brand tells a compelling story through design — one that’s not only beautiful but built to grow.
</h8>
             </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MissionVisionSection;