import { useState } from "react";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroInputOption1() {
  const [activeTab, setActiveTab] = useState<"create" | "find">("create");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-1.5 rounded-2xl">
        {/* Tabs */}
        <div className="flex gap-1 mb-2 p-1 bg-muted/30 rounded-xl">
          <button
            onClick={() => setActiveTab("create")}
            className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "create"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Create a Task
            </span>
          </button>
          <button
            onClick={() => setActiveTab("find")}
            className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === "find"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Find a Task
            </span>
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 p-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              activeTab === "create"
                ? "Describe what you want fixed or improved…"
                : "Search for tasks, issues, or keywords…"
            }
            className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/60"
          />
          <Button variant="hero" size="lg" className="shrink-0">
            {activeTab === "create" ? (
              <>
                Post Task
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Explore
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
