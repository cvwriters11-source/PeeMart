import { useState, type FormEvent, type ReactNode } from "react"
import { useSearchParams } from "react-router-dom"
import { Seo } from "../components/Seo.tsx"
import {
  brand,
  enquiryMailto,
  serviceById,
  services,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryFields,
} from "../data/content.ts"

function isErrorField(key: keyof EnquiryFields): key is keyof EnquiryErrors {
  return key === "name" || key === "email" || key === "service" || key === "message"
}

const errorOrder = ["service", "name", "email", "message"] as const

const emptyFields: EnquiryFields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  eventDate: "",
  message: "",
}

export function Contact() {
  const [params] = useSearchParams()
  const requested = params.get("service") ?? ""
  const initialService = serviceById(requested)?.id ?? ""

  return (
    <>
      <Seo
        title="Book a Consultation | PeeMart Fashions"
        description={`Book a consultation with PeeMart Fashions in ${brand.city} for exclusive designs, custom wear, or a sewing and fashion course.`}
      />
      <ContactForm key={initialService || "general"} initialService={initialService} />
    </>
  )
}

function ContactForm({ initialService }: { initialService: string }) {
  const [fields, setFields] = useState<EnquiryFields>({
    ...emptyFields,
    service: initialService,
  })
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [opened, setOpened] = useState(false)
  const selected = serviceById(initialService)

  function update<K extends keyof EnquiryFields>(key: K, value: EnquiryFields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    if (isErrorField(key)) clearError(key)
  }

  function clearError(key: keyof EnquiryErrors) {
    setErrors((current) => {
      if (!current[key]) return current
      const next = { ...current }
      delete next[key]
      return next
    })
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateEnquiry(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setOpened(false)
      const firstInvalid = errorOrder.find((key) => nextErrors[key])
      if (firstInvalid) document.getElementById(firstInvalid)?.focus()
      return
    }
    const href = enquiryMailto(fields)
    setOpened(true)
    const link = document.createElement("a")
    link.href = href
    link.rel = "nofollow"
    document.body.append(link)
    link.click()
    link.remove()
  }

  return (
    <div className="contact-enquiry page-wrap py-8 md:py-14">
      <header className="contact-band">
        <div className="contact-band-copy">
          <p className="contact-band-kicker">Appointments</p>
          <h1 className="contact-band-title">Book a consultation.</h1>
          <span className="contact-band-rule" aria-hidden="true" />
          <p className="contact-band-lede">
            Choose a service and send an enquiry. It opens your email app, addressed to the studio.
          </p>
          {selected ? (
            <p className="contact-band-note">
              This enquiry is set to {selected.name}. You can change it in the form.
            </p>
          ) : null}
        </div>
      </header>

      <div className="mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-12 lg:gap-12">
        <form
          className="contact-card p-5 sm:p-6 lg:col-span-7"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="contact-card-mark" aria-hidden="true">
            <img src="/logo.png" alt="" draggable={false} />
          </div>
          <div className="contact-card-body">
          {Object.keys(errors).length > 0 ? (
            <p role="alert" className="mb-5 border border-red/30 bg-white px-4 py-3 text-sm text-red">
              Please check the highlighted fields before sending.
            </p>
          ) : null}

          <Field id="service" label="Service" tone="accent" error={errors.service}>
            <select
              id="service"
              name="service"
              required
              className="field"
              value={fields.service}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              onChange={(event) => update("service", event.target.value)}
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </Field>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="field"
                value={fields.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={(event) => update("name", event.target.value)}
              />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="field"
                value={fields.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={(event) => update("email", event.target.value)}
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field id="phone" label="Phone" hint="Optional.">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="field"
                value={fields.phone}
                aria-describedby="phone-hint"
                onChange={(event) => update("phone", event.target.value)}
              />
            </Field>
            <Field id="eventDate" label="Event date" hint="Optional.">
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                className="field"
                value={fields.eventDate}
                aria-describedby="eventDate-hint"
                onChange={(event) => update("eventDate", event.target.value)}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="field resize-y"
                value={fields.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={(event) => update("message", event.target.value)}
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" className="contact-submit btn-fill font-bold">
              Send enquiry
            </button>
            <p className="text-sm text-stone-700">Opens your email application. Nothing is stored on this site.</p>
          </div>

          {opened ? (
            <p role="status" className="mt-5 text-sm leading-relaxed text-ink">
              Your email application should open with this message addressed to {brand.email}. If
              nothing opens, write to us there directly.
            </p>
          ) : null}
          </div>
        </form>

        <aside className="contact-card h-fit p-5 sm:p-6 lg:col-span-5">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">The studio</h2>
          <dl className="mt-5 space-y-5">
            <Detail term="Address" value={brand.address} />
            <Detail term="Hours" value={brand.hours} />
            <div>
              <dt className="kicker">Phone</dt>
              <dd className="mt-1 flex flex-col">
                {brand.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="contact-line">
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="kicker">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${brand.email}`} className="contact-line break-all">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">WhatsApp</dt>
              <dd className="mt-1 flex flex-col">
                {brand.whatsapp.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    className="contact-line"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp {item.display}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-stone-700">{brand.appointmentNote}.</p>
        </aside>
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  error,
  hint,
  tone,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  tone?: "accent"
  children: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={tone === "accent" ? "contact-label contact-label-accent" : "contact-label"}
      >
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-stone-700">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="kicker">{term}</dt>
      <dd className="contact-detail-value">{value}</dd>
    </div>
  )
}
