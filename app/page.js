import { Discover, Hero, Wishlist } from "@/components";

export default function Home() {
  return (
    <div className="text-black-100">
      <Wishlist />
      <Hero />
      <Discover />
    </div>
  );
}
