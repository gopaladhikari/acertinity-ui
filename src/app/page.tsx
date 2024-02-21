import Hero from "@/components/Hero";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function page() {
  return (
    <main className="bg-grid-white/[0.02] bg-black/[0.96]">
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
    </main>
  );
}
