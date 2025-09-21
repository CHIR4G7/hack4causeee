import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Brain,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  Upload,
  Settings,
  Award,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Smart Content Upload",
      description: "Upload course materials and let AI generate comprehensive assessments automatically.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Flexible Configuration",
      description: "Customize assessment types, difficulty levels, and time constraints with ease.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Questions",
      description: "Generate dynamic MCQs, coding challenges, and scenario-based questions instantly.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Evaluation",
      description: "Get immediate feedback with AI-driven scoring and detailed explanations.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Receive tailored recommendations based on performance and learning gaps.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Track progress with comprehensive dashboards and performance insights.",
    },
  ];

  const benefits = [
    { icon: <CheckCircle className="h-5 w-5 text-secondary" />, text: "Automated assessment creation" },
    { icon: <CheckCircle className="h-5 w-5 text-secondary" />, text: "Scalable evaluation system" },
    { icon: <CheckCircle className="h-5 w-5 text-secondary" />, text: "Real-time performance tracking" },
    { icon: <CheckCircle className="h-5 w-5 text-secondary" />, text: "Personalized learning paths" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Assessment Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Learning with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent Assessments
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Automate assessment creation, provide instant feedback, and personalize learning journeys 
              with our cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-card rounded-lg shadow-soft animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {benefit.icon}
                <span className="font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, deliver, and analyze assessments that drive learning outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-smooth">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How AssessAI Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From content upload to personalized recommendations in four simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upload Content", description: "Add your course materials and define learning objectives", icon: <Upload className="h-8 w-8" /> },
              { step: "02", title: "Configure Assessment", description: "Set parameters for question types and difficulty levels", icon: <Settings className="h-8 w-8" /> },
              { step: "03", title: "AI Generation", description: "Let AI create dynamic, relevant assessment questions", icon: <Brain className="h-8 w-8" /> },
              { step: "04", title: "Track Progress", description: "Monitor learner performance and provide personalized feedback", icon: <Award className="h-8 w-8" /> },
            ].map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Assessments?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of educators who are already using AssessAI to create more effective learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/admin">Start as Admin</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white hover:text-primary">
                <Link to="/learner">Join as Learner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}