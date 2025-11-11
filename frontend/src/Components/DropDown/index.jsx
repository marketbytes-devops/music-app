import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeout = useRef(null);

  // Detect mobile view
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Open/close logic with delay (desktop hover)
  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(closeTimeout.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      closeTimeout.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  // Mobile click toggle
  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger */}
      <button
        onClick={handleClick}
        className="flex items-center justify-between text-gray-700 hover:text-black px-3 py-2 text-sm font-medium focus:outline-none w-full"
      >
        {title}
        <FaChevronDown
          className={`ml-1 w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-44 bg-white border border-gray-100 shadow-lg rounded-lg py-2 z-50"
            onMouseEnter={() => clearTimeout(closeTimeout.current)}
            onMouseLeave={handleMouseLeave}
          >
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href || "#"}
                onClick={() => isMobile && setIsOpen(false)}
                className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 text-sm"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
