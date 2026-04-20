import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Briefcase, GraduationCap, Award, BookOpen, ChevronUp, Menu, X } from 'lucide-react';
import './index.css';

const About = () => (
  <section className="section-container about-section fade-in">
    <div className="hero-image-wrapper">
      <div className="hero-image-container">
        <img src="/profile.jpg" alt="Poovarasan P" />
      </div>
    </div>
    
    <h1 className="hero-title">
      Hi, I'm <span>Poovarasan P</span>
    </h1>
    
    <p className="hero-subtitle">
      Aspiring Full-Stack Developer passionate about building scalable web applications and solving real-world problems.
    </p>
    
    <div className="hero-contacts">
      <a href="mailto:poovarasanpalani07@gmail.com" className="contact-chip">
        <Mail size={18} /> poovarasanpalani07@gmail.com
      </a>
      <span className="contact-chip">
        <Phone size={18} /> +91-88078-37233
      </span>
      <span className="contact-chip">
        <MapPin size={18} /> Coimbatore, India
      </span>
    </div>

    <div className="hero-socials">
      <a href="https://github.com/POOVARASAN0713" target="_blank" rel="noreferrer" className="social-icon">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/poovarasan-p-a43255272" target="_blank" rel="noreferrer" className="social-icon">
        <Linkedin size={24} />
      </a>
      <a href="#" className="social-icon" title="LeetCode">
        <Code2 size={24} />
      </a>
    </div>
    
    <div className="hero-actions" style={{ marginTop: '2rem' }}>
      <a href="/Poovarasan_Resume.pdf" target="_blank" rel="noreferrer" className="primary-btn">
        View Resume
      </a>
    </div>
  </section>
);

const Skills = () => (
  <section className="section-container skills-section fade-in">
    <div className="section-header">
      <div className="icon-wrapper blue-icon"><Code2 size={24} /></div>
      <h2 className="section-title border-blue">Technical Skills</h2>
    </div>
    
    <div className="skills-grid">
      {[
        { category: 'Frontend', skills: 'React.js, HTML, CSS, JavaScript', dotClass: 'dot-orange' },
        { category: 'Backend & Databases', skills: 'Node.js (Learning), PostgreSQL, MySQL', dotClass: 'dot-green' },
        { category: 'Languages', skills: 'Java, Python, SQL, JavaScript', dotClass: 'dot-blue' },
        { category: 'Concepts & Tools', skills: 'OOP, Data Structures, REST APIs, MVC, Git/GitHub, VS Code', dotClass: 'dot-purple' }
      ].map((group, idx) => (
        <div key={idx} className="card skill-card">
          <h3 className="card-title">
            <span className={`status-dot ${group.dotClass}`}></span>
            {group.category}
          </h3>
          <p className="card-text">{group.skills}</p>
        </div>
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section className="section-container fade-in">
    <div className="section-header">
      <div className="icon-wrapper indigo-icon"><Briefcase size={24} /></div>
      <h2 className="section-title border-indigo">Internship</h2>
    </div>
    
    <div className="card experience-card">
      <div className="card-bg-decoration indigo-decoration"></div>
      <div className="experience-header">
        <div>
          <h3 className="card-title-lg">Web Development Intern</h3>
          <p className="card-subtitle-indigo">Capable Company</p>
        </div>
        <span className="date-badge">Feb 2025</span>
      </div>
      
      <ul className="bullet-list">
        <li><span>▹</span> Developed responsive web pages using HTML, CSS, and JavaScript.</li>
        <li><span>▹</span> Debugged issues and improved application performance and user experience.</li>
      </ul>
    </div>
  </section>
);

const Projects = () => (
  <section className="section-container fade-in">
    <div className="section-header">
       <div className="icon-wrapper teal-icon"><BookOpen size={24} /></div>
      <h2 className="section-title border-teal">Projects</h2>
    </div>
    
    <div className="grid-2-col">
      <div className="card project-card hover-teal">
        <div className="card-overlay teal-overlay"></div>
        <div className="card-content">
          <h3 className="card-title-lg">Farmer Marketplace Website</h3>
          <ul className="bullet-list project-list teal-bullets">
            <li><span>•</span> Developed a web application to connect farmers and customers for direct product sales.</li>
            <li><span>•</span> Built frontend using HTML, CSS, JavaScript, and basic React.js concepts.</li>
            <li><span>•</span> Implemented backend functionality using Node.js and MySQL database integration.</li>
          </ul>
          <div className="tech-tags">
            {['React', 'Node.js', 'MySQL', 'CSS'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="card project-card hover-blue">
        <div className="card-overlay blue-overlay"></div>
        <div className="card-content">
          <h3 className="card-title-lg">Portfolio Website</h3>
          <ul className="bullet-list project-list blue-bullets">
            <li><span>•</span> Designed and developed a personal portfolio to showcase projects, skills, and achievements.</li>
            <li><span>•</span> Built using React, HTML, CSS, and JavaScript and deployed for public access.</li>
          </ul>
          <div className="tech-tags">
            {['React', 'CSS', 'Vite'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <div className="grid-2-col pt-8 fade-in">
    <section className="section-container">
      <div className="section-header">
         <div className="icon-wrapper rose-icon"><GraduationCap size={24} /></div>
        <h2 className="section-title border-rose">Education</h2>
      </div>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot dot-rose"></div>
          <div className="card timeline-card">
            <span className="date-text text-rose">2023 – 2027</span>
            <h4 className="card-title-md">B.Tech CSBS</h4>
            <div className="timeline-details">
              <span>KPR Institute of Engineering and Technology</span>
              <span className="grade-badge">CGPA: 7.52 / 10</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot dot-slate"></div>
          <div className="card timeline-card">
            <span className="date-text text-slate">2023</span>
            <h4 className="card-title-md">Class 12</h4>
            <div className="timeline-details">
              <span>SRNV Higher Secondary School</span>
              <span className="grade-badge">78%</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot dot-slate"></div>
          <div className="card timeline-card">
            <span className="date-text text-slate">2021</span>
            <h4 className="card-title-md">Class 10</h4>
            <div className="timeline-details">
              <span>SRNV Higher Secondary School</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-container">
       <div className="section-header">
         <div className="icon-wrapper amber-icon"><Award size={24} /></div>
        <h2 className="section-title border-amber">Certifications</h2>
      </div>
      
      <div className="card list-card">
        <ul className="separated-list">
          <li className="list-item">
            <div className="icon-badge amber-badge"><Award size={18} /></div>
            <h4 className="list-title">NPTEL Introduction to Industry 4.0 and IIoT</h4>
          </li>
          <li className="list-item">
            <div className="icon-badge amber-badge"><Award size={18} /></div>
            <h4 className="list-title">NPTEL Business Ethics</h4>
          </li>
          <li className="list-item">
            <div className="icon-badge amber-badge"><Award size={18} /></div>
            <h4 className="list-title">Oracle Certified Foundation Associate</h4>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
  ];

  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-wrapper">
            <div className="nav-content">
              <NavLink to="/" className="nav-brand">
                <span>Poovarasan P</span>
              </NavLink>
              
              {/* Desktop Nav */}
              <div className="desktop-menu">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Nav Toggle */}
              <div className="mobile-menu-btn">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <div className="mobile-nav-panel">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/education">Education</NavLink>
              <a href="/Poovarasan_Resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
            </div>
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Poovarasan P. Built with React .
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="scroll-top-btn"
                title="Back to top"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
