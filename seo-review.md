# SEO Review — arielcnd.com
**Data:** juny 2026 · **Revisat per:** extern

---

## 1. Pàgines actives

### `/` — Home
- **Title:** `Ariel Conde | Product Designer`
- **Description:** Ariel Conde is a product designer with 15 years of experience helping climate-conscious and wellbeing-focused companies build digital experiences that are accessible, sustainable and purposeful.
- **Estat:** Activa, indexable
- **Notes:** Title sense prefix de secció, bé com a home. Description clara i diferenciadora.

---

### `/about` — About
- **Title:** `About · Ariel Conde | Product Designer`
- **Description:** Ariel Conde is a product designer with 15 years of experience in consumer apps, e-commerce, IoT and sustainable design. Based in Catalonia, open to remote and hybrid roles across Europe.
- **Estat:** Activa, indexable
- **Notes:** Bona descripció. Menciona Catalonia + Europe, útil per a cerca geogràfica.

---

### `/contact` — Contact
- **Title:** `Contact · Ariel Conde | Product Designer`
- **Description:** Get in touch with Ariel Conde, product designer based in Catalonia. Open to product designer roles at purpose-driven consumer companies across Europe.
- **Estat:** Activa, indexable
- **Notes:** Description orientada a reclutadors. Consistent amb el propòsit de la web.

---

### `/portfolio` — Portfolio index
- **Title:** `Portfolio — Ariel Conde | Product Designer`
- **Description:** Selected product design case studies by Ariel Conde. UX research, e-commerce, sustainable fashion and luxury retail.
- **Estat:** ⚠️ **Desactivada temporalment** — redirigeix a 404 (302)
- **Notes:** Bona description quan torni a activar-se. El separador `—` no és consistent amb la resta de títols que usen `·`.

---

### `/portfolio/[slug]` — Case studies individuals
- **Title:** (dinàmic, des de la col·lecció de contingut)
- **Description:** (dinàmica)
- **Estat:** ⚠️ **Desactivades temporalment** — `getStaticPaths` retorna buit
- **Notes:** Cal revisar que cada case study tingui title i description únics quan es reactivi.

---

## 2. Pàgines amb problemes

### `/pricing` — Pricing
- **Title:** `Pricing · Stone` 🔴
- **Description:** Find the pricing plan that best fits your needs. Plans include seats, projects, support and more 🔴
- **Estat:** Activa, indexable
- **Problemes:**
  - Title conté `Stone` — nom d'una plantilla, no d'aquesta web
  - Description completament genèrica, no fa cap referència a Ariel Conde
- **Acció recomanada:** Actualitzar o eliminar la pàgina si no és públicament necessària

---

### `/b2b` — Descàrrega PDF (públic)
- **Title:** `Portfolio · Ariel Conde`
- **Description:** Ariel Conde — Product & UX Designer. Descarga el portfolio completo en PDF. 🔴
- **Estat:** Activa, indexable
- **Problemes:**
  - Description en castellà (la web és en anglès)
  - Contingut de la pàgina en castellà: "Hola, soy Ariel Conde", "Descargar portfolio en PDF"
  - Title duplicat amb `/portfolio`
- **Acció recomanada:** Traduir al anglès o restringir a no-indexable si és una pàgina d'ús intern (per enviar a reclutadors)

---

### `/pdf` — Descàrrega PDF (alternativa)
- **Title:** `Download Latest Portfolio · Ariel Conde`
- **Description:** Oops! The page you're looking for is missing. Download the latest version of my portfolio in PDF format and explore my work. 🟡
- **Estat:** Activa, indexable
- **Problemes:**
  - Description comença amb "Oops!" — sembla un text de pàgina 404, indexable com a landing
  - L'enllaç del PDF apunta a `/src/content/2024-10-14-portfolio-arielcnd.pdf` — ruta de build que probablement no existeix en producció
  - Data de la pàgina: "April 10, 2026" — correcte si és actual
- **Acció recomanada:** Corregir la description i verificar que el PDF és accessible en producció

---

## 3. Pàgines legals

### `/legal` — Legal Notice
- **Title:** `Legal Notice · Ariel Conde Portfolio`
- **Description:** Discover the Legal Notice of Ariel Conde Manyoses... (160+ caràcters) 🟡
- **Notes:** La description supera els ~155 caràcters recomanats. Considerar noindex.

### `/privacy` — Privacy Policy
- **Title:** `Privacy policy · Ariel Conde Portfolio`
- **Description:** Review the Privacy Policy of Ariel Conde Manyoses, updated in 2024... (160+ caràcters) 🟡
- **Notes:** Afegir any actualitzat (2024 → 2025/2026). Considerar noindex.

### `/cookies` — Cookies Policy
- **Title:** `Cookies policy (UE) · Ariel Conde Portfolio`
- **Description:** Learn about our Cookies Policy and how we use cookies... (160+ caràcters) 🟡
- **Notes:** Description massa llarga. Considerar noindex.

---

## 4. Gaps globals de SEO

### No presents al Layout
| Element | Estat | Impacte |
|---------|-------|---------|
| `og:title` | ❌ Absent | Alt — compartir a LinkedIn/Twitter sense preview |
| `og:description` | ❌ Absent | Alt |
| `og:image` | ❌ Absent | Alt — recomanat per a candidatures |
| `og:url` | ❌ Absent | Mitjà |
| `twitter:card` | ❌ Absent | Mitjà |
| `<link rel="canonical">` | ❌ Absent | Alt — risc de contingut duplicat |
| `robots.txt` | ❌ Absent | Alt — Google no té instruccions de rastreig |
| `sitemap.xml` | ❌ Absent | Alt — indexació incompleta possible |
| Schema.org `Person` | ❌ Absent | Mitjà — rich results per a perfils de professional |

### Analytics i privadesa
| Eina | Estat | Notes |
|------|-------|-------|
| Umami | ✅ Present | Analítica privadesa-friendly, sense cookies de tercers |
| Hotjar | ⚠️ Present | Requereix consentiment explícit (ja té Cookiebot) |
| Cookiebot | ✅ Present | Gestió de consentiment activa |

---

## 5. Resum de prioritats

| Prioritat | Problema | Pàgina |
|-----------|----------|--------|
| 🔴 Alta | Title amb marca "Stone" sense actualitzar | `/pricing` |
| 🔴 Alta | Contingut i description en castellà | `/b2b` |
| 🔴 Alta | Absència de `robots.txt` | Global |
| 🔴 Alta | Absència de `sitemap.xml` | Global |
| 🔴 Alta | Absència de tags Open Graph | Global |
| 🔴 Alta | Absència de `<link rel="canonical">` | Global |
| 🟡 Mitjana | Description amb "Oops!" indexable | `/pdf` |
| 🟡 Mitjana | Ruta PDF probablement trencada | `/pdf` |
| 🟡 Mitjana | Descriptions legals massa llargues | `/legal`, `/privacy`, `/cookies` |
| 🟢 Baixa | Separador inconsistent `—` vs `·` al title | `/portfolio` |
| 🟢 Baixa | Any "2024" desactualitzat a Privacy Policy | `/privacy` |
