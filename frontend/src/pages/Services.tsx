import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/content'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase,
  Code2,
  Zap,
  BarChart3,
  Cloud,
  Globe,
}

const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start by deeply understanding your business — challenges, goals, and existing systems.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our team designs a practical, scalable solution blueprint tailored to your needs and budget.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We build, test, and refine the solution with continuous feedback and transparency.',
  },
  {
    step: '04',
    title: 'Deploy & Support',
    description: 'We go live with you and provide ongoing support to ensure long-term success.',
  },
]

export default function Services() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Solutions crafted for
              <span className="text-gradient"> real business outcomes</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              We don't offer off-the-shelf answers. Every service we deliver is designed around your specific
              business challenge — practical, scalable and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* ── All Services ── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors shrink-0">
                      {Icon && (
                        <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
                      <p className="text-slate-500 leading-relaxed mb-5 text-sm">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
                            <span className="text-xs text-slate-600">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Proven Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-slate-200 z-0 -translate-y-0.5" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
                )}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 relative z-10">
                  <span className="text-3xl font-bold text-blue-100 block mb-3">{p.step}</span>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-600 section-padding text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service fits your need?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Let's have a conversation. We'll understand your business first and recommend the right path.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-600 font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-lg"
          >
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

