export const personalInfo = {
  name: 'Harsh Kumar Sinha',
  initials: 'HKS',
  title: 'Full Stack Developer',
  email: 'harshkr.developer@gmail.com',
  phone: '+91 6203657520',
  location: 'Greater Noida, India',
  linkedin: 'https://www.linkedin.com/in/harsh-kumar-sinha-193243254/',
  github: 'https://github.com/harshsinha5156',
  leetcode: 'https://leetcode.com/u/harshsinha06/',
  bio: [
    "Results-driven full-stack developer with 1+ year of hands-on experience building scalable web and e-commerce applications. I take products from idea to deployment with a focus on clean architecture, performance, and reliability.",
    "Currently at Keyideas Infotech, where I build responsive web apps using React, Next.js, and Node.js, and customize e-commerce platforms on Shopify and WordPress.",
    "When I'm not shipping code, I'm solving DSA problems on LeetCode — 428+ solved with a contest rating of 1492, and actively integrating AI/ML APIs into real-world applications.",
  ],
}

export const typewriterPhrases = [
  'React Developer.',
  'Full Stack Builder.',
  'E-commerce Expert.',
  'AI Integrator.',
  'Problem Solver.',
]

export const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '428+', label: 'LeetCode Solved' },
  { value: '4+', label: 'Live Projects' },
  { value: '180+', label: 'GFG Problems' },
]

export const experience = [
  {
    id: 1,
    period: 'July 2025 – Present',
    role: 'Software Developer',
    company: 'Keyideas Infotech Private Limited',
    type: 'Full-time',
    color: '#00d4ff',
    points: [
      'Developed scalable responsive web applications using React, Next.js, and JavaScript, enhancing performance and user engagement.',
      'Built and managed backend APIs using Node.js, Express, and MongoDB ensuring efficient data handling and scalability.',
      'Developed and customized a jewellery e-commerce platform on Shopify & WordPress with custom themes, payment integration, and order management.',
      'Improved website performance, SEO, and mobile responsiveness resulting in significantly faster load times.',
    ],
  },
  {
    id: 2,
    period: 'March 2025 – June 2025',
    role: 'Full Stack Developer — Intern',
    company: 'Shadow Infosystem (P) Limited',
    type: 'Internship',
    color: '#7c3aed',
    points: [
      'Assisted in developing responsive web applications using React, Next.js, and JavaScript.',
      'Built and tested RESTful APIs using Node.js, Express.js, and MongoDB with full CRUD operations.',
      'Integrated frontend components with backend services to ensure seamless data flow across the application.',
    ],
  },
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    branch: 'Information Technology',
    school: 'Greater Noida Institute of Technology',
    location: 'Greater Noida, Uttar Pradesh',
    period: 'October 2021 – May 2025',
    year: '2025',
    color: '#06ffa5',
    highlights: [
      'Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks',
      'Hackathon organizer — 80+ participants',
      '4th place at Impact-a-thon, IIIT Delhi',
    ],
  },
]

