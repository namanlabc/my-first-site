export interface Project {
  name: string;
  description: string;
  href?: string;
  status: string;
  kind: string;
  external?: boolean;
  details: string[];
  visual?: 'audit' | 'wheel' | 'calm' | 'notes' | 'smallmb';
}

export const projects: Project[] = [
  {
    name: 'SmallMB',
    description:
      'A private Android utility for shrinking photos and PDFs, resizing images, and converting files — all on-device.',
    status: 'Live',
    href: 'https://smallmb.com/',
    external: true,
    kind: 'Android app',
    details: ['On-device processing', 'Image + PDF tools', 'No account needed'],
    visual: 'smallmb',
  },
  {
    name: 'GeoSpoof',
    description:
      'An Android geotag photo editor for changing GPS location, date and time, map stamps, and EXIF location data.',
    status: 'Production approved',
    kind: 'Android app',
    details: ['Geotag editing', 'Map stamps', 'Live GPS photos'],
    visual: 'smallmb',
  },
  {
    name: 'CatToy',
    description:
      'A minimal hunting game for cats with mice, lizards, flies, fish, and other things worth chasing across a screen.',
    status: 'Production approved',
    kind: 'Android game',
    details: ['Six prey modes', 'Mix mode', 'Made for cats'],
    visual: 'notes',
  },
  {
    name: 'Astro SEO Audit',
    description:
      'An open-source CLI I built to check the final HTML an Astro site ships, find site-wide SEO issues, and catch real errors before deployment.',
    href: 'https://github.com/namanlabc/astro-seo-audit',
    status: 'Open source',
    kind: 'Developer tool',
    external: true,
    details: ['Astro-native CLI', 'Site-wide HTML audit', 'CI quality gates'],
    visual: 'audit',
  },
  {
    name: 'Get Random Letter',
    description:
      'It started as one random-letter wheel and somehow turned into six small browser tools for games, classrooms, quick decisions, and wonderfully pointless fun.',
    href: 'https://getrandomletter.com/',
    status: 'Live',
    kind: 'Web tools',
    external: true,
    details: ['6 live tools', 'No sign-up', 'Works in the browser'],
    visual: 'wheel',
  },
  {
    name: 'Calm WP',
    description:
      'A WordPress theme I’m building around a calmer, cleaner reading experience. It’s in beta while I keep refining the details.',
    status: 'Beta',
    kind: 'WordPress theme',
    details: ['WordPress theme', 'Beta build', 'Still evolving'],
    visual: 'calm',
  },
  {
    name: 'Naman.blog',
    description:
      'My place for projects, experiments, and thoughts that are too long for a social post. Also the site I keep redesigning because apparently I enjoy that.',
    href: '/about/',
    status: 'Ongoing',
    kind: 'Personal web',
    details: ['Astro + Markdown', 'Writing + projects', 'Always being tweaked'],
    visual: 'notes',
  },
];
