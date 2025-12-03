import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We shipped our mobile fixes in 1 week using CodeBounty. Would have taken us a sprint otherwise.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
  },
  {
    quote: "Finally, a way to clear our bug backlog without pulling engineers off key features.",
    author: "Marcus Johnson",
    role: "Engineering Lead",
    company: "ScaleUp",
  },
  {
    quote: "The quality of work is incredible. PRs are clean, tested, and ready to merge.",
    author: "Emily Rodriguez",
    role: "Founder & CEO",
    company: "LaunchPad",
  },
];

const logos = [
  "TechFlow", "ScaleUp", "LaunchPad", "Innovate", "BuildFast", "ShipIt"
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-soft-blue/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Product Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what teams are saying about CodeBounty
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
