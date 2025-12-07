import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ownerSuggestions = [
  "Fix our mobile layout issues…",
  "Improve dashboard loading speed…",
  "Add missing error messages…",
  "Update the checkout flow UX…",
  "Polish UI details that improve user satisfaction…",
  "Reduce backlog with fast, high-quality fixes…",
];

const contributorSuggestions = [
  "Help optimize React components…",
  "Refactor legacy code for better performance…",
  "Resolve API integration bugs…",
  "Improve accessibility across key pages…",
  "Contribute impactful fixes to real products…",
  "Earn rewards for solving meaningful issues…",
];

type Role = "owner" | "contributor";

export function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const [role, setRole] = useState<Role>("owner");
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const suggestions = role === "owner" ? ownerSuggestions : contributorSuggestions;

  // Reset animation when role changes
  useEffect(() => {
    setCurrentSuggestion(0);
    setDisplayText("");
    setIsTyping(true);
  }, [role]);

  useEffect(() => {
    if (inputValue) return;

    const suggestion = suggestions[currentSuggestion];
    
    if (isTyping) {
      if (displayText.length < suggestion.length) {
        const timeout = setTimeout(() => {
          setDisplayText(suggestion.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
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
  }, [displayText, isTyping, currentSuggestion, inputValue, suggestions]);

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
            Ship Faster.{" "}
            <span className="gradient-text">Fix Bottlenecks.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>For product teams who want momentum — and for contributors who want meaningful work.</p>

          {/* Role Tabs + Input Box */}
          <div className="max-w-2xl mx-auto mb-10 animate-scale-in" style={{
            animationDelay: "0.3s"
          }}>
            {/* Role Tabs on Top */}
            <div className="flex justify-center gap-2 mb-3">
              <button
                onClick={() => setRole("owner")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  role === "owner"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border/50"
                }`}
              >
                I need help
              </button>
              <button
                onClick={() => setRole("contributor")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  role === "contributor"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border/50"
                }`}
              >
                I can help
              </button>
            </div>

            {/* Input Box */}
            <div className="glass-card rounded-2xl p-2 gradient-border">
              <div className="flex items-center gap-3 bg-background rounded-xl p-2">
                {/* Input with animated placeholder */}
                <div className="flex-1 relative min-w-0">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground"
                    placeholder=""
                  />
                  {!inputValue && (
                    <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
                      <span className="text-lg text-muted-foreground/60 truncate">
                        {displayText}
                        <span className="animate-pulse">|</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Single action button */}
                <Button variant="gradient" size="lg" className="shrink-0 gap-2" asChild>
                  <Link to="/create-task">
                    <Sparkles className="w-4 h-4" />
                    {role === "owner" ? "Post Task" : "Find Tasks"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/create-task">
                Create Your First Task
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/create-task">
                Try a $250 Quick Fix
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}