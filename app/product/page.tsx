import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageShell, SectionHeader } from '@/components/PublicSite'
import { crops, features, productCapabilities } from '@/lib/siteContent'

export default function ProductPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#ede5d4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">Product</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              A crop disease intelligence platform for field teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              CropIntel brings image-based disease prediction, treatment guidance, outbreak reporting, history, and
              regional context into a protected app experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup" className="btn-primary">
                Create account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/app" className="btn-secondary">
                Open app
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader title="What the platform includes" text="The public site now surrounds the existing diagnosis product without replacing it." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {productCapabilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="field-card p-7">
                <Icon className="h-7 w-7 text-primary-800" />
                <h2 className="mt-6 text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="field-band border-y border-stone-200 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow="Capabilities" title="Designed for repeatable crop health workflows" />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" />
                  <p className="text-sm leading-6 text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Crop coverage" title="Focused support for four major crops" />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {crops.map((crop) => (
              <div key={crop.name} className="field-card p-6">
                <span className={`block h-2 w-14 rounded-full ${crop.accent}`} />
                <h2 className="mt-5 text-xl font-semibold">{crop.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{crop.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
