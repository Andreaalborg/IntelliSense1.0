"use client";

import { motion } from "framer-motion";
import { 
  Globe, Search, Megaphone, LineChart, Palette, Wrench, 
  ArrowRight, Check, Sparkles 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "nettside",
    icon: Globe,
    title: "Konverteringsoptimalisert Nettside",
    description: "Vi designer og utvikler moderne nettsider som ikke bare ser bra ut, men som faktisk konverterer besøkende til kunder.",
    features: [
      "Responsivt design for alle enheter",
      "Rask lastetid og optimalisert ytelse",
      "SEO-vennlig struktur",
      "Intuitivt brukergrensesnitt",
      "Integrasjon med CRM og andre verktøy",
      "Skalerbar arkitektur",
    ],
    color: "var(--primary)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimalisering",
    description: "Få bedriften din til toppen av søkeresultatene. Vi implementerer en helhetlig SEO-strategi som gir varige resultater.",
    features: [
      "Teknisk SEO-audit",
      "Keyword research og analyse",
      "On-page optimalisering",
      "Innholdsstrategi",
      "Link building",
      "Lokal SEO",
    ],
    color: "var(--secondary)",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    id: "markedsforing",
    icon: Megaphone,
    title: "Digital Markedsføring",
    description: "Strategiske kampanjer på tvers av plattformer som driver kvalifisert trafikk og genererer leads for din bedrift.",
    features: [
      "Google Ads & Facebook Ads",
      "Sosiale medier strategi",
      "E-postmarkedsføring",
      "Retargeting kampanjer",
      "Innholdsmarkedsføring",
      "Influencer samarbeid",
    ],
    color: "var(--accent)",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    id: "analyse",
    icon: LineChart,
    title: "Data & Analyse",
    description: "Ta datadrevne beslutninger med innsiktsfulle analyser og rapporter som viser hva som faktisk fungerer.",
    features: [
      "Google Analytics oppsett",
      "Konverteringssporing",
      "Dashboards og rapporter",
      "A/B testing",
      "Heatmaps og brukeranalyse",
      "ROI måling",
    ],
    color: "var(--primary)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "merkevare",
    icon: Palette,
    title: "Merkevarebygging",
    description: "Vi skaper sterke visuelle identiteter som skiller seg ut og bygger tillit hos målgruppen din.",
    features: [
      "Logo design",
      "Visuell identitet",
      "Brand guidelines",
      "Markedsmateriell",
      "Presentasjoner",
      "Sosiale medier templates",
    ],
    color: "var(--secondary)",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Vedlikehold & Support",
    description: "Kontinuerlig oppfølging og teknisk support som sikrer at løsningene dine alltid fungerer optimalt.",
    features: [
      "Kontinuerlig overvåking",
      "Sikkerhetsoppdateringer",
      "Backup og recovery",
      "Ytelsesoptimalisering",
      "Innholdsoppdateringer",
      "Prioritert support",
    ],
    color: "var(--accent)",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
];

export default function Tjenester() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.05] blur-[120px]" />
        
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
              Vi tilbyr helhetlige digitale løsninger tilpasset din bedrifts behov. 
              Fra strategi og design til utvikling og markedsføring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-[var(--foreground-muted)] mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${service.color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color: service.color }} />
                        </div>
                        <span className="text-[var(--foreground-muted)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-4 transition-all duration-300"
                  >
                    Få et tilbud
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden relative"
                    style={{ 
                      border: `1px solid ${service.color}20`
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, transparent)`
                      }}
                    />
                  </div>
                </div>
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
