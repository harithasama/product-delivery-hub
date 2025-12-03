import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const suggestions = [
  "Fix our mobile layout issues...",
  "Improve dashboard loading speed...",
  "Add missing error messages...",
  "Update the checkout flow UX...",
];

export function HeroSection() {
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const suggestion = suggestions[currentSuggestion];
    
    if (isTyping) {
      if (displayText.length < suggestion.length) {
        const timeout = setTimeout(() => {
          setDisplayText(suggestion.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentSuggestion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-start/20 rounded-full blur-3xl floating" />
        <div className="absolute top-40 right-[15%] w-96 h-96 bg-gradient-mid/15 rounded-full blur-3xl floating-delayed" />
        <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-gradient-end/20 rounded-full blur-3xl floating" />
        
        {/* Code particles */}
        <div className="absolute top-1/4 left-[5%] text-primary/20 text-6xl font-mono floating">{"{"}</div>
        <div className="absolute top-1/3 right-[8%] text-accent/20 text-5xl font-mono floating-delayed">{"</>"}</div>
        <div className="absolute bottom-1/4 right-[12%] text-primary/15 text-4xl font-mono floating">{"}"}</div>
        <div className="absolute bottom-1/3 left-[8%] text-accent/15 text-5xl font-mono floating-delayed">{"()"}</div>
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Last Mile of Product Delivery</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ship Faster.{" "}
            <span className="gradient-text">Fix Bottlenecks.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get UI fixes, bugs, docs, and small features done fast — without derailing your roadmap.
          </p>

          {/* Prompt Box */}
          <div className="relative max-w-2xl mx-auto mb-10 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="glass-card rounded-2xl p-2 gradient-border">
              <div className="flex items-center gap-3 bg-background rounded-xl p-4 min-h-[80px]">
                <div className="flex-1 text-left">
                  <span className="text-muted-foreground">{displayText}</span>
                  <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
                </div>
                <Button variant="gradient" size="lg" className="shrink-0">
                  <Sparkles className="w-4 h-4" />
                  Create Task
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl">
              Create Your First Task
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-secondary" size="xl">
              Try a $250 Quick Fix
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
