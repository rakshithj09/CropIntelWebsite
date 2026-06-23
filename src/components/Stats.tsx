import Reveal from "./Reveal";

/*
 * REAL numbers from the repo (do not invent):
 *  - accuracy: mean of cropintel_model_metrics_overall.csv across corn/rice/
 *    soybean/wheat (94.8 / 99.2 / 96.6 / 92.9) ≈ 96%. NOTE: internal validation
 *    from the Jan model snapshot; field/external accuracy is lower for some
 *    crops. TODO: confirm against current deployed versions before publishing.
 *  - diseases: 25 non-"Healthy" classes across the 5 crops (corn 3, soybean 6,
 *    wheat 7, rice 2, tomato 7) from the deployed /models endpoint.
 *  - crops: 5 (corn, soybean, wheat, rice, tomato).
 *  - TODO: add real on-device inference time (ms) once measured.
 */
const STATS = [
  { value: "96%", label: "Mean validation accuracy", sub: "across 4 measured crops" },
  { value: "25", label: "Diseases detected", sub: "plus a healthy baseline" },
  { value: "5", label: "Crops supported", sub: "corn · soybean · wheat · rice · tomato" },
];

export default function Stats() {
  return (
    <section id="accuracy" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center sm:text-left">
                <p className="font-mono text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-tight text-ink">
                  {s.value}
                </p>
                <p className="mt-4 font-display text-lg font-bold text-ink">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-12 max-w-2xl text-sm text-ink-soft/80">
            Accuracy is mean per-crop validation accuracy on held-out test images.
            Field accuracy varies by crop and image quality — CropIntel always
            shows its confidence so you can judge a result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
