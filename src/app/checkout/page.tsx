"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Image from "next/image";

type Inputs = {
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
};
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
  // {
  //   name: "XX99 MK II",
  //   price: 2999,
  //   quantity: 4,
  //   image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  // },
  // {
  //   name: "ZX 9",
  //   price: 4999,
  //   quantity: 2,
  //   image: "/assets/cart/image-zx9-speaker.jpg",
  // },
  // {
  //   name: "YX 1",
  //   price: 999,
  //   quantity: 4,
  //   image: "/assets/cart/image-yx1-earphones.jpg",
  // },
];

const Home: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    open();
  };
  return (
    <main className=" w-full bg-dark-gray-gray bg-checkout-grey">
      <div className="p-10 lg:py-custom-y lg:px-custom-x xl:py-custom-y-xl xl:px-custom-x-xl flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-3/5 flex flex-col bg-white p-10 rounded">
          <h2 className="my-10">Checkout</h2>
          <form onSubmit={handleSubmit(onSubmit)} id="input-form">
            <p className="subtitle text-dark-orange">Billing details</p>
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex flex-col w-full md:w-2/4">
                <label htmlFor="email" className="font-bold">
                  Email:
                </label>
                <input
                  {...register("email", { required: true })}
                  className="border-darker-gray border px-2 py-2 rounded w-full"
                  placeholder="Enter email"
                />

                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>

              <div className="flex flex-col w-full md:w-2/4 ml-0 md:ml-4">
                <label htmlFor="name" className="font-bold">
                  Name:
                </label>
                <input
                  {...register("name", { required: true })}
                  className="border-darker-gray border px-2 py-2 rounded w-full"
                  placeholder="Enter name"
                />

                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full mt-4">
              <label htmlFor="phoneNumber" className="font-bold">
                Phone number:
              </label>
              <input
                {...register("phoneNumber", { required: true })}
                className="border-darker-gray border px-2 py-2 rounded w-full"
                placeholder="Enter phone number"
              />

              {errors.phoneNumber && (
                <span className="text-red-500">Phone number is required</span>
              )}
            </div>

            <p className="subtitle text-dark-orange mt-10">Shipping info</p>
            <div className="flex flex-col w-full mt-4">
              <label htmlFor="address" className="font-bold">
                Address:
              </label>
              <input
                {...register("address", { required: true })}
                className="border-darker-gray border px-2 py-2 rounded w-full"
                placeholder="Enter Address"
              />

              {errors.address && (
                <span className="text-red-500">Address is required</span>
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full mt-4">
              <div className="flex flex-col w-full md:w-2/4">
                <label htmlFor="zipCode" className="font-bold">
                  ZIP Code:
                </label>
                <input
                  {...register("zipCode", { required: true })}
                  className="border-darker-gray border px-2 py-2 rounded w-full"
                  placeholder="Enter ZIP code"
                />

                {errors.zipCode && (
                  <span className="text-red-500">ZIP code is required</span>
                )}
              </div>

              <div className="flex flex-col w-full md:w-2/4 ml-0 md:ml-4">
                <label htmlFor="city" className="font-bold">
                  City:
                </label>
                <input
                  {...register("city", { required: true })}
                  className="border-darker-gray border px-2 py-2 rounded w-full"
                  placeholder="Enter city"
                />

                {errors.city && (
                  <span className="text-red-500">City is required</span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full mt-4">
              <label htmlFor="country" className="font-bold">
                Country:
              </label>
              <input
                {...register("country", { required: true })}
                className="border-darker-gray border px-2 py-2 rounded w-full"
                placeholder="Enter country"
              />

              {errors.address && (
                <span className="text-red-500">Country is required</span>
              )}
            </div>

            <p className="subtitle text-dark-orange mt-10">Payment details</p>
            <div className="flex flex-col md:flex-row justify-between w-full mt-4">
              <div className="flex flex-col w-full md:w-2/4">
                <p className="font-bold">Payment Method</p>
              </div>

              <div className="flex flex-col w-full md:w-2/4 ml-0 md:ml-4">
                <div className="flex flex-row px-2 py-2 border border-darker-gray rounded">
                  <input
                    {...register("paymentMethod", { required: true })}
                    className="accent-dark-orange"
                    placeholder="Enter city"
                    type="radio"
                    value="eMoney"
                  />
                  <label htmlFor="eMoney" className="font-bold ml-4">
                    e-Money
                  </label>
                </div>

                <div className="flex flex-row px-2 py-2 border border-darker-gray rounded mt-3">
                  <input
                    {...register("paymentMethod", { required: true })}
                    className="  form-radio accent-dark-orange"
                    placeholder="Enter city"
                    type="radio"
                    value="cashOnDelivery"
                  />
                  <label htmlFor="eMoney" className="font-bold ml-4">
                    Cash On Delivery
                  </label>
                </div>

                {errors.paymentMethod && (
                  <span className="text-red-500">
                    Payment method is required
                  </span>
                )}
              </div>
            </div>

            <input type="submit" />
          </form>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col bg-white p-10 rounded mt-4 lg:mt-0 ml-0 lg:ml-4 h-auto">
          <h3 className="my-10">Summary</h3>
          <div className="flex flex-col">
            <div className="overflow-auto">
              {cartItems.map((item, index) => (
                <div
                  key={`cart-item-${index}`}
                  className="flex items-center justify-between my-4"
                >
                  <div className="flex flex-row justify-start items-start">
                    <Image
                      className="h-12 md:h-16 w-12 md:w-16"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="font-bold">{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <p className="font-bold">x{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-4 subtitle font-bold">
            <p>Total</p>
            <p>$ 5369</p>
          </div>
          <div className="flex flex-row justify-between mb-4 subtitle font-bold">
            <p>Shipping</p>
            <p>$ 50</p>
          </div>
          <div className="flex flex-row justify-between mb-4 subtitle font-bold">
            <p>VAT (included)</p>
            <p>$ 1079</p>
          </div>

          <div className="flex flex-row justify-between mb-4 subtitle font-bold">
            <p>Grand total</p>
            <p className="text-dark-orange">$ 5446</p>
          </div>
          <button
            className="dark-orange-btn hover:bg-light-orange mb-4"
            style={{ width: "100%", margin: "0" }}
            type="submit"
            form="input-form"
          >
            <span className="subtitle">Continue & Pay</span>
          </button>
        </div>
        <Modal
          opened={opened}
          onClose={close}
          title="Order"
          padding={"2rem"}
          centered
        >
          <div className="flex flex-col">
            <h2>Thank you for your order</h2>
            <p className="my-4">You will receive confirmation email shortly</p>
          </div>
          <Link
            className="dark-orange-btn hover:bg-light-orange mb-4"
            style={{ width: "100%", margin: "0" }}
            href="/"
          >
            <span className="subtitle">BACK TO HOME</span>
          </Link>
        </Modal>
      </div>
    </main>
  );
};
export default Home;
