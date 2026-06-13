import Image from 'next/image'
import Link from 'next/link'
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
              The students building CropIntel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              CropIntel is developed by a student team focused on practical crop disease detection, mobile workflows,
              and agricultural intelligence tools.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeader
            title="CropIntel team"
            text="The team is building the CropIntel project across product design, AI/ML development, app development, and field-focused crop intelligence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="field-card p-7">
                <div className="flex h-full items-start gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-primary-50 shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-2xl font-semibold">{member.name}</h2>
                        <p className="mt-1 text-sm font-bold text-[#986b2a]">{member.role}</p>
                      </div>
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.55rem] bg-[#0a66c2] text-white shadow-sm transition hover:bg-[#084f96] focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:ring-offset-2"
                      >
                        <span className="font-sans text-[1.35rem] font-bold leading-none tracking-normal">in</span>
                      </Link>
                    </div>
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
