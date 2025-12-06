import { useState } from "react";
import { 
  Github, Users, FileText, Clock, Star, GitBranch, Code2, Zap, Trophy, DollarSign,
  ArrowRight, Sparkles, CheckCircle2, Layout, GitPullRequest, ListChecks, Target,
  Rocket, Calendar, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { DualFooter } from "@/components/DualFooter";
import { Link } from "react-router-dom";

// Bounty programs data
const bountyPrograms = [
  {
    title: "React Component Library",
    badge: "TOP BOUNTIES",
    maxReward: 500,
    reports: 24,
    members: 450,
    tags: ["React", "TypeScript", "UI Components"],
  },
  {
    title: "API Gateway Improvements",
    badge: "HIGHEST BOUNTIES",
    maxReward: 800,
    reports: 18,
    members: 320,
    tags: ["Node.js", "API", "Performance"],
  },
  {
    title: "Mobile App Bug Fixes",
    badge: "TOP BOUNTIES",
    maxReward: 350,
    reports: 31,
    members: 280,
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Documentation Overhaul",
    badge: "NEW",
    maxReward: 200,
    reports: 8,
    members: 150,
    tags: ["Docs", "Markdown", "Technical Writing"],
  },
  {
    title: "CI/CD Pipeline Fixes",
    badge: "TOP BOUNTIES",
    maxReward: 450,
    reports: 15,
    members: 220,
    tags: ["DevOps", "GitHub Actions", "Docker"],
  },
  {
    title: "Security Vulnerability Patches",
    badge: "HIGHEST BOUNTIES",
    maxReward: 1000,
    reports: 12,
    members: 180,
    tags: ["Security", "Node.js", "Audit"],
  },
];

// Product owner benefits
const productBenefits = [
  { icon: Zap, text: "Clear backlog faster without more headcount" },
  { icon: CheckCircle2, text: "Fix UI issues, bugs, and polish gaps quickly" },
  { icon: Calendar, text: "Ship improvements between sprint cycles" },
  { icon: DollarSign, text: "Transparent pricing. Pay only for completed work" },
];

// Contributor benefits
const contributorBenefits = [
  { icon: Target, text: "Work on meaningful issues from real products" },
  { icon: Trophy, text: "Earn rewards for shipped solutions" },
  { icon: GitPullRequest, text: "Build your portfolio with accepted PRs" },
  { icon: Users, text: "Join an active open-source-first community" },
];

// How it works steps
const steps = [
  {
    icon: FileText,
    title: "Describe the Task",
    description: "Product teams describe issues clearly with context, screenshots, and acceptance criteria.",
  },
  {
    icon: Target,
    title: "Set Reward & Priority",
    description: "Define budget and urgency. Tasks get matched to contributors instantly.",
  },
  {
    icon: Rocket,
    title: "Deliver & Ship",
    description: "Contributors submit clean PRs. Product owners review and ship quickly.",
  },
];

const OSSForProduct = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-hero opacity-90" />
          
          {/* Floating shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Persona badges */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-sm">
                  <Layout className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">For Product Teams</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-sm">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="text-accent font-medium">For Contributors</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Empowering <span className="gradient-text">Product & Engineering</span>{" "}
                <br className="hidden md:block" />
                Teams to Move Faster.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Create tasks, fix issues, and ship improvements quickly — whether you're a product owner clearing your backlog or an engineer contributing your expertise.
              </p>

              {/* Prompt box */}
              <div className="max-w-2xl mx-auto">
                <div className="glass-card p-2 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Describe what needs to be fixed or improved..."
                      className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground/60"
                    />
                    <Button variant="hero" size="lg" className="shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Dual CTA Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/create-task">
                  <Button variant="hero" size="xl" className="group">
                    <ListChecks className="w-5 h-5" />
                    Create a Task
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="hero-secondary" size="xl" className="group">
                    <Code2 className="w-5 h-5" />
                    Explore Tasks
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Persona icons row */}
              <div className="flex items-center justify-center gap-6 pt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-primary" />
                  </div>
                  <span>Roadmaps</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GitPullRequest className="w-4 h-4 text-accent" />
                  </div>
                  <span>Pull Requests</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ListChecks className="w-4 h-4 text-primary" />
                  </div>
                  <span>Task Cards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-accent" />
                  </div>
                  <span>Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VALUE PROP SECTION ===== */}
        <section className="py-24 relative">
          <div className="container px-4">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for the <span className="gradient-text">Whole Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're shipping products or writing code, CodeBounty works for you.
              </p>
            </div>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Product Owners Column */}
              <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-300 group border-l-4 border-l-primary">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Layout className="w-4 h-4" />
                  For Product Owners
                </div>
                
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                  Move Faster Without More Headcount
                </h3>
                
                <ul className="space-y-4">
                  {productBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contributors Column */}
              <div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-300 group border-l-4 border-l-accent">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <Code2 className="w-4 h-4" />
                  For Contributors & Engineers
                </div>
                
                <h3 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors">
                  Work on What Matters. Get Rewarded.
                </h3>
                
                <ul className="space-y-4">
                  {contributorBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A simple journey from problem to solution
              </p>
            </div>

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

        {/* ===== ACTIVE PROGRAMS ===== */}
        <section className="py-24 relative">
          <div className="container px-4">
            {/* Header with dual perspective labels */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Active Bounty <span className="gradient-text">Programs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                A real marketplace connecting product teams and contributors
              </p>
              
              {/* Dual perspective labels */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Layout className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">For Product Teams: Post tasks & track progress fast</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent">For Contributors: Pick tasks & earn rewards</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {bountyPrograms.map((program, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 cursor-pointer group"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      program.badge === "HIGHEST BOUNTIES" 
                        ? "bg-primary/10 text-primary" 
                        : program.badge === "NEW"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {program.badge}
                    </span>
                  </div>

                  {/* Reward */}
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">Rewards up to</span>
                    <div className="text-3xl font-bold text-primary">${program.maxReward}</div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm mb-4 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Reports</span>
                      <span className="font-medium text-foreground ml-1">{program.reports}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Members</span>
                      <span className="font-medium text-foreground ml-1">{program.members}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {program.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
              <Button variant="hero-secondary" size="lg">
                View All Programs
              </Button>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Layout className="w-7 h-7 text-primary" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're shipping products or building solutions, CodeBounty connects you to what matters.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/create-task">
                  <Button variant="hero" size="xl">
                    Create a Task
                  </Button>
                </Link>
                <Button variant="hero-secondary" size="xl">
                  <Github className="w-5 h-5" />
                  Start Contributing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DualFooter />
    </div>
  );
};

export default OSSForProduct;
