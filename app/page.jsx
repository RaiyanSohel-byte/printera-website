import Image from "next/image";
import SearchIcon from "./components/icons/SearchIcon";
import Hero from "./components/home/Hero";
import HeroForm from "./components/home/HeroForm";

export default function Home() {
  return (
    <div>
      <HeroForm />
      <Hero />
    </div>
  );
}
