import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Laptop } from "lucide-react"
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
              alt="Students in need of support"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Heart className="mx-auto mb-4 h-12 w-12" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sponsor a Child</h1>
            <p className="mx-auto max-w-3xl text-xl">
              Making real change for needy students — one act of support at a time.
            </p>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-blue-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Laptop className="h-8 w-8 text-blue-800" />
                <span className="rounded-full bg-blue-800 px-3 py-1 text-sm font-semibold text-white">
                  2026 Competition
                </span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Laptop Giveaway</h2>
              <p className="mb-4 text-lg text-gray-700">
                SchoolED is running a 2026 giveaway to make a direct difference in a young person&apos;s future. We will
                award <strong>one laptop</strong> to a needy student who has been accepted to university but cannot
                afford the technology they need to study.
              </p>
              <p className="text-gray-600">
                This is not about handouts for the sake of it — it is about removing a real barrier so a deserving
                student can start their tertiary journey with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Why We Do This</h2>
              <p className="mb-6 text-gray-600">
                Too many capable students are held back simply because they cannot afford uniforms, books, or tools like
                a laptop. Sponsor a Child exists to step in where it counts — for young people who are trying, but need
                someone to believe in them.
              </p>
              <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-600">
                <li>2026 Laptop Giveaway for a university-bound student in need</li>
                <li>Support for uniforms, books, and school essentials</li>
                <li>Partnerships with schools and communities to find deserving recipients</li>
                <li>Fair, transparent selection for competitions and support</li>
                <li>Room for corporate and community sponsors to get involved</li>
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-blue-800 hover:bg-blue-700 sm:w-auto">
                    Get Involved
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
                alt="Student studying"
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
