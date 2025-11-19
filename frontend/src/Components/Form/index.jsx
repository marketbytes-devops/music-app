import React, { useState } from "react";

const ContactForm = ({
  title = "Get in Touch",
  description = "Reach out with inquiries about tickets, partnerships, or event details.",
  fields = ["name", "email", "subject", "phone", "message"],
  buttonText = "Send message",
  onSubmit,
  wrapperClass = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must contain only numbers";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent non-numeric input for phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // call parent submit handler if passed
      if (onSubmit) onSubmit(formData);
      console.log("Form submitted:", formData);

      // optional: clear form
      setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
    }
  };

  return (
    <div className={`bg-[#F8F8F8] p-10 rounded-2xl ${wrapperClass}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h5 className=" uppercase font-bold text-black">{title}</h5>
        <h4 className=" text-[#1C1A1A] font-medium max-w-md mt-2 sm:mt-0 md:text-right text-center">{description}</h4>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {fields.includes("name") && (
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className={`border p-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#990000] ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </div>
        )}

        {fields.includes("email") && (
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className={`border p-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#990000] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </div>
        )}

        {fields.includes("phone") && (
          <div className="flex flex-col">
            <input
              type="text"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              className={`border p-3 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-[#990000] ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>
        )}

        {fields.includes("subject") && (
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-full p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#990000]"
          />
        )}

        {fields.includes("message") && (
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-2xl p-3 w-full sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#990000]"
          />
        )}

        <div className="sm:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <h4 className="font-medium">{buttonText}</h4>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
