"use client";

import { 
  Globe3D, 
  Search3D, 
  Megaphone3D, 
  Chart3D, 
  Palette3D, 
  Gear3D, 
  Rocket3D, 
  Lightbulb3D,
  Shield3D 
} from "@/components/Illustrations3D";

export default function IllustrasjonerDemo() {
  const illustrations = [
    { name: "Globe / Nettside", component: Globe3D, description: "Perfekt for nettside-tjenester" },
    { name: "Search / SEO", component: Search3D, description: "For søkemotor-optimalisering" },
    { name: "Megaphone / Marketing", component: Megaphone3D, description: "Digital markedsføring" },
    { name: "Chart / Analytics", component: Chart3D, description: "Data og analyse" },
    { name: "Palette / Design", component: Palette3D, description: "Merkevarebygging" },
    { name: "Gear / Support", component: Gear3D, description: "Vedlikehold og support" },
    { name: "Rocket / Growth", component: Rocket3D, description: "Vekst og fremgang" },
    { name: "Lightbulb / Ideas", component: Lightbulb3D, description: "Innovasjon og ideer" },
    { name: "Shield / Security", component: Shield3D, description: "Sikkerhet og pålitelighet" },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4 text-center">3D Illustrasjoner</h1>
        <p className="text-[var(--foreground-muted)] text-center mb-4">
          Egenproduserte 3D-stil illustrasjoner - helt gratis, ingen Icons8 nødvendig! 🎨
        </p>
        <p className="text-sm text-[var(--primary)] text-center mb-16">
          Alle illustrasjonene matcher fargepaletten på nettsiden (coral, amber, teal)
        </p>

        {/* Grid of illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {illustrations.map((item) => (
            <div 
              key={item.name}
              className="p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center text-center hover:border-[var(--primary)] transition-colors"
            >
              <item.component size={140} className="mb-6" />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Size examples */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Størrelser</h2>
          <div className="flex items-end justify-center gap-8 p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="text-center">
              <Rocket3D size={60} />
              <p className="text-xs text-[var(--foreground-muted)] mt-2">60px</p>
            </div>
            <div className="text-center">
              <Rocket3D size={80} />
              <p className="text-xs text-[var(--foreground-muted)] mt-2">80px</p>
            </div>
            <div className="text-center">
              <Rocket3D size={120} />
              <p className="text-xs text-[var(--foreground-muted)] mt-2">120px</p>
            </div>
            <div className="text-center">
              <Rocket3D size={160} />
              <p className="text-xs text-[var(--foreground-muted)] mt-2">160px</p>
            </div>
          </div>
        </section>

        {/* Usage example - Services section mockup */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Brukseksempel: Tjenester</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <Globe3D size={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nettside</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Moderne, raske nettsider som konverterer besøkende til kunder.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <Search3D size={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Få bedriften din til toppen av søkeresultatene.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] text-center">
              <Megaphone3D size={100} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Markedsføring</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                Strategiske kampanjer som driver kvalifisert trafikk.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 text-center">
          <h3 className="text-xl font-semibold mb-2">Liker du illustrasjonene?</h3>
          <p className="text-[var(--foreground-muted)]">
            Si ifra så implementerer jeg dem på de aktuelle sidene!
          </p>
        </div>
      </div>
    </div>
  );
}

