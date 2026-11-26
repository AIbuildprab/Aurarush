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
  summary: string;
  good: string;
  breaks: string;
  steps: { id: string; name: string; text: string }[];
};

export type Channel = {
  id: ChannelId;
  name: string;
  direction: "inbound" | "outbound";
  summary: string;
  primarySkill: string;
  aiRole: string[];
  serviceSlugs: string[];
  /** offered: we build it. advisory: we advise and support, but do not build it as a core service. */
  status: "offered" | "advisory";
};

export const stages: Stage[] = [
  {
    id: "attention",
    name: "Attention",
    question: "Do the right people know you exist?",
    summary: "Every business needs a steady flow of the right people. Attention is where that flow starts, through one or more of seven channels.",
    good: "A small number of channels, run consistently, bringing in people who fit what you sell.",
    breaks: "Effort spread across too many channels, content that stops when the owner is busy, and traffic nobody follows up.",
    steps: [
      { id: "reach", name: "Reach", text: "Put what you do in front of the people who need it." },
      { id: "earn", name: "Earn interest", text: "Give them a reason to look closer and a way to do so." },
    ],
  },
  {
    id: "conversion",
    name: "Conversion",
    question: "Do they act once they arrive?",
    summary: "Attention only matters if people take a step: an enquiry, a booking, a reply. Conversion is the path from a visit to a conversation.",
    good: "One clear next step, a short form that asks only what changes your reply, and an answer that arrives quickly.",
    breaks: "Slow replies, forms that ask for everything, enquiries scattered across inboxes and messaging apps.",
    steps: [
      { id: "capture", name: "Capture", text: "Make the next step obvious and easy to take on a phone." },
      { id: "qualify", name: "Qualify", text: "Ask the few questions that tell you whether it is a fit." },
      { id: "respond", name: "Respond", text: "Reply quickly, in your own voice, with the right next step." },
    ],
  },
  {
    id: "monetisation",
    name: "Monetisation",
    question: "Do they pay, and come back?",
    summary: "Revenue is the point of the system. Monetisation covers closing the sale, keeping the customer and measuring what each channel is worth.",
    good: "Follow-ups that do not rely on memory, repeat business that is planned, and numbers you trust when you decide where to spend time.",
    breaks: "Leads that go quiet, no view of which channel pays, and customers who are never asked back.",
    steps: [
      { id: "close", name: "Close", text: "Follow up until the answer is yes or a clear no." },
      { id: "retain", name: "Retain and expand", text: "Keep customers informed and bring them back at the right time." },
      { id: "measure", name: "Measure", text: "See what each channel brings in, so effort follows results." },
    ],
  },
];

export const channels: Channel[] = [
  {
    id: "organic-content",
    name: "Organic content",
    direction: "inbound",
    summary: "Posts, video and articles that build an audience over time without paying for reach.",
    primarySkill: "Content creation and video editing",
    aiRole: [
      "Turn one recording or article into posts, clips and newsletters",
      "Draft scripts and captions in your voice for you to approve",
      "Schedule and track publishing from one place",
    ],
    serviceSlugs: ["content-and-search-automation"],
    status: "offered",
  },
  {
    id: "search",
    name: "Search",
    direction: "inbound",
    summary: "Being found when someone searches for what you do.",
    primarySkill: "SEO",
    aiRole: [
      "Research the questions your customers search for",
      "Draft briefs and on-page fixes for an editor to review",
      "Report on what is rising and what is slipping",
    ],
    serviceSlugs: ["content-and-search-automation", "websites-and-funnels"],
    status: "offered",
  },
  {
    id: "product-led",
    name: "Product-led",
    direction: "inbound",
    summary: "The product itself brings in and converts customers, through a free tool, a trial or a useful feature.",
    primarySkill: "Product building",
    aiRole: [
      "Guide new users to their first useful result",
      "Trigger helpful follow-ups from what a user does",
      "Surface the users most likely to want more",
    ],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
  {
    id: "paid-advertising",
    name: "Paid advertising",
    direction: "inbound",
    summary: "Buying attention directly. It sits between inbound and outbound, because you pay to reach people who did not ask to hear from you.",
    primarySkill: "Media buying",
    aiRole: [
      "Produce creative variations for testing",
      "Report spend and results across platforms in one view",
      "Flag budget that is drifting from what works",
    ],
    serviceSlugs: ["paid-media-automation"],
    status: "offered",
  },
  {
    id: "borrowed-audiences",
    name: "Borrowed audiences",
    direction: "inbound",
    summary: "Reaching customers through someone else's audience: partners, podcasts, newsletters and communities.",
    primarySkill: "Partnerships and sales",
    aiRole: [
      "Research who already speaks to your customers",
      "Draft introductions for you to personalise and send",
      "Track conversations with each partner",
    ],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
  {
    id: "outbound",
    name: "Outbound",
    direction: "outbound",
    summary: "Going to the customer: email and social outreach to businesses you have chosen.",
    primarySkill: "Email and social outreach, and sales",
    aiRole: [
      "Build a clean prospect list from a profile you agree",
      "Draft a relevant first line for each person, for human review",
      "Run the sequence, sort replies and update your records",
    ],
    serviceSlugs: ["outbound-automation"],
    status: "offered",
  },
  {
    id: "offline",
    name: "Offline",
    direction: "outbound",
    summary: "Meeting people in person: events, networking and local introductions.",
    primarySkill: "Networking and sales",
    aiRole: [
      "Capture contacts and notes from events",
      "Send timely follow-ups after each meeting",
      "Remind you who to call and when",
    ],
    serviceSlugs: ["growth-audit-and-roadmap"],
    status: "advisory",
  },
];

export const directionCopy = {
  inbound: {
    name: "Inbound",
    text: "Traffic comes to the business. You publish, rank or advertise, and people arrive.",
  },
  outbound: {
    name: "Outbound",
    text: "The business goes to the traffic. You choose who to reach and start the conversation.",
  },
} as const;

export function getChannel(id: string) {
  return channels.find((channel) => channel.id === id);
}

export function getStage(id: string) {
  return stages.find((stage) => stage.id === id);
}
