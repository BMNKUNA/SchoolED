import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function SponsorPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative bg-blue-800 py-20 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Sponsor a Child"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Heart className="mx-auto mb-4 h-12 w-12" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sponsor a Child</h1>
            <p className="mx-auto max-w-3xl text-xl">
              Help underprivileged students access uniforms, books, and the resources they need to succeed.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Make a Lasting Difference</h2>
              <p className="mb-6 text-gray-600">
                Our Sponsor a Child program connects donors with students who need support. Your contribution can
                provide school uniforms, learning materials, or help cover school fees.
              </p>
              <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-600">
                <li>Direct support for students in need</li>
                <li>Options to sponsor uniforms, books, or school fees</li>
                <li>Regular updates on the student&apos;s progress</li>
                <li>Corporate sponsorship programs available</li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-blue-800 hover:bg-blue-700 sm:w-auto">
                    Become a Sponsor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
