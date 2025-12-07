import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ownerSuggestions = [
  "Fix our mobile layout issues…",
  "Improve dashboard loading speed…",
  "Add missing error messages…",
  "Update the checkout flow UX…",
  "Polish UI details that improve user satisfaction…",
  "Reduce backlog with fast, high-quality fixes…",
  "Accelerate shipping by offloading small tasks…",
];

const contributorSuggestions = [
  "Help optimize React components…",
  "Refactor legacy code for better performance…",
  "Resolve API integration bugs…",
  "Improve accessibility across key pages…",
  "Contribute impactful fixes to real products…",
  "Earn rewards for solving meaningful issues…",
  "Ship last-mile improvements that speed up releases…",
];

type Role = "owner" | "contributor";

export function HeroInputOption4() {
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
    <div className="max-w-2xl mx-auto">
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
      <div className="glass-card p-2 rounded-2xl">
        <div className="flex items-center gap-3">
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
          <Button variant="hero" size="lg" className="shrink-0 gap-2">
            <Sparkles className="w-4 h-4" />
            {role === "owner" ? "Post" : "Find"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}