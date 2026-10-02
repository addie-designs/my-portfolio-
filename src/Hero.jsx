import { useEffect, useRef, useState } from 'react';
import {
  Code, Palette, Smartphone, Server, Database, Layers, Mail, Phone,
  Github, Linkedin, PenTool, Heart, ArrowRight, ArrowDown, Menu, X,
} from 'lucide-react';
import './index.css';

const GITHUB = 'https://github.com/addie-designs';
const LINKEDIN = 'https://linkedin.com/in/akinjeji-adeola-7481a7343';
const EMAIL = 'akinjejiadeola@gmail.com';

const NAV = ['home', 'about', 'services', 'skills', 'projects'];

const ABOUT = [
  [Code, 'Web Development', 'Responsive, scalable web applications built with modern frameworks and best practices.'],
  [Palette, 'UI/UX Design', 'Beautiful, intuitive interfaces that put user experience and engagement first.'],
  [Smartphone, 'Mobile Apps', 'Cross-platform mobile apps with native performance and smooth animations.'],
  [Server, 'Backend Development', 'Robust server-side solutions with efficient APIs and secure databases.'],
  [Database, 'Database Design', 'Database schemas designed and tuned for performance and scale.'],
  [Layers, 'Modern Frameworks', 'Hands-on with React, Vue, Angular and other current technologies.'],
];

const SERVICES = [
  [Code, 'Custom Web Development', 'Tailored web solutions for your business needs, with clean, maintainable code.'],
  [Layers, 'E-commerce Solutions', 'Online stores with payment integration, inventory management and analytics.'],
  [Palette, 'Brand Identity Design', 'Cohesive brand experiences, from logos to complete visual identity systems.'],
  [Server, 'Consulting & Strategy', 'Technical guidance to help you make informed decisions about your digital presence.'],
];

const SKILLS = [
  ['React & Next.js', 95], ['JavaScript & TypeScript', 90], ['UI/UX Design', 85],
  ['Node.js & Express', 88], ['MongoDB & PostgreSQL', 82], ['Tailwind CSS', 92],
];

const PROJECTS = [
  ['E-commerce Platform Redesign', 'A complete UI/UX overhaul for an online retail brand, focused on improving conversion rates.', '#6f8cff', '#2b3fd8'],
  ['Fintech Mobile App', 'An intuitive and secure mobile banking experience for everyday users.', '#38bdf8', '#2563eb'],
  ['Analytics Dashboard', 'A data-rich dashboard for a SaaS product, built with React and D3.js.', '#8b7bff', '#3b2fd0'],
  ['Social Media Platform', 'A modern social networking app with real-time messaging and content sharing.', '#60a5fa', '#4f46e5'],
  ['Healthcare Management System', 'Patient management with appointment scheduling and records.', '#22d3ee', '#3b5bfd'],
  ['Real Estate Marketplace', 'Property listings with advanced search, filters and virtual tours.', '#a78bfa', '#4361ee'],
];

const WORDS = ['UI/UX Design', 'Web Apps', 'Backend', 'Brand Identity', 'Databases', 'Great Experiences'];
const MARQUEE = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

const delay = (n) => ({ '--d': `${n}s` });

