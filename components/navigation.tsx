"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="relative">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-12">
          <Link href="/" className="flex shrink-0 items-center space-x-2">
            <Image
              src="/images/schoolED.png"
              alt="SchoolED Logo"
              width={120}
              height={60}
              className="rounded-full"
              priority
            />
          </Link>

          <nav className="hidden space-x-12 md:flex lg:space-x-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-700 hover:text-blue-800"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link href="/contact">
              <Button className="animate-pulse-flash rounded-lg bg-blue-800 px-6 py-2 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-md md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block min-h-11 rounded-md px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block pt-2">
                <Button className="min-h-11 w-full animate-pulse-flash rounded-lg bg-blue-800 px-6 py-2 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navigation
