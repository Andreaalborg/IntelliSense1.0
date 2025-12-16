"use client";

import Logo, { LogoAlt, LogoArrows, LogoPurple, LogoChevrons } from "@/components/Logo";

export default function LogoDemo() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4 text-center">Logo Varianter</h1>
        <p className="text-[var(--foreground-muted)] text-center mb-16">
          Velg den logoen du liker best. Alle finnes i både lys og mørk variant.
        </p>

        {/* Logo 4: Purple - Like reference image */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              ⭐ Variant 4: Lilla/Blå (som referanse-bildet)
            </span>
          </h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            Doble piler med lilla/blå gradient. Matcher referanse-bildet du viste.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center gap-8">
              <p className="text-sm text-[var(--foreground-muted)]">Mørk bakgrunn</p>
              <LogoPurple variant="dark" size="lg" />
              <LogoPurple variant="dark" size="md" />
              <LogoPurple variant="dark" size="sm" />
              <LogoPurple variant="dark" size="md" showText={false} />
            </div>
            
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex flex-col items-center gap-8">
              <p className="text-sm text-white/70">Lys/farget bakgrunn</p>
              <LogoPurple variant="light" size="lg" />
              <LogoPurple variant="light" size="md" />
              <LogoPurple variant="light" size="sm" />
              <LogoPurple variant="light" size="md" showText={false} />
            </div>
          </div>
        </section>

        {/* Logo 5: Chevrons - Triple design */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] bg-clip-text text-transparent">
              ⭐ Variant 5: Chevrons (eksakt som bildet)
            </span>
          </h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            Trippel chevron-design som i referanse-bildet.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center gap-8">
              <p className="text-sm text-[var(--foreground-muted)]">Mørk bakgrunn</p>
              <LogoChevrons variant="dark" size="lg" />
              <LogoChevrons variant="dark" size="md" />
              <LogoChevrons variant="dark" size="sm" />
              <LogoChevrons variant="dark" size="md" showText={false} />
            </div>
            
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex flex-col items-center gap-8">
              <p className="text-sm text-white/70">Lys/farget bakgrunn</p>
              <LogoChevrons variant="light" size="lg" />
              <LogoChevrons variant="light" size="md" />
              <LogoChevrons variant="light" size="sm" />
              <LogoChevrons variant="light" size="md" showText={false} />
            </div>
          </div>
        </section>

        <div className="border-t border-[var(--border)] pt-16 mb-16">
          <h2 className="text-xl font-semibold mb-8 text-center text-[var(--foreground-muted)]">
            Andre varianter (coral/orange)
          </h2>
        </div>

        {/* Logo 3: Orange arrows */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 gradient-text-warm">Variant 3: Doble piler (coral/orange)</h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            Samme stil som lilla, men med coral/orange gradient som matcher resten av nettsiden.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center gap-8">
              <p className="text-sm text-[var(--foreground-muted)]">Mørk bakgrunn</p>
              <LogoArrows variant="dark" size="lg" />
              <LogoArrows variant="dark" size="md" />
              <LogoArrows variant="dark" size="md" showText={false} />
            </div>
            
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex flex-col items-center gap-8">
              <p className="text-sm text-white/70">Lys/farget bakgrunn</p>
              <LogoArrows variant="light" size="lg" />
              <LogoArrows variant="light" size="md" />
              <LogoArrows variant="light" size="md" showText={false} />
            </div>
          </div>
        </section>

        {/* Logo 1: Code brackets */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 gradient-text-warm">Variant 1: Kode-symboler</h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            Chevrons som symboliserer kode og teknologi.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center gap-8">
              <p className="text-sm text-[var(--foreground-muted)]">Mørk bakgrunn</p>
              <Logo variant="dark" size="lg" />
              <Logo variant="dark" size="md" />
              <Logo variant="dark" size="md" showText={false} />
            </div>
            
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex flex-col items-center gap-8">
              <p className="text-sm text-white/70">Lys/farget bakgrunn</p>
              <Logo variant="light" size="lg" />
              <Logo variant="light" size="md" />
              <Logo variant="light" size="md" showText={false} />
            </div>
          </div>
        </section>

        {/* Logo 2: Lightbulb */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 gradient-text-warm">Variant 2: Lyspære/Idé</h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            Lyspære som symboliserer intelligens og innovasjon.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col items-center gap-8">
              <p className="text-sm text-[var(--foreground-muted)]">Mørk bakgrunn</p>
              <LogoAlt variant="dark" size="lg" />
              <LogoAlt variant="dark" size="md" />
              <LogoAlt variant="dark" size="md" showText={false} />
            </div>
            
            <div className="p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex flex-col items-center gap-8">
              <p className="text-sm text-white/70">Lys/farget bakgrunn</p>
              <LogoAlt variant="light" size="lg" />
              <LogoAlt variant="light" size="md" />
              <LogoAlt variant="light" size="md" showText={false} />
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Side-ved-side sammenligning</h2>
          <div className="p-8 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-center">
                <Logo variant="dark" size="md" showText={false} />
                <p className="text-xs text-[var(--foreground-muted)] mt-2">1. Kode</p>
              </div>
              <div className="text-center">
                <LogoAlt variant="dark" size="md" showText={false} />
                <p className="text-xs text-[var(--foreground-muted)] mt-2">2. Lyspære</p>
              </div>
              <div className="text-center">
                <LogoArrows variant="dark" size="md" showText={false} />
                <p className="text-xs text-[var(--foreground-muted)] mt-2">3. Piler (orange)</p>
              </div>
              <div className="text-center">
                <LogoPurple variant="dark" size="md" showText={false} />
                <p className="text-xs text-[var(--foreground-muted)] mt-2">4. Piler (lilla)</p>
              </div>
              <div className="text-center">
                <LogoChevrons variant="dark" size="md" showText={false} />
                <p className="text-xs text-[var(--foreground-muted)] mt-2">5. Chevrons</p>
              </div>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[#6366f1]/20 text-center">
          <h3 className="text-xl font-semibold mb-2">Hvilken liker du best?</h3>
          <p className="text-[var(--foreground-muted)]">
            Gi meg nummeret (1-5) så oppdaterer jeg Header og Footer med din favoritt!
          </p>
          <p className="text-sm text-[var(--foreground-muted)] mt-4">
            PS: Hvis du velger lilla (4 eller 5), kan vi også oppdatere fargepaletten på hele nettsiden til å matche.
          </p>
        </div>
      </div>
    </div>
  );
}
