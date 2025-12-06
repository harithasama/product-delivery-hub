import { CheckCircle2, Zap, Clock, DollarSign, Code2, Trophy, GitPullRequest, Star } from "lucide-react";

const productOwnerBenefits = [
  { icon: Zap, text: "Offload UI fixes, bugs, docs" },
  { icon: CheckCircle2, text: "Clear backlog instantly" },
  { icon: Clock, text: "Ship improvements between sprints" },
  { icon: DollarSign, text: "Pay only for delivered work" },
];

const contributorBenefits = [
  { icon: Code2, text: "Pick tasks you like" },
  { icon: DollarSign, text: "Earn rewards transparently" },
  { icon: GitPullRequest, text: "Contribute to real products" },
  { icon: Trophy, text: "Build portfolio with shipped PRs" },
];

export function SplitValueSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for the <span className="gradient-text">whole team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're shipping products or writing code, CodeBounty works for you.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Product Owners Column */}
          <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-300 group">
            {/* Visual illustration */}
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-primary/30" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-green-500/30" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                  <span className="text-xs text-green-500 font-medium">Done</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-yellow-500/30" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                  <span className="text-xs text-yellow-500 font-medium">In Progress</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              For Product Owners
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              Move Faster Without More Headcount
            </h3>
            
            <ul className="space-y-4">
              {productOwnerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contributors Column */}
          <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-300 group">
            {/* Visual illustration */}
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <GitPullRequest className="w-4 h-4" />
                <span>Pull Request #1234</span>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs">Merged</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-green-500/30 rounded w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>+142 lines</span>
                  <span className="text-green-500">$400 earned</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent" />
                <span className="text-sm text-muted-foreground">Great work! Approved ✓</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              For Contributors
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
              Work on What Matters. Get Rewarded.
            </h3>
            
            <ul className="space-y-4">
              {contributorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
