import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProposition } from "@/components/ValueProposition";
import { LiveTasksFeed } from "@/components/LiveTasksFeed";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="for-teams">
          <ValueProposition />
        </section>
        <section id="tasks">
          <LiveTasksFeed />
        </section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
