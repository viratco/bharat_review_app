"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function OnboardingPage() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  // Sync active dot based on scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollLeft } = el;
      const firstChild = el.firstElementChild as HTMLElement | null;
      const slideWidth = firstChild?.getBoundingClientRect().width || el.clientWidth;
      const gap = parseFloat(getComputedStyle(el).columnGap || "0");
      const unit = slideWidth + gap;
      const i = Math.round(scrollLeft / unit);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement | null;
    const slideWidth = firstChild?.getBoundingClientRect().width || el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    const unit = slideWidth + gap;
    el.scrollTo({ left: i * unit, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.slider}>
          <div className={styles.track} ref={trackRef}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={
                  i === index ? `${styles.slide} ${styles.slideActive}` : `${styles.slide} ${styles.slidePeek}`
                }
              >
                <div className={styles.card} />
              </div>
            ))}
          </div>

          <div className={styles.dots} role="tablist" aria-label="Onboarding slides">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                className={i === index ? styles.dotActive : styles.dot}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </section>
        <h1 className={styles.heading}>
          Embrace Your
          <br />
          Shopping Joy!
        </h1>
        <p className={styles.subheading}>
          Let&apos;s start exploring featured products and services find the ones that meet your needs.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </main>
    </div>
  );
}
