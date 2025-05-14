// src/App.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './index.css';

function App() {
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
  ];

  const experiences = [
    { img: '/assets/adc-logo.png', title: 'Project Manager - App Dev Club', link: 'https://appdevclub.com/' },
    { img: '/assets/jnj-logo.png', title: 'Digital Experience Intern - J&J', link: 'https://www.jnj.com/innovative-medicine' },
    { img: '/assets/roam.png', title: 'Co-Founder - Roam', link: 'https://theroamtravel.com' },
    { img: '/assets/hdi.jpeg', title: 'Researcher - HDI Group', link: 'https://hdi.cs.umd.edu/' },
    { img: '/assets/fire.jpeg', title: 'Researcher - FIRE', link: 'https://www.fire.umd.edu/qml' },
    { img: '/assets/njccic.png', title: 'Cybersecurity Intern - NJCCIC', link: 'https://www.cyber.nj.gov' },
  ];

  const navLinks = [
    { label: 'Home', href: '#header' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#exp' },
    { label: 'Projects', href: '#proj' },
    { label: 'Skills', href: '#skills' },
  ];

  const projects = [
    { icon: 'fa-solid fa-credit-card', title: 'Paper Trail', desc: 'Personal finance tracker', link: 'https://github.com/krish-thakker/Paper-Trail' },
    { img: '/assets/quantum.jpg', title: 'Quantum ML Research', desc: 'Gramian Angular Field for stocks', link: 'https://github.com/krish-thakker/Quantum-ML-Research' },
    { img: '/assets/terry.png', title: 'Tell Terry', desc: 'AI journaling app', link: 'https://github.com/krish-thakker/AIJournalTherapy-App-TellTerry' },
    { icon: 'fa-solid fa-arrow-trend-up', title: 'Stock Predictor', desc: 'ML stock predictor', link: 'https://github.com/krish-thakker/Stock_Predictor' },
    { icon: 'fa-solid fa-wrench', title: 'Fine-Tuning LLM', desc: 'Sentiment on movie ratings', link: 'https://github.com/krish-thakker/Fine-Tuning-LLM' },
    { img: '/assets/website.png', title: 'Personal Website', desc: 'This very site!', link: 'https://github.com/krish-thakker/Personal-Website' },
  ];

  return (
    <div>
      {/* Header */}
      <header id="header" className="relative w-full h-screen bg-black">
        {/* NAV BAR */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6">
          <img src="/assets/logo.png" alt="Logo" className="w-36" />
          <ul className="flex gap-8 text-white">
            {navLinks.map(({label, href}) => (
              <li key={href}>
                <a href={href} className="hover:text-myBlue transition">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN HEADER CONTENT */}
        <div className="container mx-auto px-10 h-full flex flex-col lg:flex-row items-center lg:justify-between justify-center">
          {/* Left: Text + socials */}
          <div className="space-y-6 text-center lg:text-left max-w-lg">
            <h1 className="text-6xl font-bold">
              <span ref={typedRef}></span>
            </h1>
            <p className="text-xl">
              A passionate entrepreneur with an interest in technology.
            </p>
            <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
              {socials.map(({href, icon}) => (
                <a key={icon} href={href} className="inline-flex items-center justify-center p-5 cursor-pointer">
                  <i className={`fa ${icon} text-2xl text-white`}></i>
                </a>
              ))}
              <a href="https://www.tiktok.com/@krishthakker_" className="inline-flex items-center justify-center p-5 cursor-pointer">
                <img src="/assets/tiktok.png" alt="TikTok" className="w-8 h-8 object-contain pointer-events-none" />
              </a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <img
            src="/assets/profile.jpeg"
            alt="Profile"
            className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5 max-w-xs rounded-lg mt-10 lg:mt-0"
          />
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-10 flex flex-wrap items-center gap-10">
          <img src="/assets/umd.png" alt="UMD Logo" className="w-1/3 rounded-lg" />
          <div className="flex-1">
            <h2 className="text-5xl font-semibold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              Currently studying at the University of Maryland, I am a passionate entrepreneur with an interest in technology, 
              namely in product management and data science. I intend to establish a career at the intersection of technology and business.
              Outside of that, I enjoy golfing in my free time.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="exp" className="py-20">
        <div className="container mx-auto px-10">
          <h2 className="text-5xl font-semibold mb-8">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {experiences.map(({img, title, link}) => (
              <div 
                key={title}
                onClick={() => window.location.href = link}
                className="bg-gray-800 p-8 rounded-lg hover:bg-myBlue transition cursor-pointer"
              >
                <img src={img} alt={title} className="h-24 mx-auto mb-4 rounded-lg" />
                <h3 className="text-2xl font-medium text-center text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proj" className="py-20">
        <div className="container mx-auto px-10">
          <h2 className="text-5xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map(({icon, img, title, desc, link}) => (
              <a 
                key={title}
                href={link}
                className="bg-gray-800 p-8 rounded-lg hover:bg-myBlue transition flex flex-col items-center text-center"
              >
                {img
                  ? <img src={img} alt={title} className="h-24 mb-4 rounded-lg" />
                  : <i className={`${icon} text-4xl mb-4 text-white`} />
                }
                <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>
                <p className="text-white">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-10">
          <h2 className="text-5xl font-semibold mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-myBlue transition text-white">
              <i className="fa fa-code text-4xl mb-4"></i>
              <h3 className="text-2xl font-medium mb-2">Programming Languages</h3>
              <p>Python, Java, Swift, JavaScript, TypeScript, SQL, R</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-myBlue transition text-white">
              <i className="fa fa-cogs text-4xl mb-4"></i>
              <h3 className="text-2xl font-medium mb-2">Frameworks & Libraries</h3>
              <p>React, Next.js, TensorFlow, PyTorch, Hugging Face, Pandas, Chart.js, Flask</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-myBlue transition text-white">
              <i className="fa fa-cloud text-4xl mb-4"></i>
              <h3 className="text-2xl font-medium mb-2">Tools & Platforms</h3>
              <p>AWS, Firebase, Grafana, Jira, Confluence, Bitbucket, Jupyter, PostgreSQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="container mx-auto px-10 flex items-center justify-center gap-4">
          {socials.map(({href, icon}) => (
            <a key={icon} href={href} className="inline-flex items-center justify-center p-5 cursor-pointer">
              <i className={`fa ${icon} text-2xl text-white`} />
            </a>
          ))}
          <a href="https://www.tiktok.com/@krishthakker_" className="inline-flex items-center justify-center p-5 cursor-pointer">
            <img src="/assets/tiktok.png" alt="TikTok" className="w-8 h-8 object-contain pointer-events-none" />
          </a>
        </div>
        <p className="text-center text-white mt-4">&copy; 2024 Krish Thakker</p>
      </footer>
    </div>
  );
}

export default App;
