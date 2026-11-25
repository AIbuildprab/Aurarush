"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BookCall } from "@/components/layout/book-call";
import { Logo } from "@/components/ui/logo";
import { insights } from "@/data/insights";
import { services, serviceHues } from "@/data/services";
import { site } from "@/data/site";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

const links = [
  { href: "/how-we-work", label: "How we work", number: "02" },
  { href: "/work", label: "Work", number: "03" },
  { href: "/about", label: "About", number: "04" },
  { href: "/insights", label: "Insights", number: "05" },
  { href: "/contact", label: "Contact", number: "06" },
].filter((link) => link.href !== "/insights" || insights.length > 0);

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { direction, scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const servicesId = useId();
  const hidden = direction === "down" && scrolled && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const root = menuRef.current;
    const focusable = root?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, mobileServices]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [servicesOpen]);

  const onServicesKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = servicesRef.current?.querySelectorAll<HTMLAnchorElement>("[role='menuitem']");
    if (!items?.length) return;
    const index = Array.from(items).findIndex((item) => item === document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      items[(index + 1) % items.length]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      items[(index - 1 + items.length) % items.length]?.focus();
    }
  };

  return (
    <header
      id="top"
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 transition-transform duration-300 lg:h-[72px]",
        hidden && "-translate-y-full",
        scrolled || menuOpen ? "border-b border-white/10 bg-[rgba(15,15,15,0.8)] backdrop-blur-[12px]" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label="AuraRush home" className="shrink-0">
          <Logo kind="header" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onKeyDown={onServicesKey}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              className={cn("inline-flex min-h-11 items-center gap-1 text-sm", active(pathname, "/services") && "nav-active")}
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" />
            </button>
            {servicesOpen ? (
              <div id={servicesId} role="menu" className="absolute top-[calc(100%+12px)] left-0 w-[440px] rounded-lg border border-white/10 bg-surface p-3 shadow-[0_0_40px_rgba(222,47,75,0.15)]">
                <Link role="menuitem" href="/services" className="flex min-h-11 items-center justify-between px-3 text-sm">
                  Overview <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                {services.map((service) => (
                  <Link
                    role="menuitem"
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex min-h-11 items-center gap-4 rounded-md px-3 py-2"
                  >
                    <span className="w-8 font-mono text-sm" style={{ color: serviceHues[service.hue].text }}>
                      {service.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block">{service.name}</span>
                      <span className="block truncate text-sm text-muted">{service.menu}</span>
                    </span>
                    <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn("inline-flex min-h-11 items-center text-sm", active(pathname, link.href) && "nav-active")}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookCall className="hidden lg:inline-flex" />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={cn("hamburger", menuOpen && "is-open")} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id={menuId} ref={menuRef} className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="container-site flex h-16 items-center justify-between">
            <Link href="/" aria-label="AuraRush home">
              <Logo kind="header" />
            </Link>
            <button type="button" className="inline-flex size-11 items-center justify-center" aria-label="Toggle menu" onClick={() => setMenuOpen(false)}>
              <span className="hamburger is-open" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
          <nav aria-label="Mobile" className="container-site flex flex-1 flex-col overflow-y-auto pt-6">
            <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Menu</p>
            <div className="mt-6 border-t border-white/10">
              <button type="button" className="flex min-h-16 w-full items-center justify-between font-display text-[2rem] font-light" aria-expanded={mobileServices} onClick={() => setMobileServices((open) => !open)}>
                <span><span className="mr-4 font-mono text-base text-muted">01</span>Services</span>
                <span aria-hidden="true">{mobileServices ? "–" : "+"}</span>
              </button>
              {mobileServices ? (
                <div className="pb-4">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="flex min-h-11 items-center gap-4 text-muted">
                      <span className="w-8 font-mono text-sm" style={{ color: serviceHues[service.hue].text }}>{service.number}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="flex min-h-16 items-center border-t border-white/10 font-display text-[2rem] font-light">
                <span className="mr-4 font-mono text-base text-muted">{link.number}</span>
                {link.label}
                <ArrowUpRight className="ml-auto size-5" aria-hidden="true" />
              </Link>
            ))}
            <div className="mt-auto border-t border-white/10 py-6">
              <BookCall className="w-full" />
              <div className="mt-6 grid gap-3 text-sm">
                <p><span className="block font-mono text-xs tracking-[0.14em] text-muted uppercase">Email</span><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
                <p><span className="block font-mono text-xs tracking-[0.14em] text-muted uppercase">Based in</span>{site.location}</p>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
