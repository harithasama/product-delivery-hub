import { Clock, DollarSign } from "lucide-react";

const tasks = [
  { title: "Improve mobile signup UX", reward: 500, urgency: "High", category: "UI/UX" },
  { title: "Fix OAuth callback bug", reward: 600, urgency: "Critical", category: "Backend" },
  { title: "Write missing API docs", reward: 350, urgency: "Medium", category: "Docs" },
  { title: "Add dark mode toggle", reward: 400, urgency: "Low", category: "Feature" },
  { title: "Optimize image loading", reward: 450, urgency: "High", category: "Performance" },
  { title: "Fix checkout validation", reward: 550, urgency: "Critical", category: "Bug" },
  { title: "Update onboarding flow", reward: 700, urgency: "Medium", category: "UI/UX" },
  { title: "Add email templates", reward: 300, urgency: "Low", category: "Feature" },
];

const urgencyColors: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive",
  High: "bg-accent/10 text-accent",
  Medium: "bg-primary/10 text-primary",
  Low: "bg-muted text-muted-foreground",
};

export function LiveTasksFeed() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live <span className="gradient-text">Task Feed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real tasks being solved right now by our developer community
          </p>
        </div>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {[...tasks, ...tasks].map((task, index) => (
            <div
              key={`${task.title}-${index}`}
              className="flex-shrink-0 w-80 glass-card rounded-2xl p-6 gradient-border transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer group"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {task.category}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${urgencyColors[task.urgency]}`}>
                  {task.urgency}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {task.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Active now</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="gradient-text">{task.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
