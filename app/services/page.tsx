import { ArrowRight, Baby, Scissors } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Services Section */}
        <section id="services" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-gray-600">Comprehensive care for you and your family</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Primary Healthcare",
                  description: "General consultations and preventive care",
                  icon: "🏥",
                },
                {
                  title: "Maternal & Child Health",
                  description: "Prenatal care, immunizations, and pediatric services",
                  icon: "👨‍👩‍👧",
                },
                {
                  title: "HIV/AIDS Treatment",
                  description: "Testing, counseling, and antiretroviral therapy",
                  icon: "💊",
                },
                {
                  title: "Chronic Disease Management",
                  description: "Ongoing care for diabetes, hypertension, and more",
                  icon: "🫀",
                },
                {
                  title: "Emergency Services",
                  description: "24/7 emergency medical assistance",
                  icon: "🚑",
                },
                {
                  title: "Community Outreach",
                  description: "Health education and mobile clinic services",
                  icon: "🤝",
                },
                {
                  title: "Maternity Care",
                  description: "Comprehensive care for expectant mothers",
                  icon: "🤰",
                },
                {
                  title: "Circumcision",
                  description: "Safe and professional circumcision services",
                  icon: "✂️",
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maternity Section */}
        <section id="maternity" className="py-32 bg-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Maternity Care</h2>
              <p className="text-xl text-gray-600">Supporting you through your pregnancy journey</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Maternity Care"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Maternity Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Baby className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Prenatal check-ups and screenings</span>
                  </li>
                  <li className="flex items-start">
                    <Baby className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Childbirth education classes</span>
                  </li>
                  <li className="flex items-start">
                    <Baby className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Labor and delivery support</span>
                  </li>
                  <li className="flex items-start">
                    <Baby className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Postpartum care and support</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-pink-500 hover:bg-pink-600">Schedule a Consultation</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Circumcision Section */}
        <section id="circumcision" className="py-32 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Circumcision Services</h2>
              <p className="text-xl text-gray-600">Safe and professional care for all ages</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Circumcision Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Experienced medical professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                    <span>State-of-the-art facilities</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Comprehensive aftercare instructions</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                    <span>Follow-up appointments</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-pink-800 hover:bg-pink-600">Learn More</Button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Medical Professional"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}