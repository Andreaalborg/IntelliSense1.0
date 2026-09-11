"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Homepage projects grid.
 * SVG mock cards (3:2) in /public/projects. Hide with NEXT_PUBLIC_SHOW_PROJECTS=false.
 */
type Project = {
  id: string;
  name: string;
  image: string;
  /** Empty string = no live link yet (do not use example.com). */
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: "1",
    name: "Lokal håndverker",
    image: "/projects/project-1.svg",
    liveUrl: "https://intellisenseai.no/tjenester/nettside",
  },
  {
    id: "2",
    name: "Helseklinikk",
    image: "/projects/project-2.svg",
    liveUrl: "https://intellisenseai.no/tjenester/seo",
  },
  {
    id: "3",
    name: "B2B-rådgivning",
    image: "/projects/project-3.svg",
    liveUrl: "https://intellisenseai.no/tjenester/merkevare",
  },
  {
    id: "4",
    name: "Detaljhandel",
    image: "/projects/project-4.svg",
    liveUrl: "https://intellisenseai.no/tjenester/markedsforing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Projects() {
  // Visible by default; set NEXT_PUBLIC_SHOW_PROJECTS=false to hide
  if (process.env.NEXT_PUBLIC_SHOW_PROJECTS === "false") {
    return null;
  }

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Prosjekter
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Utvalgte{" "}
            <span className="gradient-text-warm">arbeider</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
          >
            Et utvalg av nettsider og digitale løsninger vi har levert.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const hasLiveUrl = Boolean(project.liveUrl.trim());
            const card = (
              <>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={project.image.endsWith(".svg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 shrink-0 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium text-white border border-white/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Se prosjekt
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <motion.div key={project.id} variants={itemVariants}>
                {hasLiveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="group overflow-hidden rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                    {card}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
