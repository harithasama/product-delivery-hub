import { Navbar } from "@/components/Navbar";
import { DualHeroSection } from "@/components/DualHeroSection";
import { SplitValueSection } from "@/components/SplitValueSection";
import { SharedJourney } from "@/components/SharedJourney";
import { ContributorTaskFeed } from "@/components/ContributorTaskFeed";
import { DualTestimonials } from "@/components/DualTestimonials";
import { DualFooter } from "@/components/DualFooter";

const DualHomepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DualHeroSection />
        <SplitValueSection />
        <SharedJourney />
        <ContributorTaskFeed />
        <DualTestimonials />
      </main>
      <DualFooter />
    </div>
  );
};

export default DualHomepage;
