import ContactForm from "../../../Components/Form";
import LetsTalk from "../../../assets/Images/Home/Let's talk.png"

const FormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="container mx-auto">
      
       
        <div className="flex gap-3 items-center justify-center lg:max-w-[45%] sm:max-w-[65%] max-w-full
                       bg-[#F5F5F5] rounded-full px-3 py-2  mx-auto">
         
            <div className="w-5 h-5 bg-black rounded-full"></div>
             <p className=" form-sec font-medium text-[#000000] uppercase  leading-none">
            CONNECT WITH US, WE'RE HERE TO HELP
          </p>
        </div>

        <h2 className="text-center uppercase font-bold">LET'S TALK</h2>
      
   <div className="relative">
  {/* Sticky background text */}
  <img src={LetsTalk} className="w-full h-auto -mt-3 sticky top-10" alt="Lets Talk" />
 

  {/* FORM SCROLLS */}
  <div className="relative z-20 md:-translate-y-14 translate-y-0">
    <ContactForm
      title="GET IN TOUCH"
      description="Reach out with inquiries about tickets, partnerships, or event details."
      fields={["name", "email", "phone", "subject", "message"]}
      buttonText="Send message"
      onSubmit={handleSubmit}
    />
  </div>
</div>



    </section>
  );
};

export default FormSection;
