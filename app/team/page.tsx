import { PageShell, SectionHeader } from '@/components/PublicSite'
import { team } from '@/lib/siteContent'

export default function TeamPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-[#ede5d4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-900">Team</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
              Leadership shaped by agriculture, AI, and field operations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Placeholder staff content is structured in a single config file so real leadership details can be edited
              without reworking page code.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader title="CropIntel leadership" text="A public company page should be credible before it is complete. These profiles are editable placeholders." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="field-card p-7">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-800 text-xl font-semibold text-white">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{member.name}</h2>
                    <p className="mt-1 text-sm font-bold text-[#986b2a]">{member.role}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
