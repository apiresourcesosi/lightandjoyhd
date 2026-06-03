import CategorySection from "@/components/CategorySection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonalSection";

const Home = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  const products = data.products;
  console.log(products);
  return (
    <main className="">
      <HeroSection />
      <CategorySection />
      <TestimonialSection />
      <FooterSection />
    </main>
  );
};

export default Home;