export const projects = [
  {
    id: 1,
    icon: '⚡',
    title: 'Co-Code',
    category: 'Real-time Collaboration',
    description:
      'Real-time collaborative code editor supporting up to 10 simultaneous users. Live multi-language editing via CodeMirror, WebSocket sync, JWT auth with MongoDB session persistence, and NodeMailer room sharing.',
    tags: ['ReactJS', 'Socket.IO', 'Redux Toolkit', 'ExpressJS', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    live: 'https://github.com/harshsinha5156',
    accentFrom: 'rgba(0,212,255,0.2)',
    accentTo: 'rgba(6,255,165,0.1)',
    featured: true,
  },
  {
    id: 2,
    icon: '🤖',
    title: 'NebbulonAI',
    category: 'AI Application',
    description:
      'Real-time AI chatbot powered by ReactJS and Gemini API with fast conversational responses. Client-side chat history via Local Storage, proxy server for secure API handling, and optimized performance architecture.',
    tags: ['ReactJS', 'Gemini API', 'Local Storage', 'Proxy Server', 'Vite'],
    github: 'https://github.com/harshsinha5156',
    live: 'https://nebbulon-ai.vercel.app/',
    accentFrom: 'rgba(124,58,237,0.2)',
    accentTo: 'rgba(0,212,255,0.1)',
    featured: true,
  },
  {
    id: 3,
    icon: '💍',
    title: 'LuxeRing — Jewellery Store',
    category: 'E-commerce',
    description:
      'Premium jewellery e-commerce platform built on Shopify with fully custom Liquid theme. Product filtering, wishlist, custom payment gateway, order management, and SEO-optimized category pages. Deployed for a real client.',
    tags: ['ReactJs',  'JavaScript', 'CSS3', 'Payment Gateway', 'SEO'],
    github: 'https://github.com/harshsinha5156/design_own_ring',
    live: 'https://design-own-ring.vercel.app/',
    accentFrom: 'rgba(234,179,8,0.2)',
    accentTo: 'rgba(239,68,68,0.1)',
    featured: false,
  },
  {
    id: 4,
    icon: '🎨',
    title: 'DesignRing — UI Library',
    category: 'Design System',
    description:
      'Personal React component library featuring 20+ animated, accessible UI components — buttons, modals, carousels, form elements, and data tables. Fully documented with live preview and copy-paste code snippets.',
    tags: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'TypeScript', ],
    github: 'https://github.com/harshsinha5156/dimendSCAASI-Web',
    live: 'https://dimend-scaasi-web.vercel.app/',
    accentFrom: 'rgba(236,72,153,0.2)',
    accentTo: 'rgba(124,58,237,0.1)',
    featured: false,
  },
]

export const skillCategories = [
  {
    id: 1, icon: '⚡', title: 'Frontend', color: '#00d4ff',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'JavaScript / ES6+', level: 90 },
      { name: 'TailwindCSS / CSS3', level: 88 },
      { name: 'Redux Toolkit', level: 82 },
      { name: 'HTML5', level: 95 },
      { name: 'TypeScript', level: 72 },
    ],
  },
  {
    id: 2, icon: '🛠️', title: 'Backend', color: '#7c3aed',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'MongoDB / Mongoose', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Socket.IO / WebSockets', level: 78 },
      { name: 'MySQL', level: 72 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    id: 3, icon: '🛍️', title: 'CMS & E-commerce', color: '#f59e0b',
    skills: [
      { name: 'Shopify / Liquid', level: 85 },
      { name: 'WordPress / WooCommerce', level: 83 },
      { name: 'Theme Customization', level: 82 },
      { name: 'Payment Integration', level: 78 },
      { name: 'SEO Optimization', level: 75 },
      { name: 'WooCommerce', level: 80 },
    ],
  },
  {
    id: 4, icon: '🤖', title: 'AI & ML Integration', color: '#06ffa5',
    skills: [
      { name: 'Gemini API / Google AI', level: 80 },
      { name: 'OpenAI / GPT APIs', level: 72 },
      { name: 'Prompt Engineering', level: 78 },
      { name: 'AI Chatbot Development', level: 80 },
      { name: 'LangChain Basics', level: 58 },
      { name: 'Hugging Face Models', level: 55 },
    ],
  },
  {
    id: 5, icon: '🔧', title: 'DevTools & Practices', color: '#ec4899',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Postman / API Testing', level: 85 },
      { name: 'Vercel / Render', level: 83 },
      { name: 'VS Code / NPM', level: 92 },
      { name: 'Agile / Scrum', level: 78 },
      { name: 'C++ / DSA', level: 80 },
    ],
  },
]

export const aboutSkills = [
  'React / Next.js', 'Node.js / Express',
  'MongoDB / MySQL', 'Shopify / WordPress',
  'Socket.IO / WS', 'Gemini AI API',
  'TypeScript / JS', 'TailwindCSS',
  'C++ / DSA', 'Git / GitHub',
]

export const achievements = [
  { icon: '🏆', title: 'Hackathon Leader', desc: '4th place at Impact-a-thon (IIIT Delhi). Organized a hackathon with 80+ participants.' },
  { icon: '⚡', title: 'LeetCode 428+', desc: 'Contest rating of 1492 with 16 badges earned. Consistent DSA problem solver.' },
  { icon: '🎯', title: 'GeeksForGeeks', desc: 'Institute Rank 63 · Coding score 604 · 180+ problems solved.' },
]
