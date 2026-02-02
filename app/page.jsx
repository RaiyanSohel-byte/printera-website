import Image from "next/image";
import SearchIcon from "./components/icons/SearchIcon";
import Hero from "./components/home/Hero";
import HeroForm from "./components/home/HeroForm";
import Quality from "./components/home/Quality";

export default function Home() {
  return (
    <div className="border-b border-[#E2E2FE]">
      <HeroForm />
      <Hero />
      <Quality />
    </div>
  );
}
