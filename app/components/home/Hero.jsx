import Image from "next/image";
import { Check } from "lucide-react";
import sign1 from "../../../public/sign1.png";
import sign2 from "../../../public/sign2.png";
import sign3 from "../../../public/sign3.png";
const Hero = () => {
  const features = [
    "Quality Services Provider",
    "Printing, Designing and Transportation",
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-red-500 font-bold tracking-widest text-sm uppercase">
            Printing Service Company
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e2330] leading-tight">
            Pixel Perfect Printing
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Bring Your Ideas to Life with High-Quality Prints
          </p>

          <ul className="space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-500">
                <Check className="text-red-500 w-5 h-5" strokeWidth={3} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Read More</button>
          </div>
        </div>

        {/* Right Visuals Column */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Featured Image */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl h-[400px] md:h-[500px]">
            <Image
              src={sign1} // Replace with actual path
              alt="ADA Signage Example"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Decorative Yellow Circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#fce38a] rounded-full -z-0 opacity-80" />
            <span className="absolute bottom-6 right-6 bg-[#fcd34d] text-xs font-bold px-4 py-2 rounded-full uppercase">
              ADA Sign
            </span>
          </div>

          {/* Side Stack */}
          <div className="flex flex-col gap-4">
            {/* Top Side Image */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden group">
              <Image
                src={sign2}
                alt="Print on Demand Service"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-4 right-4 bg-[#fcd34d] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
                Print on Demand
              </span>
            </div>
            {/* Bottom Side Image */}
            <div className="relative h-[240px] rounded-3xl overflow-hidden group">
              <Image
                src={sign3}
                alt="Business Card Design"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-4 right-4 bg-[#fcd34d] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
                Business Card
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
