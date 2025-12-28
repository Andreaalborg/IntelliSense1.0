"use client";

import { motion } from "framer-motion";
import {
  Palette, ArrowRight, Layers, Type, Image, Sparkles,
  FileText, Brush, PenTool
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Unike, minneverdige logoer som fanger essensen av merkevaren din.",
  },
  {
    icon: Layers,
    title: "Visuell Identitet",
    description: "Komplett visuelt system med farger, fonter, ikoner og grafiske elementer.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description: "Detaljert dokumentasjon som sikrer konsistent merkevarebruk.",
  },
  {
    icon: Image,
    title: "Markedsmateriell",
    description: "Visittkort, brosjyrer, plakater og annet trykt materiell.",
  },
  {
    icon: Brush,
    title: "Sosiale Medier",
    description: "Templates og grafikk for konsistent tilstedeværelse på sosiale medier.",
  },
  {
    icon: Sparkles,
    title: "Presentasjoner",
    description: "Profesjonelle PowerPoint/Keynote-maler som imponerer.",
  },
];

const process = [
  { step: "01", title: "Innsikt", description: "Vi lærer om bedriften, verdiene og målgruppen din." },
  { step: "02", title: "Konsept", description: "Vi utvikler flere kreative retninger å velge mellom." },
  { step: "03", title: "Design", description: "Vi detaljerer og perfeksjonerer det valgte konseptet." },
  { step: "04", title: "Leveranse", description: "Du mottar alle filer og guidelines du trenger." },
];

export default function MerkevarePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--secondary)] opacity-[0.05] blur-[120px]" />
        
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
                <Palette className="w-8 h-8 text-[var(--secondary)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Merkevare-{" "}
                <span className="gradient-text-warm">bygging</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Vi skaper sterke visuelle identiteter som skiller seg ut i mengden 
                og bygger tillit hos målgruppen din.
              </p>
              
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
              >
                Start prosjekt
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8">
                <div className="h-full grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]" />
                    <div className="h-16 rounded-xl bg-[var(--accent)]" />
                    <div className="h-20 rounded-xl bg-[var(--background)] border border-[var(--border)]" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-16 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                      <Type className="w-8 h-8 text-[var(--foreground-muted)]" />
                    </div>
                    <div className="h-28 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)]" />
                    <div className="h-16 rounded-xl bg-[var(--primary)]" />
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
              Hva vi <span className="gradient-text-warm">leverer</span>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[var(--secondary)]10">
                  <feature.icon className="w-6 h-6 text-[var(--secondary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vår <span className="gradient-text-warm">designprosess</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-[var(--secondary)] opacity-20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--foreground-muted)]">{step.description}</p>
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
              Klar for en ny visuell identitet?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              La oss skape en merkevare som skiller seg ut og bygger tillit.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
            >
              Start designprosjekt
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

