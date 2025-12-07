import { useState } from "react";
import { ArrowRight, Briefcase, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroInputOption3() {
  const [role, setRole] = useState<"owner" | "contributor">("owner");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-2 rounded-2xl">
        <div className="flex items-center gap-3">
          {/* Role Selector */}
          <div className="flex bg-muted/40 rounded-xl p-1 shrink-0">
            <button
              onClick={() => setRole("owner")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                role === "owner"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Product Owner</span>
            </button>
            <button
              onClick={() => setRole("contributor")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                role === "contributor"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Contributor</span>
            </button>
          </div>

          {/* Input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              role === "owner"
                ? "Describe a task or bug to fix…"
                : "Search tasks to work on…"
            }
            className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/60 min-w-0"
          />

          {/* Button */}
          <Button variant="hero" size="lg" className="shrink-0">
            {role === "owner" ? (
              <>
                Post Task
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Start Fixing
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
