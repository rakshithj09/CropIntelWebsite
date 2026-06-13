import Link from 'next/link'
import {
  Apple,
  ArrowRight,
  Bell,
  Clock3,
  Mail,
  MapPinned,
  ShieldCheck,
  Smartphone,
  Sprout,
} from 'lucide-react'
import { PageShell, SectionHeader } from '@/components/PublicSite'
import { company } from '@/lib/siteContent'

const releaseSteps = [
  {
    label: 'Mobile build',
    status: 'In progress',
    text: 'The CropIntel iOS experience is being prepared for public release.',
  },
  {
    label: 'App Store review',
    status: 'Next',
    text: 'The download link will be added after the listing is approved.',
  },
  {
    label: 'Public launch',
    status: 'Coming soon',
    text: 'This page will become the official download destination.',
  },
]

const appHighlights = [
  {
    icon: Smartphone,
    title: 'Mobile-first workflow',
    text: 'Designed around field use, quick capture, and simple review on iPhone.',
  },
  {
    icon: Sprout,
    title: 'Crop health context',
    text: 'Built for crop disease awareness, treatment guidance, and scouting decisions.',
  },
  {
    icon: MapPinned,
    title: 'Regional awareness',
    text: 'Outbreak and location-aware context will help connect field observations to broader pressure.',
  },
]

export default function DownloadPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#efe7d6]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-800/20 bg-white/70 px-4 py-2 text-sm font-bold text-primary-900 shadow-sm">
                <Clock3 className="h-4 w-4" />
                App Store launch pending
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                CropIntel for iPhone is coming soon
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                We are preparing the CropIntel mobile app for App Store publication. Once Apple approves the listing,
                this page will switch from launch status to the official download link.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`mailto:${company.contactEmail}?subject=CropIntel iOS launch updates`} className="btn-primary">
                  Request launch updates
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/product" className="btn-secondary">
                  Explore the product
                </Link>
              </div>
            </div>

            <div className="min-w-0 overflow-hidden rounded-[1.25rem] border border-primary-900/15 bg-[#16351f] text-white shadow-xl shadow-primary-950/10">
              <div className="mx-auto grid min-w-0 max-w-[760px] items-center justify-center gap-8 p-6 sm:p-8 xl:grid-cols-[210px_minmax(0,430px)] xl:gap-10">
                <div className="mx-auto flex w-full max-w-[190px] justify-center">
                  <div className="w-full rounded-[2rem] border border-white/12 bg-[#0f2516] p-2 shadow-2xl shadow-black/25">
                    <div className="min-h-[305px] rounded-[1.55rem] border border-white/10 bg-[#1e4228] p-4 text-white">
                      <div className="mx-auto h-1.5 w-14 rounded-full bg-white/35" />
                      <div className="mt-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1bd6e]">iOS preview</p>
                        <div className="mt-3 h-2 w-24 rounded-full bg-white/60" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-white/25" />
                      </div>
                      <div className="mt-7 space-y-3">
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.11] p-3.5">
                          <div className="h-2 w-20 rounded-full bg-white/55" />
                          <div className="mt-3 h-2 rounded-full bg-white/25" />
                          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/20" />
                        </div>
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.08] p-3.5">
                          <div className="h-2 w-24 rounded-full bg-white/45" />
                          <div className="mt-3 h-2 w-2/3 rounded-full bg-white/20" />
                        </div>
                      </div>
                      <div className="mt-5 rounded-2xl bg-[#f7f3e8] p-3">
                        <div className="h-2 w-16 rounded-full bg-[#789174]" />
                        <div className="mt-2 h-2 rounded-full bg-[#b9c5b2]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto min-w-0 max-w-[430px] py-1">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e1bd6e]/30 bg-[#e1bd6e]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#e1bd6e]">
                    <Clock3 className="h-3.5 w-3.5" />
                    Release pending
                  </div>
                  <h2 className="mt-5 max-w-sm text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Official iOS download coming soon
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.72]">
                    CropIntel is being prepared for App Store publication. The official badge will activate here once
                    the listing is approved.
                  </p>

                  <button
                    type="button"
                    disabled
                    className="mt-6 inline-flex min-h-[58px] w-full max-w-[300px] cursor-not-allowed items-center justify-center gap-3 rounded-[1rem] border border-white/15 bg-[#f7f3e8] px-5 py-3 text-left text-[#19351f] opacity-90 shadow-sm"
                    aria-label="Coming soon on the App Store"
                  >
                    <Apple className="h-7 w-7" />
                    <span>
                      <span className="block text-xs font-semibold text-[#61705f]">Coming soon on the</span>
                      <span className="block text-xl font-semibold leading-6">App Store</span>
                    </span>
                  </button>

                  <div className="mt-5 grid min-w-0 gap-3">
                    <div className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.06] p-4">
                      <Bell className="mt-0.5 h-5 w-5 shrink-0 text-[#e1bd6e]" />
                      <p className="text-sm leading-6 text-white/[0.72]">Launch updates are handled by email.</p>
                    </div>
                    <div className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.06] p-4">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e1bd6e]" />
                      <p className="break-all text-sm leading-6 text-white/[0.72]">{company.contactEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            eyebrow="What to expect"
            title="Built for crop health work in the field"
            text="The iOS app is the customer-facing product. This page will stay focused on availability, release status, and official download access."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {appHighlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="field-card p-6">
                <Icon className="h-6 w-6 text-primary-800" />
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-200 bg-[#f4efe3] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              {releaseSteps.map((step, index) => (
                <div key={step.label} className="field-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-[#9a6b28]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-900">
                      {step.status}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{step.label}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
          <ShieldCheck className="mx-auto h-8 w-8 text-primary-800" />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">Official link will appear here</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Avoid unofficial download links. CropIntel will publish the App Store link on this page and through official
            company channels once the app is available.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`mailto:${company.contactEmail}?subject=CropIntel launch updates`} className="btn-primary">
              Get launch updates
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact CropIntel
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
