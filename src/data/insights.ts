export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateIso: string;
  readTime: string;
  excerpt: string;
  blocks: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "what-makes-a-website-enquiry-form-convert",
    title: "What makes a website enquiry form convert",
    category: "Funnels",
    date: "12 October 2026",
    dateIso: "2026-10-12",
    readTime: "5 min read",
    excerpt: "A form converts when it asks for the next useful fact, and no more, at the moment someone is ready to talk.",
    blocks: [
      { type: "p", text: "Most enquiry forms fail for a dull reason. They ask for everything at once, then hide the button below a paragraph nobody needed." },
      { type: "h2", text: "One job for the page" },
      { type: "p", text: "Decide what a good enquiry looks like before you add fields. If you only need a name, a way to reply, and the service they want, stop there." },
      { type: "p", text: "Extra questions earn a place when the answer changes your reply. A budget band can do that. A postal address usually does not." },
      { type: "quote", text: "The form should feel like the start of a conversation, not an application." },
      { type: "h2", text: "Order matters on a phone" },
      { type: "p", text: "Put the easiest answer first. A short first step is more likely to be finished than a long form that starts with “tell us about your project”." },
      { type: "h3", text: "Say what happens next" },
      { type: "p", text: "Tell people when you will reply and where the message goes. A vague “we’ll be in touch” is weaker than “we reply within one working day”." },
      { type: "p", text: "Then test it yourself on a phone. If you hesitate, a customer will leave." },
    ],
  },
  {
    slug: "why-personal-trainers-need-more-than-a-booking-link",
    title: "Why personal trainers need more than a booking link",
    category: "Dashboards",
    date: "28 September 2026",
    dateIso: "2026-09-28",
    readTime: "6 min read",
    excerpt: "A booking link is useful once someone is ready. It does not replace a way to catch, qualify and follow up the people who are not there yet.",
    blocks: [
      { type: "p", text: "A booking link assumes the person already knows they want a session with you. Many visitors are earlier than that. They want to know if you train people like them." },
      { type: "h2", text: "The gap before the diary" },
      { type: "p", text: "That gap is where enquiries get lost. A message on Instagram, a note in email, and a half-finished form are three lists. None of them is the working day." },
      { type: "quote", text: "The diary shows who is booked. It does not show who is still waiting for an answer." },
      { type: "h3", text: "What a small dashboard is for" },
      { type: "p", text: "A simple dashboard is a list of new enquiries from the same funnel as the website. You can see who to reply to without opening four apps." },
      { type: "p", text: "It does not need to replace your session notes or your payment tool on day one. It needs to stop leads going quiet." },
      { type: "h2", text: "Start with the reply" },
      { type: "p", text: "Write down the three questions you ask before you offer a place. Put those on the form. Let the answers land in one list. That is enough to judge whether a dashboard is worth building." },
    ],
  },
  {
    slug: "it-consulting-for-small-businesses-where-to-start",
    title: "IT consulting for small businesses: where to start",
    category: "IT consulting",
    date: "9 September 2026",
    dateIso: "2026-09-09",
    readTime: "5 min read",
    excerpt: "Start with the decision you are stuck on, not with a tour of every tool on the market.",
    blocks: [
      { type: "p", text: "Small businesses rarely need a strategy document. They need to know what to fix first, what can wait, and what to leave alone." },
      { type: "h2", text: "Name the decision" },
      { type: "p", text: "“Should we rebuild the website?” is a decision. “We should modernise our stack” is not. The first one can be answered. The second one grows meetings." },
      { type: "p", text: "Write the decision in a sentence, then list the tools that touch it. That is the audit. It is shorter than people expect." },
      { type: "quote", text: "A useful roadmap fits on one page and can be read aloud." },
      { type: "h2", text: "Now, next, later" },
      { type: "h3", text: "Now is what is costing enquiries or time this month" },
      { type: "p", text: "Next is what you will do once that is steady. Later is the idea that can wait without harm. If everything is now, the list is not finished." },
      { type: "p", text: "Ask whoever advises you to explain the recommendation without product names first. If the reason is clear, the tool choice can follow." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
