import { Users, Code2, Rocket } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "For Product Owners",
    description: "Move faster between sprint cycles. Stop waiting for engineering bandwidth to fix that nagging UI bug or polish that feature.",
    color: "primary",
  },
  {
    icon: Code2,
    title: "For Engineering Leads",
    description: "Offload your backlog and unblock your team. Focus on architecture while we handle the fixes that slow you down.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "For Founders",
    description: "Ship the last 10% of product polish. Get your MVP to market-ready without hiring a full-time developer.",
    color: "gradient-mid",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-purple/30 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">Product Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a PM, engineering lead, or founder — we help you ship faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative"
            >
              <div className="glass-card rounded-3xl p-10 h-full text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-2">
                {/* Icon container */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-2xl gradient-hero opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                  <div className="relative w-full h-full rounded-2xl bg-card border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
