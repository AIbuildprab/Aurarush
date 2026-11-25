export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
    >
      Skip to content
    </a>
  );
}
