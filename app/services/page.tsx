import { ArrowRight, GraduationCap, Shirt, Globe } from 'lucide-react'
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
              <p className="text-xl text-gray-600">Comprehensive educational solutions for schools and students</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "School Uniforms",
                  description: "Custom-designed, high-quality uniforms for all school levels",
                  icon: "👕",
                },
                {
                  title: "School Websites",
                  description: "Modern, responsive websites designed for educational institutions",
                  icon: "💻",
                },
                {
                  title: "Tracksuits",
                  description: "Comfortable and durable tracksuits for physical education and sports teams",
                  icon: "🏃",
                },
                {
                  title: "Matric Jackets",
                  description: "Commemorative jackets for matriculants to celebrate their achievement",
                  icon: "🧥",
                },
                {
                  title: "Matric Dance Suits",
                  description: "Elegant and affordable formal wear for matric dances",
                  icon: "👔",
                },
                {
                  title: "Events Photography",
                  description: "Professional photography for school events and graduations",
                  icon: "📸",
                },
                {
                  title: "Kids Nametags",
                  description: "Personalized, durable nametags for students' belongings",
                  icon: "🏷️",
                },
                {
                  title: "Sponsor a Child",
                  description: "Programs to support underprivileged students with educational resources",
                  icon: "❤️",
                },
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group-hover:translate-x-2 transition-transform text-blue-800">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* School Uniforms Section */}
        <section id="uniforms" className="py-32 bg-blue-50">
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
                    <Shirt className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Custom designs based on school colors and logo</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Durable, comfortable fabrics for all seasons</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Full range of sizes from pre-primary to matric</span>
                  </li>
                  <li className="flex items-start">
                    <Shirt className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Bulk ordering options for schools</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-blue-500 hover:bg-blue-600">Request a Quote</Button>
              </div>
            </div>
          </div>
        </section>

        {/* School Websites Section */}
        <section id="websites" className="py-32 bg-green-50">
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
                    <Globe className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Custom design reflecting your school's identity</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Mobile-responsive layouts for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Content management system for easy updates</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 h-6 w-6 text-blue-500" />
                    <span>Integration with school management systems</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-blue-800 hover:bg-blue-600">Request a Demo</Button>
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
      </main>

      <Footer />
    </div>
  )
}