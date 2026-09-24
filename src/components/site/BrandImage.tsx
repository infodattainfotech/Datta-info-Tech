import { useEffect, useState, type ImgHTMLAttributes } from "react";

type BrandImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function BrandImage({ src, fallbackSrc, alt, onError, onLoad, ...props }: BrandImageProps) {
  const initialSrc = typeof src === "string" ? src : "";
  const [activeSrc, setActiveSrc] = useState(initialSrc);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setActiveSrc(initialSrc);
    setFailed(false);
    console.info(`[Datta Infotech image] ${alt ?? "Brand image"}:`, initialSrc);
  }, [alt, initialSrc]);

  if (failed || !activeSrc) {
    return (
      <div
        className={props.className}
        role="img"
        aria-label={alt}
      >
        <span className="flex size-full items-center justify-center bg-primary px-3 text-center text-sm font-semibold text-primary-foreground">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={activeSrc}
      alt={alt}
      onLoad={(event) => {
        console.info(`[Datta Infotech image loaded] ${alt ?? "Brand image"}:`, activeSrc);
        onLoad?.(event);
      }}
      onError={(event) => {
        console.error(`[Datta Infotech image failed] ${alt ?? "Brand image"}:`, activeSrc);
        onError?.(event);
        if (fallbackSrc && activeSrc !== fallbackSrc) {
          console.info(`[Datta Infotech image fallback] ${alt ?? "Brand image"}:`, fallbackSrc);
          setActiveSrc(fallbackSrc);
          return;
        }
        setFailed(true);
      }}
    />
  );
}