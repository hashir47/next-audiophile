"use client";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProductCards from "./Home/ProductCards";
import ProductCardsNav from "./ProductCardsNav";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <header className="bg-custom-dark lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl w-full z-50">
      {/* <nav className="flex flex-row justify-between border-0 lg:border-b-[1px]  p-10 border-dark-gray text-white "> */}
      <nav className="flex flex-row justify-between p-10 text-white">
        <ul className="flex lg:hidden">
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
            <Link href="/">
              {" "}
              <img src="/assets/shared/desktop/logo.svg" alt="logo" />
            </Link>
          </li>
        </ul>
        <ul className="flex-row space-x-6 uppercase hidden lg:flex">
          <li>
            <Link href="/" className="hover:text-dark-orange">
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/category/headphones"
              className="hover:text-dark-orange"
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link href="/category/speakers" className="hover:text-dark-orange">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/category/earphones" className="hover:text-dark-orange">
              Earphones
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <img
              className="cursor-pointer"
              src="/assets/shared/desktop/icon-cart.svg"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(!isCartOpen);
              }}
              alt="cart"
            />
          </li>
        </ul>
      </nav>
      {/* {isMenuOpen && <div className="overlay"></div>} */}
      {isMenuOpen && (
        <div className="bg-white pt-16 ">
          <div className=" overflow-y-auto">
            <ProductCardsNav
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>
      )}

      {isCartOpen && (
        <Cart
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      )}
    </header>
  );
};
export default Navigation;
