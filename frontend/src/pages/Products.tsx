import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products, type Product } from '../data/content'

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Product['status'] }) {
  const map = {
    available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    beta: 'bg-amber-50 text-amber-700 border-amber-200',
    'coming-soon': 'bg-slate-100 text-slate-500 border-slate-200',
  }
  const labels = {
    available: 'Available',
    beta: 'Beta',
    'coming-soon': 'Coming Soon',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${map[status]}`}>
      {status !== 'coming-soon' && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {labels[status]}
    </span>
  )
}

// ─── Product card — intentionally minimal ─────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const isAvailable = product.status !== 'coming-soon'

  return (
    <div
      className={`group relative bg-white rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 ${
        isAvailable
          ? 'border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 cursor-pointer'
          : 'border-slate-100 opacity-80'
      }`}
    >
      {/* Category pill */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {product.category}
        </span>
        <StatusBadge status={product.status} />
      </div>

      {/* Icon + name */}
      <div className="flex items-center gap-3">
        <div className="text-3xl leading-none select-none">{product.icon}</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">{product.name}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{product.tagline}</p>
        </div>
      </div>

      {/* CTA */}
      {isAvailable ? (
        <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-auto group-hover:gap-2 transition-all">
          Learn more <ArrowRight size={14} />
        </div>
      ) : (
        <p className="text-xs text-slate-400 mt-auto">Notify me when available →</p>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Products() {
  const availableProducts = products.filter((p) => p.status !== 'coming-soon')
  const comingSoon = products.filter((p) => p.status === 'coming-soon')

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Products</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">
              Tools we're
              <span className="text-gradient"> building for you</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              A growing suite of focused products — each one designed to solve a specific business problem,
              without the complexity of enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Available / Beta */}
      {availableProducts.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">Available Now</p>
              <h2 className="text-2xl font-bold text-slate-900">Ready to use</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {availableProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon */}
      {comingSoon.length > 0 && (
        <section className="bg-slate-50 section-padding">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">In the Works</p>
              <h2 className="text-2xl font-bold text-slate-900">Coming Soon</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comingSoon.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Early access CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 section-padding text-white">
        <div className="container-max">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-3">Want early access?</h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              We're building these products actively. If any of them solves a pain point you have, reach out —
              we'll prioritize and keep you in the loop.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={15} />
              Get Early Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

