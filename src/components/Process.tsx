"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultasjon",
    description: "Vi starter med å forstå din bedrift, mål og utfordringer gjennom en gratis samtale.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategi",
    description: "Basert på innsikten utvikler vi en skreddersydd strategi tilpasset dine behov.",
  },
  {
    number: "03",
    icon: Code,
    title: "Utvikling",
    description: "Vi designer og bygger løsningen med fokus på kvalitet og resultater.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lansering",
    description: "Vi lanserer løsningen og sørger for at alt fungerer perfekt fra dag én.",
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Oppfølging",
    description: "Kontinuerlig support, optimalisering og vedlikehold for langsiktig suksess.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--primary)] opacity-[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Vår Prosess
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Fra idé til{" "}
            <span className="gradient-text-warm">suksess</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            En strukturert tilnærming som sikrer resultater. 
            Vi holder deg informert gjennom hele prosessen.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                {/* Step number with icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-3 shadow-lg shadow-[var(--primary)]/20">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] flex items-center justify-center text-xs font-bold text-[var(--primary)]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

