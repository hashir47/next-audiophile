import Image from "next/image";

const BottomBanner = () => {
  return (
    <ul className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-72 md:mt-20 lg:h-[35rem]">
      <li className="">
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          className="flex md:hidden rounded"
          alt="best gear"
        />

        <img
          src="/assets/shared/tablet/image-best-gear.jpg"
          className="hidden md:flex lg:hidden rounded h-80"
          alt="best gear"
        />

        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          className="hidden lg:flex rounded"
          alt="best gear"
        />
      </li>
      <li className="flex flex-col items-start justify-center h-full p-10 md:p-24 lg:p-0 w-full lg:w-2/4">
        <h2 className="text-black">
          Bringing you the <span className="text-dark-orange">best</span> audio
          gear
        </h2>

        <p className="mt-4">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </li>
    </ul>
  );
};
export default BottomBanner;
