import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { NavLink, Link, useLocation } from "react-router-dom"
import { brand, nav } from "../data/content.ts"

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)
  const menuId = useId()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)")
    const closeIfWide = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", closeIfWide)
    return () => media.removeEventListener("change", closeIfWide)
  }, [])

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) menuButtonRef.current?.focus()
      return
    }

    wasOpen.current = true
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const dialog = document.getElementById(menuId)
      if (!dialog) return
      const focusable = [
        ...dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, menuId])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="flex h-0.5" aria-hidden="true">
        <div className="h-full flex-1 bg-blue" />
        <div className="h-full w-10 bg-red" />
      </div>
      <div className="page-wrap flex h-16 items-center gap-4 md:h-[4.5rem]">
        <Link to="/" className="shrink-0" aria-label={`${brand.name} home`}>
          <img
            src="/logo.png"
            alt="PeeMart Fashions"
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav
          className="ml-auto hidden min-w-0 items-center gap-1 sm:flex md:gap-1.5 lg:gap-2"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => primaryNavClass(isActive, "row")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="font-sans text-sm font-medium tracking-[0.03em] text-stone-700">WhatsApp</span>
          {brand.whatsapp.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="font-sans text-sm font-medium tracking-[0.03em] text-blue underline-offset-4 hover:text-red hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${item.display}`}
            >
              {item.display}
            </a>
          ))}
        </div>
        <Link to="/contact" className="btn-fill hidden shrink-0 px-3.5 py-2 sm:inline-flex">
          Book a consultation
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon />
        </button>
      </div>

      <div className="flex h-9 items-center justify-end border-t border-ink/10 px-5 sm:hidden">
        <Link to="/contact" className="text-link">
          Book a consultation
        </Link>
      </div>

      {open
        ? createPortal(
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col bg-paper px-6 pb-10 pt-5 sm:hidden"
        >
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="PeeMart Fashions" className="h-14 w-auto" />
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-blue/30 text-blue"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => primaryNavClass(isActive, "stack")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            {brand.whatsapp.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="btn-line min-h-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {item.display}
              </a>
            ))}
            <Link to="/contact" className="btn-fill" onClick={() => setOpen(false)}>
              Book a consultation
            </Link>
          </div>
        </div>,
          document.body,
        )
        : null}
    </header>
  )
}

function primaryNavClass(isActive: boolean, layout: "row" | "stack") {
  return [
    "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] border border-blue font-sans text-sm font-bold transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue",
    isActive ? "bg-blue text-white hover:bg-navy" : "bg-white text-blue hover:bg-blue/10",
    layout === "row"
      ? "min-h-9 shrink-0 px-2 py-1.5 md:px-2.5 lg:px-3"
      : "min-h-11 w-full px-4 py-3",
  ].join(" ")
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h16M4 17h12" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
