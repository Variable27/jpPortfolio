import type { LucideIcon } from 'lucide-react'
import { Bot, Code2, Globe2, Headphones, SearchCheck, Wrench } from 'lucide-react'

export type ProjectCategory = 'Web' | 'SEO' | 'AI' | 'AR / Unity' | 'Systems'

export interface Project {
  id: string
  number: string
  title: string
  category: ProjectCategory
  year: string
  description: string
  problem: string
  role: string
  technologies: string[]
  image: string
  gallery?: string[]
  featured?: boolean
}

export interface Service {
  number: string
  title: string
  description: string
  technologies: string[]
  icon: LucideIcon
}

export const personal = {
  name: 'John Paul Ferrer Bantillo',
  shortName: 'John Paul Bantillo',
  email: 'jpbantillo27@gmail.com',
  phone: '+63 954 381 1997',
  location: 'Iloilo, Philippines',
  github: 'https://github.com/Variable27',
  linkedin: 'https://www.linkedin.com/in/john-paul-bantillo-59542727b/',
  website: 'https://johnpaulbantillo.site',
}

export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Skills', 'skills'],
  ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact'],
] as const

export const services: Service[] = [
  { number: '01', icon: Code2, title: 'Website Development', description: 'Responsive, accessible, performance-focused websites built around real users and business goals.', technologies: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { number: '02', icon: Globe2, title: 'WordPress Development', description: 'Custom pages, content migration, theme refinement, forms, integrations, and dependable updates.', technologies: ['WordPress', 'Elementor', 'PHP'] },
  { number: '03', icon: SearchCheck, title: 'Technical SEO', description: 'Practical audits, metadata, schema, indexing support, content optimization, and local SEO foundations.', technologies: ['Search Console', 'Rank Math', 'Schema'] },
  { number: '04', icon: Bot, title: 'AI-Assisted Automation', description: 'Useful workflows for content, research, reporting, and repetitive digital tasks—built with human review in mind.', technologies: ['Codex', 'APIs', 'Workflows'] },
  { number: '05', icon: Wrench, title: 'Website Maintenance', description: 'Content updates, responsive fixes, speed improvements, QA, troubleshooting, and deployment support.', technologies: ['Cloudflare', 'Netlify', 'Git'] },
  { number: '06', icon: Headphones, title: 'IT & Technical Support', description: 'Platform setup, troubleshooting, documentation, and clear user support for everyday technical work.', technologies: ['Documentation', 'CRM', 'Support'] },
]

export const skillGroups = [
  { title: 'Frontend', level: 'Core', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Responsive Design'] },
  { title: 'Backend', level: 'Proficient', skills: ['PHP', 'Node.js', 'Express', 'MySQL', 'MongoDB'] },
  { title: 'CMS & SEO', level: 'Core', skills: ['WordPress', 'Elementor', 'Rank Math SEO', 'Google Search Console', 'Technical SEO', 'Schema markup'] },
  { title: 'AI & Automation', level: 'Working knowledge', skills: ['ChatGPT', 'Claude', 'Codex', 'Prompt engineering', 'API integration', 'Workflow automation'] },
  { title: 'Mobile & AR', level: 'Working knowledge', skills: ['Unity', 'C#', 'Vuforia', 'Android development', 'Augmented reality'] },
  { title: 'Tools & Platforms', level: 'Proficient', skills: ['Git', 'GitHub', 'Figma', 'Canva', 'Hostinger', 'Cloudflare', 'Netlify'] },
]

export const experience = [
  { date: '2025 — Present', title: 'Web, SEO & Digital Support', org: 'Independent projects', text: 'Developing portfolio websites, SEO workflow concepts, AI-assisted tools, and practical digital support for business needs.', tags: ['Web development', 'SEO', 'Automation'] },
  { date: '2024 — 2025', title: 'Academic Development Projects', org: 'Northern Iloilo State University', text: 'Built and presented web, systems, mobile, and AR work with a focus on user flow, documentation, and problem solving.', tags: ['Unity', 'PHP', 'MySQL'] },
  { date: '2023 — 2024', title: 'IT & Customer Support Experience', org: 'Technical and remote support', text: 'Supported users with communication, organized records, platform tasks, and dependable issue follow-through.', tags: ['Support', 'Documentation', 'Communication'] },
]

export const projects: Project[] = [
  { id: 'armilkfish', number: '01', title: 'ARMilkfishSIMS', category: 'AR / Unity', year: '2025', featured: true, description: 'An augmented reality training system designed to help learners understand the process of milkfish deboning through interactive simulation.', problem: 'Hands-on deboning instruction can be difficult to visualize without repeated demonstration.', role: 'Designed the concept, AR interaction flow, simulation logic, and project presentation.', technologies: ['Unity', 'C#', 'Vuforia', 'Augmented Reality'], image: '/assets/armilkfish-ar-phone.jpg', gallery: ['/assets/armilkfish-unity-menu.jpg', '/assets/armilkfish-maya-model.jpg'] },
  { id: 'ai-dashboard', number: '02', title: 'AI Powered Dashboard', category: 'AI', year: '2025', featured: true, description: 'A dashboard concept that turns CSV or Excel exports into quick KPIs, trends, and report-ready summaries.', problem: 'Raw data often takes too long to turn into a usable decision-making report.', role: 'Planned the data flow, dashboard interface, and AI insight experience.', technologies: ['AI insights', 'CSV / Excel', 'Charts'], image: '/assets/project-ai-dashboard.svg' },
  { id: 'seo-audit', number: '03', title: 'SEO Audit Tool', category: 'SEO', year: '2025', description: 'A structured website-review tool for titles, metadata, headings, links, image alt text, and priority fixes.', problem: 'Business owners need a clear action list instead of vague SEO advice.', role: 'Defined audit checks, report structure, and a practical prioritization flow.', technologies: ['Technical SEO', 'Metadata', 'Schema'], image: '/assets/project-seo-audit.svg' },
  { id: 'website-analyzer', number: '04', title: 'AI Website Analyzer', category: 'AI', year: '2025', description: 'An AI-assisted review concept for clarity, conversion flow, accessibility basics, trust signals, and SEO opportunities.', problem: 'Non-technical site owners can struggle to understand what to improve next.', role: 'Designed the user-facing recommendations and scored-action-plan concept.', technologies: ['AI review', 'UX', 'Accessibility'], image: '/assets/project-ai-website-analyzer.svg' },
  { id: 'payroll', number: '05', title: 'Time Tracking & Payroll', category: 'Systems', year: '2024', description: 'A business operations system concept for work hours, overtime, payroll totals, and clean manager exports.', problem: 'Manual time tracking makes payroll visibility difficult for smaller teams.', role: 'Planned the dashboard, timesheet workflow, and reporting states.', technologies: ['Timesheets', 'Payroll', 'Exports'], image: '/assets/project-time-payroll.svg' },
  { id: 'portal', number: '06', title: 'Client Portal System', category: 'Systems', year: '2024', description: 'A client-facing workspace for project updates, support tickets, files, invoices, and status tracking.', problem: 'Service work can become fragmented across emails and scattered files.', role: 'Mapped the client workflow and structured the interface concept.', technologies: ['Client portal', 'Tickets', 'Files'], image: '/assets/project-client-portal.svg' },
  { id: 'proposal', number: '07', title: 'AI Proposal Generator', category: 'AI', year: '2024', description: 'A proposal workflow that turns requirements into scope, deliverables, timelines, and ready-to-review copy.', problem: 'Creating consistent proposals can absorb time that could be spent on the work itself.', role: 'Outlined the templating flow and review-ready proposal experience.', technologies: ['AI drafting', 'Templates', 'Workflow'], image: '/assets/project-ai-proposal.svg' },
]
