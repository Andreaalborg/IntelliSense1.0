"use client";

import { 
  Icon8Globe, Icon8Search, Icon8Megaphone, Icon8Chart, Icon8Palette, Icon8Support, Icon8Rocket, Icon8Lightbulb,
  Icon8GlobeSticker, Icon8GlobeDoodle, Icon8GlobeBubbles
} from "@/components/Icons8";

export default function Icons8Demo() {
  const icons3DFluency = [
    { name: "Globe", component: Icon8Globe, desc: "Nettside" },
    { name: "Search", component: Icon8Search, desc: "SEO" },
    { name: "Megaphone", component: Icon8Megaphone, desc: "Markedsføring" },
    { name: "Bar Chart", component: Icon8Chart, desc: "Analyse" },
    { name: "Palette", component: Icon8Palette, desc: "Design" },
    { name: "Support", component: Icon8Support, desc: "Vedlikehold" },
    { name: "Rocket", component: Icon8Rocket, desc: "Vekst" },
    { name: "Lightbulb", component: Icon8Lightbulb, desc: "Ideer" },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4 text-center">Icons8 Stiler</h1>
        <p className="text-[var(--foreground-muted)] text-center mb-16">
          Sammenlign forskjellige stiler og velg den du liker best!
        </p>

        {/* 3D Fluency - Main style */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-2 gradient-text-warm">3D Fluency</h2>
          <p className="text-[var(--foreground-muted)] mb-8">Fargerike 3D-ikoner med mye detaljer</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {icons3DFluency.map((icon) => (
              <div 
                key={icon.name}
                className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center hover:border-[var(--primary)] transition-colors"
              >
                <div className="flex justify-center mb-3">
                  <icon.component size={80} />
                </div>
                <p className="text-sm font-medium">{icon.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Style comparison */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Sammenlign stiler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <p className="text-xs text-[var(--primary)] mb-4">3D Fluency</p>
              <Icon8Globe size={80} className="mx-auto" />
            </div>
            <div className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <p className="text-xs text-[var(--primary)] mb-4">Stickers</p>
              <Icon8GlobeSticker size={80} className="mx-auto" />
            </div>
            <div className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <p className="text-xs text-[var(--primary)] mb-4">Doodle</p>
              <Icon8GlobeDoodle size={80} className="mx-auto" />
            </div>
            <div className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <p className="text-xs text-[var(--primary)] mb-4">Bubbles</p>
              <Icon8GlobeBubbles size={80} className="mx-auto" />
            </div>
          </div>
        </section>

        {/* Services mockup with 3D Fluency */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Tjenestekort med 3D Fluency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-center hover:border-[var(--primary)] transition-colors group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon8Globe size={100} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nettside</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Moderne nettsider som konverterer.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-center hover:border-[var(--primary)] transition-colors group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon8Search size={100} />
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Få bedriften til toppen av Google.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-center hover:border-[var(--primary)] transition-colors group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon8Megaphone size={100} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Markedsføring</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Kampanjer som driver trafikk.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-center">
          <h3 className="text-xl font-semibold mb-2">Hvilken stil liker du best?</h3>
          <p className="text-[var(--foreground-muted)] mb-4">
            Fortell meg hvilken stil du foretrekker, så implementerer jeg den på forsiden!
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">3D Fluency</span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">Stickers</span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">Doodle</span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">Bubbles</span>
          </div>
          <p className="text-xs text-[var(--foreground-muted)] mt-4">
            Kilde: <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Icons8.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
