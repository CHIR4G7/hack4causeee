import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  Clock,
  Target,
  Award,
  BookOpen,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Brain,
  Star,
} from "lucide-react";

export default function LearnerPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const availableAssessments = [
    { 
      id: 1, 
      title: "JavaScript Fundamentals", 
      difficulty: "Medium", 
      questions: 25, 
      duration: 45, 
      description: "Test your knowledge of JavaScript basics including variables, functions, and DOM manipulation.",
      progress: 0,
      status: "available"
    },
    { 
      id: 2, 
      title: "React Development", 
      difficulty: "Hard", 
      questions: 30, 
      duration: 60, 
      description: "Advanced React concepts including hooks, context, and state management.",
      progress: 65,
      status: "in-progress"
    },
    { 
      id: 3, 
      title: "Data Structures", 
      difficulty: "Hard", 
      questions: 20, 
      duration: 75, 
      description: "Comprehensive assessment covering arrays, linked lists, trees, and graphs.",
      progress: 100,
      status: "completed"
    },
  ];

  const recentResults = [
    { title: "Python Basics", score: 92, maxScore: 100, date: "2 days ago", status: "passed" },
    { title: "SQL Queries", score: 78, maxScore: 100, date: "1 week ago", status: "passed" },
    { title: "Algorithm Design", score: 65, maxScore: 100, date: "2 weeks ago", status: "needs-improvement" },
  ];

  const recommendations = [
    { title: "Review JavaScript Closures", type: "concept", priority: "high" },
    { title: "Practice Array Methods", type: "exercise", priority: "medium" },
    { title: "Study Async/Await Patterns", type: "tutorial", priority: "high" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-secondary";
      case "medium": return "bg-accent";
      case "hard": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-secondary" />;
      case "in-progress": return <Clock className="h-4 w-4 text-accent" />;
      case "available": return <Play className="h-4 w-4 text-primary" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Learner Portal</h1>
          <p className="text-muted-foreground">Track your progress and continue your learning journey.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Assessments Completed", value: "8", icon: <Award className="h-5 w-5" />, color: "bg-gradient-secondary" },
            { title: "Average Score", value: "84%", icon: <Target className="h-5 w-5" />, color: "bg-gradient-primary" },
            { title: "Study Hours", value: "124", icon: <Clock className="h-5 w-5" />, color: "bg-gradient-accent" },
            { title: "Skills Mastered", value: "12", icon: <Star className="h-5 w-5" />, color: "bg-gradient-secondary" },
          ].map((stat, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`h-12 w-12 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span>73%</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>React</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Structures</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Continue Last Assessment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Practice Questions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Brain className="mr-2 h-4 w-4" />
                    AI Study Guide
                  </Button>
                  <Button className="w-full justify-start" variant="hero">
                    <Target className="mr-2 h-4 w-4" />
                    Take New Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Assessments Tab */}
          <TabsContent value="assessments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Available Assessments</h2>
              <Button variant="outline">
                Filter by Difficulty
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {availableAssessments.map((assessment) => (
                <Card key={assessment.id} className="hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{assessment.title}</CardTitle>
                        <Badge className={getDifficultyColor(assessment.difficulty)}>
                          {assessment.difficulty}
                        </Badge>
                      </div>
                      {getStatusIcon(assessment.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{assessment.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {assessment.questions} questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {assessment.duration} min
                      </span>
                    </div>
                    
                    {assessment.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{assessment.progress}%</span>
                        </div>
                        <Progress value={assessment.progress} className="h-2" />
                      </div>
                    )}
                    
                    <Button 
                      className="w-full" 
                      variant={assessment.status === "completed" ? "outline" : "hero"}
                    >
                      {assessment.status === "completed" ? "View Results" : 
                       assessment.status === "in-progress" ? "Continue" : "Start Assessment"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Assessment Results</h2>
            
            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <Card key={index} className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{result.title}</h3>
                        <p className="text-sm text-muted-foreground">{result.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">
                          {result.score}<span className="text-lg text-muted-foreground">/{result.maxScore}</span>
                        </p>
                        <Badge variant={result.status === "passed" ? "default" : "destructive"}>
                          {result.status === "passed" ? "Passed" : "Needs Improvement"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">AI-Powered Recommendations</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <Badge variant={rec.priority === "high" ? "destructive" : "secondary"}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground capitalize">{rec.type}</p>
                      <Button variant="outline" className="w-full">
                        Start Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}