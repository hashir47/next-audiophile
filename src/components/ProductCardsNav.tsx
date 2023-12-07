import Image from "next/image";
import Link from "next/link";
import React from "react";

type category = {
  name: string;
  url: string;
}[];
type cardProps = {
  isCartOpen: boolean;
  setIsCartOpen: (arg0: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
};
const categories = [
  {
    name: "Headphones",
    url: "/assets/home/desktop/headphone1x.png",
  },
  {
    name: "Speakers",
    url: "/assets/home/desktop/speaker1x.png",
  },
  {
    name: "Earphones",
    url: "/assets/home/desktop/earphone1x.png",
  },
] as category;
const ProductCardsNav: React.FC<cardProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isCartOpen,
  setIsCartOpen,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-12 p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl">
      {categories.map((category, index) => {
        return (
          <ul
            className="flex flex-col bg-dark-gray w-full h-48 md:w-56 lg:w-96 md:h-52 lg:h-auto relative rounded-md items-center justify-center mb-24 md:mt-0"
            key={index + "-" + category.name}
          >
            <li className="flex flex-row justify-center items-center">
              {/* <img
                src={category.url}
                className="absolute -top-20 left-28 md:-top-20 lg:-top-16 md:left-12 lg:left-32 "
                alt={category.name}
              /> */}

              <Image
                src={category.url}
                className="absolute -top-20 md:-top-20 lg:-top-16"
                alt={category.name}
                width="124"
                height="160"
              />
              <Image
                src="/assets/home/desktop/Oval.png"
                className="mt-10"
                alt="oval shadow"
                width="209"
                height="106"
              />
            </li>
            <li className="self-center mt-2 mb-5">
              <h6>{category.name}</h6>
            </li>
            <li className="self-center mb-10">
              <div className="flex flex-row items-center">
                <p className="text-darker-gray subtitle">
                  <Link
                    href={`/category/${category.name}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCartOpen(false);
                    }}
                  >
                    SHOP
                  </Link>
                </p>{" "}
                <img
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  className="ml-4 w-3 h-3"
                  alt="right-arrow"
                />
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default ProductCardsNav;
