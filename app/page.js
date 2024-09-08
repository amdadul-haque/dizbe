import { Discover, Hero, Wishlist } from "@/components";
import { ScrollToTop } from "@/components/core";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="text-black-100">
      <Wishlist />
      <Hero />
      <Discover />
      <Footer />

      <ScrollToTop />
    </div>
  );
}
