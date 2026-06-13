import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { company, footerColumns, navLinks } from '@/lib/siteContent'

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CropIntel home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-800 shadow-sm">
        <Image
          src="/brand/wheat-mark-transparent.png"
          alt=""
          width={22}
          height={40}
          className="object-contain"
          priority
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-bold tracking-[0.18em] ${inverse ? 'text-white' : 'text-slate-950'}`}>
          CROPINTEL
        </span>
        <span className={`block text-xs font-medium ${inverse ? 'text-white/60' : 'text-slate-500'}`}>
          Field intelligence
        </span>
      </span>
    </Link>
  )
}

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f9f7ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-primary-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-900">
            Log in
          </Link>
          <Link href="/signup" className="btn-primary">
            Sign up
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Link
          href="/signup"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-slate-800 md:hidden"
          aria-label="Open signup"
        >
          <Menu className="h-5 w-5" />
        </Link>
      </div>
    </header>
  )
}

export function PublicFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#19351f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">{company.tagline}</p>
          <p className="mt-6 text-sm text-white/60">{company.location}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
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
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        (c) 2026 CropIntel. Public website and app shell.
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f9f7ef] text-slate-950">
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
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-800">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
    </div>
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
