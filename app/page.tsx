import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPinned, ScanLine } from 'lucide-react'
import { CtaBand, PageShell, SectionHeader } from '@/components/PublicSite'
import {
  benefits,
  company,
  crops,
  features,
  platformStats,
  valuePoints,
  workflow,
} from '@/lib/siteContent'

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <div className="subtle-grid absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex rounded-full border border-[#d6a441]/35 bg-[#fffaf0]/75 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#986b2a] shadow-sm backdrop-blur-xl">
                Agricultural intelligence
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl">
                Crop health decisions, clearer and faster.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                CropIntel turns field photos into practical disease intelligence, confidence context, and next-step
                guidance for growers and agricultural teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/download" className="btn-primary">
                  Download app
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/product" className="btn-secondary">
                  Explore product
                </Link>
              </div>
            </div>

            <div className="field-card overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[1rem] border border-primary-100 bg-[#fffaf0]/[0.58]">
                <div className="subtle-grid absolute inset-0 opacity-70" aria-hidden="true" />
                <div className="relative grid gap-6 p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-primary-800 shadow-sm">
                        <Image src="/brand/wheat-mark-transparent.png" alt="" width={30} height={62} className="h-11 w-auto object-contain" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-900">CropIntel scan</p>
                        <p className="text-xs text-slate-500">Corn leaf review</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary-900 px-3 py-1 text-xs font-semibold text-white">
                      Live preview
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
                    <div className="rounded-[1.35rem] bg-primary-900 p-2 shadow-[0_24px_70px_rgba(47,69,47,0.18)]">
                      <div className="min-h-[315px] rounded-[1rem] bg-[#fbf8ef] p-4">
                        <div className="mx-auto h-1.5 w-14 rounded-full bg-primary-200" />
                        <div className="mt-7 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#986b2a]">Prediction</p>
                          <p className="mt-2 text-2xl font-semibold text-primary-900">Disease risk detected</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Review likely causes, confidence, treatment notes, and regional pressure.
                          </p>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="rounded-2xl bg-primary-50 p-3">
                            <p className="text-2xl font-semibold text-primary-900">92%</p>
                            <p className="text-xs text-slate-500">Confidence</p>
                          </div>
                          <div className="rounded-2xl bg-[#fff4d7] p-3">
                            <p className="text-2xl font-semibold text-primary-900">High</p>
                            <p className="text-xs text-slate-500">Priority</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {valuePoints.slice(0, 3).map(({ icon: Icon, title, text }) => (
                        <div key={title} className="rounded-2xl border border-primary-100 bg-[#fffdf7]/75 p-4 shadow-sm backdrop-blur-xl">
                          <div className="flex gap-3">
                            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#986b2a]" />
                            <div>
                              <h2 className="font-semibold text-primary-900">{title}</h2>
                              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {platformStats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-primary-100 bg-[#fffdf7]/75 p-4">
                        <p className="text-2xl font-semibold text-primary-900">{stat.value}</p>
                        <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="field-card p-6">
                <h2 className="text-xl font-semibold text-primary-900">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="field-band border-y border-primary-100/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeader
              eyebrow="Product flow"
              title="From field image to practical response"
              text="The app flow stays direct: capture the symptom, select the crop, review ranked predictions, and use guidance to decide what happens next."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {workflow.slice(0, 4).map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="field-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-6 w-6 text-primary-800" />
                    <span className="rounded-full bg-[#fff4d7] px-3 py-1 text-xs font-bold text-[#986b2a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-primary-900">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Coverage"
                title="Focused disease support for major crops"
                text="CropIntel keeps the first experience focused around the crops and disease labels that matter most for practical scouting."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-2xl border border-primary-100 bg-[#fffdf7]/70 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#986b2a]" />
                    <p className="text-sm leading-6 text-slate-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {crops.map((crop) => (
                <div key={crop.name} className="field-card p-6">
                  <span className={`block h-2 w-16 rounded-full ${crop.accent}`} />
                  <h2 className="mt-5 text-2xl font-semibold text-primary-900">{crop.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{crop.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="iOS launch"
          title="Follow the CropIntel mobile release"
          text="The download page will become the official App Store destination when the listing is approved."
          primaryHref="/download"
          primaryLabel="View download page"
          secondaryHref="/contact"
          secondaryLabel="Contact the team"
        />

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div className="field-card p-8">
            <MapPinned className="h-7 w-7 text-primary-800" />
            <h2 className="mt-5 text-3xl font-semibold text-primary-900">Company mission</h2>
            <p className="mt-4 leading-7 text-slate-600">{company.mission}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-800">
              Read about CropIntel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="field-card p-8">
            <ScanLine className="h-7 w-7 text-primary-800" />
            <h2 className="mt-5 text-3xl font-semibold text-primary-900">Built around field work</h2>
            <p className="mt-4 leading-7 text-slate-600">
              CropIntel is designed for quick interpretation, repeated scouting checks, and guidance that keeps human
              judgment in the loop.
            </p>
            <Link href="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-800">
              See the workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
