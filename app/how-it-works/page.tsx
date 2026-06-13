import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell, SectionHeader } from '@/components/PublicSite'
import { platformStats, workflow } from '@/lib/siteContent'

export default function HowItWorksPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#ede5d4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">How it works</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              From leaf image to disease guidance
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              CropIntel uses crop-specific EfficientNet and TensorFlow Lite inference paths to turn field photos into
              structured prediction results and practical guidance.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader title="Crop intelligence workflow" text="CropIntel is designed as a mobile-first field workflow for crop health review, guidance, and outbreak awareness." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="field-card p-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary-800" />
                  <span className="text-sm font-bold text-[#9a6b28]">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="field-band border-y border-stone-200 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Technology"
              title="EfficientNet models optimized for production inference"
              text="The inference path validates uploaded images, routes by selected crop, processes through TensorFlow Lite models, and returns ranked disease predictions with confidence scoring."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {platformStats.map((stat) => (
                <div key={stat.label} className="field-card p-6">
                  <p className="text-3xl font-semibold text-primary-900">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Follow the iOS launch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            The App Store download page will be updated when CropIntel for iOS is published.
          </p>
          <Link href="/download" className="btn-primary mt-7">
            Download page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </PageShell>
  )
}
