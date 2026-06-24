import Image from 'next/image'
import Link from 'next/link'
import { company, footerColumns, navLinks } from '@/lib/siteContent'

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CropIntel home">
      <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.25rem] bg-primary-800 shadow-sm ring-1 ring-black/5">
        <Image
          src="/brand/wheat-mark-transparent.png"
          alt=""
          width={30}
          height={62}
          className="h-11 w-auto object-contain"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-bold tracking-[0.12em] ${inverse ? 'text-white' : 'text-primary-900'}`}>
          CROPINTEL
        </span>
        <span className={`block text-xs font-medium ${inverse ? 'text-white/[0.58]' : 'text-slate-500'}`}>
          Field intelligence
        </span>
      </span>
    </Link>
  )
}

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/80 bg-[#fbf8ef]/86 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-1 rounded-full border border-primary-100 bg-[#fffaf0]/70 p-1 shadow-sm shadow-[0_10px_35px_rgba(47,69,47,0.06)] backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-primary-900/75 transition hover:bg-white hover:text-primary-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/download" className="hidden rounded-full bg-primary-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-800 sm:inline-flex">
          Get the app
        </Link>
      </div>
    </header>
  )
}

export function PublicFooter() {
  return (
    <footer className="border-t border-primary-900 bg-[#19351f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">{company.tagline}</p>
          <p className="mt-6 text-sm text-white/60">{company.location}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <div className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-white/65 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/[0.48]">
        © 2026 CropIntel. Company website.
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-primary-900">
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#986b2a]">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string
  title: string
  text?: string
  children?: React.ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="subtle-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#986b2a]">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {text && <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>}
        {children && <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  )
}

export function CtaBand({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string
  title: string
  text: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-primary-900 px-6 py-10 text-white shadow-[0_28px_90px_rgba(47,69,47,0.2)] sm:px-10">
        <div className="absolute inset-0 opacity-20 subtle-grid" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6a441]">{eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#d6a441] px-5 py-2.5 text-sm font-semibold text-primary-900 transition hover:bg-[#e0b85f]">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function FieldPattern() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage:
          'linear-gradient(115deg, transparent 0 42%, rgba(47,69,47,.55) 42% 43%, transparent 43% 100%), linear-gradient(90deg, rgba(115,95,56,.45) 1px, transparent 1px)',
        backgroundSize: '78px 78px, 34px 34px',
      }}
    />
  )
}
