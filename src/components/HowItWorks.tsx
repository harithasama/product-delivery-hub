import { Upload, DollarSign, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Describe the Problem",
    description: "Upload screenshots, share a Loom video, or simply write what needs fixing. We'll understand exactly what you need.",
  },
  {
    icon: DollarSign,
    title: "Set Reward & Urgency",
    description: "Choose your budget and timeline. We instantly match you with verified developers ready to tackle your task.",
  },
  {
    icon: CheckCircle,
    title: "Review & Ship",
    description: "Review the pull request, approve the changes, and deploy. Your fix is live in hours, not weeks.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From problem to production in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 gradient-border">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
