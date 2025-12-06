import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function DualHeroSection() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>For Teams & Contributors</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Ship Faster.</span>
            <br />
            <span className="text-foreground">Fix Bottlenecks.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For product teams who want momentum — and for contributors who want meaningful work.
          </p>

          {/* Prompt box */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-2 rounded-2xl">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Describe a task or a bug..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/60"
                />
                <Button variant="hero" size="lg" className="shrink-0">
                  <Sparkles className="w-5 h-5" />
                  Go
                </Button>
              </div>
            </div>
          </div>

          {/* Dual CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/create-task">
              <Button variant="hero" size="xl" className="group">
                Create a Task
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="hero-secondary" size="xl" className="group">
                Explore Tasks
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>500+ tasks completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>$150K+ paid out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
