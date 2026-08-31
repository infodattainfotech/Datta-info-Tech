import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onNavy = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  onNavy?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold sm:text-4xl",
          onNavy ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div
        className={cn("mt-5 h-0.75 w-14 bg-gradient-gold", align === "center" && "mx-auto")}
      />
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            onNavy ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
