import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  ChevronDown, 
  CheckCircle2, 
  DollarSign,
  Settings,
  Star,
  Award,
  Calendar,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const CreateTaskV2 = () => {
  const [timelinePosition, setTimelinePosition] = useState([1]); // 0 = Flexible, 1 = Standard, 2 = Priority
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [customReward, setCustomReward] = useState("");
  const [enableBonus, setEnableBonus] = useState(false);
  const [allowBidding, setAllowBidding] = useState(false);

  const timelineConfig = useMemo(() => {
    const configs = [
      { 
        label: "Flexible", 
        reward: 280, 
        days: 7, 
        interest: "Moderate",
        description: "Lower cost, more time for contributors"
      },
      { 
        label: "Standard", 
        reward: 350, 
        days: 3, 
        interest: "High",
        description: "Balanced speed and cost"
      },
      { 
        label: "Priority", 
        reward: 480, 
        days: 1, 
        interest: "Very High",
        description: "Fastest delivery, premium pricing"
      },
    ];
    return configs[timelinePosition[0]];
  }, [timelinePosition]);

  const activeReward = customReward ? parseInt(customReward) : timelineConfig.reward;

  const contributors = [
    { name: "Alex Chen", avatar: "AC", skills: ["React", "TypeScript"], completions: 47, rating: 4.9 },
    { name: "Sarah Miller", avatar: "SM", skills: ["UI/UX", "CSS"], completions: 32, rating: 4.8 },
    { name: "James Park", avatar: "JP", skills: ["Node.js", "API"], completions: 28, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Subtle background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative w-full py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative px-4 pb-20 pt-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Set Your Reward
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We'll recommend the optimal amount based on task complexity and expected contributor availability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Reward Configuration */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Recommended Reward Card */}
              <Card className="overflow-hidden border-0 shadow-xl shadow-primary/5 bg-card">
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">AI Recommended</p>
                        <h2 className="text-lg font-semibold text-foreground">Optimal Reward</h2>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "px-3 py-1 font-medium",
                        timelineConfig.interest === "Very High" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                        timelineConfig.interest === "High" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                        timelineConfig.interest === "Moderate" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      )}
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {timelineConfig.interest} interest expected
                    </Badge>
                  </div>

                  {/* Main Reward Display */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-muted/30">
                    <div className="text-center md:text-left">
                      <div className="flex items-baseline gap-1 justify-center md:justify-start">
                        <span className="text-muted-foreground text-2xl">$</span>
                        <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                          {activeReward}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-2">Recommended reward</p>
                    </div>
                    
                    <div className="flex gap-6 text-center">
                      <div className="px-6 py-3 rounded-xl bg-card shadow-sm">
                        <div className="flex items-center justify-center gap-1.5 text-foreground font-semibold text-xl">
                          <Clock className="w-5 h-5 text-primary" />
                          {timelineConfig.days} {timelineConfig.days === 1 ? 'day' : 'days'}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Expected delivery</p>
                      </div>
                      <div className="px-6 py-3 rounded-xl bg-card shadow-sm">
                        <div className="flex items-center justify-center gap-1.5 text-foreground font-semibold text-xl">
                          <Users className="w-5 h-5 text-primary" />
                          8+
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Available contributors</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        How fast do you need this?
                      </label>
                      <span className="text-sm text-muted-foreground">{timelineConfig.description}</span>
                    </div>
                    
                    <div className="relative pt-2 pb-6">
                      <Slider
                        value={timelinePosition}
                        onValueChange={setTimelinePosition}
                        max={2}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-3 px-1">
                        {["Flexible", "Standard", "Priority"].map((label, i) => (
                          <button
                            key={label}
                            onClick={() => setTimelinePosition([i])}
                            className={cn(
                              "text-sm font-medium transition-colors",
                              timelinePosition[0] === i 
                                ? "text-primary" 
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Confirm Button */}
                  <Button 
                    size="lg" 
                    className="w-full h-14 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Confirm Reward — ${activeReward}
                  </Button>
                </CardContent>
              </Card>

              {/* Advanced Settings */}
              <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-5 flex items-center justify-between hover:bg-muted/30 transition-colors rounded-xl">
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">Advanced Settings</span>
                      </div>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        advancedOpen && "rotate-180"
                      )} />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-5 pb-5 space-y-5 border-t border-border/50 pt-5">
                      {/* Custom Reward */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Custom Reward Amount</label>
                        <div className="relative max-w-xs">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="number"
                            placeholder="Enter custom amount"
                            value={customReward}
                            onChange={(e) => setCustomReward(e.target.value)}
                            className="pl-9 h-11 rounded-lg bg-background"
                          />
                        </div>
                      </div>

                      {/* Performance Bonus */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-medium text-foreground">Performance Bonus</p>
                            <p className="text-sm text-muted-foreground">Add 15% bonus for early delivery</p>
                          </div>
                        </div>
                        <Switch checked={enableBonus} onCheckedChange={setEnableBonus} />
                      </div>

                      {/* Contributor Bidding */}
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Allow Bidding</p>
                            <p className="text-sm text-muted-foreground">Let contributors propose their own rates</p>
                          </div>
                        </div>
                        <Switch checked={allowBidding} onCheckedChange={setAllowBidding} />
                      </div>

                      {/* Max Deadline */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          Maximum Delivery Deadline
                        </label>
                        <Input
                          type="date"
                          className="max-w-xs h-11 rounded-lg bg-background"
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>

              {/* Submission Preview */}
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="p-5 border-b border-border/50 flex items-center gap-3">
                  <Eye className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">What Contributors Will See</span>
                </div>
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Fix mobile signup UX — input field alignment</h3>
                      <p className="text-sm text-muted-foreground">React • TypeScript • CSS</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">${activeReward}</p>
                        <p className="text-xs text-muted-foreground">{timelineConfig.days}-day delivery</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Open
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 h-14 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Publish Task
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 px-8 text-lg font-medium rounded-xl"
                >
                  Save as Draft
                </Button>
              </div>
            </div>

            {/* Right Column - Contributor Insights */}
            <div className="space-y-6">
              {/* Marketplace Insights */}
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Marketplace Insights</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">Similar tasks complete in</span>
                      <span className="font-semibold text-foreground">2–4 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">Average reward</span>
                      <span className="font-semibold text-foreground">$320</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm text-muted-foreground">Completion rate</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Relevant Contributors */}
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Top Contributors</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {contributors.map((contributor, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                          {contributor.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate">{contributor.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {contributor.skills.join(" • ")}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                            {contributor.rating}
                          </div>
                          <p className="text-xs text-muted-foreground">{contributor.completions} done</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Tip */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">AI Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Tasks with clear acceptance criteria and screenshots get completed 2x faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateTaskV2;
