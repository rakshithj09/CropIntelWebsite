import { Camera, ScanLine, ClipboardCheck } from "lucide-react";
import Reveal from "./Reveal";

// Numbered markers (01/02/03) are allowed here ONLY because this is a true
// sequence — not used decoratively anywhere else on the page.
const STEPS = [
  {
    n: "01",
    icon: Camera,
    title: "Take a photo",
    body: "Photograph one affected leaf in good daylight.",
  },
  {
    n: "02",
    icon: ScanLine,
    title: "Analyze",
    body: "CropIntel compares the leaf photo with known crop disease symptoms on your phone.",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Results",
    body: "Review the likely issue, leaf damage estimate, match confidence, and next steps to consider.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow mb-5">How it works</span>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-[-0.02em] text-ink">
            From a leaf photo to your next field check.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="glass lift h-full rounded-[var(--radius-card)] p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/10 text-leaf-deep">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-sm font-medium text-ink-soft/70">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
