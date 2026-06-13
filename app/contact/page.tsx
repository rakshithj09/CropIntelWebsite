import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { PageShell } from '@/components/PublicSite'
import { company } from '@/lib/siteContent'

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#ede5d4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">Contact</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              Talk with CropIntel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Reach out about grower onboarding, partner conversations, pilot programs, or product questions.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: company.contactEmail },
              { icon: Phone, label: 'Phone', value: company.contactPhone },
              { icon: MapPin, label: 'Location', value: company.location },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="field-card flex gap-4 p-5">
                <Icon className="mt-1 h-5 w-5 text-primary-800" />
                <div>
                  <p className="text-sm font-bold text-slate-950">{label}</p>
                  <p className="mt-1 text-sm text-slate-600">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="field-card p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Name</span>
                <input className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-primary-700" />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">Email</span>
                <input type="email" className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-primary-700" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold text-slate-800">Message</span>
              <textarea rows={6} className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-primary-700" />
            </label>
            <Link href="mailto:hello@cropintel.ai" className="btn-primary mt-5">
              Send message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </form>
        </section>
      </main>
    </PageShell>
  )
}
