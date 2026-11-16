// ─── Projects ───────────────────────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  embedUrl: string        // URL to load inside iframe
  liveUrl: string         // URL for the "Open" redirect button
  status: 'live' | 'demo' | 'beta'
}

export const projects: Project[] = [
  {
    id: 'magesheet',
    title: 'MageSheet',
    tagline: 'Google Sheets meets automation magic',
    description:
      'A powerful Google Sheets add-on and web platform that lets non-technical users build automated workflows, dashboards and reports without writing a single line of code. Connect your data, automate tasks and get insights in minutes.',
    tags: ['Google Sheets', 'Automation', 'No-Code', 'Dashboard'],
    embedUrl: 'https://magesheet.com/',
    liveUrl: 'https://magesheet.com/',
    status: 'live',
  },
  {
    id: 'autoworkflow',
    title: 'AutoWorkflow',
    tagline: 'Intelligent process automation for Indian businesses',
    description:
      'An end-to-end workflow automation platform built for Indian SMEs. Automate approvals, notifications, data entry and business processes — without expensive enterprise software.',
    tags: ['Workflow', 'Automation', 'SME', 'SaaS'],
    embedUrl: 'https://autoworkflow.in/',
    liveUrl: 'https://autoworkflow.in/',
    status: 'live',
  },
  {
    id: 'appscript-expert',
    title: 'Apps Script Expert',
    tagline: 'Google Workspace automation specialists',
    description:
      'A curated resource and service hub for Google Apps Script developers and businesses looking to extend Google Workspace with custom automation, integrations and workflows.',
    tags: ['Google Apps Script', 'Workspace', 'Automation'],
    embedUrl: 'https://appscriptexpert.com/',
    liveUrl: 'https://appscriptexpert.com/',
    status: 'live',
  },
  {
    id: 'automation-meir',
    title: 'Automation by Meir',
    tagline: 'Smart business automation consulting',
    description:
      'A consulting platform focused on delivering smart automation solutions for businesses. From CRM automation to email workflows and data pipelines — built with simplicity and ROI in mind.',
    tags: ['Consulting', 'CRM', 'Email Automation', 'Business'],
    embedUrl: 'https://www.automationbymeir.com/',
    liveUrl: 'https://www.automationbymeir.com/',
    status: 'live',
  },
]

// ─── Products ────────────────────────────────────────────────────────────────
export interface Product {
  id: string
  name: string
  tagline: string
  category: string
  status: 'available' | 'coming-soon' | 'beta'
  icon: string   // emoji or icon name
}

export const products: Product[] = [
  {
    id: 'craftflow',
    name: 'CraftFlow',
    tagline: 'Visual workflow builder for teams',
    category: 'Automation',
    status: 'coming-soon',
    icon: '⚡',
  },
  {
    id: 'craftmis',
    name: 'CraftMIS',
    tagline: 'Real-time business intelligence, simplified',
    category: 'Analytics',
    status: 'beta',
    icon: '📊',
  },
  {
    id: 'craftdesk',
    name: 'CraftDesk',
    tagline: 'Smart helpdesk for growing businesses',
    category: 'Customer Support',
    status: 'coming-soon',
    icon: '🎯',
  },
  {
    id: 'crafterp',
    name: 'CraftERP',
    tagline: 'Lightweight ERP built for SMEs',
    category: 'ERP',
    status: 'coming-soon',
    icon: '🏗️',
  },
  {
    id: 'craftform',
    name: 'CraftForm',
    tagline: 'Smart forms that connect to your business',
    category: 'No-Code',
    status: 'beta',
    icon: '📝',
  },
  {
    id: 'crafthr',
    name: 'CraftHR',
    tagline: 'HR & payroll automation for Indian businesses',
    category: 'HR Tech',
    status: 'coming-soon',
    icon: '👥',
  },
]

