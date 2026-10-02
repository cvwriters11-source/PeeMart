/**
 * Studio details and page copy.
 * Change the phones, email, WhatsApp links, address, city, and hours in `brand`.
 */

export const brand = {
  name: "PeeMart Fashions",
  wordmark: "PeeMart",
  descriptor: "Fashions",
  tagline: "Exclusive Designs Your Way",
  supporting: "Where creativity meets craftsmanship, and every stitch tells a story.",
  city: "Edenvale",
  address: "74 3rd Avenue, Edenvale",
  phones: [
    { display: "084 039 9898", href: "tel:+27840399898" },
    { display: "081 437 5727", href: "tel:+27814375727" },
  ],
  email: "hello@peemartfashions.co.za",
  whatsapp: [
    { display: "084 039 9898", url: "https://wa.me/27840399898" },
    { display: "081 437 5727", url: "https://wa.me/27814375727" },
  ],
  hours: "Tuesday to Saturday, 9:00–17:00",
  appointmentNote: "By appointment, Edenvale",
}

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const

const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const hero = {
  slides: [
    {
      image:
        "https://images.pexels.com/photos/8483977/pexels-photo-8483977.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "A young woman marks a garment pattern in chalk on blue fabric at a cutting table",
      objectPosition: "center 28%",
    },
    {
      image:
        "https://images.pexels.com/photos/9849650/pexels-photo-9849650.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "A young woman cuts orange fabric along a paper pattern in a studio",
      objectPosition: "72% 30%",
    },
    {
      image:
        "https://images.pexels.com/photos/19276956/pexels-photo-19276956.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "A young woman measures a dress form with a tape in a sewing studio",
      objectPosition: "30% 42%",
    },
    {
      image:
        "https://images.pexels.com/photos/37409120/pexels-photo-37409120.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "A young woman guides black fabric under an industrial sewing machine",
      objectPosition: "68% 36%",
    },
    {
      image:
        "https://images.pexels.com/photos/38463048/pexels-photo-38463048.jpeg?auto=compress&cs=tinysrgb&w=2000",
      alt: "A young woman sews patterned cloth on a vintage sewing machine",
      objectPosition: "center 30%",
    },
  ],
  eyebrow: `Studio · ${brand.city}`,
  title: brand.tagline,
  promise: brand.supporting,
  support:
    "Custom wear, African and traditional clothing, formal and corporate outfits, alterations, bulk orders, and fashion courses.",
}

export type ServiceGroupId = "design" | "studio" | "courses"

export const serviceGroups: {
  id: ServiceGroupId
  title: string
  intro: string
}[] = [
  {
    id: "design",
    title: "Design & wear",
    intro:
      "Clothing designed and made for you: custom outfits, African and traditional wear, formal and corporate clothes, and wedding garments.",
  },
  {
    id: "studio",
    title: "Studio services",
    intro:
      "Alterations and repairs, original garment construction, and collections or bulk orders for other fashion brands.",
  },
  {
    id: "courses",
    title: "Courses",
    intro:
      "Sewing and fashion design classes, from a first introduction to a longer programme with practical projects and a portfolio.",
  },
]

export type Service = {
  id: string
  group: ServiceGroupId
  name: string
  summary: string
  audience: string
  includes: string[]
}

