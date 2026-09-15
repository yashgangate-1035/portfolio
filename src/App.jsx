import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Menu, X, Moon, Sun } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight">YG</a>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
            
            <div className="w-px h-4 bg-border ml-2 mr-2"></div>
            
            <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <a href="#contact" className="btn-primary text-sm h-9 px-4">Get in touch</a>
          </nav>

          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggleTheme} className="text-muted-foreground p-2" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background p-4 flex flex-col gap-4">
            <a href="#about" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#education" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
            <a href="#skills" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn-primary justify-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>Get in touch</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-14 md:py-20 lg:py-28 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Software Developer</span>
            <h1 className="hero-title">
              Yash Gangate
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              MCA Student & Tech Explorer. Turning ideas into modern and responsive websites through creative design, clean code and interactive user experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a href="/yashResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download resume
              </a>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="GitHub">
                  {/* <Github size={20} /> */}
                </a>
                <a href="https://www.linkedin.com/in/yash-gangate" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="LinkedIn">
                  {/* <Linkedin size={20} /> */}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-14 md:py-20 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">Background</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About me.</h2>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-[65ch] text-base md:text-lg leading-relaxed text-muted-foreground">
            <p className="mb-4">
              I am currently pursuing a Masters of Computer Applications (MCA) at RIT College, Sakharale. I am passionate about technology, creativity, and learning modern digital skills.
            </p>
            <p>
              I enjoy exploring different areas of software and web technologies, building user-friendly applications, and continuously improving my technical knowledge through projects and practical learning.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-14 md:py-20 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Things I've built.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="card flex flex-col h-full">
              <span className="text-xs font-medium text-muted-foreground mb-2">Management System</span>
              <h3 className="text-xl font-semibold mb-3">Hospital Management System</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                A comprehensive system designed to efficiently manage patients, doctors, and appointments in a hospital environment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge">Java</span>
                <span className="badge">MySQL</span>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:opacity-70 transition-opacity mt-auto w-fit">
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="card flex flex-col h-full">
              <span className="text-xs font-medium text-muted-foreground mb-2">Frontend Development</span>
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                A personal responsive portfolio application showcasing projects, skills, and background information.
              </p>``
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge">React</span>
                <span className="badge">Tailwind CSS</span>
                <span className="badge">JavaScript</span>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:opacity-70 transition-opacity mt-auto w-fit">
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="card flex flex-col h-full">
              <span className="text-xs font-medium text-muted-foreground mb-2">Management System</span>
              <h3 className="text-xl font-semibold mb-3">Jewellery Shop Management</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                A tailored management system designed to handle the specific needs and inventory of jewellery shop businesses.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="badge">Python</span>
                <span className="badge">Database</span>
              </div>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:opacity-70 transition-opacity mt-auto w-fit">
                Learn more <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-14 md:py-20 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">Academics</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education.</h2>
          </div>
          
          <div className="max-w-3xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 border-b border-border">
              <div className="md:w-1/4 text-sm font-medium text-muted-foreground whitespace-nowrap pt-1">
                Currently Pursuing
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold mb-1">Masters of Computer Applications (MCA)</h3>
                <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                  <span>RIT College</span>
                  <span>·</span>
                  <span>Sakharale</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Focusing on advanced software development, web technologies, and practical project implementation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">Software Engineering</span>
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">Web Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-14 md:py-20 max-w-[1120px] mx-auto px-4 md:px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & tools.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">JavaScript</span>
                <span className="badge">Python</span>
                <span className="badge">Java</span>
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">React</span>
                <span className="badge">Tailwind CSS</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Git</span>
                <span className="badge">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-14 md:py-20 lg:py-28 max-w-[1120px] mx-auto px-4 md:px-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">Get in touch</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's build something together.</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:yashgangate@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group w-fit">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">yashgangate@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/yash-gangate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group w-fit">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                    {/* <Linkedin size={18} /> */}
                  </div>
                  <span className="font-medium">linkedin.com/in/yash-gangate</span>
                </a>
              </div>
            </div>
            
            <div className="card w-full">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input type="text" id="name" className="input" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" className="input" placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows="4" className="input resize-y min-h-[100px]" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full mt-2">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10 md:py-16">
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <span className="font-bold text-lg tracking-tight mb-2 block">Yash Gangate</span>
            <p className="text-sm text-muted-foreground">
              Software developer building accessible, modern, and responsive web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-sm">Explore</span>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-sm">Connect</span>
              <a href="https://github.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/yash-gangate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="mailto:yashgangate@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="font-semibold text-sm">Resources</span>
              <a href="/yashResume.pdf" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resume</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1120px] mx-auto px-4 md:px-6 mt-10 md:mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yash Gangate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}