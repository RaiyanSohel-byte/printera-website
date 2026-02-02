import Image from "next/image";
import SearchIcon from "./components/icons/SearchIcon";

export default function Home() {
  return (
    <div>
      <form className="px-4 lg:px-0 relative">
        <input
          type="text"
          placeholder="Search products (banners, yard signs, business cards…)"
          className="input w-full"
        />
        <div className="absolute left-8 lg:left-6 top-4">
          <SearchIcon />
        </div>
      </form>
    </div>
  );
}
