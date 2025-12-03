import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Sparkles, FileText, Code, ChevronDown, ChevronUp, Clock, DollarSign, AlertCircle, CheckCircle2, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const CreateTask = () => {
  const [problemDescription, setDescription] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [customBudget, setCustomBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [priority, setPriority] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const budgetOptions = [
    { label: "$250", value: "250", description: "Quick fix" },
    { label: "$400", value: "400", description: "Standard" },
    { label: "$600", value: "600", description: "Complex" },
  ];

  const timelineOptions = [
    { label: "24 hours", value: "24h", icon: "⚡" },
    { label: "3 days", value: "3d", icon: "🚀" },
    { label: "1 week", value: "1w", icon: "📅" },
    { label: "Flexible", value: "flexible", icon: "🌊" },
  ];

  const aiChips = [
    { label: "Generate structured task", icon: Sparkles },
    { label: "Suggest title + criteria", icon: FileText },
    { label: "Rewrite for developers", icon: Code },
  ];

  const handleAiChipClick = (chipLabel: string) => {
    if (problemDescription.trim()) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setShowPreview(true);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="w-full py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-20 pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Create Your First Task
            </h1>
            <p className="text-muted-foreground text-lg">
              Describe what you need — we'll handle the rest
            </p>
          </div>

          {/* Main Card */}
          <Card className="glass-card border-border/30 shadow-soft overflow-hidden">
            <CardContent className="p-6 md:p-8 space-y-8">
              
              {/* Section 1: Problem Description */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-foreground">
                  What needs to get fixed?
                </label>
                <Textarea
                  placeholder="Describe the problem in plain English. You can attach screenshots or a Loom link below..."
                  className="min-h-[140px] text-base bg-background/50 border-border/50 focus:border-primary/50 resize-none rounded-xl"
                  value={problemDescription}
                  onChange={(e) => setDescription(e.target.value)}
                />

                {/* AI Helper Chips */}
                <div className="flex flex-wrap gap-2">
                  {aiChips.map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => handleAiChipClick(chip.label)}
                      disabled={!problemDescription.trim() || isGenerating}
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                        "bg-primary/10 text-primary hover:bg-primary/20 hover:scale-[1.02]",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                        isGenerating && "animate-pulse"
                      )}
                    >
                      <chip.icon className="w-4 h-4" />
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-border/50 rounded-xl p-6 bg-background/30 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Image className="w-6 h-6 text-primary" />
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                        <Video className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Drag & drop screenshots or paste a Loom URL
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        PNG, JPG, GIF up to 10MB or any Loom link
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>

              {/* Section 2: AI Task Preview */}
              <Collapsible open={showPreview} onOpenChange={setShowPreview}>
                <CollapsibleTrigger asChild>
                  <button 
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-xl transition-all",
                      showPreview 
                        ? "bg-primary/10 border border-primary/20" 
                        : "bg-secondary/50 hover:bg-secondary/70"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className={cn("w-5 h-5", showPreview ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-medium">AI-Generated Task Preview</span>
                      {showPreview && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                          Ready
                        </Badge>
                      )}
                    </div>
                    {showPreview ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <div className="bg-background/50 rounded-xl p-5 space-y-4 border border-border/30">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Suggested Title
                      </p>
                      <p className="font-semibold text-foreground">
                        Fix mobile signup UX — input field alignment issue
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                        Problem Summary
                      </p>
                      <p className="text-foreground/80">
                        The signup form on mobile has misaligned input fields causing users to struggle with form completion.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Acceptance Criteria
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Input fields are properly aligned on all mobile viewports",
                          "Form validation errors display correctly",
                          "Submit button is accessible without scrolling"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Section 3: Priority + Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Priority */}
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-foreground">
                    Priority
                  </label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="w-full h-12 rounded-xl bg-background/50 border-border/50">
                      <SelectValue placeholder="Select priority level" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="low">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          Low
                        </span>
                      </SelectItem>
                      <SelectItem value="medium">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-yellow-500" />
                          Medium
                        </span>
                      </SelectItem>
                      <SelectItem value="high">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          High
                        </span>
                      </SelectItem>
                      <SelectItem value="urgent">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          Urgent
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-foreground">
                    Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedBudget(option.value);
                          setCustomBudget("");
                        }}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                          selectedBudget === option.value
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "bg-secondary/50 text-foreground hover:bg-secondary"
                        )}
                      >
                        <span className="font-bold">{option.label}</span>
                        <span className="text-xs opacity-70 ml-1">({option.description})</span>
                      </button>
                    ))}
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="Custom"
                        value={customBudget}
                        onChange={(e) => {
                          setCustomBudget(e.target.value);
                          setSelectedBudget(null);
                        }}
                        className="w-24 h-10 pl-8 rounded-xl bg-secondary/50 border-border/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Timeline */}
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  When do you need this by?
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedTimeline(option.value)}
                      className={cn(
                        "px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2",
                        selectedTimeline === option.value
                          ? "bg-primary text-primary-foreground shadow-glow"
                          : "bg-secondary/50 text-foreground hover:bg-secondary"
                      )}
                    >
                      <span>{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 5: CTA Buttons */}
              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="flex-1"
                  >
                    Create Task
                  </Button>
                  <Button 
                    variant="hero-secondary" 
                    size="lg"
                    className="sm:w-auto"
                  >
                    Save as Draft
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Contributors will self-select and begin immediately.
                </p>
              </div>

            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreateTask;
