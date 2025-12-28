"use client";

import { motion } from "framer-motion";
import {
  LineChart, ArrowRight, BarChart3, PieChart, TrendingUp,
  Target, Eye, Zap, Database, Activity
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BarChart3,
    title: "Google Analytics 4",
    description: "Profesjonelt oppsett og konfigurering av GA4 for presis måling av brukeratferd.",
  },
  {
    icon: Target,
    title: "Konverteringssporing",
    description: "Sporing av alle viktige handlinger - kjøp, skjemaer, anrop og nedlastinger.",
  },
  {
    icon: PieChart,
    title: "Dashboards",
    description: "Skreddersydde dashboards som gir deg oversikt over KPIene som betyr noe.",
  },
  {
    icon: Activity,
    title: "A/B Testing",
    description: "Systematisk testing av design, innhold og funksjonalitet for bedre resultater.",
  },
  {
    icon: Eye,
    title: "Heatmaps & Sessions",
    description: "Se hvordan brukerne faktisk navigerer på nettsiden din med visuelle analyser.",
  },
  {
    icon: Database,
    title: "Data Warehouse",
    description: "Samle all markedsføringsdata på ett sted for helhetlig analyse.",
  },
];

const stats = [
  { value: "100%", label: "Datadrevne beslutninger" },
  { value: "+35%", label: "Økning i konverteringer" },
  { value: "15+", label: "KPIer vi sporer" },
  { value: "24/7", label: "Sanntidsdata" },
];

export default function AnalysePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        
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
                  background: 'linear-gradient(135deg, var(--primary)20, var(--primary)10)',
                  border: '1px solid var(--primary)30'
                }}
              >
                <LineChart className="w-8 h-8 text-[var(--primary)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Data &{" "}
                <span className="gradient-text-warm">Analyse</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Ta datadrevne beslutninger med innsiktsfulle analyser og rapporter 
                som viser hva som faktisk fungerer for din bedrift.
              </p>
              
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
              >
                Få analyse-oppsett
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  {[80, 60, 90, 45, 75].map((value, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-16 text-sm text-[var(--foreground-muted)]">KPI {i + 1}</div>
                      <div className="flex-1 h-4 bg-[var(--surface)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                        />
                      </div>
                      <div className="w-12 text-sm font-semibold">{value}%</div>
                    </div>
                  ))}
                </div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
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
              Våre <span className="gradient-text-warm">analysetjenester</span>
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
                className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[var(--primary)]10">
                  <feature.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)]">{feature.description}</p>
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
              Slutt å gjette - start å måle
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              La oss hjelpe deg med å sette opp profesjonell analyse som gir deg innsikten du trenger.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
            >
              Book analyse-konsultasjon
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

