export const site = {
  name: "AuraRush",
  email: "admin@aurarush.org",
  location: "United Kingdom",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurarush.org",
  description:
    "AuraRush helps UK businesses grow by building value: websites that funnel customers through forms, and dashboards for personal trainers and salons.",
  legal: {
    entity: "",
    companyNumber: "",
    address: "",
    vatNumber: "",
    icoNumber: "",
  },
  social: [] as { label: string; href: string }[],
} as const;

export const BOOKING_URL = "";

export const businessTypes = [
  "Personal training business",
  "Salon or barbershop",
  "Other small business",
  "I need IT consulting",
] as const;

export const needs = [
  "Funnel website",
  "Lead funnel and forms",
  "Dashboard",
  "IT consulting",
  "IT services",
  "Not sure yet",
] as const;

export const industries = [
  "Personal trainers",
  "Hair salons",
  "Beauty salons",
  "Barbershops",
  "Fitness studios",
  "Wellness studios",
  "Local service businesses",
  "Growing SMEs",
] as const;

export const industryHues = [
  "#6B4E9E",
  "#A23B8C",
  "#DE2F4B",
  "#F08A2A",
  "#F5C518",
  "#5BAA47",
  "#7FC8A9",
  "#3A82C0",
] as const;

export const ticker = [
  "Value first, technology second",
  "Forms that fill your diary",
  "Dashboards that run the day",
  "IT consulting without the jargon",
  "One system, not scattered tools",
  "UK-based and easy to reach",
] as const;

export const benefits = [
  { title: "Proactive", text: "We look ahead, so small issues do not become lost enquiries." },
  { title: "Joined-up", text: "The website, the form and the dashboard are designed as one system." },
  { title: "Commercial", text: "Every recommendation is tied to enquiries, diary time or a clearer decision." },
  { title: "Predictable", text: "Clear scope and clear costs before any work starts." },
  { title: "Supported", text: "After launch you still have a person to call, not a ticket queue." },
  { title: "Accountable", text: "You deal with the people doing the work, based in the United Kingdom." },
] as const;

export const engagementSteps = [
  { number: "01", title: "Discover", text: "We learn how enquiries arrive today and where they get lost." },
  { number: "02", title: "Plan", text: "You get a clear scope, a sensible sequence and a cost before we build." },
  { number: "03", title: "Build", text: "We design and launch the website, funnel or dashboard as one system." },
  { number: "04", title: "Grow", text: "Hosting, improvements and support keep the system earning its keep." },
] as const;

export const engagements = [
  {
    id: "focused",
    name: "Focused build",
    audience: "For a defined need",
    summary: "A one-off website, funnel, dashboard or consulting engagement with a clear scope and a clear finish.",
    included: [
      "A written scope before work starts",
      "Design and build of the agreed piece",
      "Handover notes in plain English",
      "A short support window after launch",
    ],
    priceLabel: "Get a quote",
    highlighted: false,
  },
  {
    id: "ongoing",
    name: "Build and ongoing support",
    audience: "The AuraRush way",
    summary: "A build followed by hosting, maintenance, improvements and IT support, so the system keeps pace with the business.",
    included: [
      "The initial website, funnel or dashboard",
      "Hosting, updates and security care",
      "A route for improvements after launch",
      "Direct contact with the people doing the work",
    ],
    priceLabel: "Get a quote",
    highlighted: true,
  },
  {
    id: "consulting",
    name: "Consulting engagement",
    audience: "For a clear decision",
    summary: "An audit, a roadmap or a tool choice, explained without jargon, so you can decide what to build next.",
    included: [
      "A look at the tools you already use",
      "A Now, Next, Later recommendation",
      "Plain-English notes you can share",
      "A follow-up conversation on the findings",
    ],
    priceLabel: "Get a quote",
    highlighted: false,
  },
] as const;

