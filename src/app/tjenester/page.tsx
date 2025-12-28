"use client";

import { motion } from "framer-motion";
import {
  Globe, Search, Megaphone, LineChart, Palette, Wrench,
  ArrowRight, Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "nettside",
    icon: Globe,
    title: "Nettsider som konverterer",
    description: "Vi bygger raske, moderne nettsider som ikke bare ser bra ut, men som faktisk konverterer besøkende til betalende kunder.",
    highlights: ["Responsivt design", "Rask lastetid", "SEO-optimalisert"],
    color: "var(--primary)",
    href: "/tjenester/nettside",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimalisering",
    description: "Få bedriften din til toppen av Google. Vi implementerer en helhetlig SEO-strategi som gir varige resultater og mer organisk trafikk.",
    highlights: ["Teknisk SEO", "Innholdsstrategi", "Lokal SEO"],
    color: "var(--secondary)",
    href: "/tjenester/seo",
  },
  {
    id: "markedsforing",
    icon: Megaphone,
    title: "Digital Markedsføring",
    description: "Strategiske kampanjer på tvers av plattformer som driver kvalifisert trafikk og genererer leads for din bedrift.",
    highlights: ["Google Ads", "Sosiale medier", "Retargeting"],
    color: "var(--accent)",
    href: "/tjenester/markedsforing",
  },
  {
    id: "analyse",
    icon: LineChart,
    title: "Data & Analyse",
    description: "Ta datadrevne beslutninger med innsiktsfulle analyser og rapporter som viser hva som faktisk fungerer for din bedrift.",
    highlights: ["Google Analytics", "Konverteringssporing", "A/B testing"],
    color: "var(--primary)",
    href: "/tjenester/analyse",
  },
  {
    id: "merkevare",
    icon: Palette,
    title: "Merkevarebygging",
    description: "Vi skaper sterke visuelle identiteter som skiller seg ut i mengden og bygger tillit hos målgruppen din.",
    highlights: ["Logo design", "Visuell identitet", "Brand guidelines"],
    color: "var(--secondary)",
    href: "/tjenester/merkevare",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Vedlikehold & Support",
    description: "Kontinuerlig oppfølging og teknisk support som sikrer at løsningene dine alltid fungerer optimalt.",
    highlights: ["24/7 overvåking", "Sikkerhetsoppdateringer", "Rask support"],
    color: "var(--accent)",
    href: "/tjenester/support",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Tjenester() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4">
              Våre Tjenester
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Alt du trenger for{" "}
              <span className="gradient-text-warm">digital suksess</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
              Vi tilbyr helhetlige digitale løsninger som hjelper bedriften din å vokse. 
              Fra strategi til implementering – vi er med deg hele veien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <Link href={service.href} className="group block h-full">
                  <div 
                    className="relative h-full p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 hover:shadow-2xl overflow-hidden"
                    style={{ 
                      boxShadow: `0 0 0 rgba(${service.color === 'var(--primary)' ? '255,107,74' : service.color === 'var(--secondary)' ? '255,179,71' : '78,205,196'}, 0)`,
                    }}
                  >
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`
                      }}
                    />
                    
                    {/* Icon */}
                    <div 
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        border: `1px solid ${service.color}30`
                      }}
                    >
                      <service.icon 
                        className="w-8 h-8 transition-colors" 
                        style={{ color: service.color }} 
                      />
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="relative text-[var(--foreground-muted)] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="relative flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--foreground-muted)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="relative flex items-center gap-2 text-[var(--primary)] font-medium">
                      <span>Les mer</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "100+", label: "Fornøyde kunder" },
              { value: "250+", label: "Prosjekter levert" },
              { value: "98%", label: "Kundetilfredshet" },
              { value: "5+", label: "År erfaring" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-warm mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--foreground-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
            <Sparkles className="w-12 h-12 text-[var(--primary)] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Usikker på hva du trenger?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Book en gratis konsultasjon så hjelper vi deg med å finne den beste løsningen for din bedrift.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
            >
              Book Gratis Konsultasjon
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
