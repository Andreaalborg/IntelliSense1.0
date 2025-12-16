"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
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

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--secondary)] opacity-[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Våre Pakker
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Investér i{" "}
            <span className="gradient-text-warm">din vekst</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            Transparente priser uten skjulte kostnader. 
            Velg pakken som passer din bedrift best.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  : "bg-[var(--background)] border border-[var(--border)]"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Anbefalt
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.setupPrice}</span>
                  <span className="text-[var(--foreground-muted)]">kr</span>
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  etablering + <span className="text-[var(--foreground)]">{plan.monthlyPrice} kr</span>/mnd
                </p>
              </div>

              {/* Features */}
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

              {/* CTA Button */}
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
        </div>

        {/* Bottom note */}
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
  );
}

