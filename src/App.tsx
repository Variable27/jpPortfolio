import { useEffect, useMemo, useRef, useState, lazy, Suspense } from 'react'
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Clipboard, CodeXml, Github, GraduationCap, Linkedin, Mail, Menu, MessageCircle, Send, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience, navigation, personal, projects, services, skillGroups } from './data/portfolio'

const HeroCore = lazy(() => import('./components/three/HeroCore').then((module) => ({ default: module.HeroCore })))
gsap.registerPlugin(ScrollTrigger)

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = () => setReduced(query.matches)
    listener(); query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])
  return reduced
}

function Loader() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('jp-visited'))
  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => { sessionStorage.setItem('jp-visited', 'true'); setVisible(false) }, 850)
    return () => clearTimeout(timer)
  }, [visible])
  return visible ? <div className="loader" aria-label="Initializing portfolio"><span className="loader-mark">JP</span><span>INITIALIZING PORTFOLIO</span><i /></div> : null
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' })
    navigation.forEach(([, id]) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', close) }
  }, [open])
  return <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="shell nav-shell"><a className="logo" href="#home" aria-label="John Paul Bantillo home">JP<span>.</span></a>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="resume-link" href="mailto:jpbantillo27@gmail.com?subject=Resume%20request">Request résumé <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p> }
