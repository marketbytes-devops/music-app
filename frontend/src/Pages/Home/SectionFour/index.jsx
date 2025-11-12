
import ServiceImg1 from "../../../assets/Images/Home/ServiceImg1.jpg";
import ServiceImg2 from "../../../assets/Images/Home/ServiceImg2.jpg";
import ServiceImg3 from "../../../assets/Images/Home/ServiceImg3.jpg";
import ServiceImg4 from "../../../assets/Images/Home/ServiceImg4.jpg";

const SectionFour = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-6">
        
        <div className="flex flex-col gap-8">
        {/* CARD 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img src={ServiceImg1} alt="Solo Singer" className="w-full h-auto object-cover" />
          <div className="p-4">
            <p className="font-semibold text-lg">SOLO SINGER</p>
            <p className="text-gray-600 text-sm mt-2">
              Our solo singers bring emotion and elegance to any event...
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img src={ServiceImg2} alt="Band" className="w-full h-auto object-cover" />
          <div className="p-4">
            <p className="font-semibold text-lg">BAND</p>
            <p className="text-gray-600 text-sm mt-2">
              High-energy performances to keep the crowd moving all night.
            </p>
          </div>
        </div>
</div>

<div className="flex flex-col gap-8">
        {/* CARD 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img src={ServiceImg3} alt="DJ" className="w-full h-96 object-cover" />
          <div className="p-4">
            <p className="font-semibold text-lg">DJ</p>
            <p className="text-gray-600 text-sm mt-2">
              Professional DJs spinning tracks to match your vibe perfectly.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
          <img src={ServiceImg4} alt="Instrumentalist" className="w-full h-auto object-cover" />
          <div className="p-4">
            <p className="font-semibold text-lg">INSTRUMENTALIST</p>
            <p className="text-gray-600 text-sm mt-2">
              Skilled musicians adding depth and sophistication to your event.
            </p>
          </div>
        </div>
</div>

      </div>
    </section>
  );
};

export default SectionFour;
