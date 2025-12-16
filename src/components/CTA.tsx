"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--background)] to-[var(--secondary)]/10" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[var(--primary)] opacity-10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--secondary)] opacity-10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border p-12 md:p-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-8"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Klar for å ta bedriften din til{" "}
            <span className="gradient-text">neste nivå?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto mb-10"
          >
            Book en gratis konsultasjon i dag og la oss diskutere hvordan vi kan hjelpe 
            deg med å nå dine mål. Ingen forpliktelser – bare verdifulle innsikter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="relative w-5 h-5" />
              <span className="relative">Book Gratis Konsultasjon</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/priser"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--foreground)] rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--surface)] transition-all duration-300"
            >
              Se Våre Priser
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

