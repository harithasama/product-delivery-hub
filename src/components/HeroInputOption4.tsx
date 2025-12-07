import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  "Fix our mobile layout issues…",
  "Improve dashboard loading speed…",
  "Add missing error messages…",
  "Update the checkout flow UX…",
  "Help optimize our React components…",
  "Refactor legacy code for better performance…",
  "Resolve API integration bugs…",
  "Improve accessibility across key pages…",
  "Polish UI details that improve user satisfaction…",
  "Close long-standing bugs to boost stability…",
  "Add small features that unlock big wins…",
  "Ship last-mile improvements that speed up releases…",
  "Reduce backlog with fast, high-quality fixes…",
  "Accelerate shipping by offloading small tasks…",
  "Contribute impactful fixes to real products…",
  "Earn rewards for solving meaningful issues…",
];

export function HeroInputOption4() {
  const [inputValue, setInputValue] = useState("");
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (inputValue) return; // Don't animate if user is typing

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
  }, [displayText, isTyping, currentSuggestion, inputValue]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-2 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground"
              placeholder=""
            />
            {!inputValue && (
              <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
                <span className="text-lg text-muted-foreground/60">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            )}
          </div>
          <Button variant="hero" size="lg" className="shrink-0 gap-2">
            <Sparkles className="w-4 h-4" />
            Go
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
