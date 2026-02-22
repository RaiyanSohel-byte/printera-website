"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import port1 from "../../public/portfolio/port1.png";
import port2 from "../../public/portfolio/port2.png";
import port3 from "../../public/portfolio/port3.png";
import port4 from "../../public/portfolio/port4.png";
import port5 from "../../public/portfolio/port5.png";
import port6 from "../../public/portfolio/port6.png";
import port7 from "../../public/portfolio/port7.png";
import port8 from "../../public/portfolio/port8.png";
// 1. Data Structure - Centralized for easy updates
const PROJECTS = [
  {
    id: 1,
    title: "City Hall ADA Signage Package",
    category: "Corporate Offices",
    description:
      "Direct-mounted high-end acrylic signage system for medical buildings.",
    image: port1,
  },
  {
    id: 2,
    title: "Corporate Office Nameplates",
    category: "Government Projects",
    description:
      "Multi-floor directional signage with high-contrast ADA compliance.",
    image: port2,
  },
  {
    id: 3,
    title: "Hospital Wayfinding System",
    category: "Retail",
    description:
      "Custom dimensional letters and window vinyl for high-traffic retail.",
    image: port3,
  },
  {
    id: 4,
    title: "Retail Store Signage",
    category: "Government Projects",
    description: "Exterior pylon and building identification signage.",
    image: port4,
  },
  {
    id: 5,
    title: "University Campus Signs",
    category: "Corporate Offices",
    description: "Polished metal nameplates and frosted glass partitions.",
    image: port5,
  },
  {
    id: 6,
    title: "Law Firm Office Suite",
    category: "Retail",
    description:
      "Full exterior and interior signage for a boutique restaurant.",
    image: port6,
  },
  {
    id: 7,
    title: "Restaurant Branding Package",
    category: "Government Projects",
    description:
      "Custom-designed directional and informational signage for museum exhibits.",
    image: port7,
  },
  {
    id: 8,
    title: "Government Building Directory",
    category: "Retail",
    description:
      "Complete branding solution for a luxury hotel including lobby and guest room signage.",
    image: port8,
  },
];

const TABS = ["All", "Government Projects", "Corporate Offices", "Retail"];

// 2. Sub-components
const ProjectCard = ({ project }) => (
  <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg animate-in fade-in zoom-in duration-500">
    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <span className="text-[10px] font-bold text-[#EE2A24] uppercase tracking-widest mb-1">
        {project.category}
      </span>
      <h3 className="text-lg font-bold text-[#1e1e2d] mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      <a
        href={`/portfolio/${project.id}`}
        className="inline-flex items-center text-[#EE2A24] text-xs font-bold uppercase tracking-wider hover:underline"
      >
        View Details <ChevronRight size={14} className="ml-1" />
      </a>
    </div>
  </div>
);

// 3. Main Portfolio Component
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  // useMemo prevents unnecessary filtering on every re-render
  const filteredProjects = useMemo(() => {
    return activeTab === "All" ? PROJECTS : (
        PROJECTS.filter((p) => p.category === activeTab)
      );
  }, [activeTab]);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#1e1e2d] mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our work across government facilities, corporate offices,
            and retail spaces. Each project showcases our commitment to quality
            and ADA compliance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeTab === tab ?
                  "bg-[#EE2A24] text-white border-[#EE2A24] shadow-md"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#EE2A24] hover:text-[#EE2A24]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-10 border-t border-gray-100">
          <h4 className="text-lg font-bold text-[#1e1e2d] mb-6">
            Inspired by What You See?
          </h4>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">
            We can customize signage solutions tailored to your specific needs
            in any industry. Let’s discuss your project today.
          </p>
          <button className="bg-[#EE2A24] text-white px-10 py-4 rounded-xl font-bold transition-all hover:bg-[#d6221c] active:scale-95 shadow-lg shadow-red-100">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
