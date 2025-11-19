import React from 'react';
import FooterLogo from "../../assets/Images/FooterLogo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white  py-12 px-8 container">
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
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 flex-1  mt-0 lg:mt-12">
            {/* Navigation Column */}
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-wider ">
                Navigation
              </h5>
              <ul className="space-y-2 text-sm ml-4 md:ml-0">
                <li><Link to="#" className="font-medium hover:text-gray-900 transition-colors">Home</Link></li>
                <li><Link to="#" className="font-medium hover:text-gray-900 transition-colors">Work</Link></li>
                <li><Link to="#" className="font-medium hover:text-gray-900 transition-colors">About</Link></li>
                <li><Link to="#" className="font-medium hover:text-gray-900 transition-colors">Services</Link></li>
                <li><Link to="#" className="font-medium hover:text-gray-900 transition-colors">Articles</Link></li>
              </ul>
            </div>

            {/* Other Column */}
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-wider  ">
                Other
              </h5>
              <ul className="space-y-2 text-sm ml-3 md:ml-0">
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">FAQ</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Pricing</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Team</Link></li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="space-y-4">
              <h5 className="uppercase tracking-wider font-black ">
                Follow Us
              </h5>
              <ul className="space-y-2 text-sm ml-3 md:ml-0">
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Instagram</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">X</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Youtube</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Linkedin</Link></li>
                <li><Link to="#"  className="font-medium hover:text-gray-900 transition-colors">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row 
                          items-center md:justify-between text-xs t">
          <p className='font-medium'>&copy; Copyright {new Date().getFullYear()}, All Rights Reserved By BYM.</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <Link to="#"  className="hover:text-gray-900 transition-colors">
              <p className='font-medium'>Terms & Conditions</p>
            </Link>
            <Link to="#"  className="hover:text-gray-900 transition-colors">
              <p className='font-medium'>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;