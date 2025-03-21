"use client"

import { useState } from "react"
import { ArrowRight, GraduationCap, Users, School, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Counter } from "@/components/ui/counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import { Modal } from "@/components/ui/modal"

// Define service details with extended information and Unsplash images
const services = [
  {
    title: "School Uniforms",
    excerpt: "High-quality, durable school uniforms customized with your school's colors and logo.",
    icon: "👕",
    details: {
      description:
        "Our school uniforms are designed with durability and comfort in mind. We use high-quality fabrics that can withstand daily wear and frequent washing while maintaining their appearance.",
      features: [
        "Custom designs based on your school's colors and logo",
        "Durable fabrics that maintain shape and color after washing",
        "Comfortable fit for all-day wear",
        "Full range of sizes from pre-primary to matric",
        "Bulk ordering options with special pricing for schools",
      ],
      image:
        "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  },
  {
    title: "School Websites",
    excerpt: "Modern, responsive websites designed specifically for educational institutions.",
    icon: "💻",
    details: {
      description:
        "We create modern, responsive websites tailored specifically for educational institutions. Our websites are designed to enhance communication between schools, parents, and students.",
      features: [
        "Mobile-responsive design that works on all devices",
        "Content management system for easy updates",
        "Integration with school management systems",
        "Online forms for admissions and inquiries",
        "Event calendar and news section",
        "Staff and faculty directories",
        "Photo galleries for school events",
      ],
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
  },
  {
    title: "Tracksuits & Sportswear",
    excerpt: "Comfortable and stylish tracksuits and sportswear for physical education and sports teams.",
    icon: "🏃",
    details: {
      description:
        "Our tracksuits and sportswear are designed for comfort, durability, and performance. We offer customization options to incorporate your school's colors and logo.",
      features: [
        "Breathable, moisture-wicking fabrics",
        "Durable construction for sports activities",
        "Custom designs with school colors and logos",
        "Options for different sports and activities",
        "Comfortable fit for optimal performance",
      ],
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
    },
  },
  {
    title: "Matric Jackets",
    excerpt: "Commemorative jackets for matriculants to celebrate their academic achievement.",
    icon: "🧥",
    details: {
      description:
        "Our matric jackets are a perfect way for students to commemorate their final year of school. Each jacket is customized with the school's colors and emblem, along with personalization options.",
      features: [
        "High-quality materials for lasting memories",
        "Custom embroidery with school emblems",
        "Personalization options for student names and graduation year",
        "Various styles and designs to choose from",
        "Group ordering discounts for schools",
      ],
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    },
  },
  {
    title: "Matric Dance Suits",
    excerpt: "Elegant and affordable suits and dresses for matric dances and formal events.",
    icon: "👔",
    details: {
      description:
        "We offer elegant and affordable suits for matric dances and formal events. Our collection includes a variety of styles and sizes to ensure every student looks their best on this special occasion.",
      features: [
        "Modern and classic styles to suit all preferences",
        "High-quality fabrics and tailoring",
        "Affordable pricing for students",
        "Fitting services available",
        "Accessories to complete the look",
      ],
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  },
  {
    title: "Event Photography",
    excerpt: "Professional photography services for school events, graduations, and special occasions.",
    icon: "📸",
    details: {
      description:
        "Our professional photography services capture the special moments of school events, graduations, and other occasions. We provide high-quality images that preserve these memories for years to come.",
      features: [
        "Professional photographers with experience in school events",
        "High-resolution digital images",
        "Photo packages for students and families",
        "Quick turnaround time",
        "Online galleries for easy access and ordering",
        "Printing services available",
      ],
      image:
        "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  },
  {
    title: "Kids Nametags",
    excerpt: "Personalized, durable nametags to help identify students' belongings.",
    icon: "🏷️",
    details: {
      description:
        "Our personalized, durable nametags help identify students' belongings and prevent loss. They're perfect for uniforms, bags, lunch boxes, and other personal items.",
      features: [
        "Durable materials that withstand washing and daily use",
        "Various sizes and styles available",
        "Customization with student names and class information",
        "Iron-on, sew-on, and stick-on options",
        "Bulk ordering for schools and classes",
      ],
      image:
        "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  },
  {
    title: "Sponsor a Child",
    excerpt: "Support programs to provide educational resources for underprivileged students.",
    icon: "❤️",
    details: {
      description:
        "Our Sponsor a Child program connects donors with underprivileged students to provide essential educational resources. Your contribution can make a significant difference in a child's education and future.",
      features: [
        "Direct support for students in need",
        "Options to sponsor uniforms, books, or school fees",
        "Regular updates on the student's progress",
        "Tax-deductible donations",
        "Corporate sponsorship programs available",
        "100% of donations go directly to supporting students",
      ],
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  },
]

// Define news items
const newsItems = [
  {
    title: "Back to School Special",
    date: "Dec 15, 2024",
    excerpt: "Get ready for the new school year with our special discount on complete uniform packages.",
  },
  {
    title: "Matric Jacket Design Competition",
    date: "Sept 19, 2024",
    excerpt:
      "Calling all creative students! Submit your designs for next year's matric jackets and win amazing prizes.",
  },
  {
    title: "Education Technology Workshop",
    date: "Aug 26, 2024",
    excerpt:
      "Join us for a free workshop on integrating technology into the classroom for enhanced learning experiences.",
  },
]

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  const openServiceModal = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="School Education"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Education Through Quality Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              SchoolED is committed to providing high-quality school uniforms, websites, events, and more to enhance the
              educational experience across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg bg-white bg-blue-800 hover:bg-blue-700 text-white">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent text-white border-white hover:bg-white/20"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Users className="w-8 h-8 mr-2 text-blue-800" />
                  <Counter end={5000} duration={2} />
                </CardTitle>
                <CardDescription className="text-lg">Students Served Annually</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <School className="w-8 h-8 mr-2 text-blue-800" />
                  <Counter end={150} duration={2} />
                </CardTitle>
                <CardDescription className="text-lg">Partner Schools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <GraduationCap className="w-8 h-8 mr-2 text-blue-800" />
                  <Counter end={15} duration={4} />
                </CardTitle>
                <CardDescription className="text-lg">Years of Excellence</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Award className="w-8 h-8 mr-2 text-blue-800" />
                  <Counter end={4.9} duration={5} />
                </CardTitle>
                <CardDescription className="text-lg">Customer Satisfaction Rating</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for schools and students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{service.excerpt}</p>
                </CardContent>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="mt-2 text-blue-800 hover:text-blue-700"
                    onClick={() => openServiceModal(service)}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Events Section */}
      <section id="news" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
            <p className="text-xl text-gray-600">Stay informed about SchoolED updates and educational events</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{news.excerpt}</p>
                </CardContent>
                <CardContent>
                  <Button variant="ghost" className="mt-2 text-blue-800 hover:text-blue-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-800 hover:bg-blue-700">View All News & Events</Button>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedService.title}>
          <div className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedService.details.image || "/placeholder.svg"}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">About this Service</h3>
              <p className="text-gray-700">{selectedService.details.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {selectedService.details.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              <Link href="/contact">
                <Button className="bg-blue-800 hover:bg-blue-700">
                  Request a Quote <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}

      <Footer />
    </div>
  )
}