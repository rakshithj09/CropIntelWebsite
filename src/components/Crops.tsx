import Reveal from "./Reveal";

// The REAL supported crops (not the guide's placeholder list).
const CROPS = ["Corn", "Soybean", "Wheat", "Rice", "Tomato"];

export default function Crops() {
  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-widest text-ink-soft">
            Trained on five staple crops — more on the way
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CROPS.map((crop) => (
              <span
                key={crop}
                className="glass rounded-full px-5 py-2.5 font-display text-base font-bold text-ink"
              >
                {crop}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
