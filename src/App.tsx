import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout.tsx"
import { Seo } from "./components/Seo.tsx"
import { About } from "./pages/About.tsx"
import { Contact } from "./pages/Contact.tsx"
import { Home } from "./pages/Home.tsx"
import { Services } from "./pages/Services.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <section className="page-wrap py-24 md:py-32">
      <Seo
        title="Page not found | PeeMart Fashions"
        description="This page is not part of the PeeMart Fashions site for exclusive designs, custom wear, and courses."
      />
      <p className="kicker">404</p>
      <h1 className="display-md mt-4">This page could not be found.</h1>
      <p className="lede mt-5">The link may be out of date. The studio is still here.</p>
      <div className="intro-rule" aria-hidden="true" />
      <Link to="/" className="btn-fill mt-8">
        Return home
      </Link>
    </section>
  )
}
