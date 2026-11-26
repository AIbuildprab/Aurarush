export type StageId = "attention" | "conversion" | "monetisation";
export type ChannelId =
  | "organic-content"
  | "search"
  | "product-led"
  | "paid-advertising"
  | "borrowed-audiences"
  | "outbound"
  | "offline";

export type Stage = {
  id: StageId;
  name: string;
  question: string;
  line: string;
  /** Attention has none: its parts are the seven channels. */
  steps: { id: string; name: string; text: string }[];
};

export type Channel = {
  id: ChannelId;
  name: string;
  direction: "inbound" | "outbound";
  summary: string;
  primarySkill: string;
  weDo: string[];
  serviceSlugs: string[];
  /** offered: we build it. advisory: we advise and support, not a core build. */
  status: "offered" | "advisory";
};

export const stages: Stage[] = [
  {
    id: "attention",
    name: "Attention",
    question: "Do the right people know you exist?",
    line: "Get the right people to notice you.",
    steps: [],
  },
  {
    id: "conversion",
    name: "Conversion",
    question: "Do they act once they arrive?",
    line: "Turn a visit into a conversation.",
    steps: [
      { id: "capture", name: "Capture", text: "One clear next step." },
      { id: "qualify", name: "Qualify", text: "Ask only what changes your reply." },
      { id: "respond", name: "Respond", text: "Reply fast, in your voice." },
    ],
  },
  {
    id: "monetisation",
    name: "Monetisation",
    question: "Do they pay, and come back?",
    line: "Turn conversations into revenue and repeat business.",
    steps: [
      { id: "close", name: "Close", text: "Follow up to a clear yes or no." },
      { id: "retain", name: "Retain and expand", text: "Bring customers back." },
      { id: "measure", name: "Measure", text: "Know what each channel earns." },
    ],
  },
];

export const channels: Channel[] = [
  {
    id: "organic-content",
    name: "Organic content",
    direction: "inbound",
    summary: "Posts, video and articles that build an audience.",
    primarySkill: "Content creation and video editing",
    weDo: ["Plan and repurpose content from one recording", "Schedule and publish with your approval"],
    serviceSlugs: ["content-and-seo"],
    status: "offered",
  },
  {
    id: "search",
    name: "Search",
    direction: "inbound",
    summary: "Being found when people search.",
    primarySkill: "SEO",
    weDo: ["Find the questions customers ask", "Fix pages and write briefs"],
    serviceSlugs: ["content-and-seo", "websites-and-funnels"],
    status: "offered",
  },
  {
    id: "product-led",
    name: "Product-led",
    direction: "inbound",
    summary: "The product itself brings customers in.",
    primarySkill: "Product building",
    weDo: ["Shape onboarding around first value", "Set up follow-ups from usage"],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
  {
    id: "paid-advertising",
    name: "Paid advertising",
    direction: "inbound",
    summary: "Buying attention directly. Sits between inbound and outbound.",
    primarySkill: "Media buying",
    weDo: ["Build and test creative", "Report spend and results in one view"],
    serviceSlugs: ["paid-media"],
    status: "offered",
  },
  {
    id: "borrowed-audiences",
    name: "Borrowed audiences",
    direction: "inbound",
    summary: "Reaching customers through someone else's audience.",
    primarySkill: "Partnerships and sales",
    weDo: ["Find partner audiences", "Write introductions for you to send"],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
  {
    id: "outbound",
    name: "Outbound",
    direction: "outbound",
    summary: "Email and social outreach to chosen businesses.",
    primarySkill: "Email and social outreach, sales",
    weDo: ["Build prospect lists from a profile", "Write first lines, sort replies"],
    serviceSlugs: ["outbound-outreach"],
    status: "offered",
  },
  {
    id: "offline",
    name: "Offline",
    direction: "outbound",
    summary: "Events, networking and local introductions.",
    primarySkill: "Networking and sales",
    weDo: ["Log contacts and notes", "Send timely follow-ups"],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
];

export const directionCopy = {
  inbound: { name: "Inbound", text: "Traffic comes to you." },
  outbound: { name: "Outbound", text: "You go to the traffic." },
} as const;

export function getChannel(id: string) {
  return channels.find((channel) => channel.id === id);
}

export function getStage(id: string) {
  return stages.find((stage) => stage.id === id);
}
