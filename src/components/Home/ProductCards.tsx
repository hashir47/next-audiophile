import Link from "next/link";

type category = {
  name: string;
  image: string;
}[];

const categories = [
  {
    name: "Headphones",
    image: "/assets/home/desktop/headphone1x.png",
  },
  {
    name: "Speakers",
    image: "/assets/home/desktop/speaker1x.png",
  },
  {
    name: "Earphones",
    image: "/assets/home/desktop/earphone1x.png",
  },
] as category;
const ProductCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-48 p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl">
      {categories.map((category, index) => {
        return (
          <ul
            className="flex flex-col bg-dark-gray w-full h-full md:w-56 lg:w-96 md:h-52 lg:h-auto relative rounded-md items-center justify-center mb-24 md:mt-0"
            key={index + "-" + category.name}
          >
            <li className="flex flex-row justify-center items-center">
              {/* <img
                src={category.url}
                className="absolute -top-20 left-28 md:-top-20 lg:-top-16 md:left-12 lg:left-32 "
                alt={category.name}
              /> */}

              <img
                src={category.image}
                className="absolute -top-20 md:-top-20 lg:-top-16"
                alt={category.name}
              />
              <img
                src="/assets/home/desktop/Oval.png"
                className="mt-10"
                alt="oval shadow"
              />
            </li>
            <li className="self-center mt-2 mb-5">
              <h6>{category.name}</h6>
            </li>
            <li className="self-center mb-0 md:mb-10">
              <div className="flex flex-row items-center">
                <p className="text-darker-gray subtitle">
                  <Link href={`/category/${category.name}`}>SHOP</Link>
                </p>{" "}
                <img
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  className="ml-4 w-3 h-3"
                />
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default ProductCards;
