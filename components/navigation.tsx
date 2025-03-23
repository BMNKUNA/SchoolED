"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/schoolED.png"
              alt="SchoolED Logo"
              width={120}
              height={60}
              className="rounded-full"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 lg:space-x-16">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded-lg text-white animate-pulse-flash">
              Get Started
            </Button>
          </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md shadow-md">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button className="w-full bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded-lg text-white animate-pulse-flash">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;