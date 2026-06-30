export const PROJECT_TABS = [
  {
    key: 'featured',
    label: 'Featured',
    paths: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    paths: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  },
  {
    key: 'database',
    label: 'Database',
    paths: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  },
  {
    key: 'uiux',
    label: 'UI/UX Design',
    paths: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
  },
  {
    key: 'tools',
    label: 'Tools & Others',
    paths: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
  },
]

export const FEATURED_PROJECT = {
  title: 'Travels Admin Dashboard',
  description:
    'A comprehensive travel management dashboard for airlines and agencies — real-time booking analytics, route management and revenue tracking in one elegant interface.',
  tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Chart.js'],
  liveUrl: '#',
  sourceUrl: '#',
}

export const MORE_PROJECTS = [
  {
    id: 1,
    title: 'Game Guru',
    description: 'Game discovery platform with personalised reviews and recommendations via the RAWG API.',
    category: 'Web App',
    tags: ['React', 'RAWG API', 'TypeScript'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 2,
    title: 'Travels Catcher',
    description: 'Travel development software for seamless itinerary planning and destination discovery.',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Maps API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 3,
    title: 'Lessons Learner',
    description: 'Online learning platform connecting students with expert instructors in real time.',
    category: 'EdTech',
    tags: ['Next.js', 'Prisma', 'Stripe'],
    liveUrl: '#',
    sourceUrl: '#',
  },
]
