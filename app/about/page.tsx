'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Updated staff members for SchoolED
const staffMembers = [
  {
    name: "Jane Nkosi",
    role: "Founder & CEO",
    description: "Leading SchoolED with passion and dedication to educational excellence.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
  },
  {
    name: "David Molefe",
    role: "Operations Director",
    description: "Overseeing all production and delivery of our educational products and services.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Design Lead",
    description: "Creative genius behind our uniform designs and website aesthetics.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
  },
  {
    name: "Thabo Mbeki",
    role: "Client Relations",
    description: "Ensuring our educational partners receive exceptional service and support.",
    photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];

export default function AboutPage() {
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStaffIndex((prevIndex) => (prevIndex + 1) % staffMembers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-800 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="School Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SchoolED</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Providing quality educational services since 2010
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="SchoolED Office"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-gray-600 mb-6">
                  SchoolED was founded in 2010 by Jane Nkosi with a simple mission: to provide high-quality products and services to schools across South Africa. What began as a small uniform supplier has grown into a comprehensive educational services provider.
                </p>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At SchoolED, our mission is to enhance the educational experience through quality products and services that allow schools to focus on their core mission of teaching and learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Founder</h2>
              <p className="text-xl text-gray-600">The visionary who started it all</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Jane Nkosi&apos;s Vision</h3>
                <p className="text-gray-600 mb-6">
                  Jane Nkosi started SchoolED after noticing the challenges schools faced in sourcing quality uniforms and educational materials. With a background in education and a passion for helping students succeed, Jane set out to create solutions that would make life easier for schools, teachers, and students alike.
                </p>
                <p className="text-gray-600 mb-6">
                  Her dedication to quality and service has established SchoolED as a trusted partner for educational institutions across South Africa.
                </p>
                <p className="text-gray-600">
                  Under Jane&apos;s leadership, SchoolED continues to expand its offerings while maintaining its commitment to excellence and affordability.
                </p>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                  alt="Jane Nkosi - Founder"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="relative h-screen bg-blue-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-800 opacity-80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet Our Dedicated Team</h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStaffIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src={staffMembers[currentStaffIndex].photo || "/placeholder.svg"}
                      alt={staffMembers[currentStaffIndex].name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{staffMembers[currentStaffIndex].name}</h3>
                <p className="text-xl mb-4">{staffMembers[currentStaffIndex].role}</p>
                <p className="text-lg">{staffMembers[currentStaffIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-600 mb-6">
                  From its humble beginnings, SchoolED has grown to offer a comprehensive range of educational products and services to meet the diverse needs of schools across South Africa.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Custom school uniforms</li>
                  <li>Modern school websites</li>
                  <li>CareerKids costumes</li>
                  <li>Tracksuits and sportswear</li>
                  <li>Matric jackets</li>
                  <li>Matric dance suits</li>
                  <li>Event photography</li>
                  <li>Kids nametags</li>
                  <li>Sponsor a child program</li>
                </ul>
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700">View All Services</Button>
                </Link>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="SchoolED Services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community Commitment Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Education</h2>
              <p className="text-xl text-gray-600">Supporting schools and students across South Africa</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality Products</h3>
                <p className="text-gray-600">
                  We&apos;re committed to providing the highest quality products that are durable, comfortable, and represent your school with pride.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-green-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Educational Support</h3>
                <p className="text-gray-600">
                  Through our sponsor a child program, we help provide educational resources to underprivileged students across South Africa.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-purple-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h16L13 3v7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We are constantly working to expand our services and improve our products to better serve the educational community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with SchoolED?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can support your school with our comprehensive educational services.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
