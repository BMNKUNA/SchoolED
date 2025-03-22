"use client"

import { useState } from "react"
import { ArrowRight, GraduationCap, Shirt, Globe, Camera, Tag, Heart, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import { Modal } from "@/components/ui/modal"

// Define service details with extended information and Unsplash images
const services = [
  {
    id: "uniforms",
    title: "School Uniforms",
    description: "Custom-designed, high-quality uniforms for all school levels",
    icon: <Shirt className="h-8 w-8 text-blue-600" />,
    image:
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1580237072353-751a8a5b2561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1621570169694-4b0fd2aac699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      ],
    },
  },
  {
    id: "websites",
    title: "School Websites",
    description: "Modern, responsive websites designed for educational institutions",
    icon: <Globe className="h-8 w-8 text-green-600" />,
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ],
    },
  },
  {
    id: "careerkids",
    title: "CareerKids",
    description: "Career-themed costumes to inspire children's future aspirations",
    icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    details: {
      description:
        "Our CareerKids costumes help children explore different professions and dream about their future. Each costume is designed to be both educational and fun, allowing kids to role-play various careers.",
      features: [
        "Pilot uniforms with realistic details",
        "Doctor and nurse outfits with accessories",
        "Firefighter costumes with safety features",
        "Police officer uniforms with badges",
        "Teacher, scientist, and engineer costumes",
        "Bulk orders available for schools and daycares",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ],
    },
  },
  {
    id: "tracksuits",
    title: "Tracksuits",
    description: "Comfortable and durable tracksuits for physical education and sports teams",
    icon: <Shirt className="h-8 w-8 text-red-600" />,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
        "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80",
      ],
    },
  },
  {
    id: "matric-jackets",
    title: "Matric Jackets",
    description: "Commemorative jackets for matriculants to celebrate their achievement",
    icon: <Shirt className="h-8 w-8 text-amber-600" />,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      ],
    },
  },
  {
    id: "photography",
    title: "Events Photography",
    description: "Professional photography for school events and graduations",
    icon: <Camera className="h-8 w-8 text-indigo-600" />,
    image:
      "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      ],
    },
  },
  {
    id: "nametags",
    title: "Kids Nametags",
    description: "Personalized, durable nametags for students' belongings",
    icon: <Tag className="h-8 w-8 text-teal-600" />,
    image:
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      ],
    },
  },
  {
    id: "sponsor",
    title: "Sponsor a Child",
    description: "Programs to support underprivileged students with educational resources",
    icon: <Heart className="h-8 w-8 text-pink-600" />,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      gallery: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80",
      ],
    },
  },
]

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openServiceModal = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setActiveImageIndex(0)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-800 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
              alt="School Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SchoolED Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive educational solutions for schools and students across South Africa
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Everything your school needs in one place</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="group-hover:translate-x-2 transition-transform text-blue-800"
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact SchoolED today to discuss how we can help your school with our comprehensive educational services.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Service Modal */}
        {selectedService && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedService.title}>
            <div className="space-y-6">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedService.details.gallery[activeImageIndex] || "/placeholder.svg"}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image Gallery Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {selectedService.details.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 ${
                      activeImageIndex === index ? "ring-2 ring-blue-600" : ""
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${selectedService.title} image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
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
      </main>

      <Footer />
    </div>
  )
}