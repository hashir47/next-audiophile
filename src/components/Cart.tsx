"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type cartItems = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const cartItems: cartItems[] = [
  {
    name: "XX99 MK II",
    price: 2999,
    quantity: 4,
    image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  },
  {
    name: "ZX 9",
    price: 4999,
    quantity: 2,
    image: "/assets/cart/image-zx9-speaker.jpg",
  },
  {
    name: "YX 1",
    price: 999,
    quantity: 4,
    image: "/assets/cart/image-yx1-earphones.jpg",
  },
  {
    name: "XX99 MK II",
    price: 2999,
    quantity: 4,
    image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  },
  {
    name: "ZX 9",
    price: 4999,
    quantity: 2,
    image: "/assets/cart/image-zx9-speaker.jpg",
  },
  {
    name: "YX 1",
    price: 999,
    quantity: 4,
    image: "/assets/cart/image-yx1-earphones.jpg",
  },
];

type cartProps = {
  isCartOpen: boolean;
  setIsCartOpen: (arg0: boolean) => void;
};
const Cart: React.FC<cartProps> = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10" />

      <div className="absolute right-10 lg:right-[340px]  bg-white rounded-xl flex flex-col w-[78%]  md:w-96 min-h-[32rem] max-h-[32rem] p-4 z-20 overflow-auto">
        <XMarkIcon
          className="h-10 w-10 self-end mb-2"
          onClick={(e) => {
            e.preventDefault();
            setIsCartOpen(!isCartOpen);
          }}
        />
        <ul className="flex flex-row justify-between items-center">
          <li>
            <h6>Cart (6)</h6>
          </li>
          <li>
            <button className="bg-transparent underline">Remove all</button>
          </li>
        </ul>
        <div className="overflow-auto">
          {cartItems.map((item, index) => (
            <div
              key={`cart-item-${index}`}
              className="flex items-center justify-between my-4"
            >
              <img
                className="h-12 md:h-16 w-12 md:w-16"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col">
                <p className="font-bold">{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center bg-dark-gray text-sm">
                <button className="px-3 py-2">-</button>
                <span className="px-3 py-2">{item.quantity}</span>
                <button className="px-3 py-2">+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-auto">
          <ul className="flex flex-row justify-between">
            <li>
              <p>TOTAL</p>
            </li>{" "}
            <li>
              <p className="font-bold">$ 8,997</p>
            </li>
          </ul>
          <button
            className="dark-orange-btn hover:bg-light-orange "
            style={{ width: "100%", margin: "0" }}
          >
            <Link href="/checkout">CHECKOUT</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
