import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    type: "product",
    quote: "Cleared our backlog by 40% in one week. Our team finally has breathing room.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "TechFlow",
    avatar: "SC",
  },
  {
    type: "contributor",
    quote: "Earned $4,200 fixing issues I genuinely enjoy. Better than any freelance platform.",
    author: "Marcus Rivera",
    role: "Senior Developer",
    company: "Independent",
    avatar: "MR",
  },
  {
    type: "product",
    quote: "We shipped mobile improvements in days, not sprints. Game changer for our velocity.",
    author: "James Wilson",
    role: "Engineering Lead",
    company: "StartupXYZ",
    avatar: "JW",
  },
  {
    type: "contributor",
    quote: "Real products, real impact. Built my portfolio with PRs that actually shipped.",
    author: "Aisha Patel",
    role: "Full Stack Developer",
    company: "Open Source",
    avatar: "AP",
  },
  {
    type: "product",
    quote: "No hiring, no onboarding. Just describe the problem and get clean code back.",
    author: "Emily Zhang",
    role: "Founder",
    company: "NexGen",
    avatar: "EZ",
  },
  {
    type: "contributor",
    quote: "The transparency is incredible. I know exactly what I'm building and what I'll earn.",
    author: "David Kim",
    role: "Frontend Engineer",
    company: "Freelance",
    avatar: "DK",
  },
];

export function DualTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Both Sides</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Product teams and contributors building great things together
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group"
              >
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    testimonial.type === "product" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {testimonial.type === "product" ? "Product Team" : "Contributor"}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/20" />
                  <p className="text-foreground leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    testimonial.type === "product"
                      ? "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground"
                      : "bg-gradient-to-br from-accent to-accent/70 text-accent-foreground"
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["TechFlow", "StartupXYZ", "NexGen", "InnovateCo", "BuildFast"].map((company, index) => (
              <div key={index} className="text-xl font-bold text-muted-foreground/60">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
