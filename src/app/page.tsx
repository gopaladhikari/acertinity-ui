import { FeatureCourses } from "@/components/FeatureCourses";
import Hero from "@/components/Hero";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function page() {
  return (
    <main className="bg-grid-white/[0.02] bg-black/[0.96]">
      <MaxWidthWrapper>
        <Hero />
        <FeatureCourses />
        <WhyChooseUs />
      </MaxWidthWrapper>
    </main>
  );
}
