import { Mail, MapPin, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { useState } from 'react'
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;



const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 83697 17181',
    href: 'tel:+918369717181',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'business@craftandcrew.in',
    href: 'mailto:business@craftandcrew.in',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Office no 2, Patil Commercial, Manpada Road, Dombivli (E) 421204',
    href: '#',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83697 17181',
    href: 'https://wa.me/+918369717181?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20website%20design%20services.%20Thank%20you.',
  }
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(GOOGLE_SCRIPT_URL)


    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      });

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Let's start a{' '}
              <span className="text-gradient">conversation</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Whether you have a clear project in mind or just a business challenge you're struggling with —
              we'd love to understand and help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact body ── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h2>

              <div className="space-y-5 mb-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.label} className="flex items-start gap-4 mb-4.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">What happens next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your enquiry within 24 hours',
                    'A consultant reaches out to understand your needs',
                    'We prepare a tailored proposal for you',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="business@craftandcrew.in"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Business Consulting</option>
                      <option>Custom Applications</option>
                      <option>Intelligent Automation</option>
                      <option>Data Analytics & MIS</option>
                      <option>Cloud & ERP Solutions</option>
                      <option>Digital Transformation</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tell us about your challenge <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your business challenge or what you're looking to achieve..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-md shadow-blue-200"
                  >
                    Send Message
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

