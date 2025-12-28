"use client";

import { motion } from "framer-motion";
import {
  Wrench, ArrowRight, Shield, Zap, Clock, RefreshCw,
  Server, Headphones, CheckCircle, AlertTriangle
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Sikkerhetsoppdateringer",
    description: "Regelmessige sikkerhetsoppdateringer og patches for å beskytte mot trusler.",
  },
  {
    icon: Server,
    title: "Backup & Recovery",
    description: "Daglige backups og rask gjenoppretting hvis noe skulle skje.",
  },
  {
    icon: Zap,
    title: "Ytelsesoptimering",
    description: "Kontinuerlig overvåking og optimalisering av hastighet og ytelse.",
  },
  {
    icon: RefreshCw,
    title: "Innholdsoppdateringer",
    description: "Vi hjelper deg med å holde innholdet på nettsiden oppdatert.",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Overvåking",
    description: "Vi overvåker nettsiden din døgnet rundt og reagerer på problemer.",
  },
  {
    icon: Headphones,
    title: "Prioritert Support",
    description: "Rask hjelp når du trenger det - via telefon, e-post eller chat.",
  },
];

const plans = [
  {
    name: "Basis",
    price: "990",
    features: [
      "Månedlige sikkerhetsoppdateringer",
      "Ukentlige backups",
      "E-post support (48t respons)",
      "Oppetidsgaranti 99%",
    ],
  },
  {
    name: "Standard",
    price: "1 990",
    popular: true,
    features: [
      "Ukentlige sikkerhetsoppdateringer",
      "Daglige backups",
      "E-post support (24t respons)",
      "2 timer innholdsoppdateringer/mnd",
      "Oppetidsgaranti 99.5%",
      "Månedlig ytelsesrapport",
    ],
  },
  {
    name: "Premium",
    price: "3 990",
    features: [
      "Kontinuerlige oppdateringer",
      "Sanntids backup",
      "Prioritert support (4t respons)",
      "5 timer innholdsoppdateringer/mnd",
      "Oppetidsgaranti 99.9%",
      "24/7 overvåking",
      "Dedikert kontaktperson",
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link 
                href="/tjenester"
                className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-6"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Tilbake til tjenester
              </Link>
              
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent)20, var(--accent)10)',
                  border: '1px solid var(--accent)30'
                }}
              >
                <Wrench className="w-8 h-8 text-[var(--accent)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Vedlikehold &{" "}
                <span className="gradient-text-warm">Support</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Kontinuerlig oppfølging og teknisk support som sikrer at 
                løsningene dine alltid fungerer optimalt.
              </p>
              
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
              >
                Velg plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8 flex items-center justify-center">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">Alle systemer operative</span>
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <Clock className="w-5 h-5 text-[var(--accent)]" />
                    <span className="text-sm">Oppetid: 99.98%</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <Shield className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-sm">Siste backup: 2 timer siden</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hva som er <span className="gradient-text-warm">inkludert</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[var(--accent)]10">
                  <feature.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Velg din <span className="gradient-text-warm">supportplan</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[var(--primary)]10 to-transparent border-[var(--primary)]50' 
                    : 'bg-[var(--background-secondary)] border-[var(--border)]'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[var(--primary)] bg-[var(--primary)]20 rounded-full mb-4">
                    Mest populær
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[var(--foreground-muted)]"> kr/mnd</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground-muted)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                      : 'border border-[var(--border)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  Velg {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trenger du skreddersydd løsning?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Vi tilpasser supportpakken til dine behov. Ta kontakt for et tilpasset tilbud.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
            >
              Kontakt oss
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

