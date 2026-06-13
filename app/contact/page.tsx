import ContactForm from '@/components/ContactForm'
import { PageShell } from '@/components/PublicSite'

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

        <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <ContactForm />
        </section>
      </main>
    </PageShell>
  )
}
