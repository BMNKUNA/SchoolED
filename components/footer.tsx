'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const educationalPartners = [
    { name: "Department of Education", icon: "/images/doe.png" },
    { name: "National School Board", icon: "/images/nsb.png" },
    { name: "Educational Trust", icon: "/images/edutrust.png" },
    { name: "School Sports Association", icon: "/images/sports.png" },
    { name: "Academic Excellence Foundation", icon: "/images/academic.png" },
  ];

  const affiliatesSponsors = [
    { name: "University of Pretoria", logo: "/images/up.png" },
    { name: "Wits University", logo: "/images/wits.png" },
    { name: "Educational Publishers", logo: "/images/publishers.png" },
    { name: "Youth Development Fund", logo: "/images/youth.png" },
    { name: "Future Leaders Foundation", logo: "/images/leaders.png" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Affiliates & Sponsors Section */}
        <div className="mb-8 text-center">
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
                    className="object-contain"
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
                    className="object-contain"
                  />
                  <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Educational Partners Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Educational Partners</span>
            </div>
            <ul className="space-y-2">
              {educationalPartners.map((partner) => (
                <li key={partner.name} className="flex items-center space-x-2">
                  <img
                    src={partner.icon || "/placeholder.svg"}
                    alt={partner.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <span className="text-gray-400 hover:text-white">{partner.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section with Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Link href="https://www.facebook.com" passHref>
                  <FaFacebook size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Facebook</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.twitter.com" passHref>
                  <FaTwitter size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Twitter</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.instagram.com" passHref>
                  <FaInstagram size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <Link href="https://www.linkedin.com" passHref>
                  <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
                </Link>
                <span className="text-gray-400 hover:text-white">LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/sponsor" className="text-gray-400 hover:text-white">Sponsor a Child</Link></li>
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
  );
}