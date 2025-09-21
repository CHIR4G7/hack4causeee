import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTypewriter } from "@/hooks/use-typewriter";
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
	const typewriterText = useTypewriter({
		words: ["Smart", "Quick", "Modern", "Clever"],
		typeSpeed: 200, // Slower typing (was 100)
		deleteSpeed: 100, // Slower deleting (was 60)
		delayBetweenWords: 4000, // Much longer pause between words (was 2000)
	});
	const features = [
		{
			icon: <Upload className="h-6 w-6" />,
			title: "Smart Content Upload",
			description:
				"Upload course materials and let AI generate comprehensive assessments automatically.",
		},
		{
			icon: <Settings className="h-6 w-6" />,
			title: "Flexible Configuration",
			description:
				"Customize assessment types, difficulty levels, and time constraints with ease.",
		},
		{
			icon: <Brain className="h-6 w-6" />,
			title: "AI-Powered Questions",
			description:
				"Generate dynamic MCQs, coding challenges, and scenario-based questions instantly.",
		},
		{
			icon: <Zap className="h-6 w-6" />,
			title: "Instant Evaluation",
			description:
				"Get immediate feedback with AI-driven scoring and detailed explanations.",
		},
		{
			icon: <Target className="h-6 w-6" />,
			title: "Personalized Learning",
			description:
				"Receive tailored recommendations based on performance and learning gaps.",
		},
		{
			icon: <BarChart3 className="h-6 w-6" />,
			title: "Advanced Analytics",
			description:
				"Track progress with comprehensive dashboards and performance insights.",
		},
	];

	const benefits = [
		{
			icon: <CheckCircle className="h-5 w-5 text-secondary" />,
			text: "Automated assessment creation",
		},
		{
			icon: <CheckCircle className="h-5 w-5 text-secondary" />,
			text: "Scalable evaluation system",
		},
		{
			icon: <CheckCircle className="h-5 w-5 text-secondary" />,
			text: "Real-time performance tracking",
		},
		{
			icon: <CheckCircle className="h-5 w-5 text-secondary" />,
			text: "Personalized learning paths",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
				<div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>

				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center max-w-4xl mx-auto animate-fade-in">
						<Badge
							variant="secondary"
							className="mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium shadow-soft"
						>
							<Sparkles className="h-3 w-3 md:h-4 md:w-4 mr-2" />
							🚀 AI-Powered Assessment Platform
						</Badge>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2">
							{/* Mobile: Simple 2 line layout */}
							<span className="block md:hidden">
								<span className="block">Transform Learning with</span>
								<span className="block mt-1">
									<span className="bg-gradient-primary bg-clip-text text-transparent">
										Smart
									</span>{" "}
									<span className="bg-gradient-secondary bg-clip-text text-transparent">
										Assessments
									</span>
								</span>
							</span>

							{/* Desktop: Simple typewriter with natural spacing */}
							<span className="hidden md:block">
								<span className="block">Transform Learning with</span>
								<span className="block mt-2">
									<span className="bg-gradient-primary bg-clip-text text-transparent">
										{typewriterText}
									</span>
									<span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">
										|
									</span>
									<span className="bg-gradient-secondary bg-clip-text text-transparent ml-3">
										Assessments
									</span>
								</span>
							</span>
						</h1>

						<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
							Automate assessment creation, provide instant feedback, and
							personalize learning journeys with our cutting-edge AI technology
							that adapts to every learner.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
							<Button
								variant="hero"
								size="lg"
								asChild
								className="w-full sm:w-auto px-6 md:px-8 py-3 shadow-strong hover:shadow-medium transition-all duration-300 text-sm md:text-base"
							>
								<Link to="/signup">
									Start Free Trial
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="w-full sm:w-auto px-6 md:px-8 py-3 hover:shadow-soft transition-all duration-300 text-sm md:text-base"
							>
								<Link to="/demo">Watch Demo</Link>
							</Button>
						</div>

						{/* Trust Indicators */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground px-4">
							<div className="flex items-center gap-2">
								<CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
								<span>Free 14-day trial</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
								<span>No credit card required</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
								<span>Cancel anytime</span>
							</div>
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
								className="flex items-center space-x-3 p-6 bg-card rounded-lg shadow-soft animate-scale-in hover:shadow-medium transition-smooth"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{benefit.icon}
								<span className="font-medium text-foreground">
									{benefit.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
							Trusted by Educators Worldwide
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Join thousands of institutions already transforming their
							assessment process with AssessAI.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								number: "50K+",
								label: "Active Users",
								description: "Educators and Learners",
							},
							{
								number: "2M+",
								label: "Assessments Created",
								description: "AI-Generated Questions",
							},
							{
								number: "95%",
								label: "Satisfaction Rate",
								description: "User Feedback Score",
							},
							{
								number: "40+",
								label: "Countries",
								description: "Global Reach",
							},
						].map((stat, index) => (
							<div
								key={index}
								className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-smooth animate-scale-in"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
									{stat.number}
								</div>
								<div className="text-base font-semibold text-foreground mb-1">
									{stat.label}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.description}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4 px-4 py-2">
							<Zap className="h-4 w-4 mr-2" />
							Platform Features
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							Powerful Features for{" "}
							<span className="bg-gradient-secondary bg-clip-text text-transparent">
								Modern Learning
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							Everything you need to create, deliver, and analyze assessments
							that drive meaningful learning outcomes.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<Card
								key={index}
								className="group relative overflow-hidden hover:shadow-strong transition-all duration-500 cursor-pointer animate-scale-in border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{/* Hover overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								<CardHeader className="relative z-10">
									<div className="h-14 w-14 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-medium">
										{feature.icon}
									</div>
									<CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="relative z-10">
									<p className="text-muted-foreground leading-relaxed mb-4">
										{feature.description}
									</p>
									<div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										Learn more
										<ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 bg-gradient-to-b from-muted/30 to-background">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<Badge variant="secondary" className="mb-4 px-4 py-2">
							<Clock className="h-4 w-4 mr-2" />
							Simple Process
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							How{" "}
							<span className="bg-gradient-primary bg-clip-text text-transparent">
								AssessAI
							</span>{" "}
							Works
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							From content upload to personalized recommendations in four simple
							steps. Get started in minutes, not hours.
						</p>
					</div>

					<div className="relative">
						{/* Connection Lines - Hidden on mobile */}
						<div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5">
							<div className="h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
							{[
								{
									step: "01",
									title: "Upload Content",
									description:
										"Add your course materials, documents, and define clear learning objectives for your assessments",
									icon: <Upload className="h-8 w-8" />,
									color: "from-primary to-primary-light",
								},
								{
									step: "02",
									title: "Configure Assessment",
									description:
										"Set parameters for question types, difficulty levels, time limits, and assessment structure",
									icon: <Settings className="h-8 w-8" />,
									color: "from-secondary to-secondary-light",
								},
								{
									step: "03",
									title: "AI Generation",
									description:
										"Let our advanced AI create dynamic, relevant questions tailored to your content and objectives",
									icon: <Brain className="h-8 w-8" />,
									color: "from-accent to-accent-light",
								},
								{
									step: "04",
									title: "Track Progress",
									description:
										"Monitor learner performance in real-time and provide personalized feedback automatically",
									icon: <Award className="h-8 w-8" />,
									color: "from-primary to-secondary",
								},
							].map((step, index) => (
								<div key={index} className="relative">
									<div
										className="text-center animate-fade-in"
										style={{ animationDelay: `${index * 0.2}s` }}
									>
										{/* Step Circle */}
										<div
											className={`relative h-20 w-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-110 group cursor-pointer`}
										>
											{step.icon}
											<div className="absolute -top-2 -right-2 h-8 w-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
												{step.step}
											</div>
										</div>

										<h3 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
											{step.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
											{step.description}
										</p>
									</div>

									{/* Arrow for larger screens */}
									{index < 3 && (
										<div className="hidden lg:block absolute top-10 -right-6 text-primary/30">
											<ArrowRight className="h-6 w-6" />
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Bottom CTA */}
					<div className="text-center mt-16">
						<Button variant="outline" size="lg" asChild className="group">
							<Link to="/demo">
								See It In Action
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-gradient-hero"></div>
				<div className="absolute top-0 left-0 w-full h-full opacity-10">
					<div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto text-center animate-scale-in">
						<Badge
							variant="secondary"
							className="mb-4 px-6 py-3 bg-white/20 text-white border-white/30"
						>
							<Sparkles className="h-4 w-4 mr-2" />
							Ready to Get Started?
						</Badge>

						<h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
							Ready to Transform Your{" "}
							<span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
								Assessments?
							</span>
						</h2>

						<p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
							Join thousands of educators who are already using AssessAI to
							create more effective, engaging, and personalized learning
							experiences.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
							<Button
								variant="secondary"
								size="lg"
								asChild
								className="w-full sm:w-auto px-8 py-3 bg-white text-primary hover:bg-white/90 shadow-strong"
							>
								<Link to="/admin">
									<Users className="mr-2 h-4 w-4" />
									Start as Admin
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
								className="w-full sm:w-auto px-8 py-3 text-white border-white bg-white/10 hover:bg-white/20 hover:border-white backdrop-blur-sm"
							>
								<Link to="/learner">
									<Brain className="mr-2 h-4 w-4" />
									Join as Learner
								</Link>
							</Button>
						</div>

						{/* Social Proof */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
							<div className="text-center">
								<div className="text-2xl font-bold text-white mb-1">50K+</div>
								<div className="text-white/80 text-sm">Happy Users</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-white mb-1">2M+</div>
								<div className="text-white/80 text-sm">Assessments Created</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-white mb-1">95%</div>
								<div className="text-white/80 text-sm">Satisfaction Rate</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
