import { ExternalLink, Maximize2, Minimize2, X, Loader2, AlertCircle } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { projects, type Project } from '../data/content'

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    beta: 'bg-amber-50 text-amber-700 border-amber-200',
    demo: 'bg-blue-50 text-blue-700 border-blue-200',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${map[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

// ─── Iframe with loader & error ───────────────────────────────────────────────
function EmbedFrame({ url, title }: { url: string; title: string }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full bg-slate-100">
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-50 z-10">
          <Loader2 className="animate-spin text-blue-500" size={28} />
          <p className="text-sm text-slate-500">Loading preview…</p>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-50 z-10 p-6 text-center">
          <AlertCircle className="text-slate-400" size={32} />
          <p className="text-sm font-medium text-slate-600">Preview unavailable</p>
          <p className="text-xs text-slate-400">
            This site restricts embedding. Use the <strong>Open</strong> button to visit it directly.
          </p>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setError(true) }}
      />
    </div>
  )
}

// ─── Full-screen modal ────────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [maximized, setMaximized] = useState(false)

  // close on backdrop click
  const backdropRef = useRef<HTMLDivElement>(null)
  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => { if (e.target === backdropRef.current) onClose() },
    [onClose],
  )

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdrop}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          maximized
            ? 'w-full h-full rounded-none'
            : 'w-full max-w-5xl h-[85vh]'
        }`}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <h3 className="font-semibold text-slate-900 truncate">{project.title}</h3>
            <StatusBadge status={project.status} />
            <span className="hidden sm:block text-xs text-slate-400 truncate">{project.embedUrl}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Open external */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
            >
              <ExternalLink size={13} />
              Open
            </a>

            {/* Maximize / restore */}
            <button
              onClick={() => setMaximized((m) => !m)}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title={maximized ? 'Restore' : 'Maximize'}
            >
              {maximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* iframe */}
        <div className="flex-1 overflow-hidden">
          <EmbedFrame url={project.embedUrl} title={project.title} />
        </div>
      </div>
    </div>
  )
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onPreview }: { project: Project; onPreview: () => void }) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Thumbnail / mini preview */}
      <div className="relative h-44 bg-slate-50 overflow-hidden">
        {/* Blurred overlay — prevents interaction on card, shows preview */}
        <div className="absolute inset-0 z-10" />

        {!iframeError ? (
          <>
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Loader2 className="animate-spin text-slate-300" size={24} />
              </div>
            )}
            <iframe
              src={project.embedUrl}
              title={`${project.title} preview`}
              className={`w-full h-full border-0 scale-[0.6] origin-top-left transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ width: '167%', height: '167%' }}
              tabIndex={-1}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoaded(true)}
              onError={() => { setIframeLoaded(true); setIframeError(true) }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
            <span className="text-3xl">🌐</span>
            <p className="text-xs text-slate-400">Preview restricted by site</p>
          </div>
        )}

        {/* Hover overlay — preview button */}
        <div className="absolute inset-0 z-20 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-medium text-sm px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Maximize2 size={14} />
            Preview
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-slate-900 leading-snug">{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-xs font-medium text-blue-600 mb-2">{project.tagline}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onPreview}
            className="flex-1 inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:border-blue-300 hover:text-blue-600 text-slate-700 text-xs font-medium px-3 py-2 rounded-lg transition-colors"
          >
            <Maximize2 size={12} />
            Preview
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
          >
            <ExternalLink size={12} />
            Visit Site
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Our Work</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">
              Projects we've
              <span className="text-gradient"> built & delivered</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Real solutions, live in production. Click Preview to explore any project inside the page — or
              Visit Site to open it directly.
            </p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={() => setActiveProject(project)}
              />
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-10">
            More projects coming soon — building something new every month.
          </p>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </main>
  )
}

