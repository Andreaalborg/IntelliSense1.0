"use client";

import { LogoArrows, LogoHollow, LogoMinimal, LogoSignature } from "@/components/Logo";

export default function LogoDemo() {
  const variants = [
    { name: "LogoArrows", component: LogoArrows, description: "Standard versjon med fylt bakgrunn" },
    { name: "LogoHollow", component: LogoHollow, description: "Gjennomsiktig bakgrunn for e-post signaturer" },
    { name: "LogoMinimal", component: LogoMinimal, description: "Kun pil-symboler, perfekt for minimalistisk design" },
    { name: "LogoSignature", component: LogoSignature, description: "Kompakt versjon optimalisert for e-post signaturer" },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Logo <span className="gradient-text-warm">Varianter</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {variants.map((variant) => (
            <div key={variant.name} className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border)]">
              <h2 className="text-2xl font-semibold mb-4">{variant.name}</h2>
              <p className="text-[var(--foreground-muted)] mb-8">{variant.description}</p>

              <div className="space-y-6">
                {/* Dark variant */}
                <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Mørk bakgrunn</h3>
                  <variant.component variant="dark" size="md" />
                </div>

                {/* Light variant */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Lys bakgrunn</h3>
                  <variant.component variant="light" size="md" />
                </div>

                {/* Different sizes */}
                <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Ulike størrelser</h3>
                  <div className="flex flex-col gap-4">
                    <variant.component variant="dark" size="sm" />
                    <variant.component variant="dark" size="md" />
                    <variant.component variant="dark" size="lg" />
                  </div>
                </div>

                {/* Without text */}
                <div className="bg-[var(--background-secondary)] p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Kun ikon</h3>
                  <variant.component variant="dark" size="md" showText={false} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage examples */}
        <div className="mt-16 bg-[var(--surface)] p-8 rounded-xl border border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-6">Brukseksempler</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email signature example */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">E-post signatur</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <LogoSignature variant="light" size="sm" />
                  <span className="text-gray-800">Andrea Alborg</span>
                </div>
                <p className="text-gray-600">Daglig leder | IntelliSense</p>
                <p className="text-gray-600">+47 467 44 670 | andreaalborg@intellisenseai.no</p>
                <p className="text-gray-600">www.intellisenseai.no</p>
              </div>
            </div>

            {/* Business card example */}
            <div className="bg-gradient-to-br from-[#ff6b4a] to-[#ffb347] p-6 rounded-lg text-white">
              <h3 className="text-lg font-medium mb-4">Visittkort</h3>
              <div className="flex items-center gap-4">
                <LogoMinimal variant="dark" size="md" showText={false} />
                <div>
                  <h4 className="font-bold text-lg">IntelliSense</h4>
                  <p className="text-sm opacity-90">Digitale løsninger</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download section */}
        <div className="mt-12 bg-[var(--background-secondary)] p-8 rounded-xl border border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-6">Last ned logoer</h2>
          <p className="text-[var(--foreground-muted)] mb-6">
            Du kan bruke disse logo-variantene i forskjellige sammenhenger.
            De hollow variantene (LogoHollow, LogoMinimal, LogoSignature) er spesielt laget for e-post signaturer og steder hvor du vil ha gjennomsiktig bakgrunn.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-[var(--primary)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors">
              Last ned SVG
            </button>
            <button className="bg-[var(--secondary)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--secondary-hover)] transition-colors">
              Last ned PNG
            </button>
            <button className="bg-[var(--surface)] border border-[var(--border)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-hover)] transition-colors">
              Last ned PDF
            </button>
            <button className="bg-[var(--surface)] border border-[var(--border)] py-3 px-6 rounded-lg font-medium hover:bg-[var(--surface-hover)] transition-colors">
              Retningslinjer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
