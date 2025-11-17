import React from "react";

const UpArrow = ({className}) => {
  return (
    <div>
      <svg
       className={className}
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.62915 0L11.2583 6.75L0 6.75L5.62915 0Z" fill="black" />
      </svg>
    </div>
  );
};

export default UpArrow;
