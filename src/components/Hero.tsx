"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.07] blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--secondary)] opacity-[0.07] blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[var(--foreground-muted)]">Din partner for digital vekst</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mb-6"
          >
            Vi bygger{" "}
            <span className="gradient-text">digitale løsninger</span>
            <br />
            som driver vekst
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl mb-10 leading-relaxed"
          >
            Fra strategi til implementering – vi hjelper bedrifter med å dominere 
            digitalt gjennom skreddersydde nettsider, SEO og markedsføring.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Book Gratis Konsultasjon</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/tjenester"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[var(--foreground)] rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--surface)] transition-all duration-300"
            >
              <Play className="w-5 h-5 text-[var(--primary)]" />
              <span>Se Våre Tjenester</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
          >
            {[
              { value: "30+", label: "Fullførte Prosjekter", icon: Sparkles },
              { value: "100%", label: "Kundetilfredshet", icon: TrendingUp },
              { value: "Fra 2 uker", label: "Leveringstid", icon: Zap },
              { value: "1:1", label: "Personlig Oppfølging", icon: Sparkles },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text-warm mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

