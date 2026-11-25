export const SHOW_CLIENT_WORK = false;

export type WorkItem = {
  slug: string;
  title: string;
  sector: string;
  since: string;
  summary: string;
  tags: string[];
  serviceSlug: string;
  mock: "funnel" | "pt" | "salon" | "consulting";
  hue: string;
  challenge: string;
  whatWeDid: string;
  result: string;
  figures: { value: string; label: string }[];
  quote?: string;
  sample: boolean;
};

export const workItems: WorkItem[] = [
  {
    slug: "funnel-website",
    title: "A website that asks for the enquiry",
    sector: "Websites",
    since: "Sample build",
    summary: "A landing page and a three-step form, so a visitor can tell you what they need without hunting for a contact page.",
    tags: ["Design", "Build", "Forms", "Speed"],
    serviceSlug: "funnel-websites",
    mock: "funnel",
    hue: "#A23B8C",
    challenge: "Visitors arrive, look around, and leave without a clear way to ask for help. This sample shows that problem, not a real client.",
    whatWeDid: "The sample page leads with the offer and a short form. Each step asks for one thing, so the path is obvious on a phone.",
    result: "Illustrative only. A live build would be judged on qualified enquiries, which we will not invent here.",
    figures: [
      { value: "Sample", label: "One clear action" },
      { value: "Sample", label: "Three short steps" },
      { value: "Sample", label: "A path to reply" },
    ],
    sample: true,
  },
  {
    slug: "pt-dashboard",
    title: "Enquiries in one place for a trainer",
    sector: "Personal trainers",
    since: "Sample build",
    summary: "New leads from the funnel sit in one list, with a simple weekly view, so follow-up is not spread across apps.",
    tags: ["Dashboard", "Enquiries", "Clients", "Funnel"],
    serviceSlug: "pt-dashboards",
    mock: "pt",
    hue: "#F08A2A",
    challenge: "Messages arrive by form, text and social apps. This sample shows a single list. It is not a client’s data.",
    whatWeDid: "The sample dashboard counts new enquiries, lists recent leads and shows a simple week. Features stay general until a real brief confirms them.",
    result: "Illustrative only. We are not claiming less admin for a named trainer.",
    figures: [
      { value: "Sample", label: "New enquiries" },
      { value: "Sample", label: "One list" },
      { value: "Sample", label: "A weekly view" },
    ],
    sample: true,
  },
  {
    slug: "salon-dashboard",
    title: "Follow-ups beside the day",
    sector: "Salons",
    since: "Sample build",
    summary: "New enquiries, follow-up reminders and a day view, so a salon can see who still needs an answer.",
    tags: ["Dashboard", "Enquiries", "Follow-ups", "Funnel"],
    serviceSlug: "salon-dashboards",
    mock: "salon",
    hue: "#F5C518",
    challenge: "The diary is full of people who already booked. New enquiries are easier to miss. This sample is not a real salon.",
    whatWeDid: "The sample screen pairs a list of new enquiries with reminders and a day view. It does not pretend to be a till or a booking product.",
    result: "Illustrative only. A fuller diary is the aim, not a statistic we can show yet.",
    figures: [
      { value: "Sample", label: "New enquiries" },
      { value: "Sample", label: "Follow-ups" },
      { value: "Sample", label: "Day view" },
    ],
    sample: true,
  },
  {
    slug: "it-roadmap",
    title: "A roadmap in plain English",
    sector: "IT consulting",
    since: "Sample build",
    summary: "A Now, Next, Later board that turns a technology conversation into a sequence a business can actually follow.",
    tags: ["Audit", "Strategy", "Roadmap", "Tooling"],
    serviceSlug: "it-consulting",
    mock: "consulting",
    hue: "#3A82C0",
    challenge: "Tools accumulate. Nobody is sure what to fix first. This sample board is a teaching example, not a client audit.",
    whatWeDid: "The sample splits the work into now, next and later, with one line on each card so the order is easy to read aloud.",
    result: "Illustrative only. A real engagement ends with a written recommendation for that business.",
    figures: [
      { value: "Sample", label: "Now" },
      { value: "Sample", label: "Next" },
      { value: "Sample", label: "Later" },
    ],
    sample: true,
  },
];

export function getWork(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
