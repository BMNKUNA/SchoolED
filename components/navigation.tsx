"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/schoolED.png"
              alt="SchoolED Logo" 
              width={110}
              height={60}
              className="rounded-full"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-800 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-800 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-800 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium">
              Contact
            </Link>
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:flex">
            <Button className="bg-blue-800 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-blue-800 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navigation };