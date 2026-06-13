import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPinned, ScanLine } from 'lucide-react'
import { PageShell, SectionHeader } from '@/components/PublicSite'
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
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-20 lg:pt-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary-900">Agricultural intelligence</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                AI-powered crop disease intelligence
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                CropIntel is building agricultural intelligence for growers and operators who need clearer crop health
                context, disease pressure awareness, and practical field decision support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/download" className="btn-primary">
                  Download app
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  Learn how it works
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="field-card overflow-hidden bg-white">
                <div className="relative aspect-[4/3] bg-[#d9dfcb]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(42,78,45,.88),rgba(208,163,72,.42))]" />
                  <div className="absolute inset-x-8 top-8 h-28 rounded-[2rem] border border-white/25 bg-white/15 backdrop-blur-sm" />
                  <div className="absolute bottom-0 left-1/2 h-[82%] w-[42%] -translate-x-1/2 rounded-t-[2.5rem] border-x border-t border-white/35 bg-[#f8f5ec] p-3 shadow-2xl">
                    <div className="h-full rounded-t-[2rem] bg-[#213c25] p-5 text-white">
                      <div className="mx-auto h-1.5 w-16 rounded-full bg-white/30" />
                      <div className="mt-8 rounded-2xl bg-white/10 p-4">
                        <Image src="/brand/wheat-mark-transparent.png" alt="" width={34} height={56} className="mx-auto" />
                      </div>
                      <div className="mt-8 space-y-3">
                        <div className="h-3 rounded-full bg-white/65" />
                        <div className="h-3 w-3/4 rounded-full bg-white/35" />
                        <div className="h-3 w-1/2 rounded-full bg-white/25" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#1d321f]/90 p-5 text-white shadow-xl backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b15f]">App preview</p>
                    <p className="mt-2 text-2xl font-semibold">Coming soon to iPhone</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                      Download links will appear here after App Store publication.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-stone-200 border-t border-stone-200 bg-[#fbfaf6]">
                  {platformStats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="p-5">
                      <p className="text-2xl font-semibold text-primary-900">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
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
            title="Crop health intelligence built for the field"
            text="The CropIntel platform brings crop-specific AI, treatment guidance, and outbreak awareness into a practical mobile workflow."
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
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d9b15f]">Platform direction</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">The intelligence layer behind the CropIntel app</h2>
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
              <h2 className="mt-5 text-3xl font-semibold">Team preview</h2>
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
