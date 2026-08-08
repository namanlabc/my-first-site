export interface Project {
  name: string;
  description: string;
  href: string;
  status: string;
  kind: string;
  external?: boolean;
  details: string[];
}

export const projects: Project[] = [
  {
    name: 'Get Random Letter',
    description:
      'Fast, focused random pickers for games, classrooms, decisions, and everyday use.',
    href: 'https://getrandomletter.com/',
    status: 'Live',
    kind: 'Web tools',
    external: true,
    details: ['Quick random picks', 'Games & classrooms', 'Browser-based'],
  },
  {
    name: 'Naman.blog',
    description:
      'This personal site: a lightweight Astro publication and a place to keep experimenting in public.',
    href: '/about/',
    status: 'Ongoing',
    kind: 'Personal web',
    details: ['Personal publication', 'Astro + Markdown', 'No client framework'],
  },
];
