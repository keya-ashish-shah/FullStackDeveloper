
import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useInView
} from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  GraduationCap,
  Trophy,
  FileText,
  Send,
  Phone,
  ArrowRight,
  ChevronRight,
  Download,
  X,
  Sparkles,
  Layers,
  Zap,
  Layout
} from 'lucide-react';
import { SKILLS, EDUCATION, PROJECTS, CERTIFICATIONS } from './constants';

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative h-full bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-violet-500/50 transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-8 flex flex-col h-full z-10">
          <div className="mb-6 overflow-hidden rounded-2xl aspect-video bg-slate-800 flex items-center justify-center relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4 p-2 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-xl">
              <Code2 size={18} className="text-violet-400" />
            </div>
          </div>

          <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
            <a
              href={project.link}
              target="_blank"
              className="group/btn relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white overflow-hidden rounded-full py-2 px-4"
            >
              <span className="absolute inset-0 bg-white/10 group-hover/btn:bg-violet-500 transition-colors duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Code <ExternalLink size={14} />
              </span>
            </a>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center">
                <Sparkles size={12} className="text-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionHeading: React.FC<{ children: React.ReactNode, badge?: string }> = ({ children, badge }) => (
  <div className="space-y-4 mb-16 text-center lg:text-left">
    {badge && (
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-[0.2em]"
      >
        <Zap size={12} /> {badge}
      </motion.span>
    )}
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-display font-black text-white"
    >
      {children}
    </motion.h3>
  </div>
);

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveNav(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-violet-500/30 selection:text-white">

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full animate-blob" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-pink-600/10 blur-[120px] rounded-full animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full animate-blob animation-delay-4000" />
      </div>

      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 origin-left z-[60]" style={{ scaleX }} />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="glass border border-slate-800 rounded-2xl flex items-center justify-between gap-4 px-6 py-3 w-full max-w-4xl"
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-lg flex items-center justify-center font-black text-white shadow-lg shadow-violet-500/20">
              KS
            </div>
            <span className="hidden sm:block text-lg font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">
              Keya Shah
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-6">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Work' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'contact', label: 'Connect' }
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`text-xs sm:text-sm font-bold tracking-tight transition-all px-3 py-1.5 rounded-lg ${activeNav === nav.id
                  ? 'text-white bg-white/10 shadow-inner'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {nav.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setShowResume(true)}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-slate-950 rounded-xl text-xs font-black uppercase hover:bg-slate-200 transition-colors shadow-lg active:scale-95"
          >
            CV <FileText size={14} />
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 glass border border-slate-800 text-violet-400 text-xs font-black uppercase tracking-[0.3em] mb-4"
          >
            <Sparkles size={14} /> Available for New Projects
          </motion.div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black leading-[1] tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
              Engineering elegance.
            </span>
            <br />
            <span className="text-white">Designing the </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
              digital future.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            I'm <span className="text-white font-bold">Keya Shah</span> — a Full Stack Developer dedicated to merging deep technical logic with stunning visual aesthetics. Building the next generation of digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          <a href="#projects" className="group px-10 py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center gap-3 hover:bg-slate-200 transition-all shadow-2xl shadow-white/10 active:scale-95 text-lg">
            View My Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-10 py-5 glass border border-slate-700 text-white font-black rounded-2xl flex items-center gap-3 hover:border-violet-500 transition-all active:scale-95 text-lg">
            Get in touch
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 space-y-48 pb-32">
        {/* About Me Section */}
        <section id="about" className="relative py-32">
          <SectionHeading badge="Who I Am">About Me</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-slate-400 text-lg leading-relaxed"
            >
              <p>
                Hi, I’m <span className="text-white font-bold">Keya Shah</span>, a
                passionate <span className="text-violet-400 font-semibold">Full Stack Developer</span>
                specializing in modern web applications built with the MERN stack.
                I love combining clean code, responsive UI, and thoughtful design to
                craft seamless digital experiences.
              </p>

              <p>
                I started my journey learning HTML, CSS, and JavaScript, and quickly
                found joy in solving real-world problems using React and Node.js.
                Currently, I’m interning as a MERN developer, building full-featured
                apps that integrate design and functionality.
              </p>

              <p>
                My focus now is on expanding my expertise in frontend architecture,
                exploring performance optimization, and preparing for a full-time
                React role in the coming months.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 bg-gradient-to-tr from-violet-600 to-pink-600 rounded-[3rem] p-2">
                <div className="absolute inset-0 blur-[100px] bg-violet-500/20 rounded-[3rem]" />
                <img
                  src="https://media.lordicon.com/icons/wired/gradient/2319-wave-hello-hand.svg"
                  alt="Keya Shah"
                  className="relative w-full h-full object-cover rounded-[2.5rem] border border-slate-800 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="relative">
          <SectionHeading badge="Excellence">Tech Stack & Mastery</SectionHeading>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group p-6 bg-slate-900/40 glass border border-slate-800 rounded-[2rem] flex flex-col items-center gap-4 hover:border-violet-500/30 transition-all"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-violet-500/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain relative z-10" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-violet-400 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionHeading badge="Portfolio">Featured Works</SectionHeading>
              <p className="text-slate-400 text-lg -mt-8 font-medium">
                A selection of high-performance applications focused on user experience and technical scalability.
              </p>
            </div>
            <a href="https://github.com/keya-ashish-shah" target="_blank" className="inline-flex items-center gap-3 px-6 py-3 glass border border-slate-800 rounded-2xl text-sm font-bold hover:border-pink-500/50 transition-colors mb-4">
              Explore More on GitHub <Github size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* Education & Journey */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading badge="Knowledge">Academic Journey</SectionHeading>
            <div className="relative mt-8 ml-6">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-violet-500 to-slate-900 rounded-full" />

              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative pl-12 pb-12"
                >
                  <div className="absolute left-[-10px] top-2 w-5 h-5 bg-violet-500 rounded-full border-4 border-slate-950 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
                  <div className="bg-slate-900/40 glass border border-slate-800 p-8 rounded-[2.5rem] space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={edu.logo} className="w-14 h-14 rounded-2xl shadow-lg bg-white p-1 object-contain" alt="Logo" />
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                        <span className="text-violet-400 font-bold text-sm tracking-widest uppercase">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg text-slate-300 font-medium">{edu.degree}</p>
                      {edu.cgpa && <p className="text-pink-500 font-bold text-sm tracking-widest">{edu.cgpa}</p>}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {/* Specialized program focusing on deep computer applications, software engineering principles,
                      and modern web architecture. */}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-[3rem] rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-[3rem] flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <Layout className="text-violet-400 w-12 h-12" />
                  <Layers className="text-pink-400 w-12 h-12" />
                  <Trophy className="text-yellow-400 w-12 h-12" />
                  <GraduationCap className="text-blue-400 w-12 h-12" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Download Section */}
        <section className="relative text-center bg-slate-900/40 glass border border-slate-800 rounded-[3rem] p-16 space-y-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-pink-600/5 -z-10" />
          <SectionHeading badge="Opportunity">Download Professional Resume</SectionHeading>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            Looking for a skilled developer to join your team? Grab a copy of my resume to see my full technical stack and professional background.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button
              onClick={() => setShowResume(true)}
              className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center gap-4 hover:bg-slate-200 transition-all shadow-2xl shadow-white/5 active:scale-95"
            >
              <FileText size={24} /> Preview Resume
            </button>
            <a
              href="#"
              className="px-10 py-5 glass border border-slate-700 text-white font-black rounded-2xl flex items-center gap-4 hover:border-violet-500 transition-all active:scale-95"
            >
              <Download size={24} /> Download CV
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative">
          <SectionHeading badge="Credentials">Professional Certifications</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(139,92,246,0.3)' }}
                className="group flex items-center gap-5 p-6 bg-slate-900/40 glass border border-slate-800 rounded-[2rem] transition-all"
              >
                <div className="shrink-0 w-14 h-14 bg-slate-800/50 rounded-2xl flex items-center justify-center group-hover:bg-violet-500/10 transition-colors">
                  <img src={cert.issuerLogo} alt="Issuer" className="w-10 h-10 object-contain rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-2 leading-tight">
                    {cert.title}
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-1 mt-2">
                    Verify Cert <ChevronRight size={10} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <SectionHeading badge="Connect">Let's build something <br /><span className="text-gradient">exceptional.</span></SectionHeading>
              <p className="text-slate-400 text-lg font-medium max-w-md">
                I'm currently looking for new opportunities and creative collaborations.
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: 'Email', value: 'keyaashishshah@gmail.com', href: 'mailto:keyaashishshah@gmail.com' },
                { icon: <Phone size={24} />, label: 'Phone', value: '+91 81414 53484', href: 'tel:+918141453484' },
                { icon: <Linkedin size={24} />, label: 'LinkedIn', value: 'keya-shah-3035', href: 'https://www.linkedin.com/in/keya-shah-303587260' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-6 p-4 rounded-3xl hover:bg-slate-900/40 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-600">{item.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-slate-900/40 glass border border-slate-800 rounded-[3rem] shadow-2xl"
          > */}
          {/* <form className="space-y-8" >onSubmit={(e) => e.preventDefault()}
               <div className="space-y-6">
                  <div className="relative">
                    <input type="text" id="name" className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent" placeholder="Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm">Your Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent" placeholder="Email" required />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm">Email Address</label>
                  </div>
                  <div className="relative">
                    <textarea id="message" rows={3} className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent resize-none" placeholder="Message" required />
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm">Message</label>
                  </div>
               </div>

               {/* <button type="submit" className="w-full py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-violet-500/20">
                 Send Direct Message <Send size={20} />
               </button> 
               <a href="mailto:someone@example.com" className="w-full py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-violet-500/20">Send Email</a>

            </form> */}






          {/* </motion.div> */}







          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 bg-slate-900/40 glass border border-slate-800 rounded-[3rem] shadow-2xl"
          >
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();

                const name = (document.getElementById("name") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                const message = (document.getElementById("message") as HTMLTextAreaElement).value;

                const subject = encodeURIComponent(`Message from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

                // Open Gmail compose window in a new tab
                const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=keyaashishshah@gmail.com&su=${subject}&body=${body}`;
                window.open(gmailURL, "_blank");
              }}
            >
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={3}
                    className="peer w-full bg-slate-950/50 border-0 border-b-2 border-slate-800 px-0 py-3 text-white focus:border-violet-500 focus:ring-0 transition-all outline-none placeholder-transparent resize-none"
                    placeholder="Message"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-slate-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm"
                  >
                    Message
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-violet-500/20"
              >
                Send Direct Message <Send size={20} />
              </button>
            </form>
          </motion.div>








        </section>

        
        {/* <section id="about" className="relative py-32">
          <SectionHeading badge="Who I Am">About Me</SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-slate-400 text-lg leading-relaxed"
            >
              <p>
                Hi, I’m <span className="text-white font-bold">Keya Shah</span>, a
                passionate <span className="text-violet-400 font-semibold">Full Stack Developer</span>
                specializing in modern web applications built with the MERN stack.
                I love combining clean code, responsive UI, and thoughtful design to
                craft seamless digital experiences.
              </p>

              <p>
                I started my journey learning HTML, CSS, and JavaScript, and quickly
                found joy in solving real-world problems using React and Node.js.
                Currently, I’m interning as a MERN developer, building full-featured
                apps that integrate design and functionality.
              </p>

              <p>
                My focus now is on expanding my expertise in frontend architecture,
                exploring performance optimization, and preparing for a full-time
                React role in the coming months.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 bg-gradient-to-tr from-violet-600 to-pink-600 rounded-[3rem] p-2">
                <div className="absolute inset-0 blur-[100px] bg-violet-500/20 rounded-[3rem]" />
                <img
                  src="/profile-pic.jpg"
                  alt="Keya Shah"
                  className="relative w-full h-full object-cover rounded-[2.5rem] border border-slate-800 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-950 font-black text-xl">KS</div>
            <span className="text-3xl font-display font-black text-white">Keya Shah</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            {['Home', 'Skills', 'Works', 'Connect'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
            ))}
          </nav>
          <div className="flex gap-6">
            {[
              { icon: <Github size={20} />, href: 'https://github.com/keya-ashish-shah' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/keya-shah-303587260' },
              { icon: <Mail size={20} />, href: 'mailto:keyaashishshah@gmail.com' }
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-12 h-12 glass border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 transition-all">{s.icon}</a>
            ))}
          </div>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Designed & Engineered by Keya Shah.
          </p>
        </div>
      </footer>

      {/* Resume Modal */}
      {/* <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0"
          >
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setShowResume(false)} />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-6 right-6 w-10 h-10 glass border border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/3 bg-slate-950 p-12 space-y-8 flex flex-col justify-center">
                <h3 className="text-4xl font-display font-black text-white leading-tight">Professional <br /><span className="text-violet-400">Snapshot.</span></h3>
                <p className="text-slate-400 font-medium">Download my detailed CV to learn more about my technical background, projects, and work philosophy.</p>
                <a
                  href="\public\Keya Shah (2).pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-200 transition-all active:scale-95 shadow-xl"
                >
                  Download PDF <Download size={20} />
                </a>
              </div>

              <div className="md:w-2/3 p-4 bg-slate-800/20 flex items-center justify-center min-h-[400px]">
                <div className="w-full h-full max-h-[600px] bg-slate-900 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-slate-500 gap-4">
                  <FileText size={48} className="text-slate-700" />
                  <p className="text-sm font-bold uppercase tracking-widest">Interactive Preview Loading...</p>
                  <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-full bg-violet-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}





      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0"
          >
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setShowResume(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-6 right-6 w-10 h-10 glass border border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              {/* Left side content */}
              <div className="md:w-1/3 bg-slate-950 p-12 space-y-8 flex flex-col justify-center">
                <h3 className="text-4xl font-display font-black text-white leading-tight">
                  Professional <br />
                  <span className="text-violet-400">Snapshot.</span>
                </h3>
                <p className="text-slate-400 font-medium">
                  View or download my resume to learn more about my technical background, projects, and skills.
                </p>

                {/* ✅ Correct download link */}
                <a
                  href="/Keya Shah (2).pdf"
                  download="Keya_Shah_Resume.pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-200 transition-all active:scale-95 shadow-xl"
                >
                  Download PDF <Download size={20} />
                </a>
              </div>

              {/* ✅ Right side PDF preview */}
              <div className="md:w-2/3 p-4 bg-slate-800/20 flex items-center justify-center min-h-[400px]">
                <iframe
                  src="/Keya Shah (2).pdf"
                  title="Resume Preview"
                  className="w-full h-[600px] rounded-2xl border border-slate-700 shadow-inner"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>









    </div>
  );
}

export default App;
