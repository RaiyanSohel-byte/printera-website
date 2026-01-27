import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 lg:px-0">
      {/* logo */}
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={275}
          height={60}
          className="lg:w-[275px] w-[150px] h-[40px] lg:h-[60px]"
        />
      </div>

      {/* NavLinks */}
      <div className="hidden lg:block">
        <ul className="flex space-x-8 font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>
          <li className="hover:text-red-600 cursor-pointer">Services</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div></div>
      {/* CTA Button */}
      <div>
        {/* Mobile NavLinks */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
        <button className="btn-primary my-4 hidden lg:block">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
