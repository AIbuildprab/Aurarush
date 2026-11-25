import Image from "next/image";
import { brand } from "@/data/brand";
import { cn } from "@/lib/utils";

type LogoKind = "header" | "footer" | "flower";

const sizes = {
  header: "h-8 w-auto",
  footer: "h-auto w-[180px]",
  flower: "h-auto w-full",
};

export function Logo({
  kind,
  className,
  priority = false,
  decorative = false,
}: {
  kind: LogoKind;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const asset = brand[kind];
  return (
    <Image
      src={asset.src}
      alt={decorative ? "" : "AuraRush"}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn("mix-blend-lighten", sizes[kind], className)}
    />
  );
}
