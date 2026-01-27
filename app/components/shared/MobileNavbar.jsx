"use client";
import React, { useState } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          <MdCancel />
        : <HamburgerIcon />}
      </div>
      {isOpen && (
        <div className="absolute right-5 border border-red-500 bg-white shadow-lg rounded-md w-40 p-4 flex flex-col space-y-2 z-50 ">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/services" className="block py-2">
            Services
          </Link>
          <Link href="/contact" className="block py-2">
            Contact
          </Link>
          <Link
            href="/get-started"
            className="btn-primary my-4 text-center flex justify-center items-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
