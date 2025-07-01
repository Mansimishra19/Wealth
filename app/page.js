import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mb-6">Build Wealth, Not Worry</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Your all-in-one platform to track, analyze, and grow your finances with confidence. Simple. Smart. Secure.</p>
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/sign-in">
              <Button size="lg" className="px-8">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-3 gap-8 my-16">
        <div className="rounded-xl shadow p-8 bg-muted text-foreground">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Track Expenses</h3>
          <p> Easily log and categorize your spending. Visualize where your money goes every month.</p>
        </div>
        <div className="rounded-xl shadow p-8 bg-muted text-foreground">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Set Budgets</h3>
          <p>Set monthly budgets and get alerts when you're close to your limit. Stay in control, always.</p>
        </div>
        <div className="rounded-xl shadow p-8 bg-muted text-foreground">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">AI Insights</h3>
          <p>Get personalized, AI-powered insights to help you save more and spend smarter.</p>
        </div>
      </section>

      {/* Why Choose Wealth Section */}
      <section className="container mx-auto px-4 text-center my-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Wealth?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1">
            <div className="text-5xl mb-2">🔒</div>
            <h4 className="font-semibold text-lg mb-1 text-foreground">Secure & Private</h4>
            <p className="text-foreground">Your data is encrypted and never shared. You're always in control.</p>
          </div>
          <div className="flex-1">
            <div className="text-5xl mb-2">⚡</div>
            <h4 className="font-semibold text-lg mb-1 text-foreground">Fast & Intuitive</h4>
            <p className="text-foreground">A beautiful, modern interface that works on any device.</p>
          </div>
          <div className="flex-1">
            <div className="text-5xl mb-2">🤖</div>
            <h4 className="font-semibold text-lg mb-1 text-foreground">AI-Powered</h4>
            <p className="text-foreground">Let our AI help you make smarter financial decisions, every day.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center bg-muted rounded-xl p-8 shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances smarter with Wealth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
