import type { StageId } from "@/data/framework";

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  stage: StageId;
  date: string;
  dateIso: string;
  readTime: string;
  excerpt: string;
  blocks: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "start-with-the-weakest-stage",
    title: "Start with the weakest stage of your funnel",
    stage: "attention",
    date: "12 November 2026",
    dateIso: "2026-11-12",
    readTime: "5 min read",
    excerpt: "Growth has three jobs: win attention, convert it, and monetise it. Fix the one that is costing most before you add anything else.",
    blocks: [
      { type: "p", text: "Most businesses try to fix growth by doing more of whatever is most visible. More posts, more ads, a new website. It feels productive, and it often fixes the wrong thing." },
      { type: "h2", text: "Three jobs, one order" },
      { type: "p", text: "Every business needs people to find it, to act once they arrive, and to pay and come back. We call these attention, conversion and monetisation. They depend on each other. More attention into a weak conversion path only produces more lost enquiries." },
      { type: "quote", text: "More traffic into a leaking funnel is a more expensive leak." },
      { type: "h2", text: "How to find the weak stage" },
      { type: "p", text: "Ask three plain questions. Do the right people know you exist? When they arrive, do they take a clear next step? When they enquire, do you reply quickly and follow up until the answer is yes or no?" },
      { type: "p", text: "The first question you answer no to is usually where to start. Automation is most useful once you know which stage it is helping." },
    ],
  },
  {
    slug: "seven-ways-to-get-attention",
    title: "Seven ways to win attention, and which suit a small business",
    stage: "attention",
    date: "26 October 2026",
    dateIso: "2026-10-26",
    readTime: "6 min read",
    excerpt: "Organic content, search, product-led, paid, borrowed audiences, outbound and offline. Most businesses should pick one or two.",
    blocks: [
      { type: "p", text: "There are only a handful of ways to get in front of customers. Anything else is a repackaging of these seven." },
      { type: "h2", text: "Inbound and outbound" },
      { type: "p", text: "Inbound channels bring traffic to the business: organic content, search, product-led growth, paid advertising and borrowed audiences. Outbound channels send the business to the traffic: outreach and offline networking." },
      { type: "p", text: "Paid advertising sits in a grey area, because you are paying to reach people who did not ask to hear from you." },
      { type: "h3", text: "Choose by how you sell" },
      { type: "p", text: "A business that sells to other businesses can often start with outbound, because you can name who you want to reach. A business that depends on local trust usually benefits from search and reviews first." },
      { type: "quote", text: "Pick one channel, run it consistently, and add another only when the first is working." },
    ],
  },
  {
    slug: "what-makes-an-enquiry-form-convert",
    title: "What makes an enquiry form convert",
    stage: "conversion",
    date: "9 October 2026",
    dateIso: "2026-10-09",
    readTime: "5 min read",
    excerpt: "A form converts when it asks for the next useful fact, and no more, at the moment someone is ready to talk.",
    blocks: [
      { type: "p", text: "Most enquiry forms fail for a dull reason. They ask for everything at once, then hide the button below a paragraph nobody needed." },
      { type: "h2", text: "One job for the page" },
      { type: "p", text: "Decide what a good enquiry looks like before you add fields. If you only need a name, a way to reply, and the service they want, stop there." },
      { type: "p", text: "Extra questions earn a place when the answer changes your reply. A budget band can do that. A postal address usually does not." },
      { type: "quote", text: "The form should feel like the start of a conversation, not an application." },
      { type: "h3", text: "Say what happens next" },
      { type: "p", text: "Tell people when you will reply and where the message goes. A vague “we’ll be in touch” is weaker than “we reply within one working day”." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
