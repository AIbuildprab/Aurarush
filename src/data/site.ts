export const site = {
  name: "AuraRush",
  email: "admin@aurarush.org",
  location: "United Kingdom",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurarush.org",
  tagline: "AI automation for growth",
  description: "AI automation for growth: systems that win attention, convert it and turn it into revenue, with people reviewing the work.",
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

export const navigation = {
  primary: [
    { href: "/framework", label: "Framework" },
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/how-we-work", label: "How we work" },
    { href: "/trust", label: "Trust and AI use" },
    { href: "/contact", label: "Contact" },
  ],
  tools: [{ href: "/funnel-check", label: "Funnel check" }],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export const stageOptions = [
  { value: "attention", label: "Attention: too few of the right people find us" },
  { value: "conversion", label: "Conversion: people visit but do not enquire" },
  { value: "monetisation", label: "Monetisation: enquiries do not become revenue" },
  { value: "not-sure", label: "I am not sure" },
] as const;

export const interests = [
  "Outbound automation",
  "Content and search automation",
  "Paid media automation",
  "Website or funnel",
  "Client system or dashboard",
  "Growth audit",
  "Managed support",
  "Not sure yet",
] as const;

export const timelines = ["As soon as possible", "Within three months", "Later this year", "Just exploring"] as const;

export const commitments = [
  { title: "A person reviews the work", text: "AI drafts and sorts. A named person checks it first." },
  { title: "You approve what speaks for you", text: "Nothing goes out in your name unapproved." },
  { title: "Your data stays yours", text: "Accounts, lists and content stay in your name." },
  { title: "Scope and cost in writing", text: "Agreed before any work starts." },
] as const;

export const howWeWork = [
  { title: "Discover", text: "How people find you, and where enquiries get lost." },
  { title: "Design", text: "A written scope: what is built, who does what, the cost." },
  { title: "Build", text: "A pilot with every output reviewed." },
  { title: "Run", text: "Looked after and improved on a regular rhythm." },
] as const;

export const engagements = [
  { name: "Growth audit", text: "A review and a written roadmap." },
  { name: "Focused build", text: "One system, with a clear scope and finish." },
  { name: "Build and managed support", text: "A build, then hosting and improvements." },
] as const;

export const howWeWorkFaqs = [
  { question: "Do I have to take ongoing support?", answer: "No. A focused build is complete in itself." },
  { question: "When do I see a price?", answer: "After a short conversation about scope, and before any work starts. We do not publish day rates." },
  { question: "Who will I deal with?", answer: "The people doing the work. We are UK-based: admin@aurarush.org." },
] as const;

export const team: readonly { name: string; role: string; bio: string }[] = [];

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    path: "/privacy",
    sections: [
      {
        heading: "Who we are",
        body: "AuraRush is a UK-based business that builds AI automation for growth. The contact address for privacy questions is admin@aurarush.org. The legal entity, company number and registered office will be added here before launch.",
      },
      {
        heading: "What the enquiry form collects",
        body: "If you write to us, we collect your name, email, company, the stage of growth you want help with, the kind of help you are interested in, your message, and any role, website or timeline you choose to add. We also store a record of your cookie choice on your device.",
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
        body: "A booking widget, map or video hosted by another company would load only after you choose Accept all or allow embeds. Until one is added, no third-party embed is present.",
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
