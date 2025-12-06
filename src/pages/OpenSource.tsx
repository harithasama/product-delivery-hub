import { Github, Users, FileText, Clock, Star, GitBranch, Code2, Zap, Trophy, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { DualFooter } from "@/components/DualFooter";

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

const techLogos = [
  { name: "React", color: "from-blue-400 to-blue-600" },
  { name: "Vue", color: "from-green-400 to-green-600" },
  { name: "Next.js", color: "from-gray-600 to-gray-800" },
  { name: "Node", color: "from-green-500 to-green-700" },
  { name: "Python", color: "from-yellow-400 to-blue-500" },
  { name: "Go", color: "from-cyan-400 to-cyan-600" },
  { name: "Rust", color: "from-orange-400 to-orange-600" },
];

const stats = [
  { value: "240+", label: "Active Programs" },
  { value: "$150K+", label: "Paid to Contributors" },
  { value: "2,500+", label: "Issues Resolved" },
  { value: "800+", label: "Contributors" },
];

const benefits = [
  { icon: DollarSign, title: "Earn Real Rewards", description: "Get paid for your contributions to open source projects" },
  { icon: Trophy, title: "Build Your Portfolio", description: "Shipped PRs that showcase your skills to employers" },
  { icon: Users, title: "Join a Community", description: "Connect with maintainers and fellow contributors" },
  { icon: Zap, title: "Work on What You Love", description: "Choose issues that match your interests and skills" },
];

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-hero opacity-80" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />

          <div className="container px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Empowering{" "}
                  <span className="gradient-text">Open Source</span>{" "}
                  Development
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  Fix open source issues fast —{" "}
                  <span className="px-2 py-1 rounded bg-muted text-foreground font-medium">reward contributors</span>{" "}
                  easily and transparently.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" className="group">
                    <Github className="w-5 h-5" />
                    Login with GitHub
                  </Button>
                  <Button variant="hero-secondary" size="xl">
                    Explore Bounties
                  </Button>
                </div>
              </div>

              {/* Right - Bring Your Repo card */}
              <div className="relative">
                <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20">
                  <h3 className="text-2xl font-bold text-center mb-8">Bring Your Repo</h3>
                  
                  {/* Tech logos */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {techLogos.map((tech, index) => (
                      <div
                        key={index}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                        title={tech.name}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-muted-foreground text-sm">
                    Connect any GitHub repo and start creating bounties in minutes
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg floating">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg floating" style={{ animationDelay: "0.5s" }}>
                  <GitBranch className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border/50">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Contribute on <span className="gradient-text">CodeBounty</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get rewarded for making open source better
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Bounty Programs */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                240+ Active Bounty <span className="gradient-text">Programs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse open source projects with active bounties waiting to be claimed
              </p>
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

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Code2 className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold mb-4">Ready to Start Contributing?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect your GitHub, browse bounties, and start earning for your open source contributions today.
              </p>
              <Button variant="hero" size="xl">
                <Github className="w-5 h-5" />
                Get Started with GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>

      <DualFooter />
    </div>
  );
};

export default OpenSource;
