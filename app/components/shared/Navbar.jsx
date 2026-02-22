import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import cart from "../../../public/cart.png";
import user from "../../../public/user.png";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 lg:px-0 max-w-[1200px] mx-auto">
      {/* logo */}
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="Printera Logo" width={150} height={50} />
        </Link>
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
          <Link href="/cart">
            {" "}
            <ShoppingCart color="#3D3D3D" size={32} />
          </Link>
          <Link href="/account">
            <User color="#3D3D3D" size={32} />
          </Link>
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
