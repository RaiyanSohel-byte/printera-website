"use client";
import React, { useState } from "react";
import Image from "next/image";
import prod1 from "../../public/all products/prod1.png";
import prod2 from "../../public/all products/prod2.png";
import prod3 from "../../public/all products/prod3.png";
import prod4 from "../../public/all products/prod4.png";
import prod5 from "../../public/all products/prod5.png";
import prod6 from "../../public/all products/prod6.png";
import Link from "next/link";

// 1. Data Structures

const PRODUCTS = [
  {
    id: 1,
    title: "ADA Restroom Sign",
    description: "ADA compliant restroom signage with Braille",
    price: 45,
    materials: ["Acrylic", "Plastic"],
    image: prod1,
  },
  {
    id: 2,
    title: "ADA Room Identification Sign",
    description: "Customizable room number signs with Braille",
    price: 38,
    materials: ["Acrylic", "Metal", "Plastic"],
    image: prod2,
  },
  {
    id: 3,
    title: "Vinyl Banner",
    description: "Durable vinyl banners for any event",
    price: 65,
    materials: ["Canvas"],
    image: prod3,
  },
  {
    id: 4,
    title: "Nameplate",
    description: "Professional metal nameplates",
    price: 28,
    materials: ["Acrylic", "Metal", "Plastic", "Phenolic"],
    image: prod4,
  },
  {
    id: 5,
    title: "Custom Cut Acrylic & Logo",
    description: "Modern acrylic nameplate designs",
    price: 32,
    materials: ["Plastic"],
    image: prod5,
  },
  {
    id: 6,
    title: "Custom Decal",
    description: "Custom printed decals and stickers",
    price: 15,
    materials: ["Vinyl", "Magnetic"],
    image: prod6,
  },
];

// 2. Sub-components for Cleanliness
const FilterGroup = ({ title, options }) => (
  <div className="mb-8">
    <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            type="checkbox"
            className="w-5 h-5 border-gray-300 rounded text-[#EE2A24] focus:ring-[#EE2A24] cursor-pointer"
          />
          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
    <div className="relative aspect-[4/3] bg-gray-50">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-extrabold text-[#1e1e2d] text-lg mb-2 leading-tight">
        {product.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {product.description}
      </p>

      <div className="flex justify-between items-end mb-6">
        <span className="text-[#EE2A24] font-black text-xl">
          From ${product.price}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold text-right max-w-[50%]">
          {product.materials.join(", ")}
        </span>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="w-full bg-[#EE2A24] flex justify-center items-center text-white py-3 rounded-xl font-bold transition-all hover:bg-[#d6221c] active:scale-[0.98]"
      >
        Customize Now
      </Link>
    </div>
  </div>
);

export default function AllProductsPage() {
  const [priceRange, setPriceRange] = useState(130);

  return (
    <main className="bg-[#F9FAFB] min-h-screen py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-[#1e1e2d]">All Products</h1>
          <p className="text-gray-400 font-medium mt-1">8 products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-8">
              <h2 className="text-xl font-black mb-8">Filters</h2>

              <FilterGroup
                title="Material"
                options={["Acrylic", "Metal", "Plastic"]}
              />
              <FilterGroup
                title="Application"
                options={["Indoor", "Outdoor"]}
              />

              {/* Custom Price Slider */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="170"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#EE2A24]"
                />
                <div className="flex justify-between mt-3 text-sm font-bold text-gray-400">
                  <span>$0</span>
                  <span>${priceRange}</span>
                </div>
              </div>

              <button className="w-full py-3 border border-gray-200 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
