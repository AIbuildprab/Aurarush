import type { ServiceSlug } from "@/data/services";
import tourSizes from "@/data/tour-sizes.json";

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  liveUrl: string;
  status: "live" | "in-progress";
  /** Only "confirmed" studies are published. */
  permission: "confirmed" | "pending";
  serviceSlugs: ServiceSlug[];
  headline: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  deliverables: string[];
  /** Facts the client states publicly. Always labelled with source and date. */
  context?: { label: string; value: string }[];
  frames: { desktop: string; mobile: string; alt: string };
  video?: { status: "placeholder" | "ready"; poster?: string; mp4?: string; captions?: string; transcript?: string };
};

const checkedOn = "26 November 2026";
export const contextNote = `Stated by the client on its own website, checked ${checkedOn}. Not audited by AuraRush.`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "stpt-coaching",
    client: "STPT Coaching",
    sector: "Personal training",
    location: "Leicester, UK",
    liveUrl: "https://www.stptcoaching.com/",
    status: "live",
    permission: "confirmed",
    serviceSlugs: ["websites-and-funnels", "client-systems-and-dashboards"],
    headline: "A coaching site with a client dashboard",
    summary: "Personal trainer site with a fully customised client dashboard.",
    problem: "Visitors needed to apply, not browse, and clients needed somewhere to continue.",
    solution: "A site built around one application, with results and reviews placed for hesitant visitors, and a dashboard behind it.",
    result: "One enquiry path and a defined client area. Dashboard walkthrough in production.",
    deliverables: ["Website", "Application funnel", "Client dashboard"],
    context: [{ label: "Clients coached", value: "100+" }],
    frames: { desktop: "/work/stpt-coaching/desktop.webp", mobile: "/work/stpt-coaching/mobile.webp", alt: "STPT Coaching website home page" },
    video: { status: "placeholder" },
  },
  {
    slug: "mindfull-food-fitness",
    client: "Mindfull Food Fitness",
    sector: "Personal training",
    location: "Leicester, UK, and online",
    liveUrl: "https://www.mindfullfoodfitness.com/",
    status: "in-progress",
    permission: "confirmed",
    serviceSlugs: ["websites-and-funnels", "client-systems-and-dashboards"],
    headline: "A 12-month programme, explained",
    summary: "Personal trainer site with a client dashboard, currently in progress.",
    problem: "A long programme has to be understood before anyone asks about price.",
    solution: "The coach's story, the four phases and what is included, leading to pricing and enquiry.",
    result: "Site live. Dashboard in progress; this study will update when it ships.",
    deliverables: ["Website", "Programme and pricing pages", "PT dashboard (in progress)"],
    frames: { desktop: "/work/mindfull-food-fitness/desktop.webp", mobile: "/work/mindfull-food-fitness/mobile.webp", alt: "Mindfull Food Fitness website home page" },
  },
  {
    slug: "ninh-studio",
    client: "Ninh Studio",
    sector: "Photography studio",
    location: "East Vancouver, Canada",
    liveUrl: "https://www.ninhstudio.ca/",
    status: "live",
    permission: "confirmed",
    serviceSlugs: ["websites-and-funnels"],
    headline: "One studio, sold two ways",
    summary: "Photography studio based in Canada.",
    problem: "Sessions are quoted by enquiry, while the space is listed by the hour.",
    solution: "Sessions grouped by type, a studio section for renters, and clear paths to Book a Session and Pricing.",
    result: "Visitors can tell in seconds whether they want a session or the room.",
    deliverables: ["Website", "Sessions and pricing structure", "Studio hire section"],
    context: [{ label: "Google rating", value: "5.0 from 22 reviews" }],
    frames: { desktop: "/work/ninh-studio/desktop.webp", mobile: "/work/ninh-studio/mobile.webp", alt: "Ninh Studio website home page" },
  },
  {
    slug: "green-lotus-landscape",
    client: "Green Lotus Landscape",
    sector: "Landscaping",
    location: "Vancouver, Canada",
    liveUrl: "https://www.greenlotuslandscapes.ca/",
    status: "live",
    permission: "confirmed",
    serviceSlugs: ["websites-and-funnels"],
    headline: "Finished work first, a quote one tap away",
    summary: "Landscaping business doing garden work and more.",
    problem: "Homeowners choose on trust and need to see the work quickly.",
    solution: "Before-and-after project stories, plain-English services, reviews and a quote path in the header.",
    result: "The page answers: what do you do, can I see it, what happens next.",
    deliverables: ["Website", "Project story layout", "Quote request path"],
    context: [{ label: "Google rating", value: "4.9 from 19 reviews" }],
    frames: { desktop: "/work/green-lotus-landscape/desktop.webp", mobile: "/work/green-lotus-landscape/mobile.webp", alt: "Green Lotus Landscape website home page" },
  },
  {
    slug: "raindrops-beauty-salon",
    client: "Raindrops Beauty Salon",
    sector: "Home salon",
    location: "Abbotsford, Canada",
    liveUrl: "https://www.raindropsbeautysalonltd.com/",
    status: "live",
    permission: "confirmed",
    serviceSlugs: ["websites-and-funnels"],
    headline: "A full menu that leads to a message",
    summary: "Home salon based in Canada.",
    problem: "Customers must find the right package fast, often on a phone.",
    solution: "Services grouped by occasion, what each includes, a price list, and booking by phone or WhatsApp.",
    result: "Customers see what suits their occasion and how to ask, on one page.",
    deliverables: ["Website", "Package structure and price list", "Phone and WhatsApp path"],
    frames: { desktop: "/work/raindrops-beauty-salon/desktop.webp", mobile: "/work/raindrops-beauty-salon/mobile.webp", alt: "Raindrops Beauty Salon website home page" },
  },
];

export function getPublishedWork() {
  return caseStudies.filter((study) => study.permission === "confirmed");
}

export function getWork(slug: string) {
  return getPublishedWork().find((study) => study.slug === slug);
}

type TourSizes = Record<string, { desktop: number[]; phone: number[] }>;

/** Whole-page screenshots for the scrolling walkthrough, with their pixel sizes. */
export function getTour(slug: string) {
  const sizes = (tourSizes as TourSizes)[slug];
  if (!sizes) return null;
  return {
    desktop: { src: `/work/${slug}/tour-desktop.webp`, width: sizes.desktop[0], height: sizes.desktop[1] },
    phone: { src: `/work/${slug}/tour-phone.webp`, width: sizes.phone[0], height: sizes.phone[1] },
  };
}
