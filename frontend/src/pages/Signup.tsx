import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	ArrowRight,
	Mail,
	Lock,
	Shield,
} from "lucide-react";

export default function Signup() {
	useEffect(() => {
		// Prevent scrolling on larger screens, allow on mobile
		const handleResize = () => {
			if (window.innerHeight >= 800) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
		};

		// Set initial state
		handleResize();
		
		// Listen for window resize
		window.addEventListener('resize', handleResize);
		
		// Cleanup
		return () => {
			document.body.style.overflow = 'unset';
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		
		// Clear error when user starts typing
		if (errors[name as keyof typeof errors]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {
			email: '',
			password: '',
			confirmPassword: ''
		};

		// Email validation
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		// Password validation
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 8) {
			newErrors.password = 'Password must be at least 8 characters';
		}

		// Confirm password validation
		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Please confirm your password';
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}

		setErrors(newErrors);
		return !Object.values(newErrors).some(error => error !== '');
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// TODO: Implement signup logic
			console.log('Signup form submitted:', formData);
		}
	};

	const handleGoogleSignup = () => {
		// TODO: Implement Google OAuth with Firebase
		console.log("Google signup clicked");
	};

	const handleGithubSignup = () => {
		// TODO: Implement GitHub OAuth with Firebase
		console.log("GitHub signup clicked");
	};

	return (
		<div className="h-screen md:h-screen bg-background">
			{/* Background Elements */}
			<div className="fixed inset-0 bg-gradient-hero opacity-5"></div>
			<div className="fixed top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
			<div className="fixed bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>

			<div className="h-[calc(100vh-4rem)] flex items-center justify-center px-4 relative z-10 py-4 md:py-12 overflow-y-auto">
				<div className="w-full max-w-md">
					{/* Header */}
					<div className="text-center mb-6">
						<h1 className="text-3xl font-bold text-foreground mb-2">
							Create your account
						</h1>
						<p className="text-muted-foreground">
							Join thousands of learners using AI-powered assessments
						</p>
					</div>

					{/* Signup Card */}
					<Card className="shadow-strong bg-card/50 backdrop-blur-sm border-border/50">
						<CardContent className="p-6 space-y-4">
							{/* Email Form */}
							<form onSubmit={handleSubmit} className="space-y-2">
								<div className="space-y-1">
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
											name="email"
											type="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Enter your email address"
											className={`w-full h-10 pl-10 pr-4 text-sm rounded-lg border ${
												errors.email ? 'border-red-500' : 'border-border'
											} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
										/>
									</div>
									{errors.email && (
										<p className="text-xs text-red-500">{errors.email}</p>
									)}
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
											name="password"
											type="password"
											value={formData.password}
											onChange={handleInputChange}
											placeholder="Create a strong password"
											className={`w-full h-10 pl-10 pr-4 text-sm rounded-lg border ${
												errors.password ? 'border-red-500' : 'border-border'
											} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
										/>
									</div>
									{errors.password && (
										<p className="text-xs text-red-500">{errors.password}</p>
									)}
								</div>

								<div className="space-y-1">
									<label
										htmlFor="confirmPassword"
										className="text-sm font-medium text-foreground"
									>
										Confirm Password
									</label>
									<div className="relative">
										<Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
										<input
											id="confirmPassword"
											name="confirmPassword"
											type="password"
											value={formData.confirmPassword}
											onChange={handleInputChange}
											placeholder="Confirm your password"
											className={`w-full h-10 pl-10 pr-4 text-sm rounded-lg border ${
												errors.confirmPassword ? 'border-red-500' : 'border-border'
											} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
										/>
									</div>
									{errors.confirmPassword && (
										<p className="text-xs text-red-500">{errors.confirmPassword}</p>
									)}
								</div>
							</form>

							{/* Sign Up Button */}
							<div className="flex items-center justify-center">
								<Button 
									onClick={handleSubmit}
									className="w-3/4 h-9 bg-gradient-primary text-white font-medium hover:shadow-lg transition-all duration-300"
								>
									Create account
								</Button>
							</div>

							{/* Divider */}
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-border" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="bg-card/50 backdrop-blur-sm px-4 text-muted-foreground font-medium">
										Or sign up with
									</span>
								</div>
							</div>

							{/* OAuth Buttons */}
							<div className="space-y-2">
								<Button
									onClick={handleGoogleSignup}
									variant="outline"
									className="w-full h-10 text-sm font-medium hover:shadow-md transition-all duration-300"
								>
									<img src="/google.svg" alt="Google" className="h-4 w-4 mr-3" />
									Sign up with Google
								</Button>

								<Button
									onClick={handleGithubSignup}
									variant="outline"
									className="w-full h-10 text-sm font-medium hover:shadow-md transition-all duration-300"
								>
									<img src="/github.svg" alt="GitHub" className="h-4 w-4 mr-3" />
									Sign up with GitHub
								</Button>
							</div>

							{/* Terms and Conditions */}
							<div className="text-center text-xs text-muted-foreground leading-relaxed">
								By creating an account, you agree to our{" "}
								<Link to="/terms" className="text-primary hover:underline font-medium">
									Terms of Service
								</Link>{" "}
								and{" "}
								<Link to="/privacy" className="text-primary hover:underline font-medium">
									Privacy Policy
								</Link>
							</div>

							{/* Sign in link */}
							<div className="text-center border-t border-border/50 pt-3">
								<p className="text-sm text-muted-foreground">
									Already have an account?{" "}
									<Link
										to="/login"
										className="text-primary hover:underline font-medium"
									>
										Sign in
									</Link>
								</p>
							</div>
						</CardContent>
					</Card>

					{/* Footer */}
					<div className="mt-4 text-center">
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