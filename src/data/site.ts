// ─────────────────────────────────────────────────────────────
//  Edit everything about your portfolio from this one file.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Ruffy John A. Manito',
  role: 'Web Developer',
  location: 'Philippines',
  email: 'designyes2landingpage@gmail.com',
  url: 'https://ruffy909.github.io',
  available: true, // shows the "Available for work" badge
  headline: 'I build fast, accessible websites that people enjoy using.',
  intro:
    'Web developer focused on performance, clean design, and code that is easy to maintain. I turn ideas into polished products — from landing pages to full web apps.',
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
  "I'm a web developer who cares about the details — how a page loads, how it feels on a phone, and whether everyone can use it. I enjoy working across the stack, but my favourite place is where design meets code.",
  'When I start a project I focus on three things: speed, clarity, and maintainability. The result is websites that rank well, convert visitors, and are a pleasure to extend later.',
];

export const stats = [
  { value: '8+', label: 'Years experience' },
  { value: '25+', label: 'Projects shipped' },
  { value: '100', label: 'Lighthouse scores' },
];

export const skills = [
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    group: 'Tools & Platforms',
    items: ['Git', 'Figma', 'Vite', 'Vercel', 'Netlify', 'WordPress', 'Elementor'],
  },
  {
    group: 'Practices',
    items: ['Responsive design', 'Accessibility', 'SEO', 'Web performance', 'Landing pages'],
  },
];

export const projects = [
  {
    title: 'SaaS Landing Page',
    description:
      'High-converting marketing site with animated sections, pricing tables and a blog. Scores 100 on every Lighthouse category.',
    tags: ['Astro', 'Tailwind', 'SEO'],
    live: 'https://example.com',
    code: 'https://github.com/ruffy909',
    featured: true,
  },
  {
    title: 'E-commerce Storefront',
    description:
      'Headless storefront with product filtering, cart, and checkout integration. Built for speed on low-end mobile devices.',
    tags: ['React', 'TypeScript', 'Stripe'],
    live: 'https://example.com',
    code: 'https://github.com/ruffy909',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Full-stack productivity app with authentication, drag-and-drop boards and real-time updates.',
    tags: ['Node.js', 'PostgreSQL', 'React'],
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
    period: '2020 — Present',
    summary:
      'Leading the technical side of client projects — planning, building and launching high-converting landing pages and websites, and guiding the team from design to delivery.',
  },
  {
    role: 'WordPress Web Developer',
    company: 'Night Birds Solutions',
    period: '2018 — 2020',
    summary:
      'Built and maintained custom WordPress websites for clients — themes, plugins, page builders and responsive layouts.',
  },
];
