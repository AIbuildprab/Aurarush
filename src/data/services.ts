import type { ChannelId, StageId } from "@/data/framework";

export type ServiceSlug =
  | "outbound-automation"
  | "content-and-search-automation"
  | "paid-media-automation"
  | "websites-and-funnels"
  | "client-systems-and-dashboards"
  | "growth-audit-and-roadmap"
  | "managed-support";

export type Service = {
  slug: ServiceSlug;
  name: string;
  stage: StageId | "cross-stage";
  channels: ChannelId[];
  /** One line, used in menus and lists. */
  menu: string;
  /** Hero line on the service page. */
  summary: string;
  outputs: { title: string; text: string }[];
  aiRole: string[];
  humanRole: string[];
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
    slug: "outbound-automation",
    name: "Outbound automation",
    stage: "attention",
    channels: ["outbound"],
    menu: "Email and social outreach that runs weekly.",
    summary: "Research, first lines, sequences and reply handling, with a person approving what goes out.",
    outputs: [
      { title: "Prospect profile", text: "Who to reach and why, agreed first." },
      { title: "Outreach system", text: "List, drafting, sending and follow-up, connected." },
      { title: "Weekly summary", text: "What went out and what came back." },
    ],
    aiRole: ["Research prospects and draft first lines", "Sort replies and update records"],
    humanRole: ["You approve targets and messages", "A person reviews copy before sending"],
    process: ["Profile", "Build", "Pilot", "Run"],
    workSlugs: [],
    faqs: [
      { question: "Is this bulk email?", answer: "No. Small, targeted batches from your own domain, with an opt-out on every message." },
      { question: "Does it follow UK rules?", answer: "We design for UK business-to-business marketing rules. Take your own legal advice for your sector." },
    ],
    related: ["growth-audit-and-roadmap", "websites-and-funnels"],
    availability: "core",
  },
  {
    slug: "content-and-search-automation",
    name: "Content and search automation",
    stage: "attention",
    channels: ["organic-content", "search"],
    menu: "Publishing and search work that keeps going.",
    summary: "A content and SEO pipeline: research, briefs, repurposing and publishing, with an editor in the loop.",
    outputs: [
      { title: "Content pipeline", text: "One source becomes posts, clips and a newsletter." },
      { title: "Search research", text: "The questions customers ask, grouped by topic." },
      { title: "Monthly report", text: "What is rising and what needs work." },
    ],
    aiRole: ["Draft and repurpose from your material", "Group search questions and spot gaps"],
    humanRole: ["An editor approves everything published", "A person checks facts and claims"],
    process: ["Audit", "Design", "Build", "Improve"],
    workSlugs: [],
    faqs: [
      { question: "Will search engines penalise AI-assisted content?", answer: "They judge usefulness. A person reviews everything we publish." },
      { question: "Who owns the content?", answer: "You do." },
    ],
    related: ["websites-and-funnels", "growth-audit-and-roadmap"],
    availability: "on-request",
  },
  {
    slug: "paid-media-automation",
    name: "Paid media automation",
    stage: "attention",
    channels: ["paid-advertising"],
    menu: "Creative testing and one view of ad spend.",
    summary: "Automation around your paid campaigns: creative variations, one report, alerts when spend drifts.",
    outputs: [
      { title: "Testing plan", text: "Structured variations and how to read them." },
      { title: "Reporting view", text: "Spend and results from each platform on one page." },
      { title: "Alerts", text: "A message when results move outside limits." },
    ],
    aiRole: ["Produce creative variations", "Combine platform data into one report"],
    humanRole: ["You set budget and goals", "A person approves all creative"],
    process: ["Review", "Connect", "Test", "Report"],
    workSlugs: [],
    faqs: [
      { question: "Do you manage my ad accounts?", answer: "We build around them. Ownership and budget stay yours." },
      { question: "Can you promise results?", answer: "No. We make results easier to see and act on." },
    ],
    related: ["websites-and-funnels", "growth-audit-and-roadmap"],
    availability: "on-request",
  },
  {
    slug: "websites-and-funnels",
    name: "Websites and funnels",
    stage: "conversion",
    channels: ["search", "organic-content", "paid-advertising"],
    menu: "Websites built to turn visits into enquiries.",
    summary: "Fast websites with one clear action, and forms that qualify and route every lead.",
    outputs: [
      { title: "A site built around one action", text: "Page order and calls to action that lead to an enquiry." },
      { title: "Forms and funnels", text: "Short forms that ask only what changes your reply." },
      { title: "Routing", text: "Answers land in your inbox or dashboard." },
    ],
    aiRole: ["Draft page structure and first-pass copy", "Sort and summarise enquiries"],
    humanRole: ["A designer and developer build and test", "You approve everything customers read"],
    process: ["Listen", "Shape", "Build", "Launch"],
    workSlugs: ["ninh-studio", "green-lotus-landscape", "raindrops-beauty-salon"],
    faqs: [
      { question: "Is this a brochure site?", answer: "It explains the business, but it is judged on enquiries." },
      { question: "What does it cost?", answer: "Quoted after a short conversation, before work starts." },
    ],
    related: ["client-systems-and-dashboards", "managed-support"],
    availability: "core",
  },
  {
    slug: "client-systems-and-dashboards",
    name: "Client systems and dashboards",
    stage: "monetisation",
    channels: ["outbound", "organic-content", "search"],
    menu: "One place to follow up and keep customers.",
    summary: "Dashboards and client areas for trainers, salons and similar businesses, so follow-up stops relying on memory.",
    outputs: [
      { title: "Enquiry and follow-up view", text: "Who needs a reply, and when." },
      { title: "Client area", text: "Optional logins for plans, check-ins or progress." },
      { title: "Weekly view", text: "What came in and what is waiting." },
    ],
    aiRole: ["Summarise enquiries, suggest replies", "Remind you when follow-ups are due"],
    humanRole: ["You decide what is kept about each client", "A person reviews messages before sending"],
    process: ["Shadow the day", "Keep it small", "Connect", "Hand over"],
    workSlugs: ["stpt-coaching", "mindfull-food-fitness"],
    faqs: [
      { question: "Is this a full gym or salon platform?", answer: "No. Only the enquiry, follow-up and client layer." },
      { question: "Where is data kept?", answer: "UK or EU providers where possible, named in the proposal." },
    ],
    related: ["websites-and-funnels", "managed-support"],
    availability: "core",
  },
  {
    slug: "growth-audit-and-roadmap",
    name: "Growth audit and roadmap",
    stage: "cross-stage",
    channels: ["product-led", "borrowed-audiences", "offline", "outbound"],
    menu: "Find the weakest stage and the next step.",
    summary: "A short audit of attention, conversion and monetisation, ending in a Now, Next, Later roadmap.",
    outputs: [
      { title: "Funnel review", text: "Where you are strong and where you leak." },
      { title: "Channel recommendation", text: "Which of the seven suit you." },
      { title: "Roadmap", text: "Now, Next, Later, in plain English." },
    ],
    aiRole: ["Analyse your data and public presence", "Draft the first review"],
    humanRole: ["A senior person leads and writes it", "You decide what to build"],
    process: ["Brief", "Look", "Recommend", "Decide"],
    workSlugs: [],
    faqs: [
      { question: "Will you try to sell me a build?", answer: "No. The audit stands alone." },
      { question: "How long does it take?", answer: "A few conversations and a written note." },
    ],
    related: ["outbound-automation", "websites-and-funnels"],
    availability: "core",
    startHere: true,
  },
  {
    slug: "managed-support",
    name: "Managed support",
    stage: "cross-stage",
    channels: [],
    menu: "Hosting, updates and a person to contact.",
    summary: "Hosting, monitoring and small improvements, so what we build keeps working.",
    outputs: [
      { title: "Hosting and care", text: "Backups, updates and security basics." },
      { title: "Named contact", text: "A stated response time." },
      { title: "Monthly improvements", text: "Small changes on an agreed rhythm." },
    ],
    aiRole: ["Monitor uptime and errors", "Summarise changes and issues"],
    humanRole: ["A named person responds and fixes", "You approve changes before they go live"],
    process: ["Take stock", "Stabilise", "Watch", "Improve"],
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
