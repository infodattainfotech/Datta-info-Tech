import { SectionHeading } from "./SectionHeading";
import { WHY_US } from "./data";

export function WhyUs() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Security Partner Built on Trust and Expertise"
          description="Government advisory experience, international recognition, and a consistent commitment to public safety."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-elegant"
            >
              <span className="grid size-12 place-items-center rounded-md bg-surface transition-colors duration-300 group-hover:bg-gradient-gold">
                <Icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
