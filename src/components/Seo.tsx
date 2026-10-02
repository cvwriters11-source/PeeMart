import { useEffect } from "react"

type SeoProps = {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title
    const existing = document.querySelector('meta[name="description"]')
    const meta = existing ?? document.createElement("meta")
    if (!existing) {
      meta.setAttribute("name", "description")
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", description)
  }, [title, description])

  return null
}
