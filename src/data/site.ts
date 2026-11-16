// ─────────────────────────────────────────────────────────────
//  Edit everything about your portfolio from this one file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Ruffy John A. Manito',
  role: 'Web Developer',
  location: 'Philippines',
  email: 'ruffy909@gmail.com',
  url: 'https://ruffy909.github.io',
  available: true, // shows the "Available for work" badge
  headline: 'I build fast, accessible websites that people enjoy using.',
  intro:
    'Web developer focused on performance, clean design, and code that is easy to maintain. I turn ideas into polished products, from landing pages to complete sales funnels.',
  description:
    'Portfolio of Ruffy John A. Manito, a web developer building fast, accessible and beautifully designed websites and web applications.',
  resume: '', // e.g. '/resume.pdf' (put the file in /public)
  socials: [
    { label: 'GitHub', href: 'https://github.com/ruffy909' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
    { label: 'X', href: 'https://x.com/your-username' },
  ],
};

export const about = [
  "I'm a web developer who cares about the details: how a page loads, how it feels on a phone, and whether everyone can use it. I enjoy every part of building a site, but my favourite place is where design meets code.",
  'When I start a project I focus on three things: speed, clarity, and maintainability. The result is websites that rank well, convert visitors, and are a pleasure to extend later.',
];

export const stats = [
  { value: '8+', label: 'Years experience' },
  { value: '25+', label: 'Projects shipped' },
  { value: '100', label: 'Lighthouse scores' },
];

export const skills = [
  {
    group: 'Platforms & Builders',
    items: ['WordPress', 'Elementor', 'ClickFunnels', 'GoHighLevel (GHL)'],
  },
  {
    group: 'Web Basics',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    group: 'Design',
    items: ['Figma'],
  },
  {
    group: 'Practices',
    items: ['Responsive design', 'Accessibility', 'SEO', 'Web performance', 'Landing pages'],
  },
];

// Proficiency bars in the Toolkit section. `level` is 0-100.
export const skillLevels = [
  { name: 'WordPress', level: 95 },
  { name: 'Elementor', level: 95 },
  { name: 'ClickFunnels', level: 90 },
  { name: 'GoHighLevel (GHL)', level: 90 },
  { name: 'Landing pages', level: 92 },
  { name: 'Responsive design', level: 90 },
  { name: 'HTML & CSS', level: 88 },
  { name: 'SEO', level: 85 },
];

export const projects = [
  {
    title: 'High-Converting Sales Funnel',
    description:
      'Multi-step sales funnel with opt-in, sales and thank-you pages, built to turn visitors into leads and customers.',
    tags: ['ClickFunnels', 'Landing pages'],
    live: 'https://example.com',
    code: 'https://github.com/ruffy909',
    featured: true,
  },
  {
    title: 'Business Website',
    description:
      'Fast, responsive company website with custom page designs, contact forms and on-page SEO.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    live: 'https://example.com',
    code: 'https://github.com/ruffy909',
    featured: true,
  },
  {
    title: 'Funnel & CRM Automation',
    description:
      'Lead-capture funnel connected to a CRM pipeline with automated follow-up emails and SMS.',
    tags: ['GoHighLevel (GHL)', 'Automation'],
    live: '',
    code: 'https://github.com/ruffy909',
    featured: false,
  },
  {
    title: 'Restaurant Website',
    description:
      'Responsive site with online menu, reservations form and a CMS so the owner can update content.',
    tags: ['WordPress', 'Elementor', 'CSS'],
    live: 'https://example.com',
    code: '',
    featured: false,
  },
];

export const experience = [
  {
    role: 'Project Technical Lead',
    company: 'Yes2Landing Page · Kuala Lumpur, Malaysia',
    period: '2020 - Present',
    summary:
      'Leading the technical side of client projects: planning, building and launching high-converting landing pages and websites, and guiding the team from design to delivery.',
  },
  {
    role: 'WordPress Web Developer',
    company: 'Night Birds Solutions · Philippines',
    period: '2018 - 2020',
    summary:
      'Built and maintained custom WordPress websites for clients, including themes, plugins, page builders and responsive layouts.',
  },
  {
    role: 'Customer Sales Representative',
    company: 'Panasiatic Solutions · Philippines',
    period: '2017 - 2018',
    summary:
      'Supported customers and drove sales, building the communication and client-handling skills I now bring to every web project.',
  },
];
