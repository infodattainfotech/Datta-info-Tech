import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ACHIEVEMENTS, COUNTERS } from "./data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-gradient-gold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Achievements & Recognition"
          title="Awards, Honours & Security Contributions"
          description="Recognition earned across homeland security, cybercrime prevention, digital forensics, and public safety leadership."
          onNavy
        />

        <div className="mt-14 grid gap-6 rounded-lg glass-panel p-8 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTERS.map((c) => (
            <div key={c.label} className="text-center">
              <Counter value={c.value} suffix={c.suffix} />
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-navy-foreground/65">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-lg glass-panel p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold"
            >
              <span className="grid size-11 place-items-center rounded-md bg-gradient-gold">
                <Icon className="size-5 text-gold-foreground" />
              </span>
              <h3 className="mt-5 text-base font-semibold leading-snug text-navy-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
