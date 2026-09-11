/** FAQ + lead intents for the site chat widget (Norwegian). */

export type ChatFaq = { question: string; answer: string; keywords: string[] };

export const CHAT_FAQS: ChatFaq[] = [
  {
    question: "Hva gjør IntelliSense?",
    answer:
      "Vi er et norsk digitalbyrå som hjelper bedrifter med nettsider, SEO, markedsføring og merkevare. Målet er konkret vekst — ikke bare «fine sider».",
    keywords: ["hva", "gjør", "intellisense", "hvem", "er dere", "byrå"],
  },
  {
    question: "Hvor lang tid tar en nettside?",
    answer:
      "En standard nettside tar vanligvis 4–6 uker. Større prosjekter 8–12 uker. Vi lager en konkret tidsplan før vi starter.",
    keywords: ["tid", "hvor lang", "uker", "levering", "nettside", "ferdig"],
  },
  {
    question: "Hva koster det?",
    answer:
      "Pris avhenger av omfang. Vi har pakker uten bindingstid, og etablering kan ofte deles i avdrag. Best er en kort prat så vi treffer riktig nivå — ikke et generisk prislapp-gjett.",
    keywords: ["pris", "koster", "kostnad", "betaling", "pakke", "måned", "avdrag"],
  },
  {
    question: "Har dere bindingstid?",
    answer:
      "Nei. Du kan si opp med én måneds varsel. Vi stoler på at resultatet gjør at du vil bli.",
    keywords: ["binding", "si opp", "kontrakt", "varsel"],
  },
  {
    question: "Eier jeg nettsiden?",
    answer:
      "Ja. Du eier innholdet. Avslutter du, kan du eksportere og ta det med videre.",
    keywords: ["eier", "eie", "innhold", "flytte", "eksport"],
  },
  {
    question: "SEO — når ser jeg resultater?",
    answer:
      "Første signaler ofte etter 3–6 måneder, tydeligere etter 6–12. Vi rapporterer månedlig. Ingen garanterer «#1 på Google» — vi jobber etter beste praksis.",
    keywords: ["seo", "google", "rangering", "synlighet", "organisk"],
  },
  {
    question: "Support og responstid",
    answer:
      "Standard: svar innen 24 timer på hverdager. Premium: innen 2 timer i arbeidstid. Du når oss på e-post, telefon eller denne chatten.",
    keywords: ["support", "hjelp", "responstid", "svar", "telefon"],
  },
  {
    question: "Integrasjoner",
    answer:
      "Ja — CRM, betaling, booking m.m. via API. Vi bruker bl.a. Next.js/React og kobler mot systemer som HubSpot og GoHighLevel.",
    keywords: ["integr", "api", "crm", "booking", "hubspot", "stripe"],
  },
];

export type QuickAction = {
  id: string;
  label: string;
  userText: string;
};

export const QUICK_ACTIONS: QuickAction[] = [
  { id: "price", label: "Priser", userText: "Hva koster det?" },
  { id: "web", label: "Nettside", userText: "Hvor lang tid tar en nettside?" },
  { id: "seo", label: "SEO", userText: "Når ser jeg resultater fra SEO?" },
  { id: "book", label: "Book samtale", userText: "Jeg vil booke en gratis konsultasjon" },
];

export function matchFaq(input: string): ChatFaq | null {
  const q = input.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  let best: { faq: ChatFaq; score: number } | null = null;
  for (const faq of CHAT_FAQS) {
    let score = 0;
    for (const kw of faq.keywords) {
      const k = kw.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
      if (q.includes(k)) score += k.length > 4 ? 2 : 1;
    }
    if (!best || score > best.score) best = { faq, score };
  }
  return best && best.score >= 2 ? best.faq : null;
}

export const BOOKING_URL = "/kontakt";
export const PHONE_HREF = "tel:+4746744670";
export const MAIL_HREF =
  "mailto:andreaalborg@intellisenseai.no?subject=Foresp%C3%B8rsel%20fra%20chat";
