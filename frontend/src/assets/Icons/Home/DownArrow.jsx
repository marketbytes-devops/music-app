import React from "react";

const DownArrow = ({className}) => {
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
        <path
          d="M5.62915 6.75L-1.52588e-05 0L11.2583 0L5.62915 6.75Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default DownArrow;
