"use client";

import { motion } from "framer-motion";
import {
  Megaphone, Check, ArrowRight, Target, Users, TrendingUp,
  Mail, Share2, BarChart3, Zap, Eye, DollarSign
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Target,
    title: "Google Ads",
    description: "Målrettede annonsekampanjer som treffer kundene dine akkurat når de søker etter dine tjenester.",
  },
  {
    icon: Users,
    title: "Sosiale Medier",
    description: "Strategisk tilstedeværelse på Facebook, Instagram og LinkedIn som bygger merkevare og engasjement.",
  },
  {
    icon: Mail,
    title: "E-postmarkedsføring",
    description: "Automatiserte e-postkampanjer som pleier leads og driver konverteringer.",
  },
  {
    icon: Share2,
    title: "Retargeting",
    description: "Gjenopprett kontakt med besøkende som ikke konverterte første gang.",
  },
  {
    icon: Eye,
    title: "Display-annonsering",
    description: "Visuell annonsering på tvers av nettsider for økt merkevarebevissthet.",
  },
  {
    icon: BarChart3,
    title: "Analyse & Optimering",
    description: "Kontinuerlig måling og forbedring av kampanjer for maksimal ROI.",
  },
];

const stats = [
  { value: "3-5x", label: "Gjennomsnittlig ROAS" },
  { value: "-40%", label: "Lavere kostnad per lead" },
  { value: "+200%", label: "Økning i konverteringer" },
  { value: "24/7", label: "Kampanjeovervåking" },
];

export default function MarkedsforingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
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
                <Megaphone className="w-8 h-8 text-[var(--accent)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital{" "}
                <span className="gradient-text-warm">Markedsføring</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Strategiske kampanjer på tvers av plattformer som driver kvalifisert trafikk, 
                genererer leads og øker salget for din bedrift.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                >
                  Start kampanje
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: "Google Ads", color: "var(--primary)" },
                    { icon: Users, label: "Social", color: "var(--accent)" },
                    { icon: Mail, label: "E-post", color: "var(--secondary)" },
                    { icon: TrendingUp, label: "Vekst", color: "var(--primary)" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-center">
                      <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: item.color }} />
                      <span className="text-sm text-[var(--foreground-muted)]">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-lg">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Våre <span className="gradient-text-warm">markedsføringstjenester</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Vi hjelper deg å nå kundene dine der de er - og konvertere dem til betalende kunder.
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
                    background: 'linear-gradient(135deg, var(--accent)20, var(--accent)10)'
                  }}
                >
                  <feature.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{feature.description}</p>
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
              Klar for å øke salget?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              La oss diskutere hvordan vi kan hjelpe deg å nå flere kunder og øke omsetningen.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
            >
              Book strategimøte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

