import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { brand } from "../data/content.ts"
import { Footer } from "./Footer.tsx"
import { Header } from "./Header.tsx"

export function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {pathname === "/contact" ? null : (
        <a
          className="whatsapp-float lg:hidden"
          href={brand.whatsapp[0].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp ${brand.whatsapp[0].display}`}
        >
          <WhatsAppIcon />
        </a>
      )}
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.19-1.16-1.54-1.16-2.94s.73-2.09 1-2.37c.24-.28.64-.41 1.02-.41h.3c.24 0 .36.02.52.4.2.46.68 1.66.74 1.78.06.12.1.28.02.44-.08.16-.12.28-.24.43-.12.14-.25.32-.36.43-.12.12-.24.24-.1.48.14.24.62 1.02 1.33 1.65.92.82 1.68 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z"
      />
    </svg>
  )
}
