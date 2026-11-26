import type { StageId } from "@/data/framework";
import type { ServiceSlug } from "@/data/services";

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  liveUrl: string;
  status: "live" | "in-progress";
  /** Only "confirmed" studies are published. */
  permission: "confirmed" | "pending";
  stages: StageId[];
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
export const contextNote = `Figures are stated by the client on its own website and were checked on ${checkedOn}. AuraRush has not audited them.`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "stpt-coaching",
    client: "STPT Coaching",
    sector: "Personal training",
    location: "Leicester, UK",
    liveUrl: "https://www.stptcoaching.com/",
    status: "live",
    permission: "confirmed",
    stages: ["conversion", "monetisation"],
    serviceSlugs: ["websites-and-funnels", "client-systems-and-dashboards"],
    headline: "A coaching website with a client dashboard behind it",
    summary: "A single-purpose coaching site that leads to an application, plus a client-side dashboard.",
    problem: "A coach selling one-to-one programmes to busy professionals needs visitors to apply rather than browse, and a way to look after clients once they have started.",
    solution: "A site built around one action, Apply for coaching, with client results and reviews placed where a hesitant visitor looks for reassurance. Behind it, a client-side dashboard gives the coach and the client one place for the programme.",
    result: "The enquiry path is a single application, and the client has a defined area to continue in after signing up. A walkthrough of the dashboard is in production.",
    deliverables: ["Website design and build", "Application funnel", "Client dashboard", "Reviews and results layout"],
    context: [{ label: "Clients coached, as stated by the client", value: "100+" }],
    frames: { desktop: "/work/stpt-coaching/desktop.webp", mobile: "/work/stpt-coaching/mobile.webp", alt: "STPT Coaching website home page" },
    video: { status: "placeholder" },
  },
  {
    slug: "mindfull-food-fitness",
    client: "Mindfull Food Fitness",
    sector: "Personal training and nutrition",
    location: "Leicester, UK, and online",
    liveUrl: "https://www.mindfullfoodfitness.com/",
    status: "in-progress",
    permission: "confirmed",
    stages: ["conversion", "monetisation"],
    serviceSlugs: ["websites-and-funnels", "client-systems-and-dashboards"],
    headline: "A 12-month coaching programme, explained step by step",
    summary: "A coaching site that explains a four-phase programme, with a PT dashboard currently in development.",
    problem: "A coach with a structured long-term programme needs the site to explain how it works and why it is different, before anyone will talk about price.",
    solution: "A site that tells the coach's story, lays out the four-phase programme and what is included, and leads to pricing and enquiry. A PT dashboard for the coach's clients is being built alongside it.",
    result: "The site is live. The dashboard is still in progress, and this study will be updated when it ships.",
    deliverables: ["Website design and build", "Programme and pricing pages", "PT dashboard (in progress)"],
    frames: { desktop: "/work/mindfull-food-fitness/desktop.webp", mobile: "/work/mindfull-food-fitness/mobile.webp", alt: "Mindfull Food Fitness website home page" },
  },
  {
    slug: "ninh-studio",
    client: "Ninh Studio",
    sector: "Photography and studio hire",
    location: "East Vancouver, Canada",
    liveUrl: "https://www.ninhstudio.ca/",
    status: "live",
    permission: "confirmed",
    stages: ["attention", "conversion"],
    serviceSlugs: ["websites-and-funnels"],
    headline: "One studio, sold two ways: sessions and space",
    summary: "A website for a photography studio that sells quoted sessions and rents the room by the hour.",
    problem: "The studio sells two different things. Sessions are quoted by enquiry, while the space is listed by the hour, and a single page had to serve both without confusing either audience.",
    solution: "A gallery-led home page, sessions grouped by type, a dedicated studio section with the practical details renters ask about, and clear paths to Book a Session and Pricing.",
    result: "Visitors can tell within seconds whether they want a session or the room, and each path ends in an enquiry or a price list.",
    deliverables: ["Website design and build", "Sessions and pricing structure", "Studio hire section", "Local search foundations"],
    context: [{ label: "Google rating, as stated by the client", value: "5.0 from 22 reviews" }],
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
    stages: ["attention", "conversion"],
    serviceSlugs: ["websites-and-funnels"],
    headline: "Before-and-after proof, with a phone number at the top",
    summary: "A local service site that shows finished work first and makes asking for a quote the obvious next step.",
    problem: "Homeowners choose a landscaper on trust. The business needed its finished work and reviews in front of them quickly, with an easy way to ask for a quote.",
    solution: "Project stories with before-and-after images, services explained in plain terms, reviews, a four-step explanation of how a job runs, and a call-to-quote path in the header.",
    result: "The page answers the questions a homeowner asks before calling: what do you do, can I see it, and what happens next.",
    deliverables: ["Website design and build", "Project story layout", "Quote request path", "Local search foundations"],
    context: [{ label: "Google rating, as stated by the client", value: "4.9 from 19 reviews" }],
    frames: { desktop: "/work/green-lotus-landscape/desktop.webp", mobile: "/work/green-lotus-landscape/mobile.webp", alt: "Green Lotus Landscape website home page" },
  },
  {
    slug: "raindrops-beauty-salon",
    client: "Raindrops Beauty Salon",
    sector: "Beauty and bridal",
    location: "Abbotsford, Canada",
    liveUrl: "https://www.raindropsbeautysalonltd.com/",
    status: "live",
    permission: "confirmed",
    stages: ["attention", "conversion"],
    serviceSlugs: ["websites-and-funnels"],
    headline: "A full service menu that leads to a conversation",
    summary: "A salon site that organises bridal, event and everyday services and routes enquiries to a call or message.",
    problem: "A salon with bridal packages, event looks and a long price list needs customers to find the right service quickly and then start a conversation, often on their phone.",
    solution: "Services grouped by occasion, each with what is included and how it works, a full price list, and booking by phone or WhatsApp from the first screen.",
    result: "Customers can see what suits their occasion, what each package includes and how to ask, without leaving the page.",
    deliverables: ["Website design and build", "Service and package structure", "Price list", "Phone and WhatsApp enquiry path"],
    frames: { desktop: "/work/raindrops-beauty-salon/desktop.webp", mobile: "/work/raindrops-beauty-salon/mobile.webp", alt: "Raindrops Beauty Salon website home page" },
  },
];

export function getPublishedWork() {
  return caseStudies.filter((study) => study.permission === "confirmed");
}

export function getWork(slug: string) {
  return getPublishedWork().find((study) => study.slug === slug);
}
