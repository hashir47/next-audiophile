import Link from "next/link";

type productInfo = {
  name: string;
  description: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
type productInfoProps = {
  productInfo: productInfo[];
};

const CategoryPageBanner: React.FC<productInfoProps> = ({ productInfo }) => {
  return productInfo?.map((product, index) => {
    if (index % 2 == 0) {
      return (
        <div
          className="flex flex-col lg:flex-row justify-center lg:justify-between p-10 lg:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl mt-10"
          key={product.name + "-" + index}
        >
          <ul className="w-full  lg:h-auto lg:w-2/4">
            <li>
              <img
                src={product.image.mobile}
                className="flex md:hidden w-screen"
              />
              <img
                src={product.image.tablet}
                className="hidden md:flex lg:hidden  w-screen"
              />
              <img src={product.image.desktop} className="hidden lg:flex" />
            </li>
          </ul>
          <ul className="flex flex-col justify-center items-center lg:items-start ml-0 lg:ml-24 w-full   lg:w-2/4 mt-10 lg:mt-0">
            <li>
              <p className="overline text-dark-orange ">New product</p>
            </li>
            <li>
              <h1 className="hidden md:flex   text-center lg:text-start">
                {product.name}
              </h1>
              <h3 className="text-center  flex md:hidden">{product.name}</h3>
            </li>
            <li>
              <p className="text-center lg:text-start">{product.description}</p>
            </li>
            <li>
              <button className="dark-orange-btn self-auto text-white  font-medium">
                <Link href={`/product/${product.slug}`}>SEE PRODUCT</Link>
              </button>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div
        className="flex flex-col lg:flex-row justify-between p-10 lg:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl mt-10 "
        key={product.name + "-" + index}
      >
        <ul className="w-full  flex lg:hidden">
          <li>
            <img
              src={product.image.mobile}
              className="flex md:hidden  w-screen"
            />
            <img
              src={product.image.tablet}
              className="hidden md:flex lg:hidden w-screen"
            />
          </li>
        </ul>
        <ul className="flex flex-col justify-center items-center lg:items-start mt-10 lg:mt-0  w-full lg:w-2/4">
          <li>
            <p className="overline text-dark-orange">New product</p>
          </li>
          <li>
            <h1 className="hidden md:flex text-center lg:text-start">
              {product.name}
            </h1>
            <h3 className="text-center  flex md:hidden">{product.name}</h3>
          </li>
          <li>
            <p className="text-center lg:text-start">{product.description}</p>
          </li>
          <li>
            <button className="dark-orange-btn self-auto text-white  font-medium">
              SEE PRODUCT
            </button>
          </li>
        </ul>
        <ul className="ml-0 lg:ml-24 hidden lg:flex  w-auto lg:w-2/4 ">
          <li>
            <img src={product.image.mobile} className="flex md:hidden " />
            <img
              src={product.image.tablet}
              className="hidden md:flex lg:hidden"
            />
            <img src={product.image.desktop} className="hidden lg:flex" />
          </li>
        </ul>
      </div>
    );
  });
};
export default CategoryPageBanner;
