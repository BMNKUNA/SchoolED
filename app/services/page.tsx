import { ArrowRight, GraduationCap, Shirt, Globe, Users, Camera, Tag, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
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
              {[
                {
                  title: "School Uniforms",
                  description: "Custom-designed, high-quality uniforms for all school levels",
                  icon: <Shirt className="h-8 w-8 text-blue-600" />,
                  link: "#uniforms"
                },
                {
                  title: "School Websites",
                  description: "Modern, responsive websites designed for educational institutions",
                  icon: <Globe className="h-8 w-8 text-green-600" />,
                  link: "#websites"
                },
                {
                  title: "CareerKids",
                  description: "Career-themed costumes to inspire children's future aspirations",
                  icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
                  link: "#careerkids"
                },
                {
                  title: "Tracksuits",
                  description: "Comfortable and durable tracksuits for physical education and sports teams",
                  icon: <Shirt className="h-8 w-8 text-red-600" />,
                  link: "#tracksuits"
                },
                {
                  title: "Matric Jackets",
                  description: "Commemorative jackets for matriculants to celebrate their achievement",
                  icon: <Shirt className="h-8 w-8 text-amber-600" />,
                  link: "#matric-jackets"
                },
                {
                  title: "Events Photography",
                  description: "Professional photography for school events and graduations",
                  icon: <Camera className="h-8 w-8 text-indigo-600" />,
                  link: "#photography"
                },
                {
                  title: "Kids Nametags",
                  description: "Personalized, durable nametags for students' belongings",
                  icon: <Tag className="h-8 w-8 text-teal-600" />,
                  link: "#nametags"
                },
                {
                  title: "Sponsor a Child",
                  description: "Programs to support underprivileged students with educational resources",
                  icon: <Heart className="h-8 w-8 text-pink-600" />,
                  link: "#sponsor"
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.link}>
                      <Button variant="ghost" className="group-hover:translate-x-2 transition-transform text-blue-800">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* School Uniforms Section */}
        <section id="uniforms" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">School Uniforms</h2>
              <p className="text-xl text-gray-600">Quality uniforms that represent your school with pride</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="School Uniforms"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Uniform Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span>Custom designs based on school colors and logo</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span>Durable, comfortable fabrics for all seasons</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span>Full range of sizes from pre-primary to matric</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span>Bulk ordering options for schools</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-blue-500 hover:bg-blue-600">Request a Quote</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CareerKids Section */}
        <section id="careerkids" className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CareerKids</h2>
              <p className="text-xl text-gray-600">Inspiring children's future aspirations through role play</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Career-Themed Costumes</h3>
                <p className="text-gray-600 mb-6">
                  Our CareerKids costumes help children explore different professions and dream about their future. Each costume is designed to be both educational and fun, allowing kids to role-play various careers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <GraduationCap className="mr-2 h-6 w-6 text-purple-500 flex-shrink-0" />
                    <span>Pilot uniforms with realistic details</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="mr-2 h-6 w-6 text-purple-500 flex-shrink-0" />
                    <span>Doctor and nurse outfits with accessories</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="mr-2 h-6 w-6 text-purple-500 flex-shrink-0" />
                    <span>Firefighter costumes with safety features</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="mr-2 h-6 w-6 text-purple-500 flex-shrink-0" />
                    <span>Bulk orders available for schools and daycares</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-purple-600 hover:bg-purple-700">View Costume Catalog</Button>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Children in Career Costumes"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* School Websites Section */}
        <section id="websites" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">School Websites</h2>
              <p className="text-xl text-gray-600">Modern digital presence for educational institutions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Website Development Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Custom design reflecting your school's identity</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Mobile-responsive layouts for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Content management system for easy updates</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-green-600 flex-shrink-0" />
                    <span>Integration with school management systems</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-green-600 hover:bg-green-700">Request a Demo</Button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="School Website"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
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
      </main>

      <Footer />
    </div>
  )
}
