import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Brain, ArrowRight, Mail, Lock } from "lucide-react";

export default function Login() {
	useEffect(() => {
		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";

		// Restore scrolling on unmount
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	const handleGoogleLogin = () => {
		// TODO: Implement Google OAuth with Firebase
		console.log("Google login clicked");
	};

	const handleGithubLogin = () => {
		// TODO: Implement GitHub OAuth with Firebase
		console.log("GitHub login clicked");
	};

	return (
		<div className="fixed inset-0 bg-background overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
			<div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>

			<div className="h-full flex items-center justify-center px-4 relative z-10 pt-16">
				<div className="w-full max-w-md">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-foreground mb-2">
							Welcome back
						</h1>
						<p className="text-muted-foreground">
							Sign in to continue your learning journey
						</p>
					</div>

					{/* Login Card */}
					<Card className="shadow-strong bg-card/50 backdrop-blur-sm border-border/50">
						<CardContent className="p-8 space-y-5">
							{/* Email Form */}
							<div className="space-y-3">
								<div className="space-y-2">
									<label
										htmlFor="email"
										className="text-sm font-medium text-foreground block"
									>
										Email address
									</label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<input
											id="email"
											type="email"
											placeholder="Enter your email address"
											className="w-full h-10 pl-10 pr-4 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="password"
										className="text-sm font-medium text-foreground"
									>
										Password
									</label>
									<div className="relative">
										<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<input
											id="password"
											type="password"
											placeholder="Enter your password"
											className="w-full h-10 pl-10 pr-4 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
										/>
									</div>
									<div className="text-right">
										<Link
											to="/forgot-password"
											className="text-xs text-muted-foreground hover:text-primary transition-colors"
										>
											Forgot your password?
										</Link>
									</div>
								</div>
							</div>

							{/* Sign In Button */}
							<div className="flex items-center justify-center">
								<Button className="w-3/4 h-9 bg-gradient-primary text-white font-medium hover:shadow-lg transition-all duration-300">
									Sign in
								</Button>
							</div>

							{/* Divider */}
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="bg-card/50 backdrop-blur-sm px-4 text-muted-foreground font-medium">
										Or continue with
									</span>
								</div>
							</div>

							{/* OAuth Buttons */}
							<div className="space-y-2">
								<Button
									onClick={handleGoogleLogin}
									variant="outline"
									className="w-full h-10 text-sm font-medium hover:shadow-md transition-all duration-300"
								>
									<img
										src="/google.svg"
										alt="Google"
										className="h-4 w-4 mr-3"
									/>
									Continue with Google
								</Button>

								<Button
									onClick={handleGithubLogin}
									variant="outline"
									className="w-full h-10 text-sm font-medium hover:shadow-md transition-all duration-300"
								>
									<img
										src="/github.svg"
										alt="GitHub"
										className="h-4 w-4 mr-3"
									/>
									Continue with GitHub
								</Button>
							</div>

							{/* Sign up link */}
							<div className="text-center border-t border-border/50 pt-4">
								<p className="text-sm text-muted-foreground">
									Don't have an account?{" "}
									<Link
										to="/signup"
										className="text-primary hover:underline font-medium"
									>
										Sign up for free
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Footer */}
					<div className="mt-6 text-center space-y-3">
						<div className="text-xs text-muted-foreground space-x-4">
							<Link
								to="/terms"
								className="hover:text-primary transition-colors"
							>
								Terms of Service
							</Link>
							<span>•</span>
							<Link
								to="/privacy"
								className="hover:text-primary transition-colors"
							>
								Privacy Policy
							</Link>
						</div>

						<Link
							to="/"
							className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							<ArrowRight className="h-4 w-4 mr-2 rotate-180" />
							Back to home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
