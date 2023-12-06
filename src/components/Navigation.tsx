"use client";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProductCards from "./Home/ProductCards";
import ProductCardsNav from "./ProductCardsNav";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="bg-custom-dark   lg:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl w-full z-50">
      <nav className="flex flex-row justify-between border-0 lg:border-b-[1px]  p-10 border-dark-gray text-white ">
        <ul className="flex lg:hidden ">
          <li>
            {isMenuOpen ? (
              <XMarkIcon
                className="h-6 w-6"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}
          </li>
        </ul>
        <ul>
          <li>
            <img src="/assets/shared/desktop/logo.svg" />
          </li>
        </ul>
        <ul className=" flex-row space-x-6 uppercase hidden lg:flex">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href="/category/headphones">Headphones</Link>
          </li>
          <li>
            <Link href="/category/speakers">Speakers</Link>
          </li>
          <li>
            <Link href="/category/earphones">Earphones</Link>
          </li>
        </ul>

        <ul>
          <li>
            <img src="/assets/shared/desktop/icon-cart.svg" />
          </li>
        </ul>
      </nav>
      {/* {isMenuOpen && <div className="overlay"></div>} */}
      {isMenuOpen && (
        <div className="bg-white pt-16 ">
          <div className=" overflow-y-auto">
            <ProductCardsNav />
          </div>
        </div>
      )}
    </header>
  );
};
export default Navigation;