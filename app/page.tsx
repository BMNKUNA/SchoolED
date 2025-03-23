"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  GraduationCap,
  Users,
  School,
  Award,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Counter } from "@/components/ui/counter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import { Modal } from "@/components/ui/modal"

// Hero slider images
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "School Education",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Students in Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    alt: "School Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80",
    alt: "Graduation Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "School Library",
  },
]

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
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  },
]

// Define news items with extended content
const newsItems = [
  {
    title: "Back to School Special",
    date: "Dec 15, 2024",
    excerpt: "Get ready for the new school year with our special discount on complete uniform packages.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    content: `
      <h3>Back to School Special Offer</h3>
      <p>As the new school year approaches, SchoolED is excited to announce our Back to School Special, offering significant discounts on complete uniform packages for schools and families.</p>
      
      <h4>Special Offer Details:</h4>
      <ul>
        <li>20% discount on complete uniform sets (shirt, pants/skirt, tie, and blazer)</li>
        <li>Free name embroidery on all uniform items</li>
        <li>Buy 5 or more sets and receive an additional 5% discount</li>
        <li>Special bulk pricing for schools placing orders for 50+ students</li>
      </ul>
      
      <h4>Promotion Period:</h4>
      <p>This special offer is valid from December 15, 2024, to January 31, 2025. Orders can be placed online, by phone, or in person at our showroom.</p>
      
      <h4>Why Choose SchoolED Uniforms:</h4>
      <ul>
        <li>Durable, high-quality fabrics that withstand daily wear and frequent washing</li>
        <li>Comfortable fit for all-day wear</li>
        <li>Custom designs based on your school's colors and logo</li>
        <li>Full range of sizes from pre-primary to matric</li>
      </ul>
      
      <p>Don't miss this opportunity to prepare for the new school year with quality uniforms at special prices. Contact us today to place your order or request a custom quote for your school.</p>
    `,
    eventDate: "Dec 15, 2024 - Jan 31, 2025",
    location: "Online and in-store",
  },
  {
    title: "Matric Jacket Design Competition",
    date: "Sept 19, 2024",
    excerpt:
      "Calling all creative students! Submit your designs for next year's matric jackets and win amazing prizes.",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    content: `
      <h3>Matric Jacket Design Competition</h3>
      <p>SchoolED is thrilled to announce our annual Matric Jacket Design Competition! We're inviting creative students from across South Africa to submit their designs for next year's matric jackets.</p>
      
      <h4>Competition Details:</h4>
      <ul>
        <li>Open to all high school students in grades 10-12</li>
        <li>Designs should be original and reflect school spirit and identity</li>
        <li>Submissions can be digital or hand-drawn</li>
        <li>Include front and back views of your jacket design</li>
        <li>Submission deadline: October 31, 2024</li>
      </ul>
      
      <h4>Prizes:</h4>
      <ul>
        <li>1st Place: R5,000 cash prize + your design produced for your school + free jacket</li>
        <li>2nd Place: R2,500 cash prize + free jacket</li>
        <li>3rd Place: R1,000 cash prize + free jacket</li>
        <li>Top 10 Finalists: Recognition certificate and SchoolED merchandise pack</li>
      </ul>
      
      <h4>How to Enter:</h4>
      <p>Submit your designs via email to design@schooled.co.za or upload them through our website. Include your name, grade, school, and contact information.</p>
      
      <p>This is your chance to leave a lasting legacy at your school and showcase your creativity. We can't wait to see your amazing designs!</p>
    `,
    eventDate: "Submissions due by Oct 31, 2024",
    location: "Online submission",
  },
  {
    title: "Education Technology Workshop",
    date: "Aug 26, 2024",
    excerpt:
      "Join us for a free workshop on integrating technology into the classroom for enhanced learning experiences.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `
      <h3>Education Technology Workshop</h3>
      <p>SchoolED invites educators, administrators, and IT staff to join our free workshop on integrating technology into the classroom for enhanced learning experiences.</p>
      
      <h4>Workshop Topics:</h4>
      <ul>
        <li>Digital tools for interactive learning</li>
        <li>Managing online classrooms effectively</li>
        <li>Using technology to personalize education</li>
        <li>Cybersecurity best practices for schools</li>
        <li>Affordable technology solutions for schools with limited budgets</li>
        <li>Hands-on demonstrations of popular educational software</li>
      </ul>
      
      <h4>Workshop Details:</h4>
      <ul>
        <li>Date: August 26, 2024</li>
        <li>Time: 9:00 AM - 3:00 PM</li>
        <li>Location: SchoolED Conference Center, Johannesburg</li>
        <li>Cost: Free (registration required)</li>
        <li>Lunch and refreshments will be provided</li>
      </ul>
      
      <h4>Speakers:</h4>
      <p>The workshop will feature presentations from leading education technology experts, including representatives from major educational software companies and experienced educators who have successfully implemented technology in their classrooms.</p>
      
      <p>Space is limited, so register today to secure your spot. This workshop is a valuable opportunity to enhance your teaching skills and learn how technology can transform the educational experience for your students.</p>
    `,
    eventDate: "August 26, 2024, 9:00 AM - 3:00 PM",
    location: "SchoolED Conference Center, Johannesburg",
  },
]

export default function HomePage() {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState<(typeof newsItems)[0] | null>(null)

  // Hero slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentImageIndex])

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const openServiceModal = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setIsServiceModalOpen(true)
  }

  const openNewsModal = (news: (typeof newsItems)[0]) => {
    setSelectedNews(news)
    setIsNewsModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Slideshow Container */}
        <div className="absolute inset-0 z-0">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/40" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true)
                    setCurrentImageIndex(index)
                    setTimeout(() => setIsTransitioning(false), 700)
                  }
                }}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{news.excerpt}</p>
                </CardContent>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="mt-2 text-blue-800 hover:text-blue-700"
                    onClick={() => openNewsModal(news)}
                  >
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
        <Modal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} title={selectedService.title}>
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
              <Button variant="outline" onClick={() => setIsServiceModalOpen(false)}>
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

      {/* News Modal */}
      {selectedNews && (
        <Modal isOpen={isNewsModalOpen} onClose={() => setIsNewsModalOpen(false)} title={selectedNews.title}>
          <div className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedNews.image || "/placeholder.svg"}
                alt={selectedNews.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{selectedNews.eventDate}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{selectedNews.location}</span>
              </div>
            </div>

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedNews.content }} />

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" onClick={() => setIsNewsModalOpen(false)}>
                Close
              </Button>
              <Link href="/contact">
                <Button className="bg-blue-800 hover:bg-blue-700">
                  Contact Us <ExternalLink className="ml-2 h-4 w-4" />
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