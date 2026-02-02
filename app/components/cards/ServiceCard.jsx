import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <figure>
        <Image src={service.img} alt={service.title} className="w-full" />
        <figcaption className="mt-5">
          <h4 className="text-base lg:text-2xl font-bold text-[#212131] mb-2.5">
            {service.title}
          </h4>
          <p className="text-[#909098]">{service.description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ServiceCard;
