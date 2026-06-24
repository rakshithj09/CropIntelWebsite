import ContactForm from '@/components/ContactForm'
import { PageHero, PageShell } from '@/components/PublicSite'

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Talk with CropIntel"
          text="Reach out about grower onboarding, partner conversations, pilot programs, or product questions."
        />

        <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
          <ContactForm />
        </section>
      </main>
    </PageShell>
  )
}
