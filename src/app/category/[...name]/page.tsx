"use client";
import ProductCards from "@/components/Home/ProductCards";
import CategoryPageBanner from "@/components/CategoryPageBanner";
import data from "../../../../data.json";
import BottomBanner from "@/components/BottomBanner";
type productInfo = {
  name: string;
  description: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

interface pageProps {
  params: { name: string; sku: string };
}
const Home: React.FC<pageProps> = ({ params }) => {
  let productInfo: productInfo[] = [];
  if (params.name[0].toLowerCase() === "headphones") {
    productInfo = data.filter(
      (product) =>
        product.slug === "xx99-mark-two-headphones" ||
        product.slug === "xx99-mark-one-headphones" ||
        product.slug === "xx59-headphones"
    );
  } else if (params.name[0].toLowerCase() === "speakers") {
    productInfo = data.filter(
      (product) =>
        product.slug === "zx9-speaker" || product.slug === "zx7-speaker"
    );
  } else if (params.name[0].toLowerCase() === "earphones") {
    productInfo = data.filter((product) => product.slug === "yx1-earphones");
  }
  return (
    <main className="  w-full">
      <div className="w-full h-80 bg-custom-dark text-white flex flex-row justify-center items-center">
        <h1 className="hidden md:flex">{params.name[0]}</h1>
        <h3 className="flex md:hidden">{params.name[0]}</h3>
      </div>

      {productInfo && <CategoryPageBanner productInfo={productInfo} />}

      <ProductCards />
      <div className="flex flex-col p-10 g:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl ">
        <BottomBanner />
      </div>
    </main>
  );
};
export default Home;