export const comparison = {
  columns: ["Focused build", "Build and support", "Consulting"],
  rows: [
    { label: "Best for", values: ["One defined piece of work", "A system you want looked after", "A decision before you build"] },
    { label: "What you get", values: ["Website, funnel, dashboard or advice", "The build plus care afterwards", "An audit, roadmap or tool choice"] },
    { label: "After launch", values: ["Handover and a short support window", "Hosting, updates and improvements", "A written recommendation"] },
    { label: "Who you speak to", values: ["The people doing the work", "The people doing the work", "The people doing the work"] },
    { label: "Commercials", values: ["Get a quote", "Get a quote", "Get a quote"] },
  ],
} as const;

export const howWeWorkFaqs = [
  {
    question: "Do I have to take ongoing support?",
    answer: "No. A focused build is a complete piece of work with a clear end. Ongoing support is there when you want the system looked after.",
  },
  {
    question: "When do I see a price?",
    answer: "After a short conversation about the scope. We do not publish day rates, and we do not start until the cost is agreed.",
  },
  {
    question: "Can you work with the website I already have?",
    answer: "Often, yes. We will say so plainly if a rebuild is the more sensible route.",
  },
  {
    question: "Who will I deal with?",
    answer: "You deal with the people doing the work. AuraRush is UK-based, and the contact address is admin@aurarush.org.",
  },
  {
    question: "What happens to my enquiry details?",
    answer: "We use them only to reply. The privacy notice explains what we keep and why. It is a draft until a qualified person reviews it.",
  },
] as const;

export const team = [
  { name: "Name to be confirmed", role: "Role to be confirmed" },
  { name: "Name to be confirmed", role: "Role to be confirmed" },
  { name: "Name to be confirmed", role: "Role to be confirmed" },
] as const;

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    path: "/privacy",
    sections: [
      {
        heading: "Who we are",
        body: "AuraRush is a UK-based IT services and IT consulting business. The contact address for privacy questions is admin@aurarush.org. The legal entity, company number and registered office will be added here before launch.",
      },
      {
        heading: "What the enquiry form collects",
        body: "If you write to us, we collect your name, email, business name, the kind of business you run, what you need, your message, and any phone number or website you choose to add. We also store a record of your cookie choice on your device.",
      },
      {
        heading: "Why we use it",
        body: "We use enquiry details to reply to you, because you asked us to. We do not sell personal information. We do not use it for unrelated marketing.",
      },
      {
        heading: "How long we keep it",
        body: "We keep enquiry records only for as long as we need them to respond and to keep a proper business record. A retention period will be confirmed before launch.",
      },
      {
        heading: "Your rights",
        body: "Under UK GDPR you can ask for a copy of your information, ask us to correct it, or ask us to delete it where the law allows. You can also complain to the Information Commissioner’s Office.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    path: "/cookies",
    sections: [
      {
        heading: "What we store",
        body: "AuraRush stores your cookie choice in local storage on your device. That choice is essential to remember whether you allowed third-party embeds. We do not set analytics cookies.",
      },
      {
        heading: "Third-party content",
        body: "A booking widget, map or video would load only after you choose Accept all or allow embeds. Until a booking link is added, no third-party embed is present.",
      },
      {
        heading: "How to change your mind",
        body: "Clear the saved site data for this website in your browser, then reload. The choice banner will appear again. This policy will be reviewed before launch.",
      },
    ],
  },
  terms: {
    title: "Terms",
    path: "/terms",
    sections: [
      {
        heading: "Using this website",
        body: "This website describes AuraRush’s services. A project starts only when scope and cost are agreed in writing. Nothing on these pages is a quote.",
      },
      {
        heading: "Intellectual property",
        body: "The AuraRush name and logo belong to AuraRush. You may not copy the mark. Project files are licensed on the terms of the agreement for that work.",
      },
      {
        heading: "Liability",
        body: "This draft does not limit or extend liability. A solicitor should confirm the wording, including any cap, before the site launches. Governing law is intended to be the law of England and Wales.",
      },
    ],
  },
} as const;
