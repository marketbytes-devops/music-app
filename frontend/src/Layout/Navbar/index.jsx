import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLogo from "../../assets/Images/NavLogo.png";
import Dropdown from "../../Components/DropDown";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [menuOpen]);

  const menuItems = [
    {
      title: "Artists",
      items: [
        { label: "Demo 1", href: "/" },
        { label: "Demo 2", href: "#" },
        { label: "Demo 3", href: "#" },
      ],
    },
    {
      title: "Events",
      items: [
        { label: "Our Team", href: "#" },
        { label: "Our Mission", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Services", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
      ],
    },
    {
      title: "Works",
      items: null,
    },
    {
      title: "Who We Are",
      items: null,
    },
  ];

  return (
    <>
      <nav className="w-full mx-auto bg-white shadow-inner hover:shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={NavLogo} alt="Logo" className="h-9 w-auto" />
            </div>
            <ul className="hidden lg:flex items-center space-x-8">
              {menuItems.map((menu, index) => (
                <li key={index}>
                  {menu.items ? (
                    <Dropdown title={menu.title} items={menu.items} />
                  ) : (
                    <Link
                      to="#"
                      className="font-medium text-sm text-gray-700 hover:text-black transition px-3 py-2"
                    >
                      {menu.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex">
              <Link
                to="#"
                className="flex items-center gap-2 bg-transparent hover:bg-gray-50 text-black font-medium py-2
     px-4  text-sm transition duration-200"
              >
                Contact Us
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0134 1.45517C16.0385 0.903459 15.6116 0.435829 15.0599 0.410692L6.06924 0.00105431C5.51753 -0.0240834 5.0499 0.40279 5.02476 0.954502C4.99963 1.50621 5.4265 1.97384 5.97821 1.99898L13.9699 2.3631L13.6058 10.3548C13.5807 10.9065 14.0075 11.3742 14.5592 11.3993C15.111 11.4244 15.5786 10.9976 15.6037 10.4458L16.0134 1.45517ZM0.674194 14.5001L1.34838 15.2386L15.6886 2.14821L15.0144 1.40966L14.3402 0.671098L4.58956e-06 13.7615L0.674194 14.5001Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile toggle button - shows FaBars when closed, FaTimes when open */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-black"
              >
                {menuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - full-screen fixed positioning */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-x-0  bg-white z-40 border-t border-gray-200
                       overflow-y-auto h-[calc(100vh-4.5rem)]"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <ul className="flex flex-col space-y-2 px-6 py-4">
              {menuItems.map((menu, index) => (
                <li key={index} className="flex flex-col">
                  {menu.items ? (
                    <Dropdown title={menu.title} items={menu.items} />
                  ) : (
                    <Link
                      to="#"
                      onClick={closeMenu}
                      className="font-medium text-sm text-gray-700 hover:text-black px-3 py-2 transition"
                    >
                      {menu.title}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-transparent hover:bg-gray-50
                   text-black font-medium py-2 px-4  text-sm transition duration-200"
                >
                  Contact Us
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0134 1.45517C16.0385 0.903459 15.6116 0.435829 15.0599 0.410692L6.06924 0.00105431C5.51753 -0.0240834 5.0499 0.40279 5.02476 0.954502C4.99963 1.50621 5.4265 1.97384 5.97821 1.99898L13.9699 2.3631L13.6058 10.3548C13.5807 10.9065 14.0075 11.3742 14.5592 11.3993C15.111 11.4244 15.5786 10.9976 15.6037 10.4458L16.0134 1.45517ZM0.674194 14.5001L1.34838 15.2386L15.6886 2.14821L15.0144 1.40966L14.3402 0.671098L4.58956e-06 13.7615L0.674194 14.5001Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu (closes on click outside) - subtle overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/5 z-30"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
