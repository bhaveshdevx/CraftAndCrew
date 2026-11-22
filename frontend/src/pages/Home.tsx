import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  ArrowRight,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { services, stats, whyUs, testimonials } from '../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase,
  Code2,
  Zap,
  BarChart3,
  Cloud,
  Globe,
}

import { Target, Layers, TrendingUp, DollarSign, Shield, Users } from 'lucide-react'

const whyIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target,
  Layers,
  TrendingUp,
  DollarSign,
  Shield,
  Users,
}

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
        <div className="container-max section-padding w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-700">Technology & Business Consulting</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              We{' '}
              <span className="text-gradient">Understand.</span>
              <br />
              We <span className="text-gradient">Innovate.</span>
              <br />
              We <span className="text-gradient">Automate.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Craft & Crew simplifies business operations by combining technology, automation, analytics and
              consulting — delivering practical, scalable solutions for businesses.
              <p>
                <b>Customize ERP | Website | Mobile Application | Analytical Dashboard.</b>
              </p>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md shadow-blue-200"
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-medium px-6 py-3 rounded-lg border border-slate-200 transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-blue-600 py-10">
        <div className="container-max px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl lg:text-4xl font-bold mb-1">{s.value}</p>
                <p className="text-sm text-blue-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Services Built Around Your Business
            </h2>
            <p className="text-slate-500 leading-relaxed">
              From consulting to custom development — we provide end-to-end solutions that eliminate friction
              and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-4 transition-colors">
                    {Icon && (
                      <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all text-sm"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Why Craft & Crew</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              The Right Partner for Your Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => {
              const Icon = whyIconMap[item.icon]
              return (
                <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {Icon && <Icon size={18} className="text-blue-600" />}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Brand Promise ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 section-padding text-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Our Brand Promise</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
              We believe every business challenge is an opportunity to build something better.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              At Craft & Crew, we bring business understanding and technological innovation together to create
              practical solutions that make businesses more efficient, intelligent and future-ready.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Learn About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      {/* <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Businesses That Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-700 leading-relaxed mb-5 text-sm italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <br />

      {/* ── CTA ── */}
      <section className="bg-blue-600 section-padding">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Let's understand your challenges together and build a solution that works for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-600 font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

