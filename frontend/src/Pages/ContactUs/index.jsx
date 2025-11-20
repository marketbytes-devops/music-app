import Form from "../../Components/Form";
import GoToTop from "../../Components/GoToTop";

const ContactPage = () => {
  return (
    <>
      <style jsx>{`
        /* NEW: Slide-up animation */
        @keyframes slideUp {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-up-animation {
          animation: slideUp 1.2s ease-out forwards;
        }
      `}</style>

      <section className="mt-0">
        <div className="container w-full flex justify-center mx-auto ">
          <div className="w-full bg-[#F5F5F5]  py-4 md:py-28 flex flex-col items-center">
            <div
              className="bg-[#555555] rounded-3xl px-6 py-4 flex items-center gap-3 md:mb-8 mb-4 slide-up-animation"
              style={{ height: "48px" }}
            >
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <p className="text-white font-medium uppercase tracking-[0.06em] leading-none ">
                Connect With Us, We're Here to Help
              </p>
            </div>

            <h1
              className="text-[#1B1B1A] font-medium uppercase tracking-[0.06em] leading-none 
                    lg:mb-12 mb-10 text-center slide-up-animation"
            >
              Contact us
            </h1>
            {/* Partners Logo Marquee */}
            <div className="w-full overflow-hidden slide-up-animation">
              <Form wrapperClass="bg-white max-w-[450px] w-full p-6 container"
                    description="" />
            </div>
          </div>
        </div>
      </section>

      <GoToTop/>
    </>
  );
};

export default ContactPage;