// ─── Re-export existing ───────────────────────────────────────────────────────
export const services = [
  {
    id: 'business-consulting',
    icon: 'Briefcase',
    title: 'Business Consulting',
    description:
      'We analyze your existing processes, identify operational gaps, and design structured workflows that boost productivity and efficiency.',
    features: ['Process Audit & Optimization', 'Workflow Design', 'Operational Gap Analysis', 'Change Management'],
  },
  {
    id: 'custom-applications',
    icon: 'Code2',
    title: 'Custom Applications',
    description:
      'Tailored web and mobile applications built to solve your specific business challenges—scalable, reliable, and future-ready.',
    features: ['Web & Mobile Apps', 'ERP Systems', 'SaaS Products', 'API Integration'],
  },
  {
    id: 'intelligent-automation',
    icon: 'Zap',
    title: 'Intelligent Automation',
    description:
      'Automate repetitive tasks, reduce manual errors, and free your team to focus on what matters most—strategy and growth.',
    features: ['Workflow Automation', 'RPA Solutions', 'Google Apps Script', 'Process Bots'],
  },
  {
    id: 'data-analytics',
    icon: 'BarChart3',
    title: 'Data Analytics & MIS',
    description:
      'Transform raw data into actionable insights. Dashboards, reports, and BI tools that empower smarter decision-making.',
    features: ['MIS Dashboards', 'Business Intelligence', 'KPI Tracking', 'Predictive Analytics'],
  },
  {
    id: 'cloud-erp',
    icon: 'Cloud',
    title: 'Cloud & ERP Solutions',
    description:
      'Deploy and manage cloud infrastructure, ERP and CRM platforms tailored for your business scale and industry.',
    features: ['Cloud Migration', 'ERPNext / Odoo', 'CRM Implementation', 'SaaS Deployment'],
  },
  {
    id: 'digital-transformation',
    icon: 'Globe',
    title: 'Digital Transformation',
    description:
      'End-to-end digitization of your business — from operations and HR to finance and customer experience.',
    features: ['Digital Strategy', 'System Integration', 'Process Digitization', 'Tech Roadmap'],
  },
]

export const whyUs = [
  {
    icon: 'Target',
    title: 'Business-First Mindset',
    description: 'We start with your business problem, not technology. Our solutions are built around your real needs.',
  },
  {
    icon: 'Layers',
    title: 'End-to-End Partnership',
    description: 'From discovery to deployment and beyond — we stay with you through every phase.',
  },
  {
    icon: 'TrendingUp',
    title: 'Scalable & Future-Ready',
    description: 'Every solution is built to scale with your business as you grow locally and globally.',
  },
  {
    icon: 'DollarSign',
    title: 'Affordable Innovation',
    description: 'Modern technology should not be a luxury. We make it accessible for startups, SMEs, and enterprises.',
  },
  {
    icon: 'Shield',
    title: 'Reliable & Transparent',
    description: 'Clear communication, honest timelines, and measurable results—no jargon, no surprises.',
  },
  {
    icon: 'Users',
    title: 'Expert Team',
    description: 'A multidisciplinary team of consultants, developers, and analysts with real industry experience.',
  },
]

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Industries Served' },
  { value: '100%', label: 'Client Satisfaction' },
]

export const coreGoals = [
  {
    number: '01',
    title: 'Business Transformation',
    description: 'Help businesses improve existing processes, eliminate operational gaps and establish structured workflows.',
  },
  {
    number: '02',
    title: 'Technology & Automation',
    description: 'Develop smart applications, automated systems and digital tools that reduce manual work.',
  },
  {
    number: '03',
    title: 'Data-Driven Decisions',
    description: 'Empower organizations with MIS, dashboards, business intelligence and meaningful insights.',
  },
  {
    number: '04',
    title: 'Affordable Innovation',
    description: 'Make modern technology accessible to startups, SMEs and large enterprises.',
  },
  {
    number: '05',
    title: 'Customized Solutions',
    description: "Understand each client's business requirements and develop solutions that address actual challenges.",
  },
  {
    number: '06',
    title: 'Long-Term Partnerships',
    description: 'Build lasting relationships through reliable services, continuous support and measurable results.',
  },
]

export const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'CEO, RetailEdge India',
    quote:
      'Craft & Crew transformed our operations completely. What used to take days now happens in hours. Their understanding of our business was exceptional.',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, FinServe Solutions',
    quote:
      'The MIS dashboard they built gives us real-time clarity across all branches. We finally have the data to make confident decisions.',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, LogiStart',
    quote:
      'As a startup, we needed affordable, scalable solutions. Craft & Crew delivered beyond expectations — on time and within budget.',
  },
]

export const industries = [
  'Retail & E-commerce',
  'Manufacturing',
  'Finance & Accounting',
  'Healthcare',
  'Logistics & Supply Chain',
  'Education',
  'Real Estate',
  'Professional Services',
]
