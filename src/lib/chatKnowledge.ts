/** FAQ + lead intents for the site chat widget (Norwegian). */

export type ChatFaq = { question: string; answer: string; keywords: string[] };

export const CHAT_FAQS: ChatFaq[] = [
  {
    question: "Hva gjør IntelliSense?",
    answer:
      "Vi er et norsk digitalbyrå som hjelper deg med nettsider, SEO, markedsføring/Ads, analyse, merkevare og support. Book en gratis konsultasjon så finner vi riktig løsning for deg.",
    keywords: ["hva", "gjør", "intellisense", "hvem", "er dere", "byrå", "tjenester"],
  },
  {
    question: "Hva er prisene deres?",
    answer:
      "Alle priser er eks. mva:\n• Starter: 9 900 kr etablering + 990 kr/mnd (1–5 sider)\n• Vekst (anbefalt): 19 900 kr + 1 990 kr/mnd (opptil 10 sider + SEO)\n• Premium: 39 900 kr + 3 990 kr/mnd\n• Egendefinert: book en prat så skreddersyr vi.",
    keywords: ["pris", "koster", "kostnad", "betaling", "pakke", "måned", "starter", "vekst", "premium", "etablering"],
  },
  {
    question: "Hvor lang tid tar en nettside?",
    answer:
      "Typisk 2 uker for en standard nettside. Mer komplekse prosjekter tar 3–4 uker. Vi avtaler konkret tidsplan før oppstart.",
    keywords: ["tid", "hvor lang", "uker", "levering", "nettside", "ferdig", "leveringstid"],
  },
  {
    question: "Hva er inkludert?",
    answer:
      "Alle pakker inkluderer responsivt design, SEO-grunnlag, kontaktskjema, Google Analytics, SSL-sertifikat og hosting. Book en gratis konsultasjon for detaljer.",
    keywords: ["inkludert", "inkluderer", "med", "inneholder", "design", "hosting", "ssl", "analytics"],
  },
  {
    question: "Hvilke tjenester tilbyr dere?",
    answer:
      "Vi tilbyr nettside, SEO, markedsføring/Ads, analyse, merkevare og support. Vil du vite mer om en spesifikk tjeneste? Book gjerne en gratis konsultasjon.",
    keywords: ["tjeneste", "tilbyr", "service", "seo", "ads", "markedsføring", "merkevare", "analyse"],
  },
  {
    question: "Har dere bindingstid?",
    answer:
      "Nei, ingen bindingstid. Du kan si opp med én måneds varsel. Vi stoler på at resultatet gjør at du vil bli.",
    keywords: ["binding", "si opp", "kontrakt", "varsel", "bindingstid"],
  },
  {
    question: "Eier jeg nettsiden?",
    answer:
      "Ja, du eier innholdet. Avslutter du samarbeidet, kan du eksportere alt og ta det med videre.",
    keywords: ["eier", "eie", "innhold", "flytte", "eksport", "mine"],
  },
  {
    question: "SEO — når ser jeg resultater?",
    answer:
      "Første signaler ofte etter 3–6 måneder, tydeligere etter 6–12. Vi rapporterer månedlig. Vil du vite mer? Book en gratis konsultasjon.",
    keywords: ["seo", "google", "rangering", "synlighet", "organisk", "resultat"],
  },
  {
    question: "Hvordan kontakter jeg dere?",
    answer:
      "Du når oss på andreaalborg@intellisenseai.no eller +47 467 44 670. Vi svarer innen 24 timer på hverdager.",
    keywords: ["kontakt", "e-post", "epost", "telefon", "ring", "mail", "nå dere"],
  },
  {
    question: "Support og responstid",
    answer:
      "Vi svarer innen 24 timer på hverdager. Du når oss på e-post, telefon eller denne chatten.",
    keywords: ["support", "hjelp", "responstid", "svar", "hverdager"],
  },
];

export type QuickAction = {
  id: string;
  label: string;
  userText: string;
};

export const QUICK_ACTIONS: QuickAction[] = [
  { id: "price", label: "Priser", userText: "Hva er prisene deres?" },
  { id: "time", label: "Leveringstid", userText: "Hvor lang tid tar en nettside?" },
  { id: "included", label: "Hva er inkludert?", userText: "Hva er inkludert?" },
  { id: "book", label: "Book konsultasjon", userText: "Jeg vil booke en gratis konsultasjon" },
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
  "mailto:andreaalborg@intellisenseai.no?subject=Foresp%C3%B8rsel%20fra%20chat&body=Kilde%3A%20Chatbot";

export const BOOKING_CTA_TEXT =
  "Flott — book en gratis, uforpliktende konsultasjon her:";
