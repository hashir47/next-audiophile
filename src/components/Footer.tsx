import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-custom-dark p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl">
      <div className="flex flex-col md:flex-row justify-center items-center lg:items-start md:justify-between pb-10 text-white">
        <ul>
          <li className="my-10 md:my-0">
            <img src="/assets/shared/desktop/logo.svg" />
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-6 uppercase items-center">
          <li>
            <Link href="/">Home</Link>{" "}
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
      </div>
      <div className="flex flex-row justify-between pb-10 text-white">
        <ul>
          <li className="w-full lg:w-2/4">
            <p className="text-center md:text-start">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </li>
        </ul>
        <ul className="hidden lg:flex flex-row space-x-6 uppercase self-end">
          <li>
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-between pb-10 text-white">
        <ul>
          <li className="w-full lg:w-2/4">
            <p className="text-white text-center md:text-start">
              Copyright {year}. All Rights Reserved
            </p>
          </li>
        </ul>
        <ul className="flex lg:hidden flex-row space-x-6 uppercase self-center md:self-end mt-10 md:mt-0">
          <li>
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </li>
          <li>
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
