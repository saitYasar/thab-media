import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-heading font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-heading font-bold text-text-heading mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-text-muted mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent text-white px-6 py-3 text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  )
}
