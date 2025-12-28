"use client";

import { motion } from "framer-motion";
import {
  Search, Check, ArrowRight, TrendingUp, Target, FileText,
  MapPin, Link2, BarChart3, Globe, Zap, Award
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Target,
    title: "Keyword Research",
    description: "Vi finner de søkeordene kundene dine faktisk bruker og som gir best konvertering.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Optimalisering av innhold, meta-tags, overskrifter og intern lenkestruktur.",
  },
  {
    icon: Zap,
    title: "Teknisk SEO",
    description: "Forbedring av sidehastighet, mobilvennlighet, crawlbarhet og indeksering.",
  },
  {
    icon: MapPin,
    title: "Lokal SEO",
    description: "Optimalisering for lokale søk, Google Business Profile og lokale kataloger.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Strategisk oppbygging av autoritative backlinks for å styrke domeneautoriteten.",
  },
  {
    icon: BarChart3,
    title: "Analyse & Rapportering",
    description: "Månedlige rapporter med innsikt i plasseringer, trafikk og konverteringer.",
  },
];

const stats = [
  { value: "Top 3", label: "Gjennomsnittlig Google-plassering" },
  { value: "+150%", label: "Økning i organisk trafikk" },
  { value: "77%", label: "Av kunder søker lokalt på Google" },
  { value: "6 mnd", label: "Typisk tid til synlige resultater" },
];

const process = [
  {
    step: "01",
    title: "SEO-Audit",
    description: "Grundig analyse av nåværende situasjon, konkurrenter og muligheter.",
  },
  {
    step: "02",
    title: "Strategi",
    description: "Skreddersydd SEO-plan basert på dine mål og bransjens konkurransebilde.",
  },
  {
    step: "03",
    title: "Implementering",
    description: "Vi gjennomfører tekniske forbedringer og optimaliserer innholdet ditt.",
  },
  {
    step: "04",
    title: "Måling & Optimering",
    description: "Kontinuerlig overvåking og justering for å maksimere resultatene.",
  },
];

export default function SEOPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--secondary)] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        
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
                  background: 'linear-gradient(135deg, var(--secondary)20, var(--secondary)10)',
                  border: '1px solid var(--secondary)30'
                }}
              >
                <Search className="w-8 h-8 text-[var(--secondary)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Bli funnet på{" "}
                <span className="gradient-text-warm">Google</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                77% av kundene søker på Google før de tar en kjøpsbeslutning. 
                Vi hjelper deg å klatre til toppen av søkeresultatene og tiltrekke kvalifisert trafikk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                >
                  Få gratis SEO-analyse
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8">
                {/* Search results mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-3/4 rounded bg-[var(--primary)] mb-2" />
                      <div className="h-3 w-1/2 rounded bg-[var(--surface)]" />
                    </div>
                    <Award className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] opacity-70">
                    <div className="w-10 h-10 rounded-lg bg-[var(--surface)] flex items-center justify-center">
                      <span className="text-[var(--foreground-muted)] font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-2/3 rounded bg-[var(--surface)] mb-2" />
                      <div className="h-3 w-1/3 rounded bg-[var(--surface)]" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] opacity-50">
                    <div className="w-10 h-10 rounded-lg bg-[var(--surface)] flex items-center justify-center">
                      <span className="text-[var(--foreground-muted)] font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-1/2 rounded bg-[var(--surface)] mb-2" />
                      <div className="h-3 w-1/4 rounded bg-[var(--surface)]" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[var(--secondary)] flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--background-secondary)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text-warm mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Komplett <span className="gradient-text-warm">SEO-pakke</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Vi dekker alle aspekter av søkemotoroptimalisering for å gi deg de beste resultatene.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--secondary)20, var(--secondary)10)'
                  }}
                >
                  <feature.icon className="w-6 h-6 text-[var(--secondary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vår <span className="gradient-text-warm">SEO-prosess</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              En datadrevet tilnærming som gir målbare resultater over tid.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[var(--secondary)] opacity-20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klar for å klatre til toppen av Google?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Start med en gratis SEO-analyse og få innsikt i hvordan du kan forbedre synligheten din.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
            >
              Få gratis SEO-analyse
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

