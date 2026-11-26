"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BookCall } from "@/components/layout/book-call";
import { Logo } from "@/components/ui/logo";
import { stages } from "@/data/framework";
import { services } from "@/data/services";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ServiceColumns({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {stages.map((stage) => (
        <div key={stage.id} data-stage={stage.id}>
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="stage-dot" aria-hidden="true" />
            {stage.name}
          </p>
          <p className="mt-1 text-sm text-muted">{stage.question}</p>
          <ul className="mt-4 grid gap-1">
            {services
              .filter((service) => service.stage === stage.id)
              .map((service) => (
                <li key={service.slug}>
                  <Link
                    role="menuitem"
                    href={`/services/${service.slug}`}
                    onClick={onNavigate}
                    className="group -mx-3 block rounded-md px-3 py-2 hover:bg-surface"
                  >
                    <span className="flex items-center justify-between gap-2 font-medium">
                      {service.name}
                      <ArrowUpRight className="card-arrow size-4 text-muted" aria-hidden="true" />
                    </span>
                    <span className="block text-sm text-muted">{service.menu}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div>
        <p className="text-sm font-semibold">Across every stage</p>
        <p className="mt-1 text-sm text-muted">Where to start, and keeping it running.</p>
        <ul className="mt-4 grid gap-1">
          {services
            .filter((service) => service.stage === "cross-stage")
            .map((service) => (
              <li key={service.slug}>
                <Link
                  role="menuitem"
                  href={`/services/${service.slug}`}
                  onClick={onNavigate}
                  className="group -mx-3 block rounded-md px-3 py-2 hover:bg-surface"
                >
                  <span className="flex items-center justify-between gap-2 font-medium">
                    <span>
                      {service.name}
                      {service.startHere ? <span className="ml-2 rounded-full bg-ink px-2 py-0.5 text-xs font-semibold text-paper">Start here</span> : null}
                    </span>
                    <ArrowUpRight className="card-arrow size-4 text-muted" aria-hidden="true" />
                  </span>
                  <span className="block text-sm text-muted">{service.menu}</span>
                </Link>
              </li>
            ))}
          <li>
            <Link role="menuitem" href="/funnel-check" onClick={onNavigate} className="group -mx-3 block rounded-md px-3 py-2 hover:bg-surface">
              <span className="flex items-center justify-between gap-2 font-medium">
                Funnel check
                <ArrowUpRight className="card-arrow size-4 text-muted" aria-hidden="true" />
              </span>
              <span className="block text-sm text-muted">Two minutes to find your weakest stage.</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  // Menus are keyed to the page they were opened on, so navigating closes them without an effect.
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const [mobilePath, setMobilePath] = useState<string | null>(null);
  const servicesOpen = servicesPath === pathname;
  const mobileOpen = mobilePath === pathname;
  const setServicesOpen = (value: boolean | ((open: boolean) => boolean)) =>
    setServicesPath((current) => ((typeof value === "function" ? value(current === pathname) : value) ? pathname : null));
  const setMobileOpen = (value: boolean) => setMobilePath(value ? pathname : null);
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
    <header id="top" className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-wide flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="AuraRush home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <Link href="/framework" className="nav-link" aria-current={isActive(pathname, "/framework") ? "page" : undefined}>
            Framework
          </Link>
          <div ref={menuRef} className="static" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              ref={buttonRef}
              type="button"
              className="nav-link"
              aria-expanded={servicesOpen}
              aria-controls={panelId}
              aria-current={isActive(pathname, "/services") ? "page" : undefined}
              onClick={() => setServicesOpen(true)}
            >
              Services
              <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {servicesOpen ? (
              <div id={panelId} role="menu" aria-label="Services" className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-[0_24px_40px_-24px_rgba(23,20,31,0.3)]">
                <div className="container-wide grid grid-cols-4 gap-10 py-8">
                  <ServiceColumns onNavigate={() => setServicesOpen(false)} />
                </div>
                <div className="border-t border-line bg-surface">
                  <div className="container-wide flex items-center justify-between py-3 text-sm">
                    <p className="text-muted">Not sure where to start? Begin with a growth audit.</p>
                    <Link href="/services" className="link font-medium" onClick={() => setServicesOpen(false)}>
                      All services
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {navigation.primary
            .filter((link) => link.href !== "/framework")
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
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
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
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
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
                  <Link href="/framework" className="flex min-h-14 items-center justify-between border-t border-line font-display text-2xl">
                    Framework
                  </Link>
                  <details className="group border-t border-line">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-display text-2xl [&::-webkit-details-marker]:hidden">
                      Services
                      <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="grid gap-6 pb-6">
                      {stages.map((stage) => (
                        <div key={stage.id} data-stage={stage.id}>
                          <p className="flex items-center gap-2 text-sm font-semibold">
                            <span className="stage-dot" aria-hidden="true" />
                            {stage.name}
                          </p>
                          <ul className="mt-2">
                            {services
                              .filter((service) => service.stage === stage.id)
                              .map((service) => (
                                <li key={service.slug}>
                                  <Link href={`/services/${service.slug}`} className="flex min-h-11 items-center">
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                      <ul>
                        {services
                          .filter((service) => service.stage === "cross-stage")
                          .map((service) => (
                            <li key={service.slug}>
                              <Link href={`/services/${service.slug}`} className="flex min-h-11 items-center">
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        <li>
                          <Link href="/funnel-check" className="flex min-h-11 items-center">
                            Funnel check
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </details>
                  {[...navigation.primary.filter((link) => link.href !== "/framework"), ...navigation.company].map((link) => (
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
