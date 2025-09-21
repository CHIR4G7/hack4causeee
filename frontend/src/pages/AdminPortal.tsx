import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Upload,
  Plus,
  Settings,
  Brain,
  Users,
  BarChart3,
  FileText,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  BookOpen,
} from "lucide-react";

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState("upload");

  const assessments = [
    { id: 1, title: "JavaScript Fundamentals", type: "Multiple Choice", questions: 25, status: "Active", participants: 45 },
    { id: 2, title: "React Development", type: "Mixed", questions: 30, status: "Draft", participants: 0 },
    { id: 3, title: "Data Structures", type: "Coding", questions: 15, status: "Active", participants: 28 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Create and manage AI-powered assessments for your learners.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Assessments", value: "12", icon: <FileText className="h-5 w-5" />, color: "bg-gradient-primary" },
            { title: "Active Learners", value: "248", icon: <Users className="h-5 w-5" />, color: "bg-gradient-secondary" },
            { title: "Questions Generated", value: "1,856", icon: <Brain className="h-5 w-5" />, color: "bg-gradient-accent" },
            { title: "Avg. Completion", value: "87%", icon: <Target className="h-5 w-5" />, color: "bg-gradient-primary" },
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
            <TabsTrigger value="upload">Content Upload</TabsTrigger>
            <TabsTrigger value="configure">Configure</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Content Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Course Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Drop your files here</h3>
                  <p className="text-muted-foreground mb-4">Support for PDF, DOCX, PPT, and text files</p>
                  <Button variant="outline">Choose Files</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="course-title">Course Title</Label>
                    <Input id="course-title" placeholder="e.g., Advanced JavaScript" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="course-duration">Duration (hours)</Label>
                    <Input id="course-duration" type="number" placeholder="e.g., 40" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="learning-objectives">Learning Objectives</Label>
                  <Textarea 
                    id="learning-objectives" 
                    placeholder="Describe what learners should achieve after completing this course..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full" variant="hero">
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze Content & Generate Questions
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configure Tab */}
          <TabsContent value="configure" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Assessment Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>Assessment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select assessment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mcq">Multiple Choice Questions</SelectItem>
                        <SelectItem value="short">Short Answer</SelectItem>
                        <SelectItem value="coding">Coding Challenges</SelectItem>
                        <SelectItem value="mixed">Mixed Format</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Difficulty Distribution</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <Input type="number" placeholder="30" className="text-center" />
                        <Label className="text-xs text-muted-foreground">Easy %</Label>
                      </div>
                      <div className="text-center">
                        <Input type="number" placeholder="50" className="text-center" />
                        <Label className="text-xs text-muted-foreground">Medium %</Label>
                      </div>
                      <div className="text-center">
                        <Input type="number" placeholder="20" className="text-center" />
                        <Label className="text-xs text-muted-foreground">Hard %</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="question-count">Number of Questions</Label>
                    <Input id="question-count" type="number" placeholder="25" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                    <Input id="time-limit" type="number" placeholder="60" />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="passing-score">Passing Score (%)</Label>
                    <Input id="passing-score" type="number" placeholder="70" />
                  </div>
                </div>
                
                <Button className="w-full" variant="hero">
                  Create Assessment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assessments Tab */}
          <TabsContent value="assessments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Your Assessments</h2>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                New Assessment
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {assessments.map((assessment) => (
                <Card key={assessment.id} className="hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{assessment.title}</h3>
                          <Badge variant={assessment.status === "Active" ? "default" : "secondary"}>
                            {assessment.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {assessment.questions} questions
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {assessment.participants} participants
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {assessment.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { action: "Assessment completed", user: "John Doe", time: "2 minutes ago", score: "85%" },
                    { action: "New assessment created", user: "Admin", time: "1 hour ago", score: null },
                    { action: "Assessment completed", user: "Jane Smith", time: "3 hours ago", score: "92%" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.user} • {activity.time}</p>
                      </div>
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}