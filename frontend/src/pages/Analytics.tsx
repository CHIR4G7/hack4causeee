import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Clock,
  Award,
  Brain,
  Download,
  Filter,
  Calendar,
} from "lucide-react";

export default function Analytics() {
  const performanceData = [
    { metric: "Overall Completion Rate", value: "87%", change: "+5%", trend: "up" },
    { metric: "Average Score", value: "82%", change: "+3%", trend: "up" },
    { metric: "Time to Complete", value: "45min", change: "-8min", trend: "up" },
    { metric: "Active Learners", value: "248", change: "+23", trend: "up" },
  ];

  const topPerformers = [
    { name: "Sarah Johnson", score: 96, assessments: 12, badges: 8 },
    { name: "Michael Chen", score: 94, assessments: 15, badges: 12 },
    { name: "Emily Davis", score: 92, assessments: 10, badges: 6 },
    { name: "David Wilson", score: 91, assessments: 14, badges: 9 },
    { name: "Lisa Anderson", score: 89, assessments: 11, badges: 7 },
  ];

  const assessmentMetrics = [
    { title: "JavaScript Fundamentals", participants: 89, avgScore: 84, completion: 92 },
    { title: "React Development", participants: 67, avgScore: 78, completion: 85 },
    { title: "Data Structures", participants: 45, avgScore: 72, completion: 78 },
    { title: "Python Basics", participants: 123, avgScore: 86, completion: 94 },
  ];

  const learningPatterns = [
    { pattern: "Peak Learning Hours", value: "2-4 PM", insight: "Most active learning period" },
    { pattern: "Preferred Difficulty", value: "Medium", insight: "70% choose medium difficulty" },
    { pattern: "Average Session", value: "32 min", insight: "Optimal engagement duration" },
    { pattern: "Retry Rate", value: "23%", insight: "Good persistence indicator" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive insights into learning performance and engagement.</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Select defaultValue="30days">
              <SelectTrigger className="w-40">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 3 months</SelectItem>
                <SelectItem value="year">This year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="hero">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceData.map((metric, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">{metric.metric}</p>
                  <TrendingUp className={`h-4 w-4 ${metric.trend === 'up' ? 'text-secondary' : 'text-destructive'}`} />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <Badge variant={metric.trend === 'up' ? 'default' : 'destructive'}>
                    {metric.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analytics */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="learners">Learners</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive chart showing performance trends over time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Learning Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Engagement metrics and activity patterns</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Learning Patterns */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Patterns & Behaviors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {learningPatterns.map((pattern, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-1">{pattern.pattern}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{pattern.value}</p>
                      <p className="text-sm text-muted-foreground">{pattern.insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assessments Tab */}
          <TabsContent value="assessments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assessmentMetrics.map((assessment, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:shadow-soft transition-smooth">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground">{assessment.title}</h3>
                        <Badge variant="outline">{assessment.participants} participants</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                          <p className="text-xl font-bold text-foreground">{assessment.avgScore}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
                          <p className="text-xl font-bold text-foreground">{assessment.completion}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">Participants</p>
                          <p className="text-xl font-bold text-foreground">{assessment.participants}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learners Tab */}
          <TabsContent value="learners" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((learner, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                          index === 0 ? 'bg-gradient-secondary' : 
                          index === 1 ? 'bg-gradient-accent' : 
                          index === 2 ? 'bg-gradient-primary' : 'bg-muted-foreground'
                        }`}>
                          #{index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{learner.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {learner.assessments} assessments • {learner.badges} badges earned
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">{learner.score}%</p>
                        <p className="text-sm text-muted-foreground">Average Score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI-Generated Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">🎯 Performance Insight</h3>
                    <p className="text-muted-foreground mb-4">
                      Learners who spend more than 30 minutes on assessments show 23% higher scores. 
                      Consider implementing time guidance features.
                    </p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                  
                  <div className="p-6 bg-gradient-secondary/5 border border-secondary/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">📊 Engagement Pattern</h3>
                    <p className="text-muted-foreground mb-4">
                      Afternoon sessions (2-4 PM) have the highest completion rates. 
                      Schedule important assessments during these peak hours.
                    </p>
                    <Button variant="outline" size="sm">Implement</Button>
                  </div>
                  
                  <div className="p-6 bg-gradient-accent/5 border border-accent/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">🔄 Improvement Area</h3>
                    <p className="text-muted-foreground mb-4">
                      Questions on advanced concepts show 34% lower success rates. 
                      Consider adding prerequisite assessments or study materials.
                    </p>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                  
                  <div className="p-6 bg-gradient-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">💡 Recommendation</h3>
                    <p className="text-muted-foreground mb-4">
                      Implementing adaptive difficulty based on previous performance 
                      could increase overall engagement by an estimated 18%.
                    </p>
                    <Button variant="outline" size="sm">Explore</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}