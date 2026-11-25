export const serviceHues = {
  magenta: { color: "#A23B8C", text: "#D277BD" },
  crimson: { color: "#DE2F4B", text: "#F2677D" },
  orange: { color: "#F08A2A", text: "#F08A2A" },
  amber: { color: "#F5C518", text: "#F5C518" },
  blue: { color: "#3A82C0", text: "#3A82C0" },
  green: { color: "#5BAA47", text: "#5BAA47" },
} as const;

export type ServiceHue = keyof typeof serviceHues;

export type Service = {
  number: string;
  slug: string;
  name: string;
  hue: ServiceHue;
  menu: string;
  summary: string;
  outcome: string;
  tags: string[];
  intro: string;
  included: string[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  price: number | null;
  mock: "funnel" | "pt" | "salon" | "consulting";
};

export const services: Service[] = [
  {
    number: "01",
    slug: "funnel-websites",
    name: "Funnel Websites",
    hue: "magenta",
    menu: "Fast websites built to turn visitors into enquiries.",
    summary: "Fast, professional websites designed around one job: turning visitors into enquiries.",
    outcome: "More qualified enquiries",
    tags: ["Design", "Build", "Page structure", "Speed"],
    intro: "A funnel website is built around the enquiry, not around a pile of pages. Visitors see what you do, who it is for, and the next step.",
    included: [
      "A clear page structure aimed at one action",
      "Mobile-first layout and fast loading",
      "Space for proof, without invented testimonials",
      "A path into the enquiry form",
      "Basic on-page search setup",
      "Handover in plain English",
    ],
    process: [
      { title: "Listen", text: "We map who should enquire and what they need to know first." },
      { title: "Shape", text: "The page order follows that path, with one primary action." },
      { title: "Build", text: "We design and develop the site so it stays quick and easy to read." },
      { title: "Launch", text: "You review it, we adjust, and the site goes live with a handover." },
    ],
    faqs: [
      { question: "Is this a brochure site?", answer: "It can explain the business, but the page is judged on enquiries, not on how many sections it has." },
      { question: "Can you match a brand I already have?", answer: "Yes. We work with your existing colours and type where they are already decided." },
      { question: "Will it work on a phone?", answer: "Yes. The layout is designed for a phone first, then opened out for larger screens." },
      { question: "Do you write the words?", answer: "We draft the structure and the calls to action. You approve anything a customer will read." },
      { question: "What does it cost?", answer: "It depends on the number of pages and the form. We quote before any work starts." },
    ],
    price: null,
    mock: "funnel",
  },
  {
    number: "02",
    slug: "lead-funnels-and-forms",
    name: "Lead Funnels and Forms",
    hue: "crimson",
    menu: "Forms that capture, qualify and route every lead.",
    summary: "Smart forms and multi-step funnels that capture, qualify and route every enquiry to the right place.",
    outcome: "No lost leads",
    tags: ["Forms", "Funnels", "Routing", "Follow-up"],
    intro: "A good form asks only what you need, in an order a busy person will finish. The answers then land where someone can act on them.",
    included: [
      "A short form or a stepped funnel",
      "Questions that qualify the enquiry",
      "Routing to the right inbox or dashboard",
      "A confirmation the sender can trust",
      "A spam check that stays out of the way",
      "Notes on what to do with each lead",
    ],
    process: [
      { title: "Define", text: "We list the questions that change how you reply." },
      { title: "Draft", text: "The form is ordered so people can finish it on a phone." },
      { title: "Connect", text: "Submissions go to email, a dashboard, or both." },
      { title: "Prove", text: "We test the path before it is treated as live." },
    ],
    faqs: [
      { question: "Why not use a booking link alone?", answer: "A booking link skips the questions that tell you whether the enquiry is a good fit." },
      { question: "Can the form have more than one step?", answer: "Yes, when the extra step earns its place. We keep each step short." },
      { question: "Where do the answers go?", answer: "To the inbox or dashboard we agree. Nothing is stored without a purpose you have approved." },
      { question: "Can I change the questions later?", answer: "Yes. On a support arrangement we can revise them with you. On a focused build, changes after launch are quoted." },
      { question: "What does it cost?", answer: "A form on its own is a smaller piece of work than a full website. We quote the actual scope." },
    ],
    price: null,
    mock: "funnel",
  },
  {
    number: "03",
    slug: "pt-dashboards",
    name: "PT Dashboards",
    hue: "orange",
    menu: "One place for a personal trainer’s new enquiries.",
    summary: "A website with a dashboard for personal trainers, where leads from your funnel land in one place and are easy to manage.",
    outcome: "Less admin, more training",
    tags: ["Dashboard", "Enquiries", "Clients", "Funnel"],
    intro: "Personal trainers lose time chasing messages across apps. The dashboard is the place those funnel enquiries land, so follow-up is visible.",
    included: [
      "A site path that feeds the dashboard",
      "A list of new enquiries",
      "A simple way to see what needs a reply",
      "Room for client notes you choose to keep",
      "A weekly view of what came in",
      "Access that stays with you",
    ],
    process: [
      { title: "Shadow the day", text: "We ask how new clients arrive and how you reply today." },
      { title: "Keep it small", text: "The first version shows enquiries and follow-ups, not every possible report." },
      { title: "Connect the funnel", text: "The website form and the dashboard share one path." },
      { title: "Hand it over", text: "You can run the day without a walkthrough every morning." },
    ],
    faqs: [
      { question: "Is this a full gym platform?", answer: "No. It is a website and a dashboard for enquiries and follow-up. We keep the feature list general until you confirm the detail." },
      { question: "Can my clients log in?", answer: "Only if we agree that scope. The first job is your view of new enquiries." },
      { question: "Does it replace my booking tool?", answer: "Not by default. It can sit beside one, or replace a scattered set of links if that is the brief." },
      { question: "Where is the data kept?", answer: "We prefer a provider that can store data in the UK or the EU, and we will name it in the proposal." },
      { question: "What does it cost?", answer: "It depends on how much of the day the dashboard needs to cover. We quote before we build." },
    ],
    price: null,
    mock: "pt",
  },
  {
    number: "04",
    slug: "salon-dashboards",
    name: "Salon Dashboards",
    hue: "amber",
    menu: "Enquiries and follow-ups for salons and barbers.",
    summary: "The same funnel-powered approach for salons and barbershops, giving one view of new enquiries and follow-ups.",
    outcome: "A fuller diary",
    tags: ["Dashboard", "Enquiries", "Follow-ups", "Funnel"],
    intro: "Salons and barbershops live on the diary. The dashboard shows new enquiries and the follow-ups that would otherwise sit in a busy inbox.",
    included: [
      "A site path into one enquiry list",
      "Follow-up reminders you can see at a glance",
      "A simple day view",
      "The same funnel system as the public website",
      "Room to add services you actually sell",
      "A handover the team can follow",
    ],
    process: [
      { title: "Walk the desk", text: "We learn how the phone, the form and the chair connect." },
      { title: "Set the view", text: "New enquiries, follow-ups and the day ahead are the first screen." },
      { title: "Join the funnel", text: "What the website asks is what the dashboard shows." },
      { title: "Leave it usable", text: "The team can pick it up without a long manual." },
    ],
    faqs: [
      { question: "Is this a till or a booking product?", answer: "No. It is the enquiry and follow-up layer. Payments and chair booking stay out of scope until you ask for them." },
      { question: "Will it suit a barbershop as well as a salon?", answer: "Yes. The layout follows enquiries and the diary, not a particular treatment menu." },
      { question: "Can more than one person use it?", answer: "Yes, if the brief includes more than one login. We confirm that before we quote." },
      { question: "Can I see sample data first?", answer: "The work page shows an illustrative dashboard. It is marked as sample data, not a client result." },
      { question: "What does it cost?", answer: "We price it against the agreed screens. There is no published package price yet." },
    ],
    price: null,
    mock: "salon",
  },
  {
    number: "05",
    slug: "it-consulting",
    name: "IT Consulting",
    hue: "blue",
    menu: "Plain-English advice before you commit to tools.",
    summary: "Practical technology advice, from audits and roadmaps to tool choices, explained in plain English.",
    outcome: "Confident technology decisions",
    tags: ["Audit", "Strategy", "Roadmap", "Tooling"],
    intro: "Consulting at AuraRush is a decision aid. You leave with a recommendation you can explain to someone else, not a slide full of jargon.",
    included: [
      "A short audit of what you use today",
      "A Now, Next, Later roadmap",
      "Tool choices explained in plain English",
      "Risks called out without drama",
      "A written note you can keep",
      "A follow-up conversation",
    ],
    process: [
      { title: "Brief", text: "We agree the decision you are trying to make." },
      { title: "Look", text: "We review the current tools and the gaps that cost time." },
      { title: "Recommend", text: "You get a sequence, not a catalogue." },
      { title: "Decide", text: "You choose what to build, buy or leave alone." },
    ],
    faqs: [
      { question: "Is this only for large companies?", answer: "No. It is aimed at growing businesses that need a clear next step, including personal trainers and salons." },
      { question: "Will you sell me software?", answer: "We do not take a hidden commission on tool choices. If that ever changes, we will say so before you appoint us." },
      { question: "How long does it take?", answer: "A focused advisory piece is often a few conversations plus a written note. The proposal will name the time." },
      { question: "Can consulting lead into a build?", answer: "Yes. You can stop after the advice, or ask AuraRush to build what the roadmap recommends." },
      { question: "What does it cost?", answer: "We quote the engagement. The site does not show a day rate." },
    ],
    price: null,
    mock: "consulting",
  },
  {
    number: "06",
    slug: "it-services",
    name: "IT Services",
    hue: "green",
    menu: "Hosting, updates and support after launch.",
    summary: "Hosting, maintenance, updates and support that keep your website and systems running.",
    outcome: "Dependable, secure systems",
    tags: ["Hosting", "Support", "Security", "Updates"],
    intro: "A launch is the start of the system’s working life. IT services cover hosting, updates and a person to contact when something needs attention.",
    included: [
      "Hosting for the website we agree",
      "Updates and housekeeping",
      "A named way to ask for help",
      "Security basics kept current",
      "Small improvements in an agreed rhythm",
      "Plain notes when something changes",
    ],
    process: [
      { title: "Take stock", text: "We list what must stay up and who depends on it." },
      { title: "Stabilise", text: "Hosting, backups and access are put in order." },
      { title: "Watch", text: "We keep an eye on updates and the issues that repeat." },
      { title: "Improve", text: "Agreed changes are made without a fresh project every time." },
    ],
    faqs: [
      { question: "Is this a helpdesk for every device in the office?", answer: "Only if that is the agreed scope. The usual starting point is the website and the systems we have built." },
      { question: "Do you work outside the UK?", answer: "AuraRush is UK-based. Remote support is normal. On-site work is only offered when we agree it." },
      { question: "What if something breaks?", answer: "You contact admin@aurarush.org. The support arrangement names how quickly we respond." },
      { question: "Can I leave?", answer: "Yes. We will hand over access and notes so you are not locked in." },
      { question: "What does it cost?", answer: "Support is quoted against what we are looking after. There is no figure on this page until one is agreed." },
    ],
    price: null,
    mock: "consulting",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
