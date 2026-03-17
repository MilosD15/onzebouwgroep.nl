export const company = {
  name: 'Onze Bouwgroep',
  tagline: 'Schilderwerk, renovatie en bouwprojecten in heel Nederland',
  address: 'Venusstraat 68, 2402 XS, Alphen aan den Rijn, Nederland',
  phones: ['0642759300', '0644296350'],
  email: 'office@onzebouwgroep.nl',
  kvk: '97064742',
  legalForm: 'VOF',
}

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#over-ons', label: 'Over ons' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#projecten', label: 'Projecten' },
  { href: '#waarom', label: 'Waarom wij' },
  { href: '#contact', label: 'Contact' },
]

export const hero = {
  headline: 'Betrouwbaar schilderwerk, renovatie en bouwprojecten in heel Nederland',
  subheadline:
    'Onze Bouwgroep helpt bij schilderwerken, renovaties en diverse bouwprojecten voor woningen, gebouwen en zakelijke panden.',
  ctaPrimary: 'Offerte aanvragen',
  ctaSecondary: 'Contact opnemen',
  ctaProjects: 'Bekijk onze projecten',
  imageSrc: '/images/radnici-na-skeli.png',
  imageAlt: 'Schilderwerk op locatie — team aan het werk op steigers',
}

export const about = {
  title: 'Over Onze Bouwgroep',
  body:
    'Onze Bouwgroep is een betrouwbare partner voor schilderwerk, renovatie en diverse bouwwerkzaamheden in Nederland. Wij werken aan woningen, gebouwen en uiteenlopende projecten met oog voor kwaliteit, afwerking en duidelijke communicatie.',
  imageSrc: '/images/materijali.png',
  imageAlt: 'Kwaliteitsmaterialen en professionele afwerking op de bouwplaats',
}

export type Service = {
  id: string
  title: string
  description: string
  icon: 'paint' | 'home' | 'hammer' | 'brush' | 'building' | 'wrench'
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Binnenschilderwerk',
    description:
      'Strak en duurzaam schilderwerk voor muren, plafonds en houtwerk binnenshuis.',
    icon: 'brush',
  },
  {
    id: '2',
    title: 'Buitenschilderwerk',
    description:
      'Weerbestendige afwerking van kozijnen, gevels en houtwerk voor een langdurig resultaat.',
    icon: 'paint',
  },
  {
    id: '3',
    title: 'Renovatiewerk',
    description:
      'Renovatie van woningen en panden, van planning tot oplevering.',
    icon: 'home',
  },
  {
    id: '4',
    title: 'Onderhoud en afwerking',
    description:
      'Periodiek onderhoud en nette afwerking zodat uw pand er verzorgd uitziet.',
    icon: 'hammer',
  },
  {
    id: '5',
    title: 'Gevelprojecten',
    description:
      'Gevel- en gebouwgerelateerde werkzaamheden met aandacht voor detail en veiligheid.',
    icon: 'building',
  },
  {
    id: '6',
    title: 'Allround bouwwerkzaamheden',
    description:
      'Diverse bouwklussen en projecten, klein en groot, door heel Nederland.',
    icon: 'wrench',
  },
]

export type Project = {
  id: string
  title: string
  type: string
  location: string
  description: string
  featured?: boolean
  /** Set to real path e.g. /images/project-1.jpg when photos are ready */
  imageSrc?: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Schilderwerk appartementencomplex',
    type: 'Buitenwerk en afwerking',
    location: 'Amsterdam',
    description:
      'Professioneel schilderwerk en renovatie van buitengevels.',
    featured: true,
    imageSrc: '/images/radnici-farbaju-prozor.png',
  },
  {
    id: 'p2',
    title: 'Renovatie rijtjeswoning',
    type: 'Renovatie',
    location: 'Alphen aan den Rijn',
    description: 'Binnen- en buitenschilderwerk en kleine verbouwingen.',
    imageSrc: '/images/auto.png',
  },
  {
    id: 'p3',
    title: 'Zakelijk pand',
    type: 'Binnenschilderwerk',
    location: 'Den Haag',
    description: 'Snelle uitvoering met minimale overlast voor huurders.',
    imageSrc: '/images/radnici-na-skeli.png',
  },
  {
    id: 'p4',
    title: 'Vrijstaande woning',
    type: 'Buitenschilderwerk',
    location: 'Utrecht',
    description: 'Complete gevelbehandeling en onderhoudsplan.',
    imageSrc: '/images/materijali.png',
  },
]

export const whyUs = {
  title: 'Waarom Onze Bouwgroep',
  items: [
    { title: 'Kwalitatieve afwerking', icon: 'award' as const },
    { title: 'Duidelijke communicatie', icon: 'message' as const },
    { title: 'Betrouwbare planning', icon: 'calendar' as const },
    { title: 'Werkzaam in heel Nederland', icon: 'map' as const },
    { title: 'Kleine en grote projecten', icon: 'scale' as const },
    { title: 'Persoonlijke aanpak', icon: 'users' as const },
  ],
}

export const contact = {
  title: 'Contact',
  intro: 'Vraag direct een offerte aan of neem contact met ons op.',
  ctaQuote: 'Vraag direct een offerte aan',
  ctaContact: 'Neem contact met ons op',
  formName: 'Naam',
  formEmail: 'E-mail',
  formPhone: 'Telefoon (optioneel)',
  formMessage: 'Bericht',
  formSubmit: 'Versturen',
  formSuccess: 'Bedankt! We nemen zo snel mogelijk contact met u op.',
  formError: 'Er ging iets mis. Probeer het opnieuw of bel ons.',
  formValidation: 'Vul naam, e-mail en bericht in.',
  formConfigHint:
    'Stel WEB3FORMS_ACCESS_KEY in (.env.local) om het formulier te activeren.',
}

export const footer = {
  shortDescription:
    'Schilderwerk, renovatie en bouwprojecten in heel Nederland.',
  copyright: 'Onze Bouwgroep',
}
