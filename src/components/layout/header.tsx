"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BookCall } from "@/components/layout/book-call";
import { Logo } from "@/components/ui/logo";
import { services } from "@/data/services";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  // Menus are keyed to the page they were opened on, so navigating closes them without an effect.
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const [mobilePath, setMobilePath] = useState<string | null>(null);
  const servicesOpen = servicesPath === pathname;
  const mobileOpen = mobilePath === pathname;
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesPath(null);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setServicesPath(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [servicesOpen]);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="container-wide flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="AuraRush home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div ref={menuRef} className="relative" onMouseEnter={() => setServicesPath(pathname)} onMouseLeave={() => setServicesPath(null)}>
            <button
              ref={buttonRef}
              type="button"
              className="nav-link"
              aria-expanded={servicesOpen}
              aria-controls={panelId}
              aria-current={isActive(pathname, "/services") ? "page" : undefined}
              onClick={() => setServicesPath(pathname)}
            >
              Services
              <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {servicesOpen ? (
              <div id={panelId} role="menu" aria-label="Services" className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line-strong bg-surface p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      role="menuitem"
                      href={`/services/${service.slug}`}
                      onClick={() => setServicesPath(null)}
                      className="group flex gap-3 rounded-xl p-3 hover:bg-white/5"
                    >
                      <span className="mt-1.5 size-2.5 shrink-0 rounded-full" style={{ background: service.accent, boxShadow: `0 0 12px ${service.accent}` }} aria-hidden="true" />
                      <span>
                        <span className="flex items-center gap-1 font-medium">
                          {service.name}
                          <ArrowUpRight className="card-arrow size-4 text-muted" aria-hidden="true" />
                        </span>
                        <span className="block text-sm text-muted">{service.menu}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {navigation.primary
            .filter((link) => link.href !== "/services")
            .map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" aria-current={isActive(pathname, link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          <Link href="/about" className="nav-link" aria-current={isActive(pathname, "/about") || isActive(pathname, "/how-we-work") || isActive(pathname, "/trust") ? "page" : undefined}>
            Company
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <BookCall className="hidden !min-h-11 lg:inline-flex" />
          <Dialog.Root open={mobileOpen} onOpenChange={(open) => setMobilePath(open ? pathname : null)}>
            <Dialog.Trigger asChild>
              <button type="button" className="inline-flex size-11 items-center justify-center lg:hidden" aria-label="Open menu">
                <span className="hamburger" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto bg-paper p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                  <Logo />
                  <Dialog.Close asChild>
                    <button type="button" className="inline-flex size-11 items-center justify-center" aria-label="Close menu">
                      <X className="size-6" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="mt-6 grid">
                  <details className="group border-t border-line">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-display text-2xl [&::-webkit-details-marker]:hidden">
                      Services
                      <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="grid pb-4">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/services/${service.slug}`} className="flex min-h-11 items-center gap-3 text-muted">
                            <span className="size-2 rounded-full" style={{ background: service.accent }} aria-hidden="true" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  {[...navigation.primary.filter((link) => link.href !== "/services"), ...navigation.company].map((link) => (
                    <Link key={link.href} href={link.href} className="flex min-h-14 items-center justify-between border-t border-line font-display text-2xl">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-line pt-6">
                  <BookCall className="w-full" />
                  <p className="mt-4 text-sm text-muted">
                    <a className="link text-ink" href={`mailto:${site.email}`}>{site.email}</a> · {site.location}
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