function SectionTitle({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) { return <div className="section-heading reveal"><Eyebrow>{number} / {eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div> }
function MagneticLink({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) { return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>{children}<ArrowUpRight size={17} /></a> }

function Hero() {
  const roles = ['Web Developer', 'WordPress Developer', 'SEO Specialist', 'AI-Assisted Developer', 'IT Support Specialist']
  const [role, setRole] = useState(0); const reduced = useReducedMotion()
  useEffect(() => { if (reduced) return; const timer = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2800); return () => clearInterval(timer) }, [reduced, roles.length])
  return <section id="home" className="hero"><div className="hero-glow" /><div className="shell hero-shell"><div className="hero-copy reveal">
    <Eyebrow>Available for remote opportunities</Eyebrow><h1>Hi, I’m <em>John Paul</em> Bantillo.</h1><p className="role-line"><CodeXml size={17} /> {roles[role]}</p>
    <p className="hero-summary">I build modern websites, SEO systems, and AI-assisted digital experiences—combining development, WordPress, automation, and thoughtful technical support.</p>
    <div className="hero-actions"><MagneticLink href="#projects">View my work</MagneticLink><MagneticLink href="#contact" secondary>Contact me</MagneticLink></div>
  </div><Suspense fallback={<div className="hero-visual-fallback">JP</div>}><HeroCore /></Suspense><a className="scroll-cue" href="#about">Scroll to explore <ArrowDown size={15} /></a></div></section>
}

function About() { return <section id="about" className="section about"><div className="shell about-grid"><div><SectionTitle number="01" eyebrow="About" title="Building useful things, with care for the people using them." /><div className="about-copy reveal"><p>I’m John Paul Ferrer Bantillo, a web and mobile application development graduate from Northern Iloilo State University. I work across website development, WordPress, technical SEO, automation, and AI-assisted workflows.</p><p>I enjoy turning ideas and unorganized content into functional, responsive, easy-to-manage digital experiences. My Cum Laude background reflects the same mindset I bring to each project: stay curious, solve the practical problem, and keep improving.</p></div><div className="facts reveal">{[['Based in', personal.location], ['Availability', 'Open to remote work'], ['Degree', 'BS Information Technology'], ['Recognition', 'Cum Laude']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div><div className="portrait-wrap reveal"><div className="portrait-frame"><img src="/assets/john-paul-bantillo.webp" alt="John Paul Bantillo" /><div className="portrait-orbit" /></div><div className="info-float"><span>PRIMARY FOCUS</span><strong>Web · SEO · AI</strong><small>Development & support</small></div></div></div></section> }

function Services() { return <section id="services" className="section section-tint"><div className="shell"><SectionTitle number="02" eyebrow="Services" title="Digital work that stays connected to real-world goals." text="A flexible mix of development, optimization, and technical support for teams that need a reliable digital partner." /><div className="service-grid">{services.map(({ icon: Icon, ...service }) => <article className="service-card reveal" key={service.number}><div className="card-top"><span>{service.number}</span><Icon size={22} /></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul><ChevronRight className="card-arrow" size={21} /></article>)}</div></div></section> }

function Skills() { const [selected, setSelected] = useState(skillGroups[0].title); const group = skillGroups.find((item) => item.title === selected) ?? skillGroups[0]; return <section id="skills" className="section"><div className="shell"><SectionTitle number="03" eyebrow="Skills" title="A toolkit built to move between ideas and implementation." /><div className="skills-layout reveal"><div className="skill-tabs" role="tablist" aria-label="Skill groups">{skillGroups.map((item) => <button role="tab" aria-selected={item.title === selected} key={item.title} onClick={() => setSelected(item.title)}>{item.title}<span>{item.level}</span></button>)}</div><div className="skill-stage" role="tabpanel"><p className="technical-label">{group.level.toUpperCase()} / {group.title.toUpperCase()}</p><div>{group.skills.map((skill, index) => <span className="skill-pill" key={skill} style={{ '--i': index } as React.CSSProperties}>{skill}</span>)}</div><p>Skills are grouped by where I use them most—not by artificial percentage scores.</p></div></div></div></section> }

function Experience() { return <section id="experience" className="section section-tint"><div className="shell"><SectionTitle number="04" eyebrow="Journey" title="Learning, building, and supporting along the way." /><div className="timeline">{experience.map((item) => <article className="timeline-item reveal" key={item.title}><span className="timeline-dot" /><div className="timeline-date">{item.date}</div><div><p className="technical-label">{item.org}</p><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="achievement-card reveal"><GraduationCap /><div><p className="technical-label">EDUCATION & RECOGNITION</p><h3>Northern Iloilo State University</h3><p>B.S. Information Technology · Major in Web & Mobile Application Development · 2025 · Cum Laude</p></div><div className="achievement-list"><span>Dean’s Lister</span><span>Programming Champion, CICS Week 2023</span><span>Student leadership & organization participation</span></div></div></div></section> }

function Projects() { const categories = ['All', 'Web', 'SEO', 'AI', 'AR / Unity', 'Systems'] as const; const [filter, setFilter] = useState<typeof categories[number]>('All'); const [selected, setSelected] = useState<typeof projects[number] | null>(null); const shown = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]); const featured = projects.filter((project) => project.featured); return <section id="projects" className="section projects"><div className="shell"><SectionTitle number="05" eyebrow="Selected work" title="Projects built around systems, visibility, and better experiences." text="Each concept reflects a real problem area. No invented client results—just clear roles, process, and technology." />
    <div className="featured-list">{featured.map((project, index) => <article className={`featured-project reveal ${index % 2 ? 'reverse' : ''}`} key={project.id}><button className="featured-image" onClick={() => setSelected(project)} aria-label={`View ${project.title} case study`}><img src={project.image} alt={`${project.title} project preview`} /><span>View project <ArrowUpRight size={17} /></span></button><div className="featured-copy"><span className="project-number">{project.number}</span><p className="technical-label">{project.category} / {project.year}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><button className="text-link" onClick={() => setSelected(project)}>Read case study <ArrowUpRight size={16} /></button></div></article>)}</div>
    <div className="filter-row" aria-label="Project filters">{categories.map((category) => <button key={category} className={filter === category ? 'selected' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="project-grid">{shown.filter((project) => !project.featured).map((project) => <article className="project-card reveal" key={project.id}><button onClick={() => setSelected(project)}><img src={project.image} alt={`${project.title} preview`} /><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.slice(0, 3).map((tech) => <i key={tech}>{tech}</i>)}</div></button></article>)}</div></div>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</section> }

function ProjectModal({ project, onClose }: { project: typeof projects[number]; onClose: () => void }) { const close = useRef<HTMLButtonElement>(null); useEffect(() => { close.current?.focus(); const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [onClose]); return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" ref={close} onClick={onClose} aria-label="Close project details"><X /></button><img src={project.image} alt="" /><p className="technical-label">{project.category} / {project.year}</p><h2 id="modal-title">{project.title}</h2><p>{project.description}</p><div className="case-grid"><div><span>CHALLENGE</span><p>{project.problem}</p></div><div><span>MY ROLE</span><p>{project.role}</p></div></div><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></article></div> }

function AssistantPanel() { const [open, setOpen] = useState(false); const [answer, setAnswer] = useState('Ask about my skills, projects, availability, or contact details.'); const prompts = [{ q: 'What technologies does John Paul use?', a: 'John Paul works with React, JavaScript, TypeScript, WordPress, PHP, technical SEO, Unity, C#, Git, and AI-assisted development workflows.' }, { q: 'Tell me about the AR Milkfish project.', a: 'ARMilkfishSIMS is a capstone AR training system that teaches milkfish deboning through a guided, interactive simulation built with Unity, C#, and Vuforia.' }, { q: 'How can I contact him?', a: `You can email ${personal.email} or use the contact form below.` }]; return <aside className={`assistant-panel ${open ? 'open' : ''}`} aria-label="Portfolio assistant"><button className="assistant-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? <X /> : <MessageCircle />}<span>Portfolio assistant</span></button>{open && <div className="assistant-body"><p className="technical-label">LOCAL PORTFOLIO ASSISTANT</p><p>{answer}</p><div>{prompts.map((prompt) => <button key={prompt.q} onClick={() => setAnswer(prompt.a)}>{prompt.q}</button>)}</div></div>}</aside> }

function Contact() { const [copied, setCopied] = useState(false); const [submitted, setSubmitted] = useState(false); const [error, setError] = useState(''); function copyEmail() { navigator.clipboard?.writeText(personal.email).then(() => { setCopied(true); window.setTimeout(() => setCopied(false), 1800) }) } function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const email = String(data.get('email') ?? ''); if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email address.'); return } setError(''); window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)}&body=${encodeURIComponent(String(data.get('message')))}`; setSubmitted(true) } return <section id="contact" className="section contact"><div className="shell contact-grid"><div><SectionTitle number="06" eyebrow="Contact" title="Let’s build something useful." text="I’m open to remote opportunities, freelance projects, website development work, SEO support, and technical collaborations." /><div className="contact-details reveal"><a href={`mailto:${personal.email}`}><Mail /> {personal.email}</a><button onClick={copyEmail}>{copied ? <Check /> : <Clipboard />} {copied ? 'Email copied' : 'Copy email'}</button><a href={personal.github} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a><a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a><span><span className="status-dot" /> Available for remote work</span></div></div><form className="contact-form reveal" onSubmit={submit} noValidate><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" required type="email" autoComplete="email" aria-describedby={error ? 'email-error' : undefined} /></label><label>Company <small>(optional)</small><input name="company" autoComplete="organization" /></label><label>Project type<select name="projectType"><option>Web development</option><option>WordPress</option><option>SEO support</option><option>Automation / AI workflow</option><option>Technical support</option><option>Opportunity / other</option></select></label><label>Message<textarea name="message" required rows={5} /></label>{error && <p id="email-error" className="form-error">{error}</p>}{submitted && <p className="form-success">Your mail app should open with your message ready to send.</p>}<button className="button" type="submit">Start a conversation <Send size={16} /></button><p className="form-note">This form opens your email app—no message is silently discarded.</p></form></div></section> }

function Footer() { return <footer className="footer"><div className="shell footer-inner"><a className="logo" href="#home">JP<span>.</span></a><p>Designed and developed by John Paul Bantillo © {new Date().getFullYear()}</p><a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a></div></footer> }

function RevealSetup() { const reduced = useReducedMotion(); useEffect(() => { if (reduced) return; const context = gsap.context(() => { gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => gsap.fromTo(element, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } })) }); return () => context.revert() }, [reduced]); return null }

export default function App() { return <><Loader /><RevealSetup /><a className="skip-link" href="#main">Skip to content</a><div className="site-noise" aria-hidden="true" /><Header /><main id="main"><Hero /><About /><Services /><Skills /><Experience /><Projects /><Contact /></main><Footer /><AssistantPanel /></> }
