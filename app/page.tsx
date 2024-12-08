import Company_logo from "@/components/company_logo";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import Top_categories from "@/components/top_categories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Company_logo/>
      <Product/>
      <Top_categories/>
    </div>
  );
}
