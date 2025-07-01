"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-background text-foreground backdrop-blur-md z-50 border-b h-28 flex items-center">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#E3F0FF" />
            <circle cx="32" cy="32" r="20" fill="#2563eb" />
            <g>
              <text x="32" y="38" textAnchor="middle" fontSize="24" fontFamily="Arial, Helvetica, sans-serif" fill="#fff" fontWeight="bold">₹</text>
            </g>
            <g stroke="#2563eb" strokeWidth="2">
              <line x1="32" y1="4" x2="32" y2="14" />
              <line x1="32" y1="50" x2="32" y2="60" />
              <line x1="4" y1="32" x2="14" y2="32" />
              <line x1="50" y1="32" x2="60" y2="32" />
              <line x1="13.5" y1="13.5" x2="20.5" y2="20.5" />
              <line x1="43.5" y1="43.5" x2="50.5" y2="50.5" />
              <line x1="13.5" y1="50.5" x2="20.5" y2="43.5" />
              <line x1="43.5" y1="20.5" x2="50.5" y2="13.5" />
            </g>
          </svg>
          <span className="ml-2 text-2xl font-bold text-blue-700">Wealth</span>
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" size="icon" className="ml-4">
            <span className="sr-only">Toggle dark mode</span>
            {mounted ? (theme === 'dark' ? <SunIcon /> : <MoonIcon />) : null}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
