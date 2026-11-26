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
  menu: string;
  summary: string;
  problem: string;
  approach: string;
  outputs: { title: string; text: string }[];
  aiRole: string[];
  humanRole: string[];
  process: { title: string; text: string }[];
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
    menu: "Email and social outreach that runs every week.",
    summary: "An automated outreach system: research, first lines, sequences and reply handling, with a person approving what goes out.",
    problem: "Outreach works when it is consistent and relevant. Most owners do it in bursts, then stop when work gets busy, and the list goes cold.",
    approach: "We build a system that finds businesses matching a profile you agree, drafts a relevant opening for each, sends in small batches from your own domain, and sorts the replies. You approve the messages and the targets. The system does the repetition.",
    outputs: [
      { title: "Prospect profile", text: "A written description of who to reach and why, agreed before anything is built." },
      { title: "Outreach system", text: "List building, message drafting, sending and follow-up steps connected end to end." },
      { title: "Reply handling", text: "Replies are sorted into interested, not now and not a fit, and logged." },
      { title: "Weekly summary", text: "A short note on what was sent, what came back and what to change." },
    ],
    aiRole: [
      "Research each prospect and draft a relevant opening line",
      "Sort replies and propose the next message",
      "Keep records up to date without manual entry",
    ],
    humanRole: [
      "You approve the target profile and the message approach",
      "A person reviews copy before it is sent",
      "You take every conversation that matters",
    ],
    process: [
      { title: "Profile", text: "We agree who the best customers are and what would make them reply." },
      { title: "Build", text: "We connect the list, drafting, sending and tracking steps." },
      { title: "Pilot", text: "A small batch goes out with every message reviewed." },
      { title: "Run", text: "Volume rises only when replies show the message is working." },
    ],
    workSlugs: [],
    faqs: [
      { question: "Is this bulk email?", answer: "No. Volumes are small and targeted, sent from your own domain, with an unsubscribe route on every message." },
      { question: "Does it follow UK rules on business email?", answer: "We design for the UK rules on business-to-business marketing, including a clear identity, a relevant reason for contact and an easy opt-out. We recommend you take your own legal advice for your sector." },
      { question: "Will it sound like me?", answer: "We write from examples of how you already speak, and a person reviews drafts before sending." },
      { question: "Can it run on social channels too?", answer: "Where a platform's rules allow it. We will tell you plainly where they do not." },
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
    summary: "A production line for organic content and search: research, briefs, repurposing and publishing, with an editor in the loop.",
    problem: "Content and SEO pay back slowly, which is why they are the first things dropped. A system that does the repetitive work makes consistency realistic.",
    approach: "We map your content from one source, such as a recording or an article, into the formats you need, and set up the research and reporting that keep search work pointed at the right questions.",
    outputs: [
      { title: "Content pipeline", text: "One source becomes posts, clips, a newsletter and an article draft." },
      { title: "Search research", text: "The questions your customers ask, grouped into topics worth writing about." },
      { title: "Briefs and drafts", text: "Structured briefs and first drafts for an editor to improve." },
      { title: "Reporting", text: "A monthly view of what is rising and what needs attention." },
    ],
    aiRole: [
      "Draft, repurpose and tag content from your source material",
      "Group search questions and spot gaps",
      "Prepare reports from analytics and search data",
    ],
    humanRole: [
      "You or an editor approves everything published",
      "A person checks facts, tone and claims",
      "You decide what the business wants to be known for",
    ],
    process: [
      { title: "Audit", text: "We look at what you publish and what already brings people in." },
      { title: "Design", text: "We agree formats, rhythm and the review step." },
      { title: "Build", text: "We connect research, drafting, review and publishing." },
      { title: "Improve", text: "Monthly reporting decides what to make more or less of." },
    ],
    workSlugs: [],
    faqs: [
      { question: "Will search engines penalise AI-assisted content?", answer: "Search engines judge usefulness, not the tool. We keep a person in the loop so what you publish is accurate and worth reading." },
      { question: "Do you edit video?", answer: "We can set up the steps around video, such as transcripts, clips and captions. Scope is agreed per project." },
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
    menu: "Creative testing and one clear view of ad spend.",
    summary: "Automation around paid advertising: creative variations, one reporting view and alerts when spend drifts.",
    problem: "Paid media is easy to start and easy to waste. Reporting sits in several tools and problems are found after the money has gone.",
    approach: "We set up the testing and reporting around your campaigns so you can see spend against results in one place and catch drift early. Campaign strategy and budget stay with you.",
    outputs: [
      { title: "Creative testing plan", text: "A structured set of variations and a way to read the results." },
      { title: "Single reporting view", text: "Spend and results from each platform on one page." },
      { title: "Alerts", text: "A message when spend or results move outside agreed limits." },
    ],
    aiRole: [
      "Produce creative variations for testing",
      "Combine platform data into one report",
      "Flag unusual changes",
    ],
    humanRole: [
      "You set budget and goals",
      "A person approves all creative before it runs",
      "Platform accounts remain in your name",
    ],
    process: [
      { title: "Review", text: "We look at current campaigns and how results are read today." },
      { title: "Connect", text: "We link accounts and agree the measures that matter." },
      { title: "Test", text: "Variations run against a clear question." },
      { title: "Report", text: "You receive one view, weekly." },
    ],
    workSlugs: [],
    faqs: [
      { question: "Do you manage my ad accounts?", answer: "We build the automation around them. Account ownership and budget remain yours." },
      { question: "Can you promise results?", answer: "No. Advertising results depend on your offer, market and budget. We make them easier to see and act on." },
    ],
    related: ["websites-and-funnels", "growth-audit-and-roadmap"],
    availability: "on-request",
  },
  {
    slug: "websites-and-funnels",
    name: "Websites and funnels",
    stage: "conversion",
    channels: ["search", "organic-content", "paid-advertising"],
    menu: "Websites built to turn a visit into a conversation.",
    summary: "Fast websites with a clear path from first visit to enquiry, including smart forms that qualify and route every lead.",
    problem: "Most websites describe a business and leave the visitor to work out what to do. Enquiries are lost between the page and the inbox.",
    approach: "We design the page around one action, build it to load quickly on a phone, and connect the form to wherever you reply: email, a dashboard or both.",
    outputs: [
      { title: "A site built around one action", text: "Page order, copy structure and calls to action that lead to an enquiry." },
      { title: "Forms and funnels", text: "Short forms or stepped funnels that ask only what changes your reply." },
      { title: "Routing", text: "Answers land where someone can act on them, with a confirmation the sender can trust." },
      { title: "Search foundations", text: "Clean structure, metadata and speed so the site can be found." },
    ],
    aiRole: [
      "Draft page structure and first-pass copy for your review",
      "Summarise and sort incoming enquiries",
      "Check pages for speed and accessibility issues",
    ],
    humanRole: [
      "A designer and developer build and test every page",
      "You approve everything a customer will read",
      "We hand over in plain English",
    ],
    process: [
      { title: "Listen", text: "We map who should enquire and what they need to know first." },
      { title: "Shape", text: "The page order follows that path, with one primary action." },
      { title: "Build", text: "We design and develop the site, then test it on real devices." },
      { title: "Launch", text: "You review, we adjust, and the site goes live with a handover." },
    ],
    workSlugs: ["ninh-studio", "green-lotus-landscape", "raindrops-beauty-salon"],
    faqs: [
      { question: "Is this a brochure site?", answer: "It explains the business, but it is judged on enquiries, not on how many pages it has." },
      { question: "Can you work with my existing brand?", answer: "Yes. We use your colours and type where they are already decided." },
      { question: "Do you write the words?", answer: "We draft the structure and calls to action. You approve anything a customer will read." },
      { question: "What does it cost?", answer: "It depends on the number of pages and the form. We quote before any work starts." },
    ],
    related: ["client-systems-and-dashboards", "managed-support"],
    availability: "core",
  },
  {
    slug: "client-systems-and-dashboards",
    name: "Client systems and dashboards",
    stage: "monetisation",
    channels: ["outbound", "organic-content", "search"],
    menu: "One place to follow up, serve and keep customers.",
    summary: "Dashboards and client systems for businesses such as personal trainers and salons, so follow-up and repeat business stop relying on memory.",
    problem: "Enquiries and client details end up across messages, notes and spreadsheets. Follow-ups slip, and nobody can see what each channel is worth.",
    approach: "We build the screens a small team uses every day: new enquiries, who needs a reply, client notes and a weekly view. Where useful, a client-facing area gives customers their own plan or progress.",
    outputs: [
      { title: "Enquiry and follow-up view", text: "A single list of who needs a reply, and when." },
      { title: "Client area", text: "Optional logged-in space for clients, such as plans, check-ins or progress." },
      { title: "Weekly view", text: "What came in, what was answered and what is waiting." },
      { title: "Connected funnel", text: "The website form and the dashboard share one path." },
    ],
    aiRole: [
      "Summarise enquiries and suggest a reply for you to edit",
      "Remind you when a follow-up is due",
      "Prepare weekly summaries",
    ],
    humanRole: [
      "You decide what is kept about each client and why",
      "A person reviews every message before it is sent",
      "Access stays with you",
    ],
    process: [
      { title: "Shadow the day", text: "We learn how new clients arrive and how you reply today." },
      { title: "Keep it small", text: "The first version covers enquiries and follow-up, not every possible report." },
      { title: "Connect", text: "The website form and the dashboard share one path." },
      { title: "Hand over", text: "You can run the day without a walkthrough every morning." },
    ],
    workSlugs: ["stpt-coaching", "mindfull-food-fitness"],
    faqs: [
      { question: "Is this a full gym or salon platform?", answer: "No. It is the enquiry, follow-up and client layer. Payments and chair booking stay out of scope unless you ask for them." },
      { question: "Where is the data kept?", answer: "We prefer providers that can store data in the UK or EU, and name the provider in the proposal." },
      { question: "Can my clients log in?", answer: "Only if we agree that scope." },
    ],
    related: ["websites-and-funnels", "managed-support"],
    availability: "core",
  },
  {
    slug: "growth-audit-and-roadmap",
    name: "Growth audit and roadmap",
    stage: "cross-stage",
    channels: ["product-led", "borrowed-audiences", "offline", "outbound"],
    menu: "Find the weakest stage and the next sensible step.",
    summary: "A short audit of your attention, conversion and monetisation, ending in a written roadmap of what to do now, next and later.",
    problem: "Most businesses know growth is uneven but not where. Effort goes into the loudest problem rather than the one costing most.",
    approach: "We look at how people find you, what happens when they arrive and what happens after they enquire. You receive a plain-English recommendation you can explain to someone else, with each idea matched to the channel it belongs to.",
    outputs: [
      { title: "Funnel review", text: "Where attention, conversion and monetisation are strong and where they leak." },
      { title: "Channel recommendation", text: "Which of the seven channels suit your business, and which to leave alone." },
      { title: "Now, next, later roadmap", text: "A sequence, not a catalogue of ideas." },
      { title: "Follow-up conversation", text: "A call to talk through the findings." },
    ],
    aiRole: [
      "Analyse your existing data and public presence",
      "Draft the first version of the review",
    ],
    humanRole: [
      "A senior person leads the audit and writes the recommendation",
      "You decide what to build, buy or leave alone",
    ],
    process: [
      { title: "Brief", text: "We agree the decision you are trying to make." },
      { title: "Look", text: "We review what you use today and what it costs you in time." },
      { title: "Recommend", text: "You receive a sequence with reasons." },
      { title: "Decide", text: "You choose what to build, and whether to build it with us." },
    ],
    workSlugs: [],
    faqs: [
      { question: "Will you try to sell me a build?", answer: "The audit stands alone. You can act on it yourself, with someone else, or with us." },
      { question: "How long does it take?", answer: "Usually a few conversations and a written note. The proposal will name the time." },
      { question: "What does it cost?", answer: "We quote the engagement. The site does not show a day rate." },
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
    summary: "Hosting, updates, monitoring and small improvements, so the systems we build keep working and keep improving.",
    problem: "A launch is the start of a system's working life. Without someone looking after it, small issues become lost enquiries.",
    approach: "We keep what we have built running: hosting, backups, updates and security basics, plus an agreed rhythm for improvements.",
    outputs: [
      { title: "Hosting and care", text: "Hosting, backups, updates and security housekeeping." },
      { title: "A named contact", text: "A way to ask for help and a stated response time." },
      { title: "Monthly improvements", text: "Small changes in an agreed rhythm, without a new project each time." },
      { title: "Plain notes", text: "A short summary when something changes." },
    ],
    aiRole: [
      "Monitor uptime, errors and unusual activity",
      "Prepare summaries of changes and issues",
    ],
    humanRole: [
      "A named person responds and fixes",
      "You approve changes before they go live",
    ],
    process: [
      { title: "Take stock", text: "We list what must stay up and who depends on it." },
      { title: "Stabilise", text: "Hosting, backups and access are put in order." },
      { title: "Watch", text: "We monitor and apply updates." },
      { title: "Improve", text: "Agreed changes are made on a regular rhythm." },
    ],
    workSlugs: [],
    faqs: [
      { question: "Is this a helpdesk for every device in the office?", answer: "Only if that is the agreed scope. The usual starting point is the website and systems we have built." },
      { question: "Can I leave?", answer: "Yes. We hand over access and notes so you are not locked in." },
      { question: "What does it cost?", answer: "Support is quoted against what we look after." },
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
