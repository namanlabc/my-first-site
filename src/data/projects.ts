export interface Project {
  name: string;
  description: string;
  href?: string;
  status: string;
  kind: string;
  external?: boolean;
  details: string[];
}

export const projects: Project[] = [
  {
    name: 'Get Random Letter',
    description:
      'It started as one random-letter wheel and somehow turned into six small browser tools for games, classrooms, quick decisions, and wonderfully pointless fun.',
    href: 'https://getrandomletter.com/',
    status: 'Live',
    kind: 'Web tools',
    external: true,
    details: ['6 live tools', 'No sign-up', 'Works in the browser'],
  },
  {
    name: 'Calm WP',
    description:
      'A WordPress theme I’m building around a calmer, cleaner reading experience. It’s in beta while I keep refining the details.',
    status: 'Beta',
    kind: 'WordPress theme',
    details: ['WordPress theme', 'Beta build', 'Still evolving'],
  },
  {
    name: 'Naman.blog',
    description:
      'My place for projects, experiments, and thoughts that are too long for a social post. Also the site I keep redesigning because apparently I enjoy that.',
    href: '/about/',
    status: 'Ongoing',
    kind: 'Personal web',
    details: ['Astro + Markdown', 'Writing + projects', 'Always being tweaked'],
  },
];
