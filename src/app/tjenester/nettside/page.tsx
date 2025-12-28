"use client";

import { motion } from "framer-motion";
import {
  Globe, Check, ArrowRight, Smartphone, Zap, Search, 
  Shield, Users, TrendingUp, Code, Layers, Palette
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Smartphone,
    title: "Responsivt Design",
    description: "Nettsiden din ser perfekt ut på alle enheter - mobil, nettbrett og desktop.",
  },
  {
    icon: Zap,
    title: "Lynrask Ytelse",
    description: "Optimalisert for hastighet med lastetider under 2 sekunder for bedre brukeropplevelse og SEO.",
  },
  {
    icon: Search,
    title: "SEO-Optimalisert",
    description: "Bygget med søkemotoroptimalisering i fokus fra dag én for å sikre god synlighet i Google.",
  },
  {
    icon: Shield,
    title: "Sikker & Pålitelig",
    description: "SSL-sertifikat, sikker hosting og regelmessige backups for trygg drift.",
  },
  {
    icon: Users,
    title: "Konverteringsfokusert",
    description: "Design og struktur som leder besøkende mot handling - enten det er kjøp, kontakt eller påmelding.",
  },
  {
    icon: Code,
    title: "Moderne Teknologi",
    description: "Vi bruker de nyeste teknologiene som Next.js og React for fremtidsrettede løsninger.",
  },
];

const process = [
  {
    step: "01",
    title: "Kartlegging",
    description: "Vi starter med å forstå din bedrift, målgruppe og mål. Hva ønsker du å oppnå med nettsiden?",
  },
  {
    step: "02",
    title: "Design & Konsept",
    description: "Vi lager wireframes og design som reflekterer din merkevare og appellerer til målgruppen din.",
  },
  {
    step: "03",
    title: "Utvikling",
    description: "Våre utviklere bygger nettsiden med fokus på ytelse, sikkerhet og brukervennlighet.",
  },
  {
    step: "04",
    title: "Testing & Lansering",
    description: "Grundig testing på alle enheter før lansering. Vi sørger for at alt fungerer perfekt.",
  },
];

const benefits = [
  "Økt synlighet i søkemotorer",
  "Flere henvendelser fra potensielle kunder",
  "Profesjonelt førsteinntrykk",
  "Automatisert leadgenerering",
  "Integrasjon med CRM og andre verktøy",
  "Målbar avkastning på investeringen",
];

export default function NettsidePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        
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
                <Globe className="w-8 h-8 text-[var(--primary)]" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Nettsider som{" "}
                <span className="gradient-text-warm">konverterer</span>
              </h1>
              
              <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Vi designer og utvikler moderne, raske nettsider som ikke bare ser fantastiske ut, 
                men som faktisk konverterer besøkende til betalende kunder.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
                >
                  Få gratis tilbud
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#prosess"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] transition-all duration-300"
                >
                  Se vår prosess
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--background-secondary)] to-[var(--background-tertiary)] border border-[var(--border)] p-8">
                {/* Browser mockup */}
                <div className="relative h-full rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--border)]">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[var(--background-secondary)] border-b border-[var(--border)]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 rounded-full bg-[var(--surface)] flex items-center px-3">
                        <span className="text-xs text-[var(--foreground-muted)]">dinbedrift.no</span>
                      </div>
                    </div>
                  </div>
                  {/* Content mockup */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 w-32 rounded bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-[var(--surface)]" />
                      <div className="h-4 w-3/4 rounded bg-[var(--surface)]" />
                      <div className="h-4 w-1/2 rounded bg-[var(--surface)]" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="aspect-video rounded bg-[var(--surface)]" />
                      <div className="aspect-video rounded bg-[var(--surface)]" />
                      <div className="aspect-video rounded bg-[var(--surface)]" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-12 bg-[var(--background-secondary)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {benefits.slice(0, 4).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-[var(--foreground-muted)]">{benefit}</span>
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
              Hvorfor velge oss for din <span className="gradient-text-warm">nettside?</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Vi kombinerer kreativitet med teknisk ekspertise for å levere nettsider som gir resultater.
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
                    background: 'linear-gradient(135deg, var(--primary)20, var(--primary)10)'
                  }}
                >
                  <feature.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="prosess" className="py-20 md:py-32 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vår <span className="gradient-text-warm">prosess</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              En strukturert tilnærming som sikrer at du får en nettside du er stolt av.
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
                <div className="text-6xl font-bold text-[var(--primary)] opacity-20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-[var(--primary)] to-transparent opacity-30" />
                )}
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
              Klar for en nettside som leverer resultater?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Ta kontakt i dag for en uforpliktende prat om dine behov og mål.
              Vi gir deg et gratis tilbud innen 24 timer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all duration-300"
              >
                Få gratis tilbud
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/priser"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface)] transition-all duration-300"
              >
                Se priser
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

