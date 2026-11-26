export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  readTime: string;
  excerpt: string;
  blocks: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "one-clear-button",
    title: "Why your website needs one clear button",
    date: "12 November 2026",
    dateIso: "2026-11-12",
    readTime: "2 min read",
    excerpt: "People leave when they do not know what to do next.",
    blocks: [
      { type: "p", text: "Most websites ask visitors to do five things at once. Call us, email us, follow us, read our blog, fill in a form. So they do none of them." },
      { type: "h2", text: "Pick the one thing you want" },
      { type: "p", text: "Decide what a good visit looks like. Usually it is a phone call or an enquiry. Make that the biggest, clearest button on every page." },
      { type: "quote", text: "If a visitor has to think about what to do next, you have already lost some of them." },
      { type: "h2", text: "Check it on your phone" },
      { type: "p", text: "Most people will see your site on a phone. Hold yours at arm's length. If you cannot see the button in two seconds, change it." },
    ],
  },
  {
    slug: "what-makes-an-enquiry-form-convert",
    title: "What makes an enquiry form convert",
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
