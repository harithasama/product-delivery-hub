import { HeroInputOption1 } from "@/components/HeroInputOption1";
import { HeroInputOption2 } from "@/components/HeroInputOption2";
import { HeroInputOption3 } from "@/components/HeroInputOption3";
import { HeroInputOption4 } from "@/components/HeroInputOption4";

export default function HeroVariations() {
  return (
    <div className="min-h-screen">
      {/* Option 1 */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Option 1 — Dual Tabs Inside Input
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-2">Tabbed Role Selection</h2>
            <p className="text-muted-foreground">Switch between "Create a Task" and "Find a Task" with clear tabs</p>
          </div>
          <HeroInputOption1 />
        </div>
      </section>

      {/* Option 2 */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-foreground text-sm font-medium mb-4">
              Option 2 — Split Input with Two Buttons
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-2">Dual Action Buttons</h2>
            <p className="text-muted-foreground">One input, two clear action paths side by side</p>
          </div>
          <HeroInputOption2 />
        </div>
      </section>

      {/* Option 3 */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl floating" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: "1.2s" }} />
        </div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-foreground text-sm font-medium mb-4">
              Option 3 — Role Selector Inside Input
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-2">Inline Role Toggle</h2>
            <p className="text-muted-foreground">Compact segmented control inside the input box</p>
          </div>
          <HeroInputOption3 />
        </div>
      </section>

      {/* Option 4 - NEW: Animated Suggestions */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container relative z-10 px-4 py-16">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Option 4 — Animated Typing Suggestions
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-2">Single Button, Dynamic Text</h2>
            <p className="text-muted-foreground">One button, cycling suggestions that appeal to both PMs and Contributors</p>
          </div>
          <HeroInputOption4 />
        </div>
      </section>
    </div>
  );
}
