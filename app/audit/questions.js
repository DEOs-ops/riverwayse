export const AUDIT_QUESTIONS = [
  {
    dim: "D1",
    horizon: "H1",
    name: "Intent Signal Precision",
    question: "Do you know which stage of awareness most of your leads are in before they contact you?",
    options: [
      { label: "Not really — we treat most inbound the same way", score: 0 },
      { label: "We have a rough sense, not documented anywhere", score: 1 },
      { label: "Yes — it shapes how we message and follow up", score: 2 },
    ],
  },
  {
    dim: "D2",
    horizon: "H1",
    name: "Frictionless Conversion Architecture",
    question: "How many steps does a visitor take between landing on your site and taking your main action?",
    options: [
      { label: "Not sure / it's a few steps and some drop-off", score: 0 },
      { label: "Two steps, mostly clear", score: 1 },
      { label: "One clear step, no ambiguity", score: 2 },
    ],
  },
  {
    dim: "D3",
    horizon: "H1",
    name: "System 1 Activation",
    question: "Does your core message land emotionally before someone starts comparing you to alternatives?",
    options: [
      { label: "Our message is mostly features and specs", score: 0 },
      { label: "There's some emotional hook, inconsistently used", score: 1 },
      { label: "Yes — it's deliberate and consistent", score: 2 },
    ],
  },
  {
    dim: "D4",
    horizon: "H2",
    name: "Mental Availability Engineering",
    question: "If someone described your brand without naming it, would people still recognize it?",
    options: [
      { label: "No — nothing distinctive beyond the logo", score: 0 },
      { label: "Maybe one or two things", score: 1 },
      { label: "Yes — several distinctive, consistent signals", score: 2 },
    ],
  },
  {
    dim: "D5",
    horizon: "H2",
    name: "95% Content Architecture",
    question: "Do you publish anything genuinely useful for people who aren't ready to buy yet?",
    options: [
      { label: "Not really — most of our content asks for a sale", score: 0 },
      { label: "Occasionally, not on a system", score: 1 },
      { label: "Yes, consistently and on purpose", score: 2 },
    ],
  },
  {
    dim: "D6",
    horizon: "H2",
    name: "Shareability & Social Signal",
    question: "Does your content ever get shared or forwarded without you asking for it?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Regularly", score: 2 },
    ],
  },
  {
    dim: "D7",
    horizon: "H3",
    name: "Category Design Clarity",
    question: "Could a stranger, seeing only one piece of your marketing, name the category you're building in three seconds?",
    options: [
      { label: "No — we sound like everyone else in our space", score: 0 },
      { label: "Somewhat — depends which asset they see", score: 1 },
      { label: "Yes, clearly", score: 2 },
    ],
  },
  {
    dim: "D8",
    horizon: "H3",
    name: "Trust & Credibility Architecture",
    question: "Do you have named, verifiable proof (real clients, real numbers) visible before someone talks to sales?",
    options: [
      { label: "Not much beyond generic testimonials", score: 0 },
      { label: "Some, could be stronger", score: 1 },
      { label: "Yes — specific and verifiable", score: 2 },
    ],
  },
  {
    dim: "D9",
    horizon: "H3",
    name: "Temporal Orientation Balance",
    question: "Over the last quarter, roughly what share of your marketing effort built long-term brand vs. chased immediate sales?",
    options: [
      { label: "Almost all immediate sales activity", score: 0 },
      { label: "A mix, but skewed toward short-term", score: 1 },
      { label: "A deliberate balance of both", score: 2 },
    ],
  },
];

export const HORIZON_LABELS = {
  H1: "Capture",
  H2: "Creation",
  H3: "Category",
};