export const services: Service[] = [
  {
    id: "custom-outfits",
    group: "design",
    name: "Custom-Made Outfits",
    summary:
      "Bespoke clothing designed to your measurements, with exclusive designs tailored to your taste.",
    audience:
      "For clients who want a special-occasion outfit or an everyday piece made to their measurements and their brief.",
    includes: [
      "Bespoke clothing designed to your measurements",
      "Exclusive designs tailored to your taste",
      "Special-occasion outfits",
      "Everyday outfits",
    ],
  },
  {
    id: "african-traditional",
    group: "design",
    name: "African and Traditional Wear",
    summary: "Modern African-inspired fashion, traditional and cultural outfits, and Ankara designs.",
    audience:
      "For clients dressing for culture, ceremony, and contemporary looks rooted in African design.",
    includes: [
      "Modern African-inspired fashion",
      "Traditional and cultural outfits",
      "Ankara designs",
    ],
  },
  {
    id: "occasion-formal",
    group: "design",
    name: "Special Occasion & Formal Wear",
    summary: "Evening and red-carpet gowns, matric dance and graduation dresses, and wedding guest outfits.",
    audience: "For celebrations, formal evenings, and the milestones that call for a considered dress.",
    includes: [
      "Evening and red-carpet gowns",
      "Matric dance and graduation dresses",
      "Wedding guest outfits",
    ],
  },
  {
    id: "corporate",
    group: "design",
    name: "Corporate & Professional Wear",
    summary:
      "Tailored suits, office wear, corporate uniforms, and professional outfits for individuals and teams.",
    audience: "For professionals and teams who need workwear that fits the person and the role.",
    includes: [
      "Tailored suits and office wear",
      "Corporate uniforms",
      "Workwear and professional outfits for individuals and teams",
    ],
  },
  {
    id: "alterations",
    group: "studio",
    name: "Clothing Alterations & Repairs",
    summary: "Resizing, fitting adjustments, hemming, repairs, and restyling for clothes you already own.",
    audience: "For clients who want a garment resized, repaired, or brought back into wear.",
    includes: [
      "Resizing and fitting adjustments",
      "Hemming",
      "Garment alterations",
      "Clothing repairs and restyling",
    ],
  },
  {
    id: "garment-construction",
    group: "studio",
    name: "Fashion Design & Garment Construction",
    summary:
      "Original design development, pattern making, fabric cutting, and professional construction and finishing.",
    audience:
      "For clients and labels who need a garment designed and built from the first idea through the last stitch.",
    includes: [
      "Original design development",
      "Pattern making",
      "Fabric cutting",
      "Professional garment construction and finishing",
    ],
  },
  {
    id: "collections",
    group: "studio",
    name: "Fashion Collections & Bulk Orders",
    summary:
      "Exclusive collections, matching outfits, coordinated sets, and small-batch or bulk production for other fashion brands.",
    audience:
      "For fashion brands and groups who need more than a single piece, made to a consistent standard.",
    includes: [
      "Exclusive clothing collections",
      "Matching outfits and coordinated sets",
      "Small-batch production",
      "Bulk garment orders for other fashion brands",
    ],
  },
  {
    id: "wedding",
    group: "design",
    name: "Wedding Garments",
    summary: "Dresses for the bride and for bridesmaids, cut and fitted for the wedding party.",
    audience: "For brides and bridesmaids who want wedding garments made for the day and the people in them.",
    includes: ["Bride dresses", "Bridesmaid dresses"],
  },
  {
    id: "beginner-sewing",
    group: "courses",
    name: "Beginner Sewing Courses",
    summary: "An introduction to sewing, equipment, and the first steps of making a simple garment.",
    audience: "For beginners who want a practical start in the workroom, with no prior sewing experience required.",
    includes: [
      "Introduction to sewing and sewing equipment",
      "Basic machine operation and stitching",
      "Taking body measurements",
      "Simple garment construction",
      "Basic finishing techniques",
    ],
  },
  {
    id: "short-courses",
    group: "courses",
    name: "Short-Term Fashion & Designing Courses",
    summary: "A short practical course in pattern work, simple garments, alterations, and finishing.",
    audience:
      "For students who want a focused run of classes covering drafting, cutting, and making everyday pieces.",
    includes: [
      "Basic pattern drafting, making, and cutting",
      "Sewing and garment construction",
      "Simple dresses, skirts, and trousers",
      "Alterations and garment finishing",
      "Practical sewing workshops",
    ],
  },
  {
    id: "long-courses",
    group: "courses",
    name: "Long-Term Fashion & Designing Courses",
    summary:
      "A longer programme from illustration and design through advanced tailoring, African fashion, and a portfolio.",
    audience:
      "For students ready to study fashion design and garment making in depth, and to leave with practical projects.",
    includes: [
      "Fashion illustration and design development",
      "Advanced pattern drafting",
      "Garment construction, advanced tailoring, and fitting",
      "Formal wear and African fashion",
      "Collection development",
      "Practical projects and portfolio development",
    ],
  },
]

export const principles = [
  {
    title: "Design",
    body: "Exclusive designs start from your measurements and your brief — a custom outfit, a cultural garment, a uniform, a wedding dress, or a collection for another brand. The same studio teaches the design process in class.",
  },
  {
    title: "Fit",
    body: "We measure, toile, and correct. Shoulder, waist, and hem are adjusted to the person, not to a size drafted for someone else. Alterations are assessed the same way before any cloth is recut.",
  },
  {
    title: "Finish",
    body: "Seams, linings, hems, and closures are completed so the garment is ready to wear. A single commission, a repair, and a bulk order are held to the same standard of construction.",
  },
]

export const processSteps = [
  {
    number: "01",
    title: "Design",
    summary:
      "We start with your brief and your measurements, and agree an exclusive design before fashion fabric is cut.",
    detail:
      "The first meeting covers the occasion, the wardrobe, the order, or the course you want. For a garment we agree the design, the cloth, and the scope before any fashion fabric is cut. For a course we confirm the level and what you will make. You leave knowing whether the studio is the right place, and what the work asks of both of us.",
  },
  {
    number: "02",
    title: "Fit",
    summary: "A pattern is taken from your measurements. You try the shape before the piece is finished.",
    detail:
      "Measurements are taken in the studio. For a new garment we cut a toile, a trial piece in plain cloth, so proportion can be corrected while changes are still simple. Bridal and occasion clients usually need more than one fitting. Alterations start with an honest check of whether the cloth can take the change, then a fitting on the body.",
  },
  {
    number: "03",
    title: "Finish",
    summary:
      "The garment is constructed, pressed, and checked so it is ready to wear — or, in class, so you can finish the work yourself.",
    detail:
      "The final piece is sewn and pressed in the studio, then tried on. We adjust the hem, the closure, and any point that pulls. When it leaves, it is finished. Students practise the same construction and finishing techniques on the garments they make. Restyling and bulk orders follow the same sequence of assessment, fit, and a proper finish.",
  },
]

