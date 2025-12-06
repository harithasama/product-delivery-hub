import { FileText, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Tasks Get Created",
    description: "Product teams describe problems clearly with screenshots, context, and acceptance criteria.",
    visual: "task-creation",
  },
  {
    icon: Users,
    number: "02",
    title: "Contributors Pick & Deliver",
    description: "Skilled developers self-select tasks they're excited about and submit clean PRs.",
    visual: "matching",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Review & Ship",
    description: "Teams review, approve, and ship quickly. Contributors get paid on merge.",
    visual: "shipping",
  },
];

export function SharedJourney() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple journey from problem to solution
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 hidden md:block" style={{ transform: 'translateY(-50%)' }} />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-8 rounded-3xl text-center hover:shadow-glow transition-all duration-300 group h-full">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold z-10">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Visual illustration */}
                    <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border/50">
                      {step.visual === "task-creation" && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-primary/20" />
                            <div className="flex-1">
                              <div className="h-2 bg-foreground/20 rounded w-3/4 mb-1" />
                              <div className="h-2 bg-foreground/10 rounded w-1/2" />
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary">$400</span>
                            <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/20 text-yellow-600">Medium</span>
                          </div>
                        </div>
                      )}
                      {step.visual === "matching" && (
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-background" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-background" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-background" />
                          </div>
                          <span className="text-xs text-muted-foreground">3 interested</span>
                        </div>
                      )}
                      {step.visual === "shipping" && (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-green-500 font-medium">Merged & Paid</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
