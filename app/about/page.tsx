'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Updated staff members for SchoolED
const staffMembers = [
  {
    name: "Jane Nkosi",
    role: "Founder & CEO",
    description: "Leading SchoolED with passion and dedication to educational excellence.",
    photo: "/images/jane_nkosi.jpg", // Add path to image
  },
  {
    name: "David Molefe",
    role: "Operations Director",
    description: "Overseeing all production and delivery of our educational products and services.",
    photo: "/images/david_molefe.jpg", // Add path to image
  },
  {
    name: "Sarah Johnson",
    role: "Design Lead",
    description: "Creative genius behind our uniform designs and website aesthetics.",
    photo: "/images/sarah_johnson.jpg", // path to image
  },
  {
    name: "Thabo Mbeki",
    role: "Client Relations",
    description: "Ensuring our educational partners receive exceptional service and support.",
    photo: "/images/thabo_mbeki.jpg", // path to image
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
        {/* About Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About SchoolED</h1>
              <p className="text-xl text-gray-600">Providing quality educational services since 2010</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/office-exterior.png"
                  alt="SchoolED Office Exterior"
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
        <section className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Founder</h2>
              <p className="text-xl text-gray-600">The visionary who started it all</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Jane Nkosi's Vision</h3>
                <p className="text-gray-600 mb-6">
                  Jane Nkosi started SchoolED after noticing the challenges schools faced in sourcing quality uniforms and educational materials. With a background in education and a passion for helping students succeed, Jane set out to create solutions that would make life easier for schools, teachers, and students alike.
                </p>
                <p className="text-gray-600 mb-6">
                  Her dedication to quality and service has established SchoolED as a trusted partner for educational institutions across South Africa.
                </p>
                <p className="text-gray-600">
                  Under Jane's leadership, SchoolED continues to expand its offerings while maintaining its commitment to excellence and affordability.
                </p>
              </div>
              <div>
                <Image
                  src="/images/founder.jpg"
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
                      src={staffMembers[currentStaffIndex].photo || "/placeholder.svg?height=128&width=128"}
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
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-600 mb-6">
                  From its humble beginnings, SchoolED has grown to offer a comprehensive range of educational products and services...
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Custom school uniforms</li>
                  <li>Modern school websites</li>
                  <li>Tracksuits and sportswear</li>
                  <li>Matric jackets</li>
                  <li>Matric dance suits</li>
                  <li>Event photography</li>
                  <li>Kids nametags</li>
                  <li>Sponsor a child program</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/services.jpg"
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
        <section className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Education</h2>
              <p className="text-xl text-gray-600">Supporting schools and students across South Africa</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Quality Products</h3>
                <p className="text-gray-600">
                  We're committed to providing the highest quality products that are durable, comfortable, and represent your school with pride.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Educational Support</h3>
                <p className="text-gray-600">
                  Through our sponsor a child program, we help provide educational resources to underprivileged students across South Africa.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We are constantly working to expand our services and improve our products to better serve the educational community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}