"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Hansen",
    role: "CEO, TechStart AS",
    content: "IntelliSense AI transformerte vår digitale tilstedeværelse fullstendig. Trafikken til nettsiden økte med 300% på bare tre måneder, og vi ser en tydelig økning i leads.",
    rating: 5,
  },
  {
    name: "Erik Johansen",
    role: "Grunnlegger, Nordisk Konsult",
    content: "Profesjonelt team som virkelig forstår digital markedsføring. De leverte over forventning og var alltid tilgjengelige for spørsmål. Anbefales på det sterkeste!",
    rating: 5,
  },
  {
    name: "Anne Kristiansen",
    role: "Markedssjef, EcoSolutions",
    content: "Vi hadde prøvd flere byråer før, men ingen leverte som IntelliSense. Deres strategiske tilnærming og fokus på resultater er imponerende.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary)] opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Kundehistorier
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Hva våre kunder{" "}
            <span className="gradient-text-warm">sier</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            Vi er stolte av resultatene vi leverer og relasjonene vi bygger med våre kunder.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[var(--primary)] opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--secondary)] text-[var(--secondary)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-[var(--foreground-muted)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