export default function Portfolio() {
  const root = useRef(null);
  const stage = useRef(null);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-reveal for every .rv element
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    root.current.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Highlight the nav link of the section in view
  useEffect(() => {
    const spy = () => {
      let cur = 'home';
      root.current.querySelectorAll('section').forEach((s) => {
        if (s.getBoundingClientRect().top < 160) cur = s.id;
      });
      setActive(cur);
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    return () => window.removeEventListener('scroll', spy);
  }, []);

  // Hero parallax
  const onMove = (e) => {
    const el = stage.current;
    const b = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - b.left) / b.width - 0.5).toFixed(2));
    el.style.setProperty('--my', ((e.clientY - b.top) / b.height - 0.5).toFixed(2));
  };
  const onLeave = () => {
    stage.current.style.setProperty('--mx', 0);
    stage.current.style.setProperty('--my', 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(f.get('s') || 'Portfolio enquiry');
    const body = encodeURIComponent(`${f.get('m')}\n\n— ${f.get('n')} (${f.get('e')})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const Socials = () => (
    <div className="soc">
      <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size="1em" strokeWidth={1.8} /></a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size="1em" strokeWidth={1.8} /></a>
    </div>
  );

  return (
    <div ref={root}>
      <nav className="nav">
        <a href="#home" className="logo">Akinjeji Adeola<b>.</b></a>
        <div className={`links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={`lk ${active === id ? 'on' : ''}`}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="rt">
          <a className="cta d" href="#contact" style={{ padding: '11px 24px' }}>Contact</a>
          <button className="mb" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="wrap hgrid">
          <div>
            <div className="kick">Great</div>
            <h1>
              <span className="row"><span className="tag">Good</span><span className="big">Design</span></span>
              <span className="acc">Experience</span>
              <span className="row"><span className="big">Builds</span><span className="tag g">Better</span></span>
            </h1>
            <p className="lead">
              I design intuitive interfaces and build modern, high-performing web apps that solve real problems and create <b>real value</b>.
            </p>
            <a className="cta" href="#projects">View my work <ArrowRight size={20} /></a>
            <Socials />
          </div>

          <div className="stage" ref={stage} onPointerMove={onMove} onPointerLeave={onLeave}>
            <svg className="rib" viewBox="0 0 600 650" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="rg" x1="0" x2="1">
                  <stop offset="0" stopColor="#2447e0" /><stop offset="1" stopColor="#5b6cff" />
                </linearGradient>
              </defs>
              <path pathLength="1" stroke="url(#rg)" d="M-40 330 C110 250 210 420 100 510 C20 570 -70 490 10 420" />
              <path pathLength="1" stroke="url(#rg)" d="M640 360 C500 300 430 470 540 530 C630 580 700 480 620 430" />
            </svg>
            <div className="tile t1"><PenTool size="1em" strokeWidth={1.8} /></div>
            <div className="tile t2"><Heart size="1em" strokeWidth={1.8} /></div>
            <div className="tile t3">AD</div>
            <div className="phone">
              <div className="screen">
                <div className="pr">
                  <div className="av">AA</div>
                  <div><b>Akinjeji Adeola</b><small>Fullstack Developer</small></div>
                </div>
                <h3>Designing Digital Experiences People <em>Love.</em></h3>
                <a className="vb" href="#projects">View Work</a>
                <div className="st">
                  <div><b>6+</b><small>Projects</small></div>
                  <div><b>2</b><small>Disciplines</small></div>
                  <div><b>100%</b><small>Passion</small></div>
                </div>
                <span className="sw">Selected Work</span>
                <div className="mc">
                  <div><s /><s /><s /><s /></div>
                  <div><s /><s /><s /></div>
                </div>
              </div>
            </div>
            <a className="sw-pill" href="#about"><ArrowDown size={22} /> Swipe</a>
          </div>
        </div>
      </section>

      <div className="mq" aria-hidden="true">
        <div>{MARQUEE.map((w, i) => <span key={i}>{w}</span>)}</div>
      </div>

      <section id="about">
        <div className="wrap">
          <h2 className="sh rv">Design that works,<br /><em>code that lasts.</em></h2>
          <p className="sub rv">Designer and developer bridging aesthetics and functionality, from the first sketch to the deployed server.</p>
          <div className="g3">
            {ABOUT.map(([Icon, title, desc], i) => (
              <div key={title} className="glass card rv" style={delay((i % 3) * 0.1)}>
                <div className="ico"><Icon size="1em" strokeWidth={1.8} /></div>
                <h3>{title}</h3><p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <h2 className="sh rv">Work with <em>me.</em></h2>
          <p className="sub rv">Four ways I can help you ship something people enjoy using.</p>
          <div className="svc">
            {SERVICES.map(([Icon, title, desc], i) => (
              <div key={title} className="glass card rv" style={delay((i % 2) * 0.12)}>
                <div className="ico"><Icon size="1em" strokeWidth={1.8} /></div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2 className="sh rv">Technical <em>skills</em></h2>
          <p className="sub rv">The tools I reach for every day.</p>
          <div className="bars">
            {SKILLS.map(([name, level], i) => (
              <div key={name} className="rv" style={delay((i % 2) * 0.1)}>
                <div className="bh"><span>{name}</span><span>{level}%</span></div>
                <div className="bar"><i style={{ '--w': `${level}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="dk">
        <div className="wrap">
          <h2 className="sh rv">Featured <em>projects</em></h2>
          <p className="sub rv">A selection of interfaces and systems I have designed and built.</p>
          <div className="g3">
            {PROJECTS.map(([title, desc, a, b], i) => (
              <article key={title} className="glass card pj rv" style={delay((i % 3) * 0.1)}>
                <div className="th" style={{ '--a': a, '--b': b }}><u /><u /></div>
                <div className="bd"><h3>{title}</h3><p>{desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="dk">
        <div className="wrap">
          <h2 className="sh rv">Let’s build <em>something.</em></h2>
          <p className="sub rv">Tell me about your idea and I’ll reply soon.</p>
          <div className="ct">
            <div className="rv">
              <div className="glass ci"><div className="ico"><Mail size="1em" strokeWidth={1.8} /></div><div><small>Email</small><b>{EMAIL}</b></div></div>
              <div className="glass ci"><div className="ico"><Phone size="1em" strokeWidth={1.8} /></div><div><small>Phone</small><b>+234 916 870 5162</b></div></div>
            </div>
            <form className="glass fm rv" style={delay(0.15)} onSubmit={handleSubmit}>
              <div className="fr">
                <input name="n" placeholder="Your name" required />
                <input name="e" type="email" placeholder="Your email" required />
              </div>
              <input name="s" placeholder="Subject" />
              <textarea name="m" rows={6} placeholder="Your message" required />
              <button className="cta" type="submit">Send message <ArrowRight size={20} /></button>
            </form>
          </div>
        </div>
      </section>

      <footer className="dk">
        <div className="wrap">
          <p>© 2026 Addie. All rights reserved.</p>
          <Socials />
        </div>
      </footer>
    </div>
  );
}