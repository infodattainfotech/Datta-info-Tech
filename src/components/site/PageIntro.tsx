export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-gradient-navy px-6 pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-navy-foreground sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}