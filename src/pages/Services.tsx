import { Link } from "react-router-dom"
import { Seo } from "../components/Seo.tsx"
import { serviceGroups, services } from "../data/content.ts"

export function Services() {
  return (
    <>
      <Seo
        title="Services | PeeMart Fashions"
        description="Custom wear, African and traditional clothing, formal and wedding garments, alterations, bulk orders, and sewing and fashion courses at PeeMart Fashions in Edenvale."
      />

      <header className="page-wrap pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="kicker">Services</p>
          <h1 className="display-md mt-4">Exclusive designs, studio work, and courses.</h1>
          <p className="lede mt-5">
            Eleven ways to work with the studio, in three groups. Choose a service and the enquiry
            form opens with it already selected.
          </p>
          <div className="intro-rule" aria-hidden="true" />
        </div>
      </header>

      {serviceGroups.map((group) => {
        const items = services.filter((service) => service.group === group.id)
        return (
          <section
            key={group.id}
            className="mt-12 bg-white md:mt-16"
            aria-labelledby={`${group.id}-heading`}
          >
            <div className="page-wrap py-14 md:py-20">
              <div className="max-w-2xl border-b border-ink/10 pb-8">
                <p className="kicker">{String(items.length).padStart(2, "0")}</p>
                <h2 id={`${group.id}-heading`} className="display-md mt-3">
                  {group.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-700 md:text-lg">
                  {group.intro}
                </p>
              </div>
              <ul className="mt-10 grid gap-5 lg:grid-cols-2">
                {items.map((service) => (
                  <li key={service.id} id={service.id} className="scroll-mt-28 border border-ink/10 bg-white">
                    <article className="flex h-full flex-col p-6 md:p-8">
                      <h3 className="font-serif text-2xl font-medium leading-snug tracking-tight text-ink">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-stone-700">{service.summary}</p>
                      <h4 className="kicker mt-6">Who it is for</h4>
                      <p className="mt-2 text-base leading-relaxed text-ink">{service.audience}</p>
                      <h4 className="kicker mt-6">Included</h4>
                      <ul className="mt-2 space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="border-t border-ink/10 py-2 text-base leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="text-link mt-8 self-start"
                        aria-label={`Enquire about ${service.name}`}
                      >
                        Enquire
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}
      <div className="h-12 md:h-16" aria-hidden="true" />
    </>
  )
}
