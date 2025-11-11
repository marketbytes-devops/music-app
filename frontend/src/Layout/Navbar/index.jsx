import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLogo from "../../assets/NavLogo.png";
import Dropdown from "../../Components/DropDown";
import AOS from "aos";
import "aos/dist/aos.css";



const Navbar = () => {
   useEffect(() => {
    AOS.init({ duration: 500, 
    easing: "ease-in-out",once: false, });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    {
      title: "Demo",
      items: [
        { label: "Demo 1", href: "/" },
        { label: "Demo 2", href: "#" },
        { label: "Demo 3", href: "#" },
      ],
    },
    {
      title: "About Us",
      items: [
        { label: "Our Team", href: "#" },
        { label: "Our Mission", href: "#" },
      ],
    },
    {
      title: "Pages",
      items: [
        { label: "Services", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
      ],
    },
    {
      title: "Blog",
      items: [
        { label: "Latest Posts", href: "#" },
        { label: "Categories", href: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Support", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ];

  return (
    <nav className="w-full mx-auto bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center ">
            <img src={NavLogo} alt="Logo" className="h-9 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Dropdown title={menu.title} items={menu.items} />
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-transparent hover:bg-gray-50 text-black font-medium py-2 px-4 border border-black rounded text-sm transition duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-black">
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6 py-4">
          {menuItems.map((menu, index) => (
            <li key={index} className="flex flex-col">
              {/* Each dropdown works separately on mobile */}
              <Dropdown title={menu.title} items={menu.items} />
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="block text-center bg-transparent hover:bg-gray-50 text-black font-medium py-2 px-4 border border-black rounded text-sm transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
