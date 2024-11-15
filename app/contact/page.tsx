import { ArrowRight, Calendar, Clock, MapPin, Phone } from 'lucide-react'
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

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section id="contact" className="py-32 bg-pink-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h1>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6" />
                    <span>+27 (0) 11 382 0466</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6" />
                    <span>1951 Ikhethini Str, Mailula Park, Vosloorus, South Africa</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6" />
                    <span>Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6" />
                    <span>Emergency services available 24/7</span>
                  </div>
                </div>
              </div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
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
                      <label className="text-sm font-medium">Message</label>
                      <textarea className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
                    </div>
                    <Button className="w-full bg-pink-800 hover:bg-pink-700">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}