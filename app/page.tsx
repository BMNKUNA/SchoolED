import { ArrowRight, GraduationCap, Users, School, Award } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Counter } from "@/components/ui/counter"
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

export default function HomePage() {
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
              SchoolED is committed to providing high-quality school uniforms, websites, events, and more to enhance the educational experience across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg bg-white bg-blue-800 hover:bg-blue-700 text-white">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/20">
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
            {[
              {
                title: "School Uniforms",
                excerpt: "High-quality, durable school uniforms customized with your school's colors and logo.",
                icon: "👕",
              },
              {
                title: "School Websites",
                excerpt: "Modern, responsive websites designed specifically for educational institutions.",
                icon: "💻",
              },
              {
                title: "Tracksuits & Sportswear",
                excerpt: "Comfortable and stylish tracksuits and sportswear for physical education and sports teams.",
                icon: "🏃",
              },
              {
                title: "Matric Jackets",
                excerpt: "Commemorative jackets for matriculants to celebrate their academic achievement.",
                icon: "🧥",
              },
              {
                title: "Matric Dance Suits",
                excerpt: "Elegant and affordable suits and dresses for matric dances and formal events.",
                icon: "👔",
              },
              {
                title: "Event Photography",
                excerpt: "Professional photography services for school events, graduations, and special occasions.",
                icon: "📸",
              },
              {
                title: "Kids Nametags",
                excerpt: "Personalized, durable nametags to help identify students' belongings.",
                icon: "🏷️",
              },
              {
                title: "Sponsor a Child",
                excerpt: "Support programs to provide educational resources for underprivileged students.",
                icon: "❤️",
              },
            ].map((service, index) => (
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
                  <Button variant="ghost" className="mt-2 text-blue-800 hover:text-blue-700">
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
            {[
              {
                title: "Back to School Special",
                date: "Dec 15, 2024",
                excerpt: "Get ready for the new school year with our special discount on complete uniform packages.",
              },
              {
                title: "Matric Jacket Design Competition",
                date: "Sept 19, 2024",
                excerpt: "Calling all creative students! Submit your designs for next year's matric jackets and win amazing prizes.",
              },
              {
                title: "Education Technology Workshop",
                date: "Aug 26, 2024",
                excerpt: "Join us for a free workshop on integrating technology into the classroom for enhanced learning experiences.",
              },
            ].map((news, index) => (
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
            <Button className="bg-blue-800 hover:bg-blue-700">
              View All News & Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}