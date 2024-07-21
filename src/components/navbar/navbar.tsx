import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between pt-[18px] pb-[23px]">
      <Link href="/" className="flex items-center gap-">
        <div className="w-[w-27px] h-[27px] flex justify-center items-center">
          <Image src="/watch.png" alt="Logo" width={25} height={27} />
        </div>
        <span className="text-[16px] text-white font-medium">Mohid</span>
      </Link>
      <ul className="gap-[27px] text-[#8B8E99] md:flex hidden">
        <li>
          <a
            href="#"
            className="text-[16px] font-medium transition-all duration-300 ease-in-out hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[16px] font-medium flex items-center transition-all duration-300 ease-in-out hover:text-white"
          >
            Brands
            {ICONS.dropdown}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[16px] font-medium transition-all duration-300 ease-in-out hover:text-white"
          >
            Recent Products
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[16px] font-medium transition-all duration-300 ease-in-out hover:text-white"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[16px] font-medium transition-all duration-300 ease-in-out hover:text-white"
          >
            About
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li>
          <button>
            <div className="text-white">{ICONS.search}</div>
          </button>
        </li>
        <li>
          <button title="Profile">
            <Image src="/Person.png" alt="Profile" width={22} height={23} />
          </button>
        </li>
        <li>
          <button
            title="Cart"
            className="relative before:content-['1'] before:absolute before:w-[13px] before:h-[13px] before:bg-[#3858D6] before:rounded-full before:flex before:justify-center before:items-center before:-top-[4px] before:-right-[2px] text-white before:text-[10px] font-medium"
          >
            <Image src="/cart.png" alt="Cart" width={21} height={23} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
