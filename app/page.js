import { CTA, Discover, Features, Hero, WaitList } from "@/components";
import { ScrollToTop } from "@/components/core";

export default function Home() {
  return (
    <div className="text-black-100">
      <ScrollToTop />

      <WaitList />
      <Hero />
      <Discover />
      <Features />
      <CTA />
    </div>
  );
}
