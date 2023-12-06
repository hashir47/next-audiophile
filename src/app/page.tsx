import Banners from "@/components/Home/Banner";
import Hero from "@/components/Home/Hero";
import ProductCards from "@/components/Home/ProductCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  w-full">
      <Hero />
      <ProductCards />
      <Banners />
    </main>
  );
}
