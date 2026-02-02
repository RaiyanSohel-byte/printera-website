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
      subTitle: "Elementum consectetur at aliquet turpis.",
      img: thumbsUp,
    },
    {
      title: "Secure Payment",
      subTitle: "Elementum consectetur at aliquet turpis.",
      img: securePayment,
    },
    {
      title: "Professional",
      subTitle: "Elementum consectetur at aliquet turpis.",
      img: users,
    },
    {
      title: "Competitive Pricing",
      subTitle: "Elementum consectetur at aliquet turpis.",
      img: award,
    },
  ];
  return (
    <section className="my-14 lg:flex items-center space-y-5 lg:space-y-0 px-4 lg:px-0">
      {qualities.map((quality, index) => (
        <div key={index} className="flex items-center justify-center gap-5">
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
