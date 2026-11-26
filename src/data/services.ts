export type ServiceSlug =
  | "websites-and-funnels"
  | "content-and-seo"
  | "paid-media"
  | "outbound-outreach"
  | "client-systems-and-dashboards"
  | "growth-audit-and-roadmap"
  | "managed-support";

export type Service = {
  slug: ServiceSlug;
  /** Plain-English name, used everywhere. */
  name: string;
  /** One line a customer can understand at a glance. */
  menu: string;
  /** Hero line on the service page. */
  summary: string;
  /** Accent colour from the logo. */
  accent: string;
  outputs: { title: string; text: string }[];
  weDo: string[];
  youDo: string[];
  process: string[];
  workSlugs: string[];
  faqs: { question: string; answer: string }[];
  related: ServiceSlug[];
  /** core: built regularly. on-request: scoped per project. */
  availability: "core" | "on-request";
  startHere?: boolean;
};

export const services: Service[] = [
  {
    slug: "websites-and-funnels",
    name: "Websites",
    menu: "A website that makes people get in touch.",
    summary: "Fast, good-looking websites with one clear button, and forms that send every enquiry to the right place.",
    accent: "#3a82c0",
    outputs: [
      { title: "A website built to get enquiries", text: "Clear pages, clear buttons, quick on a phone." },
      { title: "Simple forms", text: "Short forms that ask only what you need." },
      { title: "Enquiries sent to you", text: "Straight to your inbox or dashboard." },
    ],
    weDo: ["Design and build the site", "Test it on real phones and computers"],
    youDo: ["Tell us who your customers are", "Approve what goes on the site"],
    process: ["Listen", "Design", "Build", "Launch"],
    workSlugs: ["ninh-studio", "green-lotus-landscape", "raindrops-beauty-salon"],
    faqs: [
      { question: "Is this just a brochure site?", answer: "No. It is built to get enquiries, not just to look nice." },
      { question: "What does it cost?", answer: "We agree a price after a short call, before any work starts." },
    ],
    related: ["content-and-seo", "managed-support"],
    availability: "core",
  },
  {
    slug: "content-and-seo",
    name: "Google search",
    menu: "Show up when people search for what you do.",
    summary: "We help your business appear on Google and keep your content fresh, so new customers find you.",
    accent: "#5baa47",
    outputs: [
      { title: "Search research", text: "What your customers actually type into Google." },
      { title: "Pages and posts", text: "Written and published for you each month." },
      { title: "A monthly report", text: "What is working and what we will do next." },
    ],
    weDo: ["Research, write and publish", "Fix what holds your site back"],
    youDo: ["Approve what we publish", "Share what you know"],
    process: ["Audit", "Plan", "Publish", "Improve"],
    workSlugs: [],
    faqs: [
      { question: "How long does it take?", answer: "It builds over months, not weeks. We report monthly so you can see the direction." },
      { question: "Who owns the content?", answer: "You do." },
    ],
    related: ["websites-and-funnels", "paid-media"],
    availability: "on-request",
  },
  {
    slug: "paid-media",
    name: "Online ads",
    menu: "Ads on Google and social media that bring enquiries.",
    summary: "We set up and run your ads and show you, in one simple report, what the money produced.",
    accent: "#f08a2a",
    outputs: [
      { title: "Ads that are tested", text: "Different versions, so you keep the best." },
      { title: "One simple report", text: "Spend and results on one page." },
      { title: "Warnings", text: "We tell you early if something stops working." },
    ],
    weDo: ["Build and test the ads", "Report what they earn"],
    youDo: ["Set the budget", "Approve every ad"],
    process: ["Review", "Set up", "Test", "Report"],
    workSlugs: [],
    faqs: [
      { question: "Do you control my ad accounts?", answer: "No. The accounts and the budget stay yours." },
      { question: "Can you promise results?", answer: "No. We make results easy to see and act on." },
    ],
    related: ["websites-and-funnels", "growth-audit-and-roadmap"],
    availability: "on-request",
  },
  {
    slug: "outbound-outreach",
    name: "Outreach",
    menu: "We contact the right businesses for you.",
    summary: "Targeted emails and messages to the businesses you want to work with, sent every week and approved by you.",
    accent: "#de2f4b",
    outputs: [
      { title: "A target list", text: "Who to contact and why, agreed first." },
      { title: "Messages that sound like you", text: "Written for each person, approved by you." },
      { title: "Replies sorted", text: "You only see the ones that matter." },
    ],
    weDo: ["Find the businesses and write the messages", "Send them and sort the replies"],
    youDo: ["Approve who we contact", "Take the conversations that matter"],
    process: ["Choose targets", "Write", "Send", "Follow up"],
    workSlugs: [],
    faqs: [
      { question: "Is this spam?", answer: "No. Small, targeted batches from your own domain, with an opt-out on every message." },
      { question: "Does it follow UK rules?", answer: "We design for UK business-to-business rules. Take your own legal advice for your sector." },
    ],
    related: ["growth-audit-and-roadmap", "websites-and-funnels"],
    availability: "core",
  },
  {
    slug: "client-systems-and-dashboards",
    name: "Client dashboards",
    menu: "One place to follow up and look after customers.",
    summary: "A simple dashboard for trainers, salons and similar businesses, so no enquiry or client is forgotten.",
    accent: "#a23b8c",
    outputs: [
      { title: "Enquiry list", text: "Who needs a reply, and when." },
      { title: "Client area", text: "Optional logins for plans, check-ins or progress." },
      { title: "Weekly summary", text: "What came in and what is waiting." },
    ],
    weDo: ["Build the dashboard", "Set up reminders and summaries"],
    youDo: ["Tell us how your day works", "Decide what you keep about each client"],
    process: ["Shadow the day", "Keep it simple", "Connect", "Hand over"],
    workSlugs: ["stpt-coaching", "mindfull-food-fitness"],
    faqs: [
      { question: "Is this a full booking or gym system?", answer: "No. Just the enquiries, follow-ups and client area." },
      { question: "Where is the data kept?", answer: "UK or EU providers where possible, named in the proposal." },
    ],
    related: ["websites-and-funnels", "managed-support"],
    availability: "core",
  },
  {
    slug: "growth-audit-and-roadmap",
    name: "Marketing review",
    menu: "We check what is working and tell you what to do first.",
    summary: "A short review of how people find you and contact you, ending in a clear plan: now, next and later.",
    accent: "#f5c518",
    outputs: [
      { title: "What is working", text: "And what is leaking enquiries." },
      { title: "The best next steps", text: "The few things worth doing first." },
      { title: "A written plan", text: "Now, next and later, in plain English." },
    ],
    weDo: ["Review your website, search and ads", "Write the plan"],
    youDo: ["Share access and goals", "Decide what to do"],
    process: ["Brief", "Look", "Recommend", "Decide"],
    workSlugs: [],
    faqs: [
      { question: "Will you try to sell me something?", answer: "No. The review stands alone. You can act on it with anyone." },
      { question: "How long does it take?", answer: "A few conversations and a written plan." },
    ],
    related: ["outbound-outreach", "websites-and-funnels"],
    availability: "core",
    startHere: true,
  },
  {
    slug: "managed-support",
    name: "Ongoing support",
    menu: "Hosting, updates and a person to call.",
    summary: "We keep your website running, safe and improving, with a named person who answers.",
    accent: "#7fc8a9",
    outputs: [
      { title: "Hosting and care", text: "Backups, updates and security." },
      { title: "A named contact", text: "A stated reply time." },
      { title: "Monthly improvements", text: "Small changes, no new project each time." },
    ],
    weDo: ["Keep it running and safe", "Make agreed improvements"],
    youDo: ["Tell us what changes", "Approve changes before they go live"],
    process: ["Take stock", "Secure", "Watch", "Improve"],
    workSlugs: [],
    faqs: [
      { question: "Can I leave?", answer: "Yes. We hand over access and notes." },
      { question: "What does it cost?", answer: "Quoted against what we look after." },
    ],
    related: ["websites-and-funnels", "client-systems-and-dashboards"],
    availability: "core",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Old service URLs to their new homes. Used by next.config.ts redirects. */
export const legacyServiceRedirects: { from: string; to: ServiceSlug }[] = [
  { from: "funnel-websites", to: "websites-and-funnels" },
  { from: "lead-funnels-and-forms", to: "websites-and-funnels" },
  { from: "pt-dashboards", to: "client-systems-and-dashboards" },
  { from: "salon-dashboards", to: "client-systems-and-dashboards" },
  { from: "it-consulting", to: "growth-audit-and-roadmap" },
  { from: "it-services", to: "managed-support" },
];
