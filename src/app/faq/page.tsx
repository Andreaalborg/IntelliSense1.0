"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    name: "Generelt",
    faqs: [
      {
        question: "Hva gjør IntelliSense AI?",
        answer: "IntelliSense AI er et norsk digitalbyrå som hjelper bedrifter med å vokse gjennom skreddersydde digitale løsninger. Vi tilbyr tjenester som nettside-utvikling, SEO, digital markedsføring og merkevarebygging.",
      },
      {
        question: "Hvem er deres typiske kunder?",
        answer: "Vi jobber med bedrifter i alle størrelser, fra oppstartsbedrifter til etablerte selskaper. Våre kunder er ofte bedrifter som ønsker å styrke sin digitale tilstedeværelse og øke omsetningen gjennom digitale kanaler.",
      },
      {
        question: "Hvor lang tid tar det å lage en nettside?",
        answer: "Tidsrammen varierer basert på kompleksiteten. En standard nettside tar vanligvis 4-6 uker fra start til lansering. Større prosjekter kan ta 8-12 uker. Vi gir deg en detaljert tidsplan i starten av prosjektet.",
      },
    ],
  },
  {
    name: "Priser & Betaling",
    faqs: [
      {
        question: "Hva er inkludert i månedsprisen?",
        answer: "Månedsprisen dekker hosting, vedlikehold, sikkerhetsoppdateringer, backup og support. Du får også månedlige rapporter og kontinuerlig optimalisering av nettsiden din.",
      },
      {
        question: "Har dere bindingstid?",
        answer: "Nei, vi har ingen bindingstid. Du kan si opp når som helst med én måneds varsel. Vi tror på å levere verdi som gjør at kundene våre ønsker å bli.",
      },
      {
        question: "Kan jeg betale i avdrag?",
        answer: "Ja, vi tilbyr fleksible betalingsløsninger. Etableringskostnaden kan deles opp i månedlige avdrag uten ekstra kostnader. Kontakt oss for å diskutere alternativer.",
      },
      {
        question: "Hva skjer om jeg vil oppgradere pakken min?",
        answer: "Du kan oppgradere når som helst. Vi justerer prisen proporsjonalt og sørger for en sømløs overgang til den nye pakken.",
      },
    ],
  },
  {
    name: "Teknisk",
    faqs: [
      {
        question: "Eier jeg nettsiden min?",
        answer: "Ja, du eier alt innholdet på nettsiden. Hvis du velger å avslutte samarbeidet, kan du eksportere alt innholdet ditt og flytte det til en annen plattform.",
      },
      {
        question: "Hvilke teknologier bruker dere?",
        answer: "Vi bruker moderne teknologier som Next.js, React og Tailwind CSS for nettsider. For CRM og markedsføring integrerer vi med ledende plattformer som GoHighLevel, HubSpot og andre.",
      },
      {
        question: "Hvordan håndterer dere sikkerhet?",
        answer: "Sikkerhet er en prioritet. Alle nettsider har SSL-sertifikat, regelmessige sikkerhetsoppdateringer og daglige backups. Vi følger beste praksis for nettsikkerhet.",
      },
      {
        question: "Kan nettsiden integreres med andre systemer?",
        answer: "Ja, vi kan integrere med de fleste systemer via API-er. Dette inkluderer CRM-systemer, betalingsløsninger, booking-systemer og mer.",
      },
    ],
  },
  {
    name: "SEO & Markedsføring",
    faqs: [
      {
        question: "Hvor lang tid tar det før jeg ser resultater fra SEO?",
        answer: "SEO er en langsiktig strategi. Du vil typisk se de første resultatene etter 3-6 måneder, med betydelige forbedringer etter 6-12 måneder. Vi gir deg månedlige rapporter for å spore fremgangen.",
      },
      {
        question: "Inkluderer dere annonsebudsjett i prisen?",
        answer: "Nei, annonsebudsjettet kommer i tillegg til våre tjenester. Vi hjelper deg med å sette opp og optimalisere kampanjer, men du betaler annonsebudsjettet direkte til plattformene (Google, Facebook, etc.).",
      },
      {
        question: "Kan dere garantere førsteplass på Google?",
        answer: "Ingen seriøs SEO-aktør kan garantere førsteplass, da Google's algoritme tar hensyn til mange faktorer. Det vi kan garantere er at vi bruker beste praksis og arbeider kontinuerlig for å forbedre rangeringen din.",
      },
    ],
  },
  {
    name: "Support",
    faqs: [
      {
        question: "Hvordan kontakter jeg support?",
        answer: "Du kan kontakte oss via e-post, telefon eller chat. Premium-kunder har tilgang til prioritert support med garantert responstid på 2 timer i arbeidstiden.",
      },
      {
        question: "Hva er responstiden deres?",
        answer: "For standard support er responstiden innen 24 timer på hverdager. Premium-kunder får svar innen 2 timer i arbeidstiden.",
      },
      {
        question: "Kan jeg gjøre endringer på nettsiden selv?",
        answer: "Ja, vi setter opp et brukervennlig innholdsstyringssystem (CMS) hvor du enkelt kan oppdatere tekst, bilder og annet innhold. Vi gir også opplæring i systemet.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--foreground-muted)] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--foreground-muted)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Generelt");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = searchQuery
    ? faqCategories.flatMap((cat) =>
        cat.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : faqCategories.find((cat) => cat.name === activeCategory)?.faqs || [];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Ofte Stilte Spørsmål
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hvordan kan vi{" "}
              <span className="gradient-text-warm">hjelpe deg?</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed mb-10">
              Finn svar på de vanligste spørsmålene våre. Finner du ikke det du leter etter? 
              Ta gjerne kontakt med oss.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
              <input
                type="text"
                placeholder="Søk etter spørsmål..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white"
                      : "bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--primary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          <motion.div
            key={searchQuery || activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] p-8"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[var(--foreground-muted)] mb-4">
                  Ingen resultater funnet for &ldquo;{searchQuery}&rdquo;
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[var(--primary)] font-medium"
                >
                  Nullstill søk
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fant du ikke svaret du lette etter?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Vi er her for å hjelpe. Ta kontakt med oss så svarer vi på alle dine spørsmål.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
            >
              Kontakt Oss
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

