"use client";

import { motion } from "framer-motion";

export default function Vilkar() {
  return (
    <div className="pt-24">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Vilkår og Betingelser
            </h1>
            <p className="text-[var(--foreground-muted)] mb-12">
              Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Generelt</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Disse vilkårene gjelder for alle tjenester levert av IntelliSense. 
                  Ved å bruke våre tjenester aksepterer du disse vilkårene i sin helhet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Tjenestebeskrivelse</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  IntelliSense tilbyr digitale tjenester inkludert, men ikke begrenset til, 
                  nettside-utvikling, SEO-optimalisering, digital markedsføring og merkevarebygging. 
                  Detaljert omfang av tjenester avtales i separate kontrakter eller tilbud.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Priser og Betaling</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  Alle priser oppgis eksklusiv merverdiavgift med mindre annet er spesifisert. 
                  Betalingsbetingelser:
                </p>
                <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-2">
                  <li>Etableringskostnad faktureres ved prosjektstart</li>
                  <li>Månedlige kostnader faktureres forskuddsvis</li>
                  <li>Betalingsfrist er 14 dager fra fakturadato</li>
                  <li>Ved forsinket betaling påløper forsinkelsesrente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Oppsigelse</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Avtalen kan sies opp av begge parter med én måneds skriftlig varsel. 
                  Ved oppsigelse faktureres eventuelle utestående beløp og påløpte kostnader 
                  frem til oppsigelsesdato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Immaterielle Rettigheter</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Kunden beholder eierskap til alt innhold de leverer. Ved full betaling 
                  overføres eierskap til skreddersydd design og kode til kunden. 
                  IntelliSense AI beholder rett til å bruke generiske komponenter og verktøy 
                  i andre prosjekter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Ansvarsbegrensning</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  IntelliSense er ikke ansvarlig for indirekte tap, tapt fortjeneste eller 
                  følgeskader. Vårt totale ansvar er begrenset til beløpet kunden har betalt 
                  for de aktuelle tjenestene de siste 12 månedene.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Konfidensialitet</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Begge parter forplikter seg til å behandle konfidensiell informasjon 
                  med forsiktighet og ikke dele den med tredjeparter uten skriftlig samtykke.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Endringer i Vilkår</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Vi forbeholder oss retten til å endre disse vilkårene. Vesentlige endringer 
                  vil bli varslet med 30 dagers forvarsel. Fortsatt bruk av tjenestene etter 
                  endringer anses som aksept av de nye vilkårene.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Lovvalg og Tvister</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal først 
                  søkes løst gjennom forhandlinger. Dersom enighet ikke oppnås, skal tvisten 
                  avgjøres ved Oslo tingrett.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Kontakt</h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  For spørsmål om disse vilkårene, kontakt oss på:
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

