"use client"

import { useState, type FormEvent } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactDetails from "@/components/contact-details"
import { buildWhatsAppMessageUrl } from "@/lib/contact"

const serviceLabels: Record<string, string> = {
  uniforms: "School Uniforms",
  websites: "School Websites",
  careerkids: "CareerKids Costumes",
  tracksuits: "Tracksuits",
  "matric-jackets": "Matric Jackets",
  "matric-dance": "Matric Dance Suits",
  photography: "Event Photography",
  nametags: "Kids Nametags",
  sponsor: "Sponsor a Child",
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [school, setSchool] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please enter your name and email.")
      return
    }

    setError("")

    const whatsappMessage = [
      "*SchoolED Quote Request*",
      "",
      `*Name:* ${firstName.trim()} ${lastName.trim()}`,
      `*Email:* ${email.trim()}`,
      `*School/Organisation:* ${school.trim() || "Not provided"}`,
      `*Service:* ${serviceLabels[service] || "Not specified"}`,
      "",
      "*Message:*",
      message.trim() || "No additional message.",
    ].join("\n")

    window.open(buildWhatsAppMessageUrl(whatsappMessage), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative bg-blue-800 py-20 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="School Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact SchoolED</h1>
            <p className="mx-auto max-w-3xl text-xl">
              We&apos;re here to help with uniforms, websites, sportswear, and more.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
                <ContactDetails />
              </div>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Complete the form below and send your request directly to us on WhatsApp.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full rounded-md border px-3 py-2 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded-md border px-3 py-2 text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="school" className="text-sm font-medium">
                        School/Organization
                      </label>
                      <input
                        id="school"
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 text-base"
                      >
                        <option value="">Select a service</option>
                        {Object.entries(serviceLabels).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-md border px-3 py-2 text-base"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="min-h-11 w-full bg-[#25D366] hover:bg-[#1da851]">
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">How do I place an order for school uniforms?</h3>
                <p className="text-gray-600">
                  Submit the quote form to reach us on WhatsApp, call our office, or email us. For bulk school orders,
                  we&apos;ll arrange a consultation to discuss sizing, branding, and delivery timelines.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">Do you offer customization for CareerKids costumes?</h3>
                <p className="text-gray-600">
                  Yes, we can customize CareerKids costumes with school logos or specific requirements. Bulk orders for
                  schools and early learning centres receive preferential pricing.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">How long does website development take?</h3>
                <p className="text-gray-600">
                  A standard school website typically takes 4–6 weeks from consultation to launch, including design,
                  development, content setup, and basic training for your team.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">Can we see samples before ordering?</h3>
                <p className="text-gray-600">
                  We can provide fabric swatches and sample garments on request. For websites, we can share examples of
                  similar school sites we&apos;ve built.
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
