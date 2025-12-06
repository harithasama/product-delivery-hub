import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const footerLinks = {
  "For Product Teams": [
    { label: "Create a Task", href: "/create-task" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  "For Contributors": [
    { label: "Explore Tasks", href: "/explore" },
    { label: "Get Started", href: "/contributors" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Earnings Guide", href: "/earnings" },
  ],
  "Resources": [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/support" },
  ],
  "Company": [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/codebounty", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/codebounty", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/codebounty", label: "Discord" },
  { icon: Mail, href: "mailto:hello@codebounty.com", label: "Email" },
];

export function DualFooter() {
  return (
    <footer className="relative pt-20 pb-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container px-4 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="text-2xl font-bold gradient-text mb-4">CodeBounty</div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Connecting product teams with skilled contributors. Ship faster, earn meaningfully.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeBounty. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