export const firstVisit = [
  "Allow about an hour for a first conversation about a garment, an order, or a course.",
  "A reference photograph helps. Arriving without one is also fine.",
  "Bring the date if there is one, so fittings can be planned backward from it.",
  "We agree scope before fashion fabric is cut.",
]

export const lookbook = [
  {
    title: "Yellow set",
    category: "Editorial",
    image: photo("photo-1515886657613-9f3515b0c78f", 1400),
    alt: "Woman in a matching yellow cropped hoodie and sweatpants standing on an outdoor basketball court",
  },
  {
    title: "Shirt rail",
    category: "Wardrobe",
    image: photo("photo-1490481651871-ab68de25d43d", 1400),
    alt: "A rail of white and patterned shirts hanging on wooden hangers",
  },
  {
    title: "Striped trousers",
    category: "Daywear",
    image: photo("photo-1509631179647-0177331693ae", 1400),
    alt: "Woman in striped wide-leg trousers and a white top, posing against a green wall with a red bag",
  },
  {
    title: "Leather jacket",
    category: "Tailoring",
    image: photo("photo-1487222477894-8943e31ef7b2", 1400),
    alt: "Man in a brown leather jacket, blue shirt, and round sunglasses",
  },
  {
    title: "Studio portrait",
    category: "Studio",
    image: photo("photo-1524504388940-b1c1722653e1", 1400),
    alt: "Portrait of a woman with long hair in a sheer black top, one hand lifted near her face",
  },
  {
    title: "White dress",
    category: "Occasion",
    image: photo("photo-1515372039744-b8f02a3ae446", 1400),
    alt: "Woman in a short white off-the-shoulder dress standing on a staircase",
  },
]

export const testimonials = [
  {
    quote:
      "The dress sat at the shoulder for the first time in my life. Halfway through the vows I forgot I was wearing it.",
    name: "Naledi K.",
    context: "Wedding garments, Parktown",
  },
  {
    quote:
      "I brought three jackets that had never been right. Two were recut. One was retired, which was the correct advice.",
    name: "James P.",
    context: "Alterations, Houghton",
  },
  {
    quote:
      "The short course took me from a paper pattern to a skirt I finished myself. The steps were practical, and nothing was rushed.",
    name: "Amara S.",
    context: "Short course, Rosebank",
  },
]

export const aboutImage = {
  src: photo("photo-1445205170230-053b83016050", 1600),
  alt: "Rails of knitwear and coats on wooden hangers, seen through a glass window",
}

export const story = [
  "PeeMart Fashions is an Edenvale studio for exclusive designs, made your way. We design and sew custom outfits, African and traditional wear, formal and corporate clothing, and wedding garments, then stay with the piece through fittings until it sits the way it should.",
  "The same workroom alters and repairs clothing, develops original patterns, and cuts and constructs garments from the first design through the finish. We also produce exclusive collections, matching sets, and bulk orders for other fashion brands.",
  "Teaching is part of the studio. Beginner sewing, short practical courses, and a longer fashion and design programme are open to people who want to learn the craft as well as wear it.",
]

export type EnquiryFields = {
  name: string
  email: string
  phone: string
  service: string
  eventDate: string
  message: string
}

export type EnquiryErrors = Partial<Pick<EnquiryFields, "name" | "email" | "service" | "message">>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function serviceById(id: string) {
  return services.find((item) => item.id === id)
}

export function validateEnquiry(fields: EnquiryFields): EnquiryErrors {
  const errors: EnquiryErrors = {}
  if (!fields.name.trim()) errors.name = "Please enter your name."
  if (!emailPattern.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address."
  }
  if (!serviceById(fields.service)) {
    errors.service = "Please choose a service."
  }
  if (!fields.message.trim()) {
    errors.message = "Please tell us a little about what you need."
  }
  return errors
}

export function enquiryMailto(fields: EnquiryFields) {
  const serviceName = serviceById(fields.service)?.name ?? "Not specified"
  const subject = fields.service
    ? `${serviceName} enquiry — ${fields.name.trim()}`
    : `Consultation enquiry — ${fields.name.trim()}`
  const body = [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Phone: ${fields.phone.trim() || "Not provided"}`,
    `Service: ${serviceName}`,
    `Event date: ${fields.eventDate || "Not provided"}`,
    "",
    fields.message.trim(),
  ].join("\n")

  return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
