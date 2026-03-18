# Onze Bouwgroep — website

Next.js one-pager (Nederlands): schilderwerk, renovatie, bouwprojecten. Structuur volgens projectbrief: Hero, Over ons, Diensten, Projecten, Waarom wij, Contact + sticky header, smooth scroll, Web3Forms.

## Ontwikkeling

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Contact

Het contactformulier is verwijderd. Bellen en e-mailen blijven werken via de contactsectie.

## Logo & beelden

- **Logo:** `public/logo-final.svg`
- **Foto’s:** niet meer gebruikt (alle foto-componenten zijn vervangen door tekst + decoratieve logo/lines)

## Teksten & content

Alles in **`src/content/site.ts`** (nav, hero, about, diensten, projecten, contact).

## SEO & toegankelijkheid

- `metadata` + `metadataBase` in `src/app/layout.tsx` (pas domein aan indien nodig)
- JSON-LD `LocalBusiness` in `src/components/JsonLd.tsx`
- Skip-link „Naar hoofdinhoud“, focus-states, formulierlabels
- Minder beweging: `prefers-reduced-motion` (geen scroll-animaties, geen fade-in)

## Secties (componenten)

| Sectie   | Component        |
| -------- | ---------------- |
| Header   | `Header.tsx`     |
| Hero     | `Hero.tsx`       |
| Over ons | `AboutSection`   |
| Diensten | `ServicesGrid`   |
| Projecten| `ProjectsSection`|
| Waarom   | `WhyUs`          |
| Contact  | `ContactSection` |
| Footer   | `Footer`         |

## Productie

```bash
npm run build
npm start
```

## GitHub Pages (statische export)

Build pravi folder **`out/`** (čist HTML, CSS, JS).

1. Repo → **Settings → Pages**: Source **GitHub Actions**
2. Geen extra secrets nodig
3. Push na `main` pokreće [deploy-github-pages](.github/workflows/deploy-github-pages.yml)

- Repo **`username.github.io`** → sajt na `https://username.github.io/` (`NEXT_PUBLIC_BASE_PATH` prazan)
- Običan repo npr. **`onzebouwgroep.nl`** → `https://username.github.io/onzebouwgroep.nl/`

Lokalno sa podputanjom: `NEXT_PUBLIC_BASE_PATH=/ime-repa npm run build` pa otvori `out/index.html` preko lokalnog servera (ne `file://`).
