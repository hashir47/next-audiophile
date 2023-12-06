import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-row  bg-custom-dark text-white w-full p-0 lg:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl">
      <img
        src="assets/home/desktop/image-hero.jpg"
        className="hidden lg:flex"
      />
      <img
        src="assets/home/tablet/image-header.jpg"
        className="hidden md:flex lg:hidden"
      />

      <img
        src="assets/home/mobile/image-header.jpg"
        className="flex md:hidden"
      />
      <div className="flex flex-col justify-center items-center lg:items-start absolute h-full lg:h-auto w-full lg:w-2/4 p-0 lg:p-24">
        <p className="overline text-dark-gray">NEW PRODUCT</p>
        <h1 className="my-10 hidden md:flex text-center lg:text-start">
          XX99 Mark II Headphones
        </h1>
        <h3 className="my-10 flex text-center md:hidden w-full">
          XX99 Mark II Headphones
        </h3>
        <p className="w-2/4 text-dark-gray">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <button className="dark-orange-btn hover:bg-light-orange">
          <Link href="product/xx99-mark-two-headphones">SEE PRODUCT</Link>
        </button>
      </div>
    </div>
  );
};
export default Hero;
