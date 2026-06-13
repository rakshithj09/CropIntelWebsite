import Link from 'next/link'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
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

          <div className="field-card p-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-800">General inquiries</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              For launch updates, partnerships, and product questions
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Email the CropIntel team and include what you are interested in: App Store availability, grower feedback,
              field partnerships, or general company information.
            </p>
            <Link href={`mailto:${company.contactEmail}`} className="btn-primary mt-7">
              Email CropIntel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
