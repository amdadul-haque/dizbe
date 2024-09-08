import { Discover, Features, Footer, Hero, Wishlist } from "@/components";
import { ScrollToTop } from "@/components/core";

export default function Home() {
  return (
    <div className="text-black-100">
      <ScrollToTop />

      <Wishlist />
      <Hero />
      <Discover />
      <Features />
      <Footer />

      
    </div>
  );
}
