"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const partners = [
    "Primary Schools — Gauteng",
    "High Schools — Johannesburg",
    "Independent Schools",
    "Early Learning Centres",
    "Community School Projects",
  ]

  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <span className="text-xl font-bold">Schools We Serve</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap rounded-md bg-gray-900 p-4">
            <div className="ticker-content inline-flex animate-ticker space-x-8">
              {partners.map((partner) => (
                <span key={partner} className="text-gray-400">
                  {partner}
                </span>
              ))}
              {partners.map((partner) => (
                <span key={partner + "_duplicate"} className="text-gray-400">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/sponsor", label: "Sponsor a Child" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-11 items-center text-gray-400 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for educational tips and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-base text-white placeholder-gray-400"
              />
              <Button className="min-h-11 w-full bg-blue-800 hover:bg-blue-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SchoolED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
