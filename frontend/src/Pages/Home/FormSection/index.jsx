import React from "react";
import ContactForm from "../../../Components/Form";
import LetsTalk from "../../../assets/Images/Home/Let's talk.png"

const FormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="container mx-auto">
      
       <div className="">
        <div className="flex 
                       bg-[#F5F5F5] rounded-full px-3 py-2 max-w-full sm:max-w-[35%] mx-auto">
          <p className="flex items-center gap-3 font-medium text-[#000000]">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            CONNECT WITH US, WE'RE HERE TO HELP
          </p>
        </div>
        <h2 className="text-center font-bold">LET'S TALK</h2>
      </div>

      <div className="">
  
  <img src={LetsTalk} className="w-full h-auto -mt-3" alt="Lets Talk" />

  {/* Form overlay */}
  <div className="">
    <ContactForm
      title="GET IN TOUCH"
      description="Reach out with inquiries about tickets, partnerships, or event details."
      fields={["name", "email", "phone", "subject", "message"]}
      buttonText="Send Message"
      onSubmit={handleSubmit}
    />
  </div>
</div>


    </section>
  );
};

export default FormSection;
