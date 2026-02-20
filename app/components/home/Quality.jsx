import React from "react";
import thumbsUp from "../../../public/thumbs-up.png";
import securePayment from "../../../public/secure-payment.png";
import users from "../../../public/users.png";
import award from "../../../public/award.png";
import Image from "next/image";
const Quality = () => {
  const qualities = [
    {
      title: "Best Quality",
      subTitle:
        "Refining our process to deliver uncompromising quality since 1964.",
      img: thumbsUp,
    },
    {
      title: "Secure Payment",
      subTitle: "Accurate, reliable, and safe payment options.",
      img: securePayment,
    },
    {
      title: "Professional",
      subTitle:
        "We have been evolving and growing to meet your demands for over 60 years.",
      img: users,
    },
    {
      title: "Competitive Pricing",
      subTitle:
        "Whether you're a large or small business, we've got you covered.",
      img: award,
    },
  ];
  return (
    <section className="my-14 lg:flex items-center justify-center gap-6 space-y-5 lg:space-y-0 px-4 lg:px-[160px] ">
      {qualities.map((quality, index) => (
        <div key={index} className="flex items-center justify-center gap-3">
          <figure className="p-4.5 bg-[#F3F3FF] h-16 flex items-center rounded-lg">
            <Image src={quality.img} alt="icon" />
          </figure>
          <div className="text-sm">
            <h3 className="font-semibold text-[#212131]">{quality.title}</h3>
            <p className="text-[#909098]">{quality.subTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Quality;
