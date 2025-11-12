import Guitar from "../../../assets/Icons/Guitar";
import imgone from "../../../assets/Images/Home/banner-flow-1.png"
import CraftImg1 from "../../../assets/Images/Home/Craft-img-1.jpg"

const index = () => {
  return (
    <>
      <section className="container mt-20">
        <div className="w-full flex">
  {/* LEFT SECTION - IMAGES */}
  <div className="w-[55%] flex items-center">
    <div className="flex relative">
      {/* Image 1 */}
      <div className=" z-30">
        <img
          src={imgone}
          alt="Guitarist"
          className="w-[280px] h-[340px] object-cover rounded-3xl transform -rotate-12"
        />
      </div>

      {/* Image 2 - slightly overlapped */}
      <div className="-ml-8 z-40">
        <img
          src={CraftImg1}
          alt="Singer"
          className="w-[280px] h-[340px] object-cover rounded-3xl"
        />
      </div>

      {/* Image 3 - more overlap */}
      <div className=" -ml-8 z-10">
        <img
          src={imgone}
          alt="Instruments"
          className="w-[280px] h-[340px] object-cover rounded-3xl transform rotate-12"
        />
      </div>
    </div>
  </div>

  {/* RIGHT SECTION - TEXT */}
  <div className="w-[45%] flex flex-col items-end">
    <h2 className="text-right font-bold leading-snug">
      Crafting <br />
      Unforgettable <br /> Experiences
      <br /> Through Music
    </h2>
    <p className="text-right text-[#555555] mt-3">
      At Book Your Musician, we’re more than just a booking platform — we’re
      your partner in creating unforgettable experiences through the power of
      live music. Whether you’re planning an intimate celebration, a grand
      event, or simply searching for the perfect artist to bring your vision to
      life, we make it effortless.
    </p>
    <button className="px-10 py-3 rounded-full border mt-8">
      Learn more about us
    </button>
  </div>
</div>


        <div className="mt-10">
          <div className="w-full container  text-center font-medium text-[#1B1B1A]">
            <h3>
              With thousands of bands already on board, We connect artists with
              paid gigs and talent seekers with exceptional performers. The
              stage is set for great talent to shine!
            </h3>
          </div>
        </div>

        <div className="mt-10">
  <div className="grid grid-cols-3 container">
    
    {/* LEFT SECTION */}
    <div className="flex items-center justify-between">
      {/* Text Block */}
      <div className="flex flex-col">
        <span className="font-bold">ARTISTS & BANDS</span>
        <p className="text-[#555555] text-sm">
          Book top artists and bands for your next event – it's that simple!
        </p>
      </div>
      {/* SVG */}
      <Guitar />
    </div>

    {/* MIDDLE DIVIDER */}
    <div className="flex items-center justify-center">
      <span className="text-[#555555] font-normal">------------</span>
    </div>

    {/* RIGHT SECTION */}
    <div className="flex items-center justify-between gap-2">
      {/* Text Block */}
      <div className="flex flex-col text-right">
        <span className="font-bold">AUDIENCE & EVENT PLANNERS</span>
        <p className="text-[#555555] text-sm">
          Event planners and audiences, find the perfect artists and bands to make your event amazing!
        </p>
      </div>
      {/* SVG */}
      <Guitar />
    </div>

  </div>
</div>

        
      </section>
    </>
  );
};

export default index;
