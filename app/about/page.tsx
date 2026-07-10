'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { DefaultAvatar } from "@/components/default-avatar"
import { company } from "@/lib/contact"

const staffMembers = [
  {
    name: "Monde Nkuna",
    role: "Founder & Director",
    description: "Founded SchoolED in 2015 and leads strategy, partnerships, and service delivery for schools.",
    photo: company.founder.photo,
  },
  {
    name: "Ed Mtoto",
    role: "Lead Tailor",
    description: "Leads tailoring, fittings, and finishing for uniforms, matric wear, and custom school orders.",
  },
  {
    name: "Sipho Ndlovu",
    role: "Production & Fulfilment",
    description: "Manages uniform manufacturing, quality checks, and bulk school order fulfilment.",
  },
  {
    name: "Thubalethu Njapha",
    role: "IT Specialist",
    description: "Supports school websites, digital tools, and technical solutions for SchoolED and partner schools.",
  },
]

function TeamAvatar({ member }: { member: (typeof staffMembers)[number] }) {
  if (member.photo) {
    return (
      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-300">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="128px"
        />
      </div>
    )
  }

  return <DefaultAvatar label={`${member.name} — no profile photo`} />
}

export default function AboutPage() {
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStaffIndex((prevIndex) => (prevIndex + 1) % staffMembers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentMember = staffMembers[currentStaffIndex]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative bg-blue-800 py-20 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/images/school-sports-netball.png"
              alt="School students playing netball"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About SchoolED</h1>
            <p className="mx-auto max-w-3xl text-xl">
              Providing quality educational services since {company.foundedYear}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <Image
                  src="/images/school-sports-netball.png"
                  alt="School students playing netball"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our History</h2>
                <p className="mb-6 text-gray-600">
                  SchoolED was founded in {company.foundedYear} by {company.founder.name} with a clear mission: help
                  schools access reliable uniforms, sportswear, and support services without the usual hassle. What
                  started as a focused uniform service has grown into a trusted partner for schools across Gauteng and
                  beyond.
                </p>
                <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-600">
                  We help schools look professional, run smoothly, and stay connected — through quality products,
                  practical digital solutions, and responsive support from a team that understands school life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold">Our Founder</h2>
              <p className="text-xl text-gray-600">Monde Nkuna — building SchoolED from the ground up</p>
            </div>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Monde Nkuna&apos;s Vision</h3>
                <p className="mb-6 text-gray-600">
                  Monde started SchoolED after seeing how difficult it was for schools — especially smaller and
                  community schools — to source dependable uniforms and related services at fair prices. He built the
                  business around listening to what schools actually need and delivering on time.
                </p>
                <p className="mb-6 text-gray-600">
                  From the first orders in {company.foundedYear}, Monde has focused on quality fabrics, honest pricing,
                  and personal service. Schools know they can call, WhatsApp, or email and get a real response.
                </p>
                <p className="text-gray-600">
                  Today, SchoolED supplies uniforms, sportswear, websites, and more — still led by the same hands-on
                  approach Monde brought on day one.
                </p>
              </div>
              <div>
                <Image
                  src={company.founder.photo}
                  alt="Monde Nkuna - Founder of SchoolED"
                  width={600}
                  height={750}
                  className="mx-auto h-auto w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen overflow-hidden bg-blue-800 py-24">
          <div className="absolute inset-0 bg-blue-800 opacity-80" />
          <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-white">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Meet Our Team</h2>
            <p className="mb-8 max-w-2xl text-center text-lg text-blue-100">
              A small, dedicated team working closely with schools every day.
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStaffIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl text-center"
              >
                <div className="mb-4 flex justify-center">
                  <TeamAvatar member={currentMember} />
                </div>
                <h3 className="mb-2 text-3xl font-bold">{currentMember.name}</h3>
                <p className="mb-4 text-xl">{currentMember.role}</p>
                <p className="text-lg text-blue-100">{currentMember.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">What We Offer</h2>
                <p className="mb-6 text-gray-600">
                  SchoolED supports schools with practical products and services — from everyday uniforms to matric
                  celebrations and digital presence.
                </p>
                <ul className="mb-6 list-inside list-disc text-gray-600">
                  <li>Custom school uniforms</li>
                  <li>Tracksuits and sportswear</li>
                  <li>Matric jackets and formal wear</li>
                  <li>CareerKids costumes</li>
                  <li>School websites</li>
                  <li>Event photography</li>
                  <li>Kids nametags</li>
                  <li>Sponsor a Child programme</li>
                </ul>
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700">View All Services</Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/images/school-sports-netball.png"
                  alt="School students playing netball"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Commitment to Education</h2>
              <p className="text-xl text-gray-600">Supporting schools and students where it matters most</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-8 text-center shadow-md">
                <h3 className="mb-4 text-2xl font-bold">Quality Products</h3>
                <p className="text-gray-600">
                  Durable uniforms and sportswear made to survive the school week — washing, sport, and all.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-center shadow-md">
                <h3 className="mb-4 text-2xl font-bold">School-First Service</h3>
                <p className="text-gray-600">
                  We work around term dates, budget cycles, and the realities of running a school — not the other way
                  around.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 text-center shadow-md">
                <h3 className="mb-4 text-2xl font-bold">Community Impact</h3>
                <p className="text-gray-600">
                  Through Sponsor a Child, we run initiatives like our 2026 laptop giveaway — giving a needy
                  university-bound student the tools they need to start the next chapter of their education.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-800 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Partner with SchoolED?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl">
              WhatsApp us, call the office, or send a quote request — we&apos;ll get back to you promptly.
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
