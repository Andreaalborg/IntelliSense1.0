"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfekt for nye bedrifter og frilansere som vil komme i gang.",
    setupPrice: "9 900",
    monthlyPrice: "990",
    features: [
      "Profesjonell nettside (1-5 sider)",
      "Responsivt design",
      "Grunnleggende SEO-oppsett",
      "Kontaktskjema",
      "Google Analytics",
      "SSL-sertifikat inkludert",
      "Hosting inkludert",
      "E-post support",
    ],
    highlighted: false,
    cta: "Kom i Gang",
  },
  {
    name: "Vekst",
    description: "For etablerte bedrifter som vil vokse digitalt.",
    setupPrice: "19 900",
    monthlyPrice: "1 990",
    features: [
      "Alt i Starter, pluss:",
      "Nettside opptil 10 sider",
      "SEO-optimalisering",
      "CRM-integrasjon",
      "Månedlig rapportering",
      "Raskere support",
      "Innholdsoppdateringer",
      "Konverteringsoptimalisering",
    ],
    highlighted: true,
    cta: "Mest Populær",
  },
  {
    name: "Premium",
    description: "Skreddersydd løsning med personlig oppfølging.",
    setupPrice: "39 900",
    monthlyPrice: "3 990",
    features: [
      "Alt i Vekst, pluss:",
      "Ubegrenset antall sider",
      "Skreddersydd design",
      "Markedsføringsstrategi",
      "Dedikert kontaktperson",
      "Ukentlig oppfølging",
      "Prioritert support",
      "Videomøter inkludert",
    ],
    highlighted: false,
    cta: "Kontakt Oss",
  },
];

const faqs = [
  {
    question: "Hva er inkludert i månedsprisen?",
    answer: "Månedsprisen dekker hosting, vedlikehold, sikkerhetsoppdateringer, backup og support. Du får også månedlige rapporter og kontinuerlig optimalisering.",
  },
  {
    question: "Kan jeg bytte pakke senere?",
    answer: "Ja, du kan oppgradere eller nedgradere pakken din når som helst. Vi tilpasser løsningen etter dine behov.",
  },
  {
    question: "Hvor lang er bindingstiden?",
    answer: "Vi har ingen bindingstid. Du kan si opp når som helst med én måneds varsel.",
  },
  {
    question: "Hva skjer etter at nettsiden er ferdig?",
    answer: "Vi fortsetter å støtte deg med vedlikehold, oppdateringer og optimalisering. Du eier alt innholdet og kan eksportere det når som helst.",
  },
];

export default function Priser() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--secondary)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Våre Pakker
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparente priser,{" "}
              <span className="gradient-text-warm">ingen overraskelser</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
              Velg pakken som passer din bedrift best. Alle priser inkluderer 
              full support og vedlikehold.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[var(--primary)]/10 to-[var(--background)] border-2 border-[var(--primary)]/30"
                    : "bg-[var(--background-secondary)] border border-[var(--border)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Anbefalt
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{plan.setupPrice}</span>
                    <span className="text-[var(--foreground-muted)]">kr</span>
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    etablering + <span className="text-[var(--foreground)]">{plan.monthlyPrice} kr</span>/mnd
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[var(--primary)]" />
                      </div>
                      <span className="text-sm text-[var(--foreground-muted)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:shadow-lg hover:shadow-[var(--primary)]/25"
                      : "bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}

            {/* Custom/Egendefinert Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl p-8 bg-[var(--background-secondary)] border border-dashed border-[var(--border)] hover:border-[var(--primary)] transition-colors"
            >
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Egendefinert</h3>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    Har du spesielle behov? Vi skreddersyr en løsning for deg.
                  </p>
                </div>

                <div className="flex-grow flex items-center justify-center mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 flex items-center justify-center">
                    <MessageSquare className="w-10 h-10 text-[var(--primary)]" />
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3 text-sm text-[var(--foreground-muted)]">
                    <li>• Større prosjekter</li>
                    <li>• Spesielle integrasjoner</li>
                    <li>• Unike krav</li>
                    <li>• Fleksibel prising</li>
                  </ul>
                </div>

                <Link
                  href="/kontakt"
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-full font-semibold bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] transition-all duration-300 mt-auto"
                >
                  La oss snakke
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--foreground-muted)] mt-12"
          >
            Alle priser er eks. mva. Skreddersydde løsninger tilgjengelig på forespørsel.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Ofte Stilte Spørsmål
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Har du spørsmål om prisene?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-[var(--foreground-muted)]">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[var(--foreground-muted)] mb-4">
              Fant du ikke svaret du lette etter?
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-4 transition-all duration-300"
            >
              Ta kontakt med oss
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

