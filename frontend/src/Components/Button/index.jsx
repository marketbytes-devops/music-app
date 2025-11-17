import React from "react";

const Button = ({ text = "Click Me", onClick, className="" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group cursor-pointer
        px-10 py-3 rounded-full border border-black hover:border-none
        flex items-center gap-2
        hover:bg-[#990000] 
        hover:text-white
       
        ${className}
      `}
    >
      <p className="font-medium">{text}</p>

      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        className="
           duration-300
          transition-transform 
          group-hover:translate-x-1 
          sm:group-hover:translate-x-2
        "
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0134 1.45517C16.0385 0.903459 15.6116 0.435829 15.0599 0.410692L6.06924 0.00105431C5.51753 -0.0240834 5.0499 0.40279 5.02476 0.954502C4.99963 1.50621 5.4265 1.97384 5.97821 1.99898L13.9699 2.3631L13.6058 10.3548C13.5807 10.9065 14.0075 11.3742 14.5592 11.3993C15.111 11.4244 15.5786 10.9976 15.6037 10.4458L16.0134 1.45517ZM0.674194 14.5001L1.34838 15.2386L15.6886 2.14821L15.0144 1.40966L14.3402 0.671098L4.58956e-06 13.7615L0.674194 14.5001Z"
          className="transition-colors duration-300 group-hover:fill-white"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default Button;
