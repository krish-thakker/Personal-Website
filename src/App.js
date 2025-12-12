// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './index.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hey, I'm <span class='text-myBlue'>K</span>rish."],
      typeSpeed: 50,
      showCursor: true,
    });
    return () => typed.destroy();
  }, []);

  const socials = [
    { href: 'mailto:kthakker00@gmail.com', icon: 'fa-envelope' },
    { href: 'https://linkedin.com/in/krish-thakker', icon: 'fa-linkedin' },
    { href: 'https://github.com/krish-thakker', icon: 'fa-github' },
    { href: 'https://www.instagram.com/krishthakker_/', icon: 'fa-instagram' },
    { href: 'https://www.tiktok.com/@krishthakker_', icon: 'fa-brands fa-tiktok' },
  ];

  const experiences = [
    {
      img: '/assets/capital-one.png',
      company: 'Capital One',
      role: 'Product Management Intern',
      date: 'Jun 2025 – Aug 2025',
      link: 'https://www.capitalonecareers.com/internship-programs/',
      bullets: [
        'Identified key pain points and unmet needs by conducting 20+ user interviews and developing a comprehensive Jobs To Be Done framework.',
        'Uncovered gaps in product utilization by analyzing Tableau data and designing a novel opportunity score survey to quantify user intent.',
        'Pitched prioritized strategic recommendations to the Managing Vice President to improve UX and align internal tools with advisor workflows.',
      ],
    },
    {
      img: '/assets/adc-logo.png',
      company: 'App Dev Club',
      role: 'Technical Lead',
      date: 'Jan 2025 – May 2025',
      link: 'https://appdevclub.com/',
      bullets: [
        'Led technical roadmap for a freelancer education platform.',
        'Aligned product features with business goals via stakeholder workshops.',
        'Built React Native modules and Flask APIs for real-time collaboration.',
      ],
    },
    {
      img: '/assets/jnj-logo.png',
      company: 'Johnson & Johnson',
      role: 'Digital Experience Intern',
      date: 'May 2024 – Aug 2024',
      link: 'https://www.jnj.com/innovative-medicine',
      bullets: [
        'Migrated 70+ pharma sites to Next.js/TypeScript, boosting performance.',
        'Presented LLM fine-tuning (PEFT, LoRA) demos in AWS SageMaker.',
        'Designed Grafana dashboards and MySQL queries for KPI tracking.',
      ],
    },
    {
      img: '/assets/roam.png',
      company: 'Roam',
      role: 'Co-Founder',
      date: 'Feb 2024 – Jan 2025',
      link: 'https://theroamtravel.com',
      bullets: [
        'Founded LLC and built Swift/Firebase ride-share mobile app.',
        'Managed team of 7 interns; led UX/UI iterations with user feedback.',
      ],
    },
    {
      img: '/assets/fire.jpeg',
      company: 'FIRE',
      role: 'Researcher',
      date: 'Aug 2023 – Jan 2025',
      link: 'https://www.fire.umd.edu/qml',
      bullets: [
        'Investigated quantum-enhanced stock-market forecasting using Qiskit and QGAF-based CNNs.',
        'Presented findings on quantum machine learning models for financial forecasting in comparison to classical models',
      ],
    },
    {
      img: '/assets/njccic.png',
      company: 'NJCCIC',
      role: 'Cybersecurity Intern',
      date: 'Jun 2023 – Aug 2023',
      link: 'https://www.cyber.nj.gov',
      bullets: [
        'Researched and drafted an advisory bulletin outlining cybersecurity best practices for educational technology departments.',
        'Educated the public on preventing malicious attacks by disseminating actionable security guidance.',       
      ],
    },
  ];

  const navLinks = [
    { label: 'Home', href: '#header' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#exp' },
    { label: 'Projects', href: '#proj' },
    { label: 'Skills', href: '#skills' },
  ];

  const projects = [
    {
      icon: 'fa-solid fa-credit-card',
      title: 'Paper Trail',
      desc: 'Personal finance tracker',
      link: 'https://github.com/krish-thakker/Paper-Trail',
    },
    {
      img: '/assets/quantum.jpg',
      title: 'Quantum ML Research',
      desc: 'Stock return predictions via Gramian Angular Fields',
      link: 'https://github.com/krish-thakker/Quantum-ML-Research',
    },
    {
      img: '/assets/terry.png',
      title: 'Tell Terry',
      desc: 'AI-powered journaling app',
      link: 'https://github.com/krish-thakker/AIJournalTherapy-App-TellTerry',
    },
    {
      icon: 'fa-solid fa-arrow-trend-up',
      title: 'Stock Predictor',
      desc: 'ML model predicts stock trends',
      link: 'https://github.com/krish-thakker/Stock_Predictor',
    },
    {
      icon: 'fa-solid fa-wrench',
      title: 'Fine-Tuning LLM',
      desc: 'Sentiment analysis on movie reviews',
      link: 'https://github.com/krish-thakker/Fine-Tuning-LLM',
    },
    {
      img: '/assets/website.png',
      title: 'Personal Website',
      desc: 'This very portfolio site!',
      link: 'https://github.com/krish-thakker/Personal-Website',
    },
  ];

  const certification = 'Professional Scrum Master I (Agile Product Management)';
  const skillsList = {
    languages: ['Python', 'Java', 'Swift', 'JavaScript', 'TypeScript', 'SQL', 'R'],
    frameworks: ['React', 'Next.js', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Pandas', 'Chart.js', 'Flask'],
    tools: ['AWS', 'Firebase', 'Grafana', 'Jira', 'Confluence', 'Bitbucket', 'Jupyter', 'PostgreSQL'],
    product: ['Product Roadmapping', 'A/B Testing', 'User Research', 'Agile Methodology', 'Stakeholder Alignment'],
  };

  return (
    <div className="antialiased bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 px-6 py-4 flex justify-between items-center">
        <img src="/assets/logo.png" alt="Logo" className="w-32" />
        <button
          onClick={() => setNavOpen(o => !o)}
          className="lg:hidden text-white text-2xl"
        >
          {navOpen ? '✕' : '☰'}
        </button>
        <ul className={`lg:flex gap-8 ${navOpen ? 'block absolute top-full left-0 w-full bg-black py-4' : 'hidden'}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href} className="px-4 py-2">
              <a href={href} className="hover:text-myBlue transition">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <header id="header" className="h-screen flex flex-col lg:flex-row items-center justify-center bg-black">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
          <div className="space-y-6 text-center lg:text-left max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-extrabold">
              <span ref={typedRef}></span>
            </h1>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {socials.map(({ href, icon, isImg, src }) =>
                isImg ? (
                  <a key={href} href={href} className="p-3 inline-flex">
                    <img src={src} alt="TikTok" className="w-6 h-6" />
                  </a>
                ) : (
                  <a key={icon} href={href} className="p-3 inline-flex">
                    <i className={`fa ${icon} text-xl`} />
                  </a>
                )
              )}
            </div>
          </div>
            <img
              src="/assets/profile.jpeg"
              alt="Profile"
              className="w-[9.5rem] sm:w-[12rem] md:w-[16rem] lg:w-[20rem] rounded-xl shadow-2xl"
            />
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-myBlue mb-6">About Me</h2>
          <div className="prose prose-invert max-w-none lg:max-w-prose">
            <p>
              Currently studying at the University of Maryland, I’m a passionate
              entrepreneur with interests in product management and data science.
              Outside of that, I enjoy golfing in my free time.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="exp" className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-myBlue mb-12">Experience</h2>
          <div className="relative border-l-4 border-myBlue ml-3 md:ml-6 space-y-12">
            {experiences.map((e, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Dot */}
                <span className="absolute -left-[10px] top-8 md:top-10 h-5 w-5 rounded-full bg-myBlue border-4 border-black transition-transform group-hover:scale-150 shadow-[0_0_8px_#4a86e8]"></span>

                {/* Card */}
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900/40 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-800 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-myBlue/30 hover:bg-gray-900/80"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2 rounded-xl shrink-0">
                        <img src={e.img} alt={e.company} className="w-12 h-12 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-myBlue transition-colors">{e.role}</h3>
                        <span className="text-lg text-gray-400 font-medium">{e.company}</span>
                      </div>
                    </div>
                    <span className="inline-block self-start text-myBlue font-bold text-sm md:text-base bg-myBlue/10 px-4 py-1 rounded-full border border-myBlue/20">
                      {e.date}
                    </span>
                  </div>

                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    {e.bullets.map((b, i) => <li key={i} className="text-base leading-relaxed pl-1">{b}</li>)}
                  </ul>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proj" className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-myBlue mb-12">Projects</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-myBlue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,134,232,0.15)] flex flex-col"
              >
                {/* Image / Icon Area */}
                <div className="h-48 bg-gray-800/50 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                  {p.img ? (
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                    />
                  ) : (
                    <i className={`${p.icon} text-6xl text-gray-600 group-hover:text-myBlue transition-colors duration-300`} />
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-myBlue transition-colors">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-1">{p.desc}</p>
                  
                  <div className="mt-6 flex items-center text-myBlue font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-myBlue/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 space-y-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-myBlue mb-6">Certification & Skills</h2>
          
          {/* Certification Card */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="p-4 bg-myBlue/10 rounded-full shrink-0">
               <i className="fas fa-certificate text-4xl text-myBlue"></i>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Certification</h3>
              <p className="text-2xl md:text-3xl font-bold text-white">{certification}</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skillsList).map(([cat, arr]) => (
              <div 
                key={cat} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800/80 hover:border-myBlue/30 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-myBlue capitalize mb-4 border-b border-gray-700 pb-2">{cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {arr.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-700 hover:border-gray-500 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-gray-500">
        <div className="container mx-auto px-6 lg:px-10 flex justify-center gap-6">
          {socials.map(({ href, icon, isImg, src }) =>
            isImg
              ? <a key={href} href={href} className="p-3"><img src={src} alt="TikTok" className="w-6 h-6" /></a>
              : <a key={icon} href={href} className="p-3"><i className={`fa ${icon} text-xl`} /></a>
          )}
        </div>
        <p className="text-center mt-4">&copy; 2024 Krish Thakker</p>
      </footer>
    </div>
  );
}

export default App;
