import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bookingHref, bookingIsExternal } from "@/lib/booking";
import { cn } from "@/lib/utils";

export function BookCall({
  className,
  variant = "primary",
  children = "Book a call",
}: {
  className?: string;
  variant?: "primary" | "secondary" | "text";
  children?: React.ReactNode;
}) {
  const classes = cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "text" && "btn-text",
    className,
  );
  const content = (
    <>
      {children}
      <ArrowRight className="arrow-x size-4" aria-hidden="true" />
    </>
  );

  if (bookingIsExternal()) {
    return (
      <a href={bookingHref()} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={bookingHref()} className={classes}>
      {content}
    </Link>
  );
}
