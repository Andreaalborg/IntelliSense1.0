# TODO: Prosjekt-seksjon

> Planlagt funksjon for å vise frem tidligere arbeider på nettsiden.

---

## Oversikt

**Status:** Implementert (feature-flag av som default)  
**Prioritet:** Middels  
**Estimert arbeid:** ~30 min

---

## Plassering

Legges på **hjemmesiden** (`src/app/page.tsx`) mellom Services og Process:

```
Hero
Services
→ Projects (NY)
Process
Testimonials
Pricing
CTA
```

---

## Design

### Layout
- **Desktop:** 2x2 grid
- **Mobil:** Stacked vertikalt

### Hvert prosjektkort
- Stort bilde/screenshot (fyller kortet)
- Prosjektnavn (overlay eller under bildet)
- Hover-effekt: Zoom på bilde + "Se prosjekt"-knapp
- Link til live nettside

### Stil
- Ingen beskrivelse eller tags - rent og visuelt
- Matcher eksisterende stil med Framer Motion animasjoner
- Border og hover-effekter som resten av siden

---

## Filer som må lages/endres

1. **Ny komponent:** `src/components/Projects.tsx`
2. **Oppdater:** `src/app/page.tsx` (importer og legg til komponenten)
3. **Bilder:** Legg screenshots i `/public/projects/`

---

## Prosjekter å inkludere

Fyll inn her:

| Prosjekt | Bilde | Live URL |
|----------|-------|----------|
| Prosjekt 1 | `/projects/prosjekt1.jpg` | https://... |
| Prosjekt 2 | `/projects/prosjekt2.jpg` | https://... |
| Prosjekt 3 | `/projects/prosjekt3.jpg` | https://... |
| Prosjekt 4 | `/projects/prosjekt4.jpg` | https://... |

---

## Bildeformat

**Anbefalt:**
- Format: `.jpg` eller `.webp`
- Størrelse: 1200x800px (3:2 ratio)
- Optimalisert for web (under 200KB per bilde)

**Tips:** Ta full-page screenshot med nettleser eller bruk verktøy som [Screenshot.rocks](https://screenshot.rocks) for pene mockups.

---

## Når du er klar

Si bare "lag prosjekt-seksjonen" så implementerer vi planen!
