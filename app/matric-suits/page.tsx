"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { matricSuitsGallery } from "@/lib/matric-suits-gallery"

export default function MatricSuitsGalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const goTo = useCallback(
    (index: number) => {
      const total = matricSuitsGallery.length
      setActiveIndex(((index % total) + total) % total)
    },
    [],
  )

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const lightboxPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + matricSuitsGallery.length) % matricSuitsGallery.length)
  }, [lightboxIndex])

  const lightboxNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % matricSuitsGallery.length)
  }, [lightboxIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % matricSuitsGallery.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") lightboxPrev()
      if (event.key === "ArrowRight") lightboxNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [lightboxIndex, lightboxNext, lightboxPrev])

  const featured = matricSuitsGallery[activeIndex]
  const lightboxPhoto = lightboxIndex !== null ? matricSuitsGallery[lightboxIndex] : null

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <main className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-blue-200">
              <Link href="/" className="inline-flex items-center gap-1 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
              <span>/</span>
              <span>Matric Dance Suits</span>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  SchoolED Tailoring
                </p>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Matric Dance Suits Gallery</h1>
                <p className="mt-4 max-w-xl text-lg text-slate-300">
                  Browse our matric formalwear — modern cuts, bold colours, and expert tailoring so every student looks
                  their best on the night.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="w-full bg-blue-700 hover:bg-blue-600 sm:w-auto">
                      Request a Fitting
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
                    >
                      All Services
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => openLightbox(activeIndex)}
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl sm:aspect-[4/3]"
                >
                  <Image
                    src={featured.src}
                    alt={featured.title}
                    fill
                    priority
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <p className="text-sm text-blue-200">Featured Look</p>
                    <h2 className="text-2xl font-semibold">{featured.title}</h2>
                    <p className="mt-1 text-sm text-slate-300">{featured.caption}</p>
                  </div>
                </button>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {matricSuitsGallery.map((photo, index) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Show ${photo.title}`}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeIndex ? "w-8 bg-blue-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(activeIndex - 1)}
                      className="rounded-full border border-white/15 p-2 hover:bg-white/10"
                      aria-label="Previous featured photo"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(activeIndex + 1)}
                      className="rounded-full border border-white/15 p-2 hover:bg-white/10"
                      aria-label="Next featured photo"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">The Collection</h2>
                <p className="mt-2 max-w-2xl text-slate-400">
                  Tap any photo to view it full screen. Every suit is tailored by SchoolED for matric dances and formal
                  events.
                </p>
              </div>
              <p className="text-sm text-slate-500">{matricSuitsGallery.length} looks</p>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {matricSuitsGallery.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-slate-900 text-left shadow-lg"
                >
                  <div className="w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={0}
                      height={0}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{photo.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{photo.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-blue-950/40 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold">Ready for Your Matric Look?</h2>
            <p className="mt-4 text-lg text-slate-300">
              Book a fitting with our lead tailor and let SchoolED help you stand out on your matric dance night.
            </p>
            <Link href="/contact" className="mt-8 inline-block">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-600">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {lightboxPhoto && lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={lightboxPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={lightboxNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 hover:bg-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={lightboxPhoto.src}
              alt={lightboxPhoto.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-0 right-0 px-4 text-center">
            <h3 className="text-xl font-semibold">{lightboxPhoto.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{lightboxPhoto.caption}</p>
            <p className="mt-2 text-xs text-slate-500">
              {lightboxIndex + 1} of {matricSuitsGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
