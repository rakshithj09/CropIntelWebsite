import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPinned, ScanLine } from 'lucide-react'
import { FieldPattern, PageShell, SectionHeader } from '@/components/PublicSite'
import {
  benefits,
  company,
  crops,
  features,
  platformStats,
  team,
  valuePoints,
  workflow,
} from '@/lib/siteContent'

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="relative overflow-hidden border-b border-stone-200 bg-[#ece4d1]">
          <FieldPattern />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-20 lg:pt-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary-900">Agricultural intelligence</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                AI-powered crop disease intelligence
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                CropIntel helps growers detect likely disease from crop leaf photos, review confidence-based results,
                understand treatment options, and monitor outbreak pressure.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/signup" className="btn-primary">
                  Sign up
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  Learn how it works
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="field-card overflow-hidden bg-[#17351f] text-white">
                <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,#1f4a2a,#75613a)]">
                  <div className="absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(100deg,transparent_0_20px,rgba(255,255,255,.22)_21px_22px)]" />
                  <div className="absolute left-6 top-6 rounded-2xl bg-white/90 p-3 shadow-sm">
                    <Image src="/brand/mark.png" alt="CropIntel mark" width={54} height={54} />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/25 p-5 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Field scan</p>
                        <p className="mt-2 text-2xl font-semibold">Gray Leaf Spot</p>
                      </div>
                      <div className="rounded-full bg-[#d9a441] px-3 py-1 text-sm font-bold text-[#1c2b16]">87%</div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/70">
                      <span className="rounded-xl bg-white/10 px-3 py-2">Corn</span>
                      <span className="rounded-xl bg-white/10 px-3 py-2">IA region</span>
                      <span className="rounded-xl bg-white/10 px-3 py-2">High severity</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                  {platformStats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="p-5">
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            eyebrow="Platform value"
            title="Crop health insight from photo to field action"
            text="The product combines image upload, crop selection, AI prediction, treatment guidance, and outbreak awareness in one workflow."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="field-card p-6">
                <Icon className="h-6 w-6 text-primary-800" />
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="field-band border-y border-stone-200 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow="How it works" title="A scouting workflow built for fast interpretation" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {workflow.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="field-card p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-primary-800" />
                    <span className="text-sm font-bold text-[#9a6b28]">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Supported crops"
              title="Focused where disease pressure moves quickly"
              text="CropIntel currently supports corn, soybean, wheat, and rice with crop-specific disease labels."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {crops.map((crop) => (
                <div key={crop.name} className="field-card p-6">
                  <span className={`block h-2 w-16 rounded-full ${crop.accent}`} />
                  <h3 className="mt-5 text-2xl font-semibold">{crop.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{crop.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#213c25] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d9b15f]">Key features</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Built around real CropIntel capabilities</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9b15f]" />
                  <span className="text-sm leading-6 text-white/78">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="Why it matters" title="Less uncertainty between scouting and response" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-l-4 border-[#d0a348] bg-white px-6 py-5 shadow-sm">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="field-band border-t border-stone-200 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <div className="field-card p-8">
              <MapPinned className="h-7 w-7 text-primary-800" />
              <h2 className="mt-5 text-3xl font-semibold">Company mission</h2>
              <p className="mt-4 leading-7 text-slate-600">{company.mission}</p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-800">
                Read about CropIntel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="field-card p-8">
              <ScanLine className="h-7 w-7 text-primary-800" />
              <h2 className="mt-5 text-3xl font-semibold">Leadership preview</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {team.slice(0, 2).map((member) => (
                  <div key={member.name} className="rounded-2xl bg-[#f6f2e7] p-4">
                    <p className="font-semibold">{member.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                  </div>
                ))}
              </div>
              <Link href="/team" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-800">
                Meet the team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
