import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { coreGoals, industries, stats } from '../data/content'

export default function About() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Built on the belief that
              <span className="text-gradient"> technology should work for people</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Craft & Crew is a technology and business consulting company on a mission to simplify how
              businesses operate — through intelligent solutions, honest partnerships and measurable outcomes.
            </p>
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

      {/* ── Vision & Mission ── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-blue-600 font-bold text-sm">V</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                To become a trusted global technology and business consulting company, transforming businesses
                through innovation and intelligent digital solutions.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We envision a future where every business, regardless of its size, has access to the right
                technology, systems and expertise to operate smarter, faster and more efficiently.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <span className="text-blue-600 font-bold text-sm">M</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                To simplify business operations by combining technology, automation, analytics and consulting to
                deliver practical, scalable and cost-effective solutions.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We don't just provide services — we build solutions that create long-term value for businesses
                of all sizes, from startups to global enterprises.
              </p>
            </div>
          </div>

          {/* Goal */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Goal</h2>
            <p className="text-blue-100 leading-relaxed max-w-3xl">
              To build a sustainable technology ecosystem offering business consulting, customized applications,
              automation products, SaaS, ERP and cloud solutions to businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Goals ── */}
      <section className="bg-slate-50 section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Core Goals</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              What We're Working Towards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreGoals.map((goal) => (
              <div key={goal.number} className="bg-white p-6 rounded-2xl border border-slate-100 group hover:border-blue-100 hover:shadow-md transition-all">
                <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors block mb-3">
                  {goal.number}
                </span>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{goal.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Sectors We Serve
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full"
              >
                <CheckCircle2 size={14} className="text-blue-500" />
                <span className="text-sm text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 section-padding text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Let's understand your business challenges and build a path forward together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

