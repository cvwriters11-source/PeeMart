# PeeMart Fashions

Studio website for PeeMart Fashions, an Edenvale fashion atelier. Enquiries open the visitor’s email app. There is no backend.

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints, usually [http://localhost:5173](http://localhost:5173).

To check a production build:

```bash
npm run build
npm run preview
```

## Edit contact details

Phone, email, WhatsApp, city, and hours live in one place: `src/data/content.ts`, inside the `brand` object.

| Field | What it changes |
| --- | --- |
| `city` | City shown in the footer, contact page, hero, and appointment notes |
| `address` | Street address on the contact page and footer |
| `phones` | Numbers visitors see, each with a `display` label and a `tel:` `href` |
| `email` | The address on the site, and where the enquiry form sends mail |
| `whatsapp` | WhatsApp links (`https://wa.me/` plus the number, no plus sign). The floating button uses the first entry |
| `hours` | Studio hours on the contact page and footer |

Services, testimonials, process copy, and lookbook image URLs are in the same file.
