import { url } from "inspector";
import patternCircles from "../../../public/assets/home/desktop/pattern-circles.svg";
import speakerZoomed from "../../../public/assets/home/desktop/speakerZoomed.png";
import bestAudioGear from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import BottomBanner from "../BottomBanner";
import Image from "next/image";

const Banners = () => {
  return (
    <div className="flex flex-col p-10 lg:py-custom-y lg:px-custom-x  xl:py-custom-y-xl xl:px-custom-x-xl">
      <ul
        className="bg-dark-orange flex flex-col lg:flex-row items-center justify-center p-10 md:p-0 lg:space-x-24 h-full lg:h-[35rem] rounded w-full"
        style={{
          backgroundImage: `url(${patternCircles.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* <li>
          <img src="assets/home/desktop/pattern-circles.svg" alt="Circle" />
        </li> */}
        <li className="self-center lg:self-start my-10 lg:my-0">
          <img
            className="hidden lg:flex"
            src="assets/home/desktop/speakerMainHome.png"
            alt="speaker-zx9"
          />

          <img
            className="hidden md:flex lg:hidden"
            src="assets/home/tablet/image-speaker-zx9.png"
            alt="speaker-zx9"
          />

          <img
            className="flex md:hidden"
            src="assets/home/mobile/image-speaker-zx9.png"
            alt="speaker-zx9"
          />
        </li>
        <li className="flex flex-col items-center justify-center w-full md:w-[24%] m-0">
          <h1 className="text-white text-center lg:text-start">Zx9 speaker</h1>
          <p className="text-white mt-4  text-center lg:text-start">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="dark-black-btn">SEE PRODUCT</button>
        </li>
      </ul>

      <ul
        className=" flex flex-row items-center justify-end   w-full h-full mt-20   grayscale relative rounded"
        // style={{
        //   backgroundImage: `url(${speakerZoomed.src})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "bottom",
        //   backgroundSize: "cover",
        //   transform: "scaleX(-1)",
        // }}
      >
        <li>
          <img
            src="/assets/home/mobile/image-speaker-zx7.jpg"
            className="flex md:hidden "
            alt="zx7-speaker"
          />
          <img
            src="/assets/home/tablet/image-speaker-zx7.jpg"
            className="hidden md:flex lg:hidden w-screen"
            alt="zx7-speaker"
          />
          <img
            src="/assets/home/desktop/image-speaker-zx7.jpg"
            className="hidden lg:flex h-80 w-screen"
            alt="zx7-speaker"
          />
        </li>
        <li className="flex flex-col items-start justify-center w-full  h-full p-4 lg:p-24 absolute">
          <h2 className="text-black self-start">Zx7 speaker</h2>

          <button className="transparent-btn self-auto text-black border border-black font-medium">
            SEE PRODUCT
          </button>
        </li>
      </ul>

      <ul className="flex flex-col md:flex-row justify-between mt-20 h-48 md:h-80">
        <li>
          <img
            src="assets/home/mobile/image-earphones-yx1.jpg"
            className="flex md:hidden rounded"
            alt="yx1 earphones"
          />
          <img
            src="assets/home/tablet/image-earphones-yx1.jpg"
            className="hidden md:flex lg:hidden  rounded h-80"
            alt="yx1 earphones"
          />
          <img
            src="assets/home/desktop/image-earphones-yx1.jpg"
            className="hidden lg:flex rounded h-80"
            alt="yx1 earphones"
          />
        </li>
        <li className="flex flex-col items-start justify-center h-48 md:h-80 p-10 lg:p-24 bg-dark-gray w-full md:w-80 lg:w-[33rem]  mt-10 md:mt-0">
          <h2 className="text-black self-start">Zx7 speaker</h2>

          <button className="transparent-btn self-auto text-black border border-black font-medium">
            SEE PRODUCT
          </button>
        </li>
      </ul>
      <BottomBanner />
    </div>
  );
};
export default Banners;
