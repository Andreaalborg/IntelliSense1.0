"use client";

import { motion } from "framer-motion";

export default function Personvern() {
  return (
    <div className="pt-24">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Personvernerklæring
            </h1>
            <p className="text-[var(--foreground-muted)] mb-12">
              Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Innledning</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  IntelliSense AI er opptatt av å beskytte ditt personvern. Denne personvernerklæringen 
                  forklarer hvordan vi samler inn, bruker, deler og beskytter personopplysninger når du 
                  bruker våre tjenester.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Hvilke opplysninger vi samler inn</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  Vi kan samle inn følgende typer personopplysninger:
                </p>
                <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-2">
                  <li>Kontaktinformasjon (navn, e-post, telefonnummer)</li>
                  <li>Bedriftsinformasjon</li>
                  <li>Kommunikasjon med oss</li>
                  <li>Teknisk informasjon (IP-adresse, nettlesertype)</li>
                  <li>Bruksdata fra våre tjenester</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Hvordan vi bruker opplysningene</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  Vi bruker personopplysninger til følgende formål:
                </p>
                <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-2">
                  <li>Levere og forbedre våre tjenester</li>
                  <li>Kommunisere med deg om prosjekter og tjenester</li>
                  <li>Sende relevant informasjon og oppdateringer</li>
                  <li>Analysere og forbedre brukeropplevelsen</li>
                  <li>Overholde lovpålagte krav</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Deling av informasjon</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Vi selger aldri dine personopplysninger. Vi kan dele informasjon med tredjeparter 
                  kun når det er nødvendig for å levere våre tjenester, eller når vi er juridisk 
                  forpliktet til det.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Dine rettigheter</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  Du har følgende rettigheter i henhold til GDPR:
                </p>
                <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-2">
                  <li>Rett til innsyn i dine personopplysninger</li>
                  <li>Rett til å korrigere unøyaktige opplysninger</li>
                  <li>Rett til å slette dine opplysninger</li>
                  <li>Rett til å begrense behandlingen</li>
                  <li>Rett til dataportabilitet</li>
                  <li>Rett til å protestere mot behandling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Informasjonskapsler (Cookies)</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Vi bruker informasjonskapsler for å forbedre brukeropplevelsen og analysere 
                  nettstedtrafikk. Du kan administrere dine preferanser for informasjonskapsler 
                  i nettleseren din.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Kontakt oss</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Hvis du har spørsmål om denne personvernerklæringen eller ønsker å utøve dine 
                  rettigheter, kan du kontakte oss på:
                </p>
                <p className="text-[var(--foreground)] mt-4">
                  E-post: <a href="mailto:hei@intellisenseai.no" className="text-[var(--primary)] hover:underline">hei@intellisenseai.no</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

