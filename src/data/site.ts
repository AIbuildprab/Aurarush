export const site = {
  name: "AuraRush",
  email: "admin@aurarush.org",
  location: "United Kingdom",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurarush.org",
  tagline: "AI automation for growth",
  description:
    "AuraRush builds AI automation for growth: systems that win attention, convert it into enquiries and turn those into revenue, with people reviewing the work.",
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
  { value: "attention", label: "Attention: not enough of the right people find us" },
  { value: "conversion", label: "Conversion: people arrive but do not enquire" },
  { value: "monetisation", label: "Monetisation: enquiries do not turn into repeat revenue" },
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
  { title: "A person reviews the work", text: "AI drafts and sorts. A named person checks what is sent, published or built before it reaches your customers." },
  { title: "You approve what speaks for you", text: "Messages, posts and pages go out only after you have agreed the approach and seen the output." },
  { title: "Your data stays yours", text: "Accounts, lists and content remain in your name. We say where data is stored and who can see it." },
  { title: "Scope and cost are written down", text: "You see what will be built and what it costs before any work starts." },
] as const;

export const howWeWork = [
  { title: "Discover", text: "We learn how people find you today, what happens when they arrive, and where enquiries get lost." },
  { title: "Design the system", text: "You receive a written scope: what will be built, what AI does, what a person does, and what it costs." },
  { title: "Build and test", text: "We build in small pieces, run a pilot with every output reviewed, and show you the result before it goes live." },
  { title: "Run and improve", text: "The system is looked after and adjusted on a regular rhythm, using what the results show." },
] as const;

export const engagements = [
  {
    id: "audit",
    name: "Growth audit",
    audience: "For a clear decision",
    summary: "A review of attention, conversion and monetisation, ending in a written roadmap.",
    included: ["A look at how you win and keep customers today", "A channel recommendation", "A Now, Next, Later roadmap", "A follow-up conversation"],
  },
  {
    id: "build",
    name: "Focused build",
    audience: "For a defined need",
    summary: "One system, such as an outreach workflow, a website or a dashboard, with a clear scope and finish.",
    included: ["A written scope before work starts", "Design, build and testing", "A pilot with human review", "Handover notes in plain English"],
  },
  {
    id: "support",
    name: "Build and managed support",
    audience: "For a system you want looked after",
    summary: "A build followed by hosting, monitoring and improvements on a regular rhythm.",
    included: ["The initial build", "Hosting, updates and security care", "A route for improvements", "A named contact"],
  },
] as const;

export const howWeWorkFaqs = [
  { question: "Do I have to take ongoing support?", answer: "No. A focused build is complete in itself. Managed support is there when you want the system looked after." },
  { question: "When do I see a price?", answer: "After a short conversation about scope. We do not publish day rates, and we do not start until the cost is agreed in writing." },
  { question: "Can you work with what I already have?", answer: "Often, yes. We will say plainly if a rebuild is the more sensible route." },
  { question: "Who will I deal with?", answer: `You deal with the people doing the work. AuraRush is UK-based, and the contact address is admin@aurarush.org.` },
  { question: "What happens to my enquiry details?", answer: "We use them only to reply. The privacy notice explains what we keep and why. It is a draft until a qualified person reviews it." },
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
