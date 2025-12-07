import { useState } from "react";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroInputOption2() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-2 rounded-2xl">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe or search for a task…"
            className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/60"
          />
          <div className="flex gap-2 shrink-0">
            <Button variant="hero" size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Create Task
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 bg-background/80 border-border/50 hover:bg-background text-foreground"
            >
              <Search className="w-4 h-4" />
              Find Tasks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
