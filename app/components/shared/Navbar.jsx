import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import cart from "../../../public/cart.png";
import user from "../../../public/user.png";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 lg:px-0 max-w-[1200px] mx-auto">
      {/* logo */}
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={275}
          height={60}
          className="lg:w-[173px] w-[150px] h-[40px] lg:h-[38px]"
        />
      </div>

      {/* NavLinks */}
      <div className="hidden lg:block">
        <ul className="flex space-x-8 text-[#364153]">
          <Link
            href={"/products"}
            className="hover:text-red-600 cursor-pointer"
          >
            Products
          </Link>
          <Link
            href={"/promo-catalogue"}
            className="hover:text-red-600 cursor-pointer"
          >
            Promo Catalog
          </Link>
          <Link
            href={"/portfolio"}
            className="hover:text-red-600 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            href={"/request-quote"}
            className="hover:text-red-600 cursor-pointer"
          >
            Request a Quote
          </Link>
        </ul>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-6">
        <input
          type="text"
          className="input w-[256px] w-full"
          placeholder="Search products..."
        />

        <div className="flex gap-2.5">
          <Image
            src={cart}
            alt="Logo"
            width={30}
            height={30}
            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mx-auto"
          />
          <Image
            src={user}
            alt="Logo"
            width={30}
            height={30}
            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] mx-auto"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div>
        {/* Mobile NavLinks */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
