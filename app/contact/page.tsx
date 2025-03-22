"use client"

import { useState } from "react"
import { ArrowRight, Phone, MapPin, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-800 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="School Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact SchoolED</h1>
            <p className="text-xl max-w-3xl mx-auto">We&apos;re here to help with all your educational service needs</p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">+27 (0) 12 345 6789</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">
                      123 School Street, Education District, Johannesburg, South Africa
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">Closed on public holidays</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Our Location</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg h-[300px] relative">
                    {/* Interactive Map */}
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73428063209!2d27.942255777920966!3d-26.17012455404587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        onLoad={() => setMapLoaded(true)}
                        className={`transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
                      ></iframe>
                      {!mapLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-md" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input type="email" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">School/Organization</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interested In</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option value="">Select a service</option>
                        <option value="uniforms">School Uniforms</option>
                        <option value="websites">School Websites</option>
                        <option value="careerkids">CareerKids Costumes</option>
                        <option value="tracksuits">Tracksuits</option>
                        <option value="matric-jackets">Matric Jackets</option>
                        <option value="matric-dance">Matric Dance Suits</option>
                        <option value="photography">Event Photography</option>
                        <option value="nametags">Kids Nametags</option>
                        <option value="sponsor">Sponsor a Child</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
                    </div>
                    <Button className="w-full bg-blue-800 hover:bg-blue-700">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">How do I place an order for school uniforms?</h3>
                <p className="text-gray-600">
                  You can place an order by contacting us through this form, calling our office, or sending an email.
                  For bulk school orders, we offer a consultation to discuss your specific requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Do you offer customization for CareerKids costumes?</h3>
                <p className="text-gray-600">
                  Yes, we can customize CareerKids costumes with school logos or specific requirements. Bulk orders for
                  schools and educational institutions receive special pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">How long does website development take?</h3>
                <p className="text-gray-600">
                  A standard school website typically takes 4-6 weeks from initial consultation to launch. This includes
                  design, development, content integration, and training for your staff.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Can we see samples before ordering?</h3>
                <p className="text-gray-600">
                  We can provide samples of our uniforms, tracksuits, and other products. For websites, we can arrange
                  demonstrations of similar projects we&apos;ve completed.
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