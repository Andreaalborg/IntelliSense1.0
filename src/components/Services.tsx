"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { 
  Icon8Globe, 
  Icon8Search, 
  Icon8Megaphone, 
  Icon8Chart, 
  Icon8Palette, 
  Icon8Support 
} from "@/components/Icons8";

const services = [
  {
    icon: Icon8Globe,
    title: "Konverteringsoptimalisert Nettside",
    description: "Vi bygger moderne, raske nettsider som ikke bare ser bra ut, men som faktisk konverterer besøkende til kunder.",
    href: "/tjenester#nettside",
  },
  {
    icon: Icon8Search,
    title: "SEO Optimalisering",
    description: "Få bedriften din til toppen av søkeresultatene. Vi implementerer en helhetlig SEO-strategi som gir varige resultater.",
    href: "/tjenester#seo",
  },
  {
    icon: Icon8Megaphone,
    title: "Digital Markedsføring",
    description: "Strategiske kampanjer på tvers av plattformer som driver kvalifisert trafikk og genererer leads.",
    href: "/tjenester#markedsforing",
  },
  {
    icon: Icon8Chart,
    title: "Data & Analyse",
    description: "Få innsikt i kundeatferd og optimaliser basert på data. Vi sporer det som betyr noe.",
    href: "/tjenester#analyse",
  },
  {
    icon: Icon8Palette,
    title: "Merkevarebygging",
    description: "Vi skaper visuelle identiteter som skiller seg ut og bygger tillit hos målgruppen din.",
    href: "/tjenester#merkevare",
  },
  {
    icon: Icon8Support,
    title: "Vedlikehold & Support",
    description: "Kontinuerlig oppfølging og teknisk support som sikrer at alt fungerer optimalt.",
    href: "/tjenester#support",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Våre Tjenester
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Alt du trenger for{" "}
            <span className="gradient-text-warm">digital suksess</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            Vi tilbyr helhetlige digitale løsninger som hjelper bedriften din å vokse. 
            Fra strategi til implementering – vi er med deg hele veien.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
            >
              <Link
                href={service.href}
                className="group block h-full p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5"
              >
                <div className="flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={80} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-[var(--primary)] transition-colors flex items-center justify-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                
                <p className="text-[var(--foreground-muted)] leading-relaxed text-center">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/tjenester"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-4 transition-all duration-300"
          >
            Se alle tjenester
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
