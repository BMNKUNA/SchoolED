"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, X, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const affiliatesSponsors = [
    {
      name: "University of Pretoria",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Wits University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    },
    {
      name: "Educational Publishers",
      logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    },
    {
      name: "Youth Development Fund",
      logo: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Future Leaders Foundation",
      logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Affiliates & Sponsors Section */}
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-xl font-bold">Our Affiliates & Sponsors</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap bg-gray-900 p-4 rounded-md">
            <div className="ticker-content inline-flex space-x-8 animate-ticker">
              {affiliatesSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex items-center space-x-2">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={30}
                    height={30}
                    className="object-contain rounded-full"
                  />
                  <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
                </div>
              ))}
              {/* Duplicate the sponsors for seamless scrolling */}
              {affiliatesSponsors.map((sponsor) => (
                <div key={sponsor.name + "_duplicate"} className="flex items-center space-x-2">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={30}
                    height={30}
                    className="object-contain rounded-full"
                  />
                  <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Follow Us Section with Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Link href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </Link>
                <span className="text-gray-400 hover:text-white">Facebook</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.x.com" className="text-gray-400 hover:text-white">
                  <X size={24} />
                </Link>
                <span className="text-gray-400 hover:text-white">X</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.instagram.com" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </Link>
                <span className="text-gray-400 hover:text-white">Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </Link>
                <span className="text-gray-400 hover:text-white">LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-gray-400 hover:text-white">
                  Sponsor a Child
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for educational tips and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-800 hover:bg-blue-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SchoolED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}