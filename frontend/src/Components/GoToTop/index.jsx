import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

const GoToTop = () => {
  const [showArrow, setShowArrow] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow while user is scrolling
      setShowArrow(false);

      // Clear timer if scrolling continues
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Wait for scroll to stop (300ms idle)
      scrollTimeout = setTimeout(() => {
        // Only show arrow if scrollY > 100px
        if (window.scrollY > 100) {
          setShowArrow(true);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 bg-black text-white p-4 rounded-full shadow-xl
                     hover:bg-gray-800 hover:scale-110 transition-all duration-300 z-50"
        >
          <LuArrowUp size={26} />
        </button>
      )}
    </>
  );
};

export default GoToTop;
