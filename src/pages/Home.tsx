import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Seo } from "../components/Seo.tsx"
import {
  brand,
  hero,
  lookbook,
  processSteps,
  serviceGroups,
  services,
  testimonials,
} from "../data/content.ts"

const lookSpans = [
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
]

const SLIDE_MS = 6000

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return reduced
}

function HeroSlideshow() {
  const slides = hero.slides
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const paused = hovered || focused || reducedMotion

  const showPrevious = useCallback(() => {
    setIndex((current) => (current - 1 + slides.length) % slides.length)
  }, [slides.length])

  const showNext = useCallback(() => {
    setIndex((current) => (current + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [paused, index, slides.length])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || target.closest("input, textarea, select"))
      ) {
        return
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        showPrevious()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        showNext()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [showNext, showPrevious])

  return (
    <section
      className="on-dark relative min-h-[calc(100svh-6.75rem)] bg-black text-white sm:min-h-[calc(100svh-4.75rem)]"
      aria-roledescription="carousel"
      aria-label="Fashion design samples"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false)
        }
      }}
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index
        return (
          <img
            key={slide.image}
            src={slide.image}
            alt={active ? slide.alt : ""}
            aria-hidden={active ? undefined : true}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              active ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: slide.objectPosition }}
            fetchPriority={slideIndex === 0 ? "high" : "low"}
            decoding="async"
          />
        )
      })}
      <div className="page-wrap relative flex min-h-[calc(100svh-6.75rem)] flex-col justify-end pb-16 pt-16 sm:min-h-[calc(100svh-4.75rem)] sm:pb-20">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
          <div className="relative min-w-0 max-w-3xl">
            <div
              className="pointer-events-none absolute -inset-x-3 -inset-y-5 bg-gradient-to-r from-black/70 from-10% via-black/45 via-[68%] to-transparent sm:-inset-x-5"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="kicker-light">{hero.eyebrow}</p>
              <h1 className="display mt-5 max-w-4xl">{hero.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{hero.promise}</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">{hero.support}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-fill">
                  Book a consultation
                </Link>
                <Link to="/services" className="btn-line-light">
                  View services
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:mb-1 lg:justify-end">
            <button type="button" className="hero-slide-btn" onClick={showPrevious}>
              Back
            </button>
            <p
              className="min-w-[4.5rem] rounded-[2px] bg-black/55 px-2 py-3 text-center font-sans text-sm font-bold tabular-nums tracking-[0.08em] text-white"
              aria-live="polite"
            >
              <span className="sr-only">Design sample </span>
              {index + 1} / {slides.length}
            </p>
            <button type="button" className="hero-slide-btn" onClick={showNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Seo
        title="PeeMart Fashions | Exclusive Designs Your Way"
        description="PeeMart Fashions in Edenvale. Exclusive designs your way — custom wear, traditional and formal clothing, alterations, and sewing and fashion courses."
      />

      <HeroSlideshow />

      <section className="bg-white" aria-labelledby="services-heading">
        <div className="page-wrap py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">The studio</p>
              <h2 id="services-heading" className="display-md mt-3">
                Made, mended, and taught
              </h2>
            </div>
            <Link to="/services" className="text-link hidden sm:inline">
              All services
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const group = serviceGroups.find((item) => item.id === service.group)
              return (
                <li key={service.id} className="bg-white">
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="flex h-full flex-col border border-ink/10 p-6 transition-colors hover:border-blue/30"
                    aria-label={`Enquire about ${service.name}`}
                  >
                    <span className="kicker">{group?.title}</span>
                    <h3 className="mt-3 font-serif text-2xl font-medium leading-snug tracking-tight text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-stone-700">{service.summary}</p>
                    <span className="text-link mt-6">Enquire</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="page-wrap py-16 md:py-24" aria-labelledby="lookbook-heading">
        <div className="max-w-2xl">
          <p className="kicker">Lookbook</p>
          <h2 id="lookbook-heading" className="display-md mt-3">
            Selected work
          </h2>
          <p className="lede mt-5">
            A sense of the clothes. Custom pieces, cultural wear, and occasion garments start with your brief.
          </p>
          <div className="intro-rule" aria-hidden="true" />
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {lookbook.map((item, index) => (
            <li key={item.title} className={lookSpans[index]}>
              <figure>
                <div className="aspect-[3/4] overflow-hidden bg-stone-300">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 border-t border-ink/10 pt-3">
                  <p className="kicker">{item.category}</p>
                  <p className="mt-1 font-serif text-xl font-medium tracking-tight text-ink">{item.title}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white" aria-labelledby="process-heading">
        <div className="page-wrap py-16 md:py-24">
          <p className="kicker">The sequence</p>
          <h2 id="process-heading" className="display-md mt-3">
            Design, fit, finish
          </h2>
          <div className="intro-rule" aria-hidden="true" />
          <ol className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t border-ink/10 pt-6">
                <p className="font-sans text-sm font-medium tracking-[0.16em] text-red">{step.number}</p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-stone-700">{step.summary}</p>
              </li>
            ))}
          </ol>
          <Link to="/about" className="btn-line mt-12">
            The process in detail
          </Link>
        </div>
      </section>

      <section className="page-wrap py-16 md:py-24" aria-labelledby="notes-heading">
        <p className="kicker">From the fitting room</p>
        <h2 id="notes-heading" className="display-md mt-3">
          Client notes
        </h2>
        <div className="intro-rule" aria-hidden="true" />
        <ul className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((note) => (
            <li key={note.name} className="border-t border-ink/10 pt-6">
              <blockquote>
                <p className="font-serif text-xl font-medium italic leading-snug tracking-tight text-ink">
                  “{note.quote}”
                </p>
                <footer className="mt-6 text-base text-stone-700">
                  <cite className="not-italic font-medium text-ink">{note.name}</cite>
                  <span className="kicker mt-2 block text-stone-700">{note.context}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>

      <section className="on-dark bg-navy text-white" aria-labelledby="close-heading">
        <div className="page-wrap flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <div className="max-w-2xl">
            <p className="kicker-light">Consultations</p>
            <h2 id="close-heading" className="display mt-4 max-w-xl">
              {brand.tagline}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              Appointments are held in {brand.city}, {brand.hours.toLowerCase()}. Bring a date, a
              photograph, or a question about a course.
            </p>
          </div>
          <Link to="/contact" className="btn-on-dark shrink-0">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  )
}
