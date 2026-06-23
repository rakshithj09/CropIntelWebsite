"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Check } from "lucide-react";

/**
 * The signature element — a frosted-glass scan result card floating, slightly
 * rotated, over the gradient washes. On load it animates from "Analyzing…"
 * (shimmer sweep) to a resolved diagnosis after ~1.2s. On hover, one scan-line
 * pass. Nothing more — everything around it stays quiet.
 *
 * Placeholder result; not wired to the real model (this is the marketing site).
 */
export default function ScanCard() {
  const reduce = useReducedMotion();
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (reduce) {
      setResolved(true);
      return;
    }
    const t = setTimeout(() => setResolved(true), 1200);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="scan-card glass relative w-[330px] overflow-hidden rounded-[var(--radius-card)] p-5 sm:w-[360px]"
    >
      <div className="scanline" />

      {/* leaf thumbnail (placeholder) */}
      <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-grad-2 to-grad-1">
        <Leaf className="h-14 w-14 text-leaf-deep/70" strokeWidth={1.5} />
        {!resolved && <div className="shimmer absolute inset-0" />}
      </div>

      {/* result row */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {resolved ? "Diagnosis" : "Analyzing…"}
          </p>
          <p className="font-display text-xl font-bold text-ink">
            {resolved ? "Late Blight" : "—"}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 font-mono text-sm font-medium transition-opacity duration-500 ${
            resolved ? "bg-amber/20 text-amber-deep opacity-100" : "opacity-0"
          }`}
        >
          97%
        </span>
      </div>

      {/* severity meter */}
      <div className="mt-4">
        <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          <span>Severity</span>
          <span>{resolved ? "Moderate" : ""}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
          <motion.div
            className="h-full rounded-full bg-amber"
            initial={{ width: 0 }}
            animate={{ width: resolved ? "62%" : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          />
        </div>
      </div>

      {/* recommended action */}
      <div
        className={`mt-4 flex items-start gap-2 transition-opacity duration-500 ${
          resolved ? "opacity-100" : "opacity-0"
        }`}
      >
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" strokeWidth={2.5} />
        <p className="text-sm leading-snug text-ink-soft">
          Apply a copper-based fungicide and remove affected foliage within 48h.
        </p>
      </div>
    </motion.div>
  );
}
