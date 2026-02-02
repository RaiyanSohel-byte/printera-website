import Hero from "./components/home/Hero";
import HeroForm from "./components/home/HeroForm";
import Quality from "./components/home/Quality";
import Services from "./components/home/Services";

export default function Home() {
  return (
    <div>
      <div className="border-b border-[#E2E2FE]">
        <HeroForm />
        <Hero />
        <Quality />
      </div>
      <Services />
    </div>
  );
}
