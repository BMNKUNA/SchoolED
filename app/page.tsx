import { ArrowRight, Star, Users, Ambulance, Building } from 'lucide-react'
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
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="South African Healthcare"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-600/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quality Healthcare for All
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Eluthandweni Clinic is committed to providing accessible, compassionate, and expert healthcare services to our communities around Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button size="lg" className="text-lg bg-white bg-pink-800 hover:bg-gray-100">
                  Book Appointment
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
                <Users className="w-8 h-8 mr-2 text-pink-800" />
                  <Counter end={20000} duration={2} />
                </CardTitle>
                <CardDescription className="text-lg">Patients Treated Over The Years</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Ambulance className="w-8 h-8 mr-2 text-pink-800" />
                  <span className="text-4xl font-bold text-pink-800">24/7</span>
                </CardTitle>
                <CardDescription className="text-lg">Emergency Services Available</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Building className="w-8 h-8 mr-2 text-pink-800" />
                  <Counter end={33} duration={4} />
                </CardTitle>
                <CardDescription className="text-lg">Years Serving the Community</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Star className="w-8 h-8 mr-2 text-pink-800" />
                  <Counter end={4.9} duration={5} />
                </CardTitle>
                <CardDescription className="text-lg">Patient Satisfaction Rating</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News & Events Section */}
      <section id="news" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
            <p className="text-xl text-gray-600">Stay informed about health topics and clinic updates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cancer Awareness Day Special",
                date: "Oct 31, 2024",
                excerpt: "We're excited to announce our cancer awareness day special, at our alberton Branch.",
              },
              {
                title: "Free Circumcision",
                date: "Sept 19, 2024",
                excerpt: "Age 10 years and Older, Free Male Circumcision Services Available From 21 September 2024 till 4 October 2024 @ Our Facility Clinic in Primrose Germiston.",
              },
              {
                title: "Cancer 8km walk",
                date: "Aug 26, 2024",
                excerpt: "A walk is always more enjoyable with a companion. The time is approaching &ndash; let&apos;s get our walking gear ready!",
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
                  <Button variant="ghost" className="mt-2">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-pink-800 hover:bg-pink-700">
              View All News & Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}