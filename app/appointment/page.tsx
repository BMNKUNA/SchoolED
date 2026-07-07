import Link from "next/link"
import { ArrowRight, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactDetails from "@/components/contact-details"

export default function AppointmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <Calendar className="mx-auto mb-2 h-10 w-10 text-blue-800" />
                <CardTitle className="text-2xl">Book a Consultation</CardTitle>
                <CardDescription>
                  Schedule a call to discuss uniforms, websites, events, or any of our school services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <ContactDetails />
                <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row">
                  <Link href="/contact" className="flex-1">
                    <Button className="min-h-11 w-full bg-blue-800 hover:bg-blue-700">
                      Request via Contact Form
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="min-h-11 w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      View Contact Options
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
