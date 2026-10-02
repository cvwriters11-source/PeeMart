import { Link } from "react-router-dom"
import { brand, nav } from "../data/content.ts"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-white text-ink">
      <div className="flex h-0.5" aria-hidden="true">
        <div className="h-full flex-1 bg-blue" />
        <div className="h-full w-10 bg-red" />
      </div>
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img src="/logo.png" alt="PeeMart Fashions" className="h-24 w-auto md:h-28" />
          <p className="mt-6 max-w-sm text-base leading-relaxed text-stone-700">{brand.supporting}</p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="kicker">Visit</p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-base text-ink hover:text-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="kicker">Studio</p>
          <ul className="mt-4 space-y-3 text-base text-ink">
            <li>{brand.address}</li>
            {brand.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="font-sans text-blue hover:text-red hover:underline">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${brand.email}`} className="break-all font-sans text-blue hover:text-red hover:underline">
                {brand.email}
              </a>
            </li>
            {brand.whatsapp.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="font-sans text-blue hover:text-red hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {item.display}
                </a>
              </li>
            ))}
            <li>{brand.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="page-wrap flex flex-col gap-3 py-6 pb-24 text-xs tracking-wide text-stone-700 md:flex-row md:items-center md:justify-between lg:pb-6">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="max-w-full break-words">
            {brand.city} · {brand.phones.map((phone) => phone.display).join(" · ")} · {brand.email}
          </p>
        </div>
      </div>
    </footer>
  )
}
