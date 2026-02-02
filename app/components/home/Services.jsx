import React from "react";
import Title from "../shared/Title";
import hqImage from "../../../public/highQService.png";
import customizeImage from "../../../public/customizeService.png";
import homeDeliveryImage from "../../../public/homeDeliveryService.png";
import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
const Services = () => {
  const services = [
    {
      title: "High-Quality Printing",
      description:
        "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.",
      img: hqImage,
    },
    {
      title: "Customization Options",
      description:
        "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.",
      img: customizeImage,
    },
    {
      title: "Quick Home Delivery",
      description:
        "Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.",
      img: homeDeliveryImage,
    },
  ];
  return (
    <div className="my-37.5 px-4 lg:px-0">
      <p className="text-[#FEA4D5] font-semibold text-[14px] mb-5">SERVICES</p>
      <div className="max-w-180 mb-10">
        <Title>Your Trusted Partner for Superior Printing Services</Title>
      </div>
      <div className="lg:flex justify-center items-center gap-15 space-y-5 lg:space-y-0">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
