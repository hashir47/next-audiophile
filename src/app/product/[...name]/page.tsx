"use client";
import ProductCards from "@/components/Home/ProductCards";
import CategoryPageBanner from "@/components/CategoryPageBanner";
import data from "../../../../data.json";
import BottomBanner from "@/components/BottomBanner";
import Link from "next/link";
import ProductCardsNav from "@/components/ProductCardsNav";
type productDetail = {
  id: number;
  slug: string;
  name: string;

  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

interface pageProps {
  params: { name: string; sku: string };
}
const Home: React.FC<pageProps> = ({ params }) => {
  let productInfo: productDetail | undefined = data.find(
    (product) => product.slug.toLowerCase() === params.name[0].toLowerCase()
  );
  console.log(productInfo);

  if (!productInfo) {
    return <h1 className="text-center">Product Not found</h1>;
  }
  return (
    <main className="w-full mt-24">
      <div className="p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl">
        <div className="flex flex-col md:flex-row justify-start md:justify-between">
          <ul className="w-full md:w-2/4">
            <img
              src={productInfo.image.mobile}
              className="flex md:hidden"
              alt={productInfo.name}
            />
            <img
              src={productInfo.image.tablet}
              className="hidden md:flex lg:hidden"
              alt={productInfo.name}
            />
            <img
              src={productInfo.image.desktop}
              className="hidden lg:flex"
              alt={productInfo.name}
            />
          </ul>
          <ul className="flex flex-col justify-center items-start w-full md:w-2/4 ml-0 md:ml-24 mt-10 md:mt-0">
            <li>
              {" "}
              <p className="overline text-dark-orange">
                {productInfo.new ? "new" : "old"} product
              </p>
            </li>
            <li>
              <h1 className="hidden lg:flex lg:my-10">{productInfo.name}</h1>
              <h3 className="flex lg:hidden my-10">{productInfo.name}</h3>
            </li>
            <li>
              <p className="mb-5 lg:mb-10">{productInfo.description}</p>
            </li>
            <li>
              <h4 className="mb-5 lg:mb-10">$ {productInfo.price}</h4>
            </li>
            <li className="flex flex-row">
              <ul className="flex flex-row justify-between items-center my-10 px-6 py-3 space-x-6 bg-dark-gray">
                <li>
                  <p>-</p>
                </li>
                <li>
                  <p>1</p>
                </li>
                <li>
                  <p>+</p>
                </li>
              </ul>
              <ul>
                <li>
                  {" "}
                  <button className="dark-orange-btn self-auto text-white font-medium ml-4">
                    Add to cart
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-24 w-full">
          <ul className="flex flex-col w-full lg:w-2/4">
            <li>
              <h2>Features</h2>
            </li>
            <li>
              <p className="my-4">{productInfo.features}</p>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row lg:flex-col w-full lg:w-2/4 items-start lg:items-center ml-0 lg:ml-24">
            <li className="w-full">
              <h2>In the box</h2>
            </li>
            <li className="flex flex-col w-full">
              {productInfo.includes.map((item, index) => {
                return (
                  <ul key={item.item + "-" + index} className="my-1">
                    <li>
                      <p className="text-start">
                        <span className="text-dark-orange font-bold mr-4">
                          {item.quantity}x
                        </span>
                        {item.item}
                      </p>
                    </li>
                  </ul>
                );
              })}
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 lg:space-x-14 my-10">
          <ul className="flex flex-col justify-between">
            <li>
              <img
                src={productInfo.gallery.first.mobile}
                className="flex md:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.first.tablet}
                className="hidden md:flex lg:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.first.desktop}
                className="hidden lg:flex rounded-lg"
                alt={productInfo.name}
              />
            </li>

            <li className="my-4 md:my-0">
              <img
                src={productInfo.gallery.second.mobile}
                className="flex md:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.second.tablet}
                className="hidden md:flex lg:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.second.desktop}
                className="hidden lg:flex rounded-lg"
                alt={productInfo.name}
              />
            </li>
          </ul>
          <ul className="">
            <li>
              <img
                src={productInfo.gallery.third.mobile}
                className="flex md:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.third.tablet}
                className="hidden md:flex lg:hidden rounded-lg"
                alt={productInfo.name}
              />
              <img
                src={productInfo.gallery.third.desktop}
                className="hidden lg:flex rounded-lg"
                alt={productInfo.name}
              />
            </li>
          </ul>
        </div>
        <h3 className="text-center my-10">You may also like</h3>
        <div className="flex flex-col md:flex-row justify-between my-10 space-x-4">
          {productInfo.others.map((relatedProduct, index) => {
            return (
              <ul
                className="flex flex-col justify-center items-center"
                key={index + "-relatedProduct-" + relatedProduct.name}
              >
                <li>
                  <img
                    src={relatedProduct.image.mobile}
                    className="flex md:hidden rounded-lg"
                    alt={relatedProduct.name}
                  />
                  <img
                    src={relatedProduct.image.tablet}
                    className="hidden md:flex lg:hidden rounded-lg"
                    alt={relatedProduct.name}
                  />
                  <img
                    src={relatedProduct.image.desktop}
                    className="hidden lg:flex rounded-lg"
                    alt={relatedProduct.name}
                  />
                </li>
                <li className="mt-10">
                  <h4>{relatedProduct.name}</h4>
                </li>
                <li>
                  <button className="dark-orange-btn self-auto text-white font-medium hover:bg-light-orange">
                    <Link href={`/product/${relatedProduct.slug}`}>
                      SEE PRODUCT{" "}
                    </Link>
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <ProductCardsNav />
      <div className="p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl -mt-64 md:mt-0">
        <BottomBanner />
      </div>
    </main>
  );
};
export default Home;
