'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="p-2 text-pink-800"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2">
                  <Image 
                    src="/images/logo.png"
                    alt="Eluthandweni Clinic Logo"
                    width={80}
                    height={44}
                    className="rounded-full"
                  />
                  <span className="text-xl font-bold text-pink-800">Eluthandweni Clinic</span>
                </Link>
                <Button variant="ghost" className="p-2 text-pink-800" onClick={toggleMenu}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </div>
              <nav className="flex flex-col items-start justify-start flex-grow space-y-6">
                <Link
                  href="/"
                  className={`text-xl font-semibold ${
                    pathname === '/' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`text-xl font-semibold ${
                    pathname === '/services' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className={`text-xl font-semibold ${
                    pathname === '/about' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-xl font-semibold ${
                    pathname === '/contact' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className={`text-xl font-semibold ${
                    pathname === '/login' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Login
                </Link>
              </nav>
              <div className="mt-auto">
                <Link href="/contact">
                  <Button className="w-full bg-pink-800 hover:bg-pink-700 text-white">Enquire</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}