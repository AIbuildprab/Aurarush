import Image from "next/image";
import { cn } from "@/lib/utils";

/** A static screenshot in a browser frame. Screenshots are captured by scripts/capture-work.mjs. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 720px, 100vw",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const host = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <div className={cn("frame", className)}>
      <div className="frame-bar">
        <span className="frame-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="mx-auto truncate rounded bg-surface px-3 py-0.5">{host}</span>
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} sizes={sizes} priority={priority} className="block h-auto w-full" />
    </div>
  );
}

export function PhoneFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("frame mx-auto max-w-[260px] rounded-[28px] p-2", className)}>
      <Image src={src} alt={alt} width={640} height={1386} sizes="260px" className="block h-auto w-full rounded-[20px]" />
    </div>
  );
}
