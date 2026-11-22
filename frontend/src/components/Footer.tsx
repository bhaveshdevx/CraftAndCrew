import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  'Business Consulting',
  'Custom Applications',
  'Intelligent Automation',
  'Data Analytics & MIS',
  'Cloud & ERP Solutions',
  'Digital Transformation',
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Craft<span className="text-blue-400">&</span>Crew
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              We Understand. We Innovate. We Automate. Simplifying business operations through technology, automation
              and consulting.
            </p>
            <div className="flex gap-3">
              {/* Whatsapp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.82 11.82 0 0 0-3.42-8.43ZM12.04 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 1 1 8.39 4.63Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                aria-label="X"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:business@craftandcrew.in"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-slate-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Office no 2, Patil Commercial, Manpada Road, Dombivli (E) 421204</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:+918369717181" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 83697 17181
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-blue-400 shrink-0" />
                <a href="https://wa.me/918369717181?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 83697 17181
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:business@craftandcrew.in"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  business@craftandcrew.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Craft & Crew. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">We Understand. We Innovate. We Automate.</p>
        </div>
      </div>
    </footer>
  )
}
