"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Clock, CreditCard, MapPin, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface BubbleProps {
  size: string;
  startPosition: number;
  duration: number;
  delay: number;
  color: string;
}

const Bubble = ({
  size,
  startPosition,
  duration,
  delay,
  color,
}: BubbleProps) => (
  <div
    className="absolute rounded-full mix-blend-multiply pointer-events-none"
    style={{
      width: size,
      height: size,
      left: startPosition + "%",
      backgroundColor: color,
      opacity: 0.2,
      animation: `float-bubble ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

const RandomBubbles = () => {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const colors = [
      "rgb(186, 230, 253)", // light blue
      "rgb(199, 210, 254)", // light indigo
      "rgb(196, 241, 255)", // cyan
      "rgb(186, 230, 253)", // sky blue
      "rgb(224, 242, 254)", // lighter blue
    ];

    const newBubbles = Array.from({ length: 20 }).map(() => ({
      size: `${Math.random() * 60 + 40}px`,
      startPosition: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: -Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setBubbles(newBubbles);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <Bubble key={`${bubble.startPosition}-${bubble.duration}-${bubble.delay}`} {...bubble} />
      ))}
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Animated Bubbles Background */}
      <RandomBubbles />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your own personal kea-Teka
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Connect with reliable cleaners near you for all your cleaning
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Cleaner</h3>
                <p className="text-muted-foreground">
                  Choose your preferred time and location. Our system matches
                  you with available cleaners near you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Track in Real-time
                </h3>
                <p className="text-muted-foreground">
                  Monitor the cleaning progress and communicate directly with
                  your cleaner.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Payment</h3>
                <p className="text-muted-foreground">
                  Secure payment through M-PESA after the service is completed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose KeaTeka?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Verified Cleaners
              </h3>
              <p className="text-muted-foreground">
                All cleaners undergo thorough background checks.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Flexible Scheduling
              </h3>
              <p className="text-muted-foreground">
                Book cleanings at times that work best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers across Kenya
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/register">Create Account</Link>
          </Button>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get the KeaTeka App</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
              onClick={() => window.location.href = 'https://apps.apple.com/app/keateka'}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </button>

            <button
              onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.keateka'}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 text-white mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 KeaTeka LLC. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Bubble Animation Styles */}
      <style>{`
        @keyframes float-bubble {
          0% {
            transform: translateY(120vh) scale(1);
          }
          25% {
            transform: translateY(90vh) translateX(20px) scale(1.1);
          }
          50% {
            transform: translateY(60vh) translateX(-20px) scale(0.95);
          }
          75% {
            transform: translateY(30vh) translateX(20px) scale(1.05);
          }
          100% {
            transform: translateY(-20vh) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
