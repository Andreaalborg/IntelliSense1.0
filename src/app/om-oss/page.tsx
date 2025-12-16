"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap, Users, Award, TrendingUp, Lightbulb, Shield } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Resultatorientert",
    description: "Alt vi gjør er fokusert på å levere målbare resultater for din bedrift.",
  },
  {
    icon: Heart,
    title: "Personlig Oppfølging",
    description: "Du får direkte kontakt og dedikert oppmerksomhet gjennom hele prosjektet.",
  },
  {
    icon: Zap,
    title: "Innovativ",
    description: "Vi holder oss oppdatert på de nyeste trendene og teknologiene.",
  },
  {
    icon: Shield,
    title: "Pålitelig",
    description: "Vi leverer det vi lover, til avtalt tid og kvalitet.",
  },
];

const stats = [
  { value: "30+", label: "Fullførte Prosjekter" },
  { value: "100%", label: "Kundetilfredshet" },
  { value: "Fra 2 uker", label: "Leveringstid" },
  { value: "1:1", label: "Personlig Oppfølging" },
];

const approach = [
  {
    icon: Lightbulb,
    title: "Strategisk Tilnærming",
    description: "Vi starter alltid med å forstå dine mål og utfordringer før vi foreslår løsninger.",
  },
  {
    icon: Users,
    title: "Partnerskap",
    description: "Vi ser på oss selv som din digitale partner, ikke bare en leverandør.",
  },
  {
    icon: TrendingUp,
    title: "Langsiktig Fokus",
    description: "Vi bygger løsninger som vokser med bedriften din over tid.",
  },
];

export default function OmOss() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Om IntelliSense AI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Din partner for digital{" "}
              <span className="gradient-text-warm">vekst</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] leading-relaxed">
              IntelliSense AI er et norsk digitalbyrå som hjelper bedrifter med å vokse 
              gjennom skreddersydde digitale løsninger. Vi kombinerer strategi, design 
              og teknologi for å levere resultater som monner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--background-secondary)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text-warm mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--foreground-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
                Vår Historie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hvorfor IntelliSense AI?
              </h2>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                IntelliSense AI ble startet med én klar visjon: Å gjøre profesjonell 
                digital markedsføring tilgjengelig for alle bedrifter, uansett størrelse.
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                Vi så at mange bedrifter slet med å navigere den digitale verden – 
                enten fordi de manglet kompetanse, tid eller ressurser. Derfor bygget 
                vi et byrå som fokuserer på å være en ekte partner for våre kunder.
              </p>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                I dag hjelper vi bedrifter over hele Norge med alt fra nettsider og 
                SEO til komplett digital markedsføring. Vår tilnærming er enkel: 
                Vi lytter, vi planlegger, og vi leverer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-[var(--border)] flex items-center justify-center">
                <div className="text-center p-8">
                  <Award className="w-16 h-16 text-[var(--primary)] mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">Kvalitet & Resultater</p>
                  <p className="text-[var(--foreground-muted)]">
                    Vi nøyer oss aldri med mindre enn det beste
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Vår Misjon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Å gjøre digital vekst tilgjengelig for alle
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              Vi tror at alle bedrifter fortjener tilgang til profesjonelle digitale 
              løsninger. Vår misjon er å være den partneren du kan stole på for å 
              navigere den digitale verden.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)]"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Våre Verdier
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Hva vi står for
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Klar for å jobbe sammen?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Ta kontakt med oss for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
            >
              Kontakt Oss
              <TrendingUp className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
