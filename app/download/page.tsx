import Image from 'next/image'
import Link from 'next/link'
import {
  Apple,
  ArrowRight,
  Bell,
  CheckCircle2,
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

            <div className="field-card overflow-hidden bg-[#19351f] text-white">
              <div className="grid gap-8 p-7 sm:grid-cols-[.8fr_1.2fr] sm:p-8">
                <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border border-white/25 bg-[#f7f3e8] p-3 shadow-2xl">
                  <div className="min-h-[390px] rounded-[1.5rem] bg-[#223c26] p-5 text-white">
                    <div className="mx-auto h-1.5 w-16 rounded-full bg-white/25" />
                    <div className="mt-10 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white">
                        <Image src="/brand/mark.png" alt="CropIntel" width={54} height={54} />
                      </div>
                    </div>
                    <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#d9b15f]">
                      CropIntel
                    </p>
                    <h2 className="mt-3 text-center text-2xl font-semibold">iOS preview</h2>
                    <div className="mt-8 space-y-3">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="h-2 w-20 rounded-full bg-white/50" />
                        <div className="mt-3 h-2 rounded-full bg-white/25" />
                        <div className="mt-2 h-2 w-3/4 rounded-full bg-white/20" />
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="h-2 w-24 rounded-full bg-white/45" />
                        <div className="mt-3 h-2 w-2/3 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d9b15f]">Download status</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight">Not live on the App Store yet</h2>
                  <p className="mt-4 text-sm leading-6 text-white/70">
                    The App Store badge is intentionally disabled until the listing is available. Check back here for the
                    official download link.
                  </p>

                  <button
                    type="button"
                    disabled
                    className="mt-7 inline-flex min-h-[58px] w-full max-w-sm cursor-not-allowed items-center justify-center gap-3 rounded-2xl bg-white/15 px-5 py-3 text-left text-white/50 ring-1 ring-white/15"
                  >
                    <Apple className="h-7 w-7" />
                    <span>
                      <span className="block text-xs">Coming soon on the</span>
                      <span className="block text-xl font-semibold leading-6">App Store</span>
                    </span>
                  </button>

                  <div className="mt-7 grid gap-3">
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                      <Bell className="mt-0.5 h-5 w-5 shrink-0 text-[#d9b15f]" />
                      <p className="text-sm leading-6 text-white/70">
                        Launch updates are handled by email while the listing is pending.
                      </p>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#d9b15f]" />
                      <p className="text-sm leading-6 text-white/70">{company.contactEmail}</p>
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
