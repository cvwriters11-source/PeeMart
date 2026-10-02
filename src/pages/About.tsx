import { Link } from "react-router-dom"
import { Seo } from "../components/Seo.tsx"
import {
  aboutImage,
  brand,
  firstVisit,
  principles,
  processSteps,
  story,
} from "../data/content.ts"

export function About() {
  return (
    <>
      <Seo
        title="About the Studio | PeeMart Fashions"
        description="PeeMart Fashions is an Edenvale studio for exclusive designs, custom wear, alterations, bulk production, and sewing and fashion courses."
      />

      <header className="page-wrap pt-16 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="kicker">{brand.city} studio</p>
            <h1 className="display-md mt-4">Designed, sewn, and taught in one studio.</h1>
          </div>
          <p className="lede md:col-span-5">
            {brand.supporting} PeeMart Fashions designs custom wear, alters and repairs clothing,
            produces bulk orders, and teaches sewing and fashion design.
          </p>
        </div>
        <div className="intro-rule" aria-hidden="true" />
      </header>

      <div className="page-wrap mt-12 pb-4 md:mt-16">
        <div className="aspect-[16/9] overflow-hidden bg-stone-300 md:aspect-[21/9]">
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="page-wrap grid gap-8 py-16 md:grid-cols-12 md:py-24" aria-labelledby="story-heading">
        <h2 id="story-heading" className="font-serif text-3xl font-semibold tracking-tight text-ink md:col-span-4 md:text-4xl">
          The studio
        </h2>
        <div className="space-y-6 text-base leading-relaxed text-stone-700 md:col-span-7 md:col-start-6 md:text-lg">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white" aria-labelledby="stand-heading">
        <div className="page-wrap py-16 md:py-24">
          <p className="kicker">What the studio stands for</p>
          <h2 id="stand-heading" className="display-md mt-3 max-w-xl">
            Design, fit, finish.
          </h2>
          <ul className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
            {principles.map((principle) => (
              <li key={principle.title} className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                <h3 className="font-serif text-3xl font-medium tracking-tight text-ink md:col-span-4 md:text-4xl">{principle.title}</h3>
                <p className="text-base leading-relaxed text-stone-700 md:col-span-7 md:col-start-6 md:text-lg">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-wrap py-16 md:py-24" aria-labelledby="method-heading">
        <div className="max-w-2xl">
          <p className="kicker">For a first commission</p>
          <h2 id="method-heading" className="display-md mt-3">
            How a piece is made
          </h2>
          <p className="lede mt-5">
            Nothing is cut in fashion fabric until the design is agreed and the shape has been seen
            on you. Courses follow the same order: design, then fit, then finish.
          </p>
          <div className="intro-rule" aria-hidden="true" />
        </div>
        <ol className="mt-14 space-y-0 border-t border-ink/10">
          {processSteps.map((step) => (
            <li key={step.number} className="grid gap-4 border-b border-ink/10 py-10 md:grid-cols-12 md:gap-8">
              <p className="font-sans text-sm font-medium tracking-[0.16em] text-red md:col-span-2">{step.number}</p>
              <div className="md:col-span-9 md:col-start-4">
                <h3 className="font-serif text-3xl font-medium tracking-tight text-ink">{step.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-700">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white" aria-labelledby="visit-heading">
        <div className="page-wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="kicker">The first visit</p>
            <h2 id="visit-heading" className="display-md mt-3">
              Come as you are.
            </h2>
            <p className="mt-5 text-stone-700">
              {brand.appointmentNote}. {brand.hours}.
            </p>
          </div>
          <ul className="space-y-5 md:col-span-6 md:col-start-7">
            {firstVisit.map((item) => (
              <li key={item} className="border-t border-ink/10 pt-4 text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-dark bg-navy text-white">
        <div className="page-wrap flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <h2 className="display max-w-xl">
            {brand.tagline}
          </h2>
          <Link to="/contact" className="btn-on-dark shrink-0">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  )
}
