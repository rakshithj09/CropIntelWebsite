import { PageShell, SectionHeader } from '@/components/PublicSite'
import { company, faqs, values } from '@/lib/siteContent'

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#ede5d4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">About CropIntel</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              Practical intelligence for healthier fields
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{company.overview}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-2">
          <div className="field-card p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-800">Mission</p>
            <h2 className="mt-4 text-3xl font-semibold">{company.mission}</h2>
          </div>
          <div className="field-card p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-800">Vision</p>
            <h2 className="mt-4 text-3xl font-semibold">{company.vision}</h2>
          </div>
        </section>

        <section className="field-band border-y border-stone-200 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader eyebrow="Values" title="Built for agriculture, not generic software" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="field-card p-6">
                  <Icon className="h-6 w-6 text-primary-800" />
                  <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="field-card p-6">
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
