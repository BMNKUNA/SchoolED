'use client'
import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import TawkToChat from "@/components/TawkToChat"

// Updated staff members with Nurse Nonina as CEO
const staffMembers = [
  {
    name: "Nurse Nonina",
    role: "CEO",
    description: "Leading Eluthandweni Clinic with passion and dedication to community health.",
    photo: "/images/nursenonina.jpg", // Add path to image
  },
  {
    name: "Dr. Thabo Nkosi",
    role: "General Practitioner",
    description: "Providing comprehensive primary care with over 15 years of experience.",
    photo: "/images/dr_thabo_nkosi.jpg", // Add path to image
  },
  {
    name: "Nurse Nomvula Dlamini",
    role: "Head Nurse",
    description: "Leading our nursing team with expertise in patient care and clinic management.",
    photo: "/images/nurse_nomvula_dlamini.jpg", // path to image
  },
  {
    name: "Dr. Priya Naidoo",
    role: "Pediatrician",
    description: "Specializing in child health and development, ensuring the well-being of our youngest patients.",
    photo: "/images/dr_priya_naidoo.jpg", // path to image
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
      <TawkToChat />

      <main>
        {/* About Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Eluthandweni Clinic</h1>
              <p className="text-xl text-gray-600">Providing compassionate care since 1989</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/clinic-exterior.png"
                  alt="Eluthandweni Clinic Exterior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-gray-600 mb-6">
                  Eluthandweni Clinic was founded in 1989 by Nurse Nonina Dube-Diphoko, known as Mam&apos; Dolly, during a time of great need...
                </p>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Eluthandweni Clinic, our mission is to provide accessible, high-quality healthcare services to all members of our communities...
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
                <h3 className="text-2xl font-bold mb-4">Mam&apos; Dolly&apos;s Legacy</h3>
                <p className="text-gray-600 mb-6">
                  Mam&apos; Dolly was a beacon of hope and a tireless advocate for her community. With over 50 years of nursing experience...
                </p>
                <p className="text-gray-600 mb-6">
                  Her compassion, skill, and unwavering commitment earned her the nickname &quot;the Florence Nightingale of Vosloorus.&quot;
                </p>
                <p className="text-gray-600">
                  Though Mam&apos; Dolly passed away in 2022, her spirit lives on in every aspect of our clinic&apos;s operations and in the hearts of the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="relative h-screen bg-pink-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-pink-800 opacity-80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet Our Dedicated Staff</h2>
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
                      src={`/images/staff/nursed.jpg`}
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

        {/* Facilities Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Facilities</h2>
                <p className="text-gray-600 mb-6">
                  From its humble beginnings, Eluthandweni Clinic has grown into a modern healthcare facility...
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Maternity ward with dedicated midwives</li>
                  <li>General practitioner consultations</li>
                  <li>Pediatric care</li>
                  <li>HIV/AIDS treatment and counseling</li>
                  <li>Chronic disease management</li>
                  <li>Emergency services</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/clinic-facilities.jpg"
                  alt="Eluthandweni Clinic Facilities"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to the Community</h2>
              <p className="text-xl text-gray-600">Continuing Mam&apos; Dolly&apos;s legacy of care and compassion</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Accessible Healthcare</h3>
                <p className="text-gray-600">
                  We strive to make quality healthcare accessible to all, regardless of their ability to pay...
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Community Education</h3>
                <p className="text-gray-600">
                  We regularly host workshops and seminars on various health topics, empowering our community...
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We are constantly working to expand our services and improve our facilities to better serve our community.
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