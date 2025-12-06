import { Clock, DollarSign, GitBranch, Tag } from "lucide-react";

const tasks = [
  {
    title: "Fix mobile signup layout",
    reward: 300,
    urgency: "Medium",
    category: "UI/UX",
    tech: ["React", "CSS"],
  },
  {
    title: "Improve dashboard loading time",
    reward: 400,
    urgency: "High",
    category: "Performance",
    tech: ["React", "API"],
  },
  {
    title: "Add missing error states",
    reward: 250,
    urgency: "Low",
    category: "UI/UX",
    tech: ["React", "TypeScript"],
  },
  {
    title: "Fix OAuth redirect bug",
    reward: 500,
    urgency: "Urgent",
    category: "Auth",
    tech: ["Node.js", "OAuth"],
  },
  {
    title: "Write API documentation",
    reward: 350,
    urgency: "Medium",
    category: "Docs",
    tech: ["Markdown", "API"],
  },
  {
    title: "Implement dark mode toggle",
    reward: 275,
    urgency: "Low",
    category: "Feature",
    tech: ["React", "CSS"],
  },
];

const urgencyColors: Record<string, string> = {
  Low: "bg-green-500/10 text-green-500",
  Medium: "bg-yellow-500/10 text-yellow-600",
  High: "bg-orange-500/10 text-orange-500",
  Urgent: "bg-red-500/10 text-red-500",
};

export function ContributorTaskFeed() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" />
            For Contributors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Tasks</span> Ready to Claim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse real tasks from product teams. Pick what excites you.
          </p>
        </div>

        {/* Scrolling feed */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-scroll">
            {[...tasks, ...tasks].map((task, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl min-w-[320px] hover:shadow-glow transition-all duration-300 group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {task.category}
                  </span>
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${urgencyColors[task.urgency]}`}>
                    {task.urgency}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {task.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {task.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Active now</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-lg text-primary">
                    <DollarSign className="w-5 h-5" />
                    <span>{task.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/explore" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            View all available tasks
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
