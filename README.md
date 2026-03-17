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

## Contactformulier (Web3Forms)

1. Key aanmaken op [web3forms.com](https://web3forms.com)
2. `.env.example` → `.env.local`
3. `WEB3FORMS_ACCESS_KEY=jouw_key`

Zonder key: melding in het formulier; bellen en e-mail blijven werken.

## Logo & beelden

- **Logo:** `public/logo.svg`
- **Foto’s:** `public/images/` — paden in `src/content/site.ts` (`hero.imageSrc`, `about.imageSrc`, per project `imageSrc`)

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
