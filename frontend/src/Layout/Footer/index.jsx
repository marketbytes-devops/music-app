import React from 'react';
import FooterLogo from "../../assets/Images/FooterLogo.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white py-12 px-8 container">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start
                        md:justify-between gap-8 md:gap-44">
          {/* Logo */}
          <div className="">
            <div className="text-4xl font-bold text-gray-900 tracking-tight">
              <img src={FooterLogo} />
            </div>
          </div>
          {/* Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 flex-1 mt-0 lg:mt-12">
            {/* Navigation Column */}
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-wider ">
                Navigation
              </h5>
              <ul className="space-y-2 text-sm ml-4 md:ml-0">
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Home
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Work
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      About
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Services
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Articles
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Other Column */}
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-wider ">
                Other
              </h5>
              <ul className="space-y-2 text-sm ml-3 md:ml-0">
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      FAQ
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Pricing
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Contact
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Team
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow Us Column */}
            <div className="space-y-4">
              <h5 className="uppercase tracking-wider font-black ">
                Follow Us
              </h5>
              <ul className="space-y-2 text-sm ml-3 md:ml-0">
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Instagram
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      X
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Youtube
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Linkedin
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="group font-medium hover:text-gray-900 transition-colors block">
                    <span className="relative inline-block">
                      Facebook
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row
                          items-center md:justify-between text-xs t">
          <p className='font-medium'>&copy; Copyright {new Date().getFullYear()}, All Rights Reserved By BYM.</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <Link to="#" className="hover:text-gray-900 transition-colors">
              <p className='font-medium'>Terms & Conditions</p>
            </Link>
            <Link to="#" className="hover:text-gray-900 transition-colors">
              <p className='font-medium'>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;