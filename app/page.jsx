import CategoryBrowse from "./components/home/CategoryBrowse";
import ExperienceExcellence from "./components/home/ExperienceExcellence";
import Hero from "./components/home/Hero";
import HeroForm from "./components/home/HeroForm";
import LogoBgSection from "./components/home/LogoBgSection";
import Quality from "./components/home/Quality";
import Services from "./components/home/Services";
import ShopByProduct from "./components/home/ShopByProduct";
import TestimonialSlider from "./components/home/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <div className="border-b border-[#E2E2FE] max-w-[1200px] mx-auto">
        <Hero />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <CategoryBrowse />
      </div>

      <div className="bg-[#FFF2F2] py-15 max-w-none w-full">
        <Quality />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <ShopByProduct />
      </div>
      <ExperienceExcellence />
      <LogoBgSection />

      <TestimonialSlider />
    </div>
  );
}
