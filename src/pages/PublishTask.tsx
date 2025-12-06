import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Share2, 
  Copy, 
  Mail, 
  MessageSquare,
  Clock,
  Users,
  TrendingUp,
  Eye,
  Bell,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Twitter,
  Linkedin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const matchingContributors = [
  { name: "Alex Chen", avatar: "AC", skills: ["React", "TypeScript"], rating: 4.9, completedTasks: 47 },
  { name: "Sarah Kim", avatar: "SK", skills: ["UI/UX", "Tailwind"], rating: 4.8, completedTasks: 32 },
  { name: "Mike Johnson", avatar: "MJ", skills: ["Node.js", "APIs"], rating: 4.7, completedTasks: 28 },
];

const activityFeed = [
  { type: "view", message: "Task viewed by 3 contributors", time: "Just now" },
  { type: "interest", message: "Alex Chen expressed interest", time: "2 min ago" },
  { type: "view", message: "Task shared on Discord", time: "5 min ago" },
];

export default function PublishTask() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const taskLink = "https://codebounty.io/tasks/fix-dashboard-layout-123";
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(taskLink);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "Share it with your network to attract contributors.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Success Header */}
      <div className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">CodeBounty</Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/createtaskv2">Create Another Task</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Success Banner */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your Task is Live! 🎉
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Contributors are being notified. You'll receive updates as they express interest.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Task Summary Card */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">Priority</Badge>
                    <h2 className="text-xl font-semibold text-foreground">Fix Dashboard Layout Issue</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold gradient-text">$420</p>
                    <p className="text-sm text-muted-foreground">Reward</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-xl bg-muted/30">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">3 days</p>
                    <p className="text-sm text-muted-foreground">Expected delivery</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/30">
                    <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">Matching contributors</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/30">
                    <TrendingUp className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">High</p>
                    <p className="text-sm text-muted-foreground">Interest expected</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Share Your Task</h3>
                  <Badge variant="outline" className="ml-auto">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Boost visibility
                  </Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 mb-4">
                  <input 
                    type="text" 
                    value={taskLink}
                    readOnly
                    className="flex-1 bg-transparent text-sm text-muted-foreground outline-none"
                  />
                  <Button size="sm" variant="secondary" onClick={handleCopyLink}>
                    {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discord
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Matching Contributors */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Top Matching Contributors</h3>
                  <Button variant="ghost" size="sm">
                    View all <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {matchingContributors.map((contributor, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-medium">
                        {contributor.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{contributor.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {contributor.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">⭐ {contributor.rating}</p>
                        <p className="text-xs text-muted-foreground">{contributor.completedTasks} completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Activity & Stats */}
          <div className="space-y-6">
            {/* Live Stats */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="font-semibold text-foreground">Live Stats</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Task visibility</span>
                      <span className="font-medium text-foreground">Excellent</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Views</span>
                    </div>
                    <span className="font-semibold text-foreground">24</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Interested</span>
                    </div>
                    <span className="font-semibold text-foreground">3</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-primary/10 border border-primary/20 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">Submissions</span>
                    </div>
                    <span className="font-semibold text-primary">0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
                
                <div className="space-y-4">
                  {activityFeed.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'interest' ? 'bg-green-500' : 'bg-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  View all activity
                </Button>
              </CardContent>
            </Card>

            {/* What's Next */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Contributors will review your task</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border border-muted-foreground mt-0.5 flex items-center justify-center text-xs">2</div>
                    <span>Interested contributors will apply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border border-muted-foreground mt-0.5 flex items-center justify-center text-xs">3</div>
                    <span>Review submissions & approve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border border-muted-foreground mt-0.5 flex items-center justify-center text-xs">4</div>
                    <span>Reward released on completion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  <Badge variant="secondary">On</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  You'll receive email updates when contributors apply or submit work.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Manage notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
