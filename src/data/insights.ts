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
    readTime: "2 min read",
    excerpt: "Fix the stage costing you most before you add anything else.",
    blocks: [
      { type: "p", text: "Most businesses fix growth by doing more of what is most visible: more posts, more ads, a new website. It often fixes the wrong thing." },
      { type: "h2", text: "Three jobs, one order" },
      { type: "p", text: "A business needs people to find it (attention), to act once they arrive (conversion), and to pay and come back (monetisation). More attention into a weak conversion path only produces more lost enquiries." },
      { type: "quote", text: "More traffic into a leaking funnel is a more expensive leak." },
      { type: "h2", text: "Find the weak stage" },
      { type: "p", text: "Ask three questions. Do the right people know you exist? Do they take a clear next step? Do you follow up until the answer is yes or no? The first no is where to start." },
    ],
  },
  {
    slug: "what-makes-an-enquiry-form-convert",
    title: "What makes an enquiry form convert",
    stage: "conversion",
    date: "9 October 2026",
    dateIso: "2026-10-09",
    readTime: "2 min read",
    excerpt: "Ask for the next useful fact, and no more.",
    blocks: [
      { type: "p", text: "Most enquiry forms ask for everything at once, then hide the button below a paragraph nobody needed." },
      { type: "h2", text: "Ask only what changes your reply" },
      { type: "p", text: "If you only need a name, a way to reply and the service they want, stop there. A budget band can earn a place. A postal address usually does not." },
      { type: "quote", text: "The form should feel like the start of a conversation, not an application." },
      { type: "h2", text: "Say what happens next" },
      { type: "p", text: "“We reply within one working day” beats “we’ll be in touch”. Then test the form on a phone yourself." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
