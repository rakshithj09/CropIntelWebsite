"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const FAQS = [
  {
    q: "What crops and diseases are supported?",
    a: "Corn, soybean, wheat, rice, and tomato, with detection for 25 diseases.",
  },
  {
    q: "How accurate is it?",
    a: "CropIntel achieves about 96% validation accuracy. Every diagnosis includes a confidence score.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. CropIntel runs directly on your device and does not require internet access.",
  },
  {
    q: "What should I photograph?",
    a: "Take a close photo of one affected leaf in good lighting.",
  },
  {
    q: "How is the model trained?",
    a: "CropIntel is trained on thousands of labeled crop disease images and optimized for mobile devices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow mb-5">FAQ</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.02em] text-ink">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-inset"
                >
                  <span className="font-display text-lg font-bold text-ink">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-5 leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
