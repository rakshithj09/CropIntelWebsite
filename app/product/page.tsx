import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageHero, PageShell, SectionHeader } from '@/components/PublicSite'
import { crops, features, productCapabilities } from '@/lib/siteContent'

export default function ProductPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Product"
          title="A crop disease intelligence platform for field teams"
          text="CropIntel brings image-based disease prediction, treatment guidance, outbreak reporting, history, and regional context into a mobile-first product experience."
        >
          <Link href="/download" className="btn-primary">
            Download app
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </PageHero>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader title="What the platform includes" text="This company website introduces the CropIntel platform while the iOS app is prepared for App Store release." />
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

        <section className="field-band border-y border-white/70 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow="Capabilities" title="Designed for repeatable crop health workflows" />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="field-card flex gap-3 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#986b2a]" />
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
