"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const APP_URL = "https://cropintel-us.vercel.app";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <Link href="/#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-leaf">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/wheat-mark-transparent.png"
              alt="CropIntel"
              className="h-5 w-auto object-contain"
            />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            CropIntel
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#how" className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            How it works
          </Link>
          <Link href="/#accuracy" className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            Accuracy
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            FAQ
          </Link>
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-4 py-2 text-sm font-semibold shadow-[0_8px_20px_-8px_rgba(22,35,28,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Try the scanner
        </a>
      </nav>
    </header>
  );
}
