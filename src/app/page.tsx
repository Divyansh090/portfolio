"use client";
import { Check, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("divyanshrathi90@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  // Advanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress and section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);

      const sections = ["about", "skills", "projects"];
      const scrollPos = scrolled + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Prisma",
    "NextAuth",
    "PostgreSQL",
  ];

  const projects = [
    {
      title: "Personal Workout Planner",
      description:
        "A comprehensive fitness application featuring personalized workout routines, progress tracking, and performance analytics. Built with modern web technologies to deliver seamless user experience across all devices.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      link: "https://personalworkoutplanner.vercel.app",
      year: "2025",
    },
  ];

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Minimal elegant background */}
      <div className="fixed inset-0 bg-slate-950"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>

      {/* Subtle scroll progress */}
      <div className="fixed top-0 left-0 w-full h-px bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Premium cursor effect */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            width: 600,
            height: 600,
            background: `radial-gradient(circle, rgba(71, 85, 105, 0.08) 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="relative z-20 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Refined sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Elegant name section */}
              <div className="mb-12">
                <h1 className="text-5xl font-light tracking-tight text-slate-200 sm:text-6xl mb-3">
                  <span className="bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent bg-size-200 animate-gradient-shift font-extralight">
                    Divyansh Rathi
                  </span>
                </h1>

                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-slate-400">
                    Full-Stack Developer
                  </h2>
                  <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                    Crafting digital experiences with precision and passion.
                    Currently seeking new opportunities to create impactful
                    solutions.
                  </p>
                </div>

                {/* Subtle accent line */}
                <div className="w-16 h-px bg-gradient-to-r from-slate-500 to-transparent mt-6"></div>
              </div>

              {/* Minimalist navigation */}
              <nav className="nav hidden lg:block">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        className={`group flex items-center py-3 transition-all duration-500 ${
                          activeSection === item.id ? "active" : ""
                        }`}
                        href={`#${item.id}`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all duration-500 ${
                            activeSection === item.id
                              ? "w-12 bg-slate-300"
                              : "w-6 bg-slate-600 group-hover:w-8 group-hover:bg-slate-400"
                          }`}
                        ></span>
                        <span
                          className={`text-sm font-medium transition-all duration-500 ${
                            activeSection === item.id
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-300"
                          }`}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Refined social links */}
            <div className="mt-16 lg:mt-0">
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/divyansh090"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>

                <a
                  href="https://x.com/DivyanshRathi_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.63 0-4.77 2.13-4.77 4.77 0 .37.04.73.12 1.07A12.9 12.9 0 0 1 3.16.84a4.77 4.77 0 0 0-.64 2.4c0 1.65.84 3.1 2.13 3.95A4.48 4.48 0 0 1 .96 6v.06c0 2.3 1.63 4.22 3.8 4.66a4.56 4.56 0 0 1-2.15.08c.61 1.9 2.37 3.28 4.45 3.32A9.06 9.06 0 0 1 0 19.54a12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.82 0-.2 0-.39-.01-.58A9.18 9.18 0 0 0 23 3z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/itsdivyanshrathi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>

                <button
                  onClick={handleCopy}
                  className="group relative flex items-center rounded-lg px-2 py-2 text-slate-400 hover:text-teal-300 transition-colors duration-300"
                  aria-label="Copy email address"
                >
                  {/* Icon switches between Mail & Check */}
                  {copied ? (
                    <Check className="h-5 w-5 text-teal-400 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  )}

                  {/* Email with slide + fade animation */}
                  <span
                    className={`ml-2 text-sm font-medium text-slate-300 transform transition-all duration-500 ease-out
                                opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0`}
                  >
                    {copied ? "Copied!" : "divyanshrathi90@gmail.com"}
                  </span>
                </button>
              </div>
            </div>
          </header>

          {/* Premium main content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-32 scroll-mt-16 lg:scroll-mt-24">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-8">
                    About
                  </h3>
                </div>

                <div className="space-y-6 text-slate-400 leading-relaxed">
                  <p className="text-lg">
                    I&apos;m a dedicated B.Tech 3rd year student with a deep passion
                    for
                    <span className="text-slate-300">
                      {" "}
                      full-stack web development
                    </span>
                    . My journey involves continuous learning, building
                    meaningful projects, and staying current with modern web
                    technologies.
                  </p>

                  <p>
                    Currently, I specialize in creating scalable web
                    applications using
                    <span className="text-slate-300">
                      {" "}
                      React, Next.js, and TypeScript
                    </span>
                    . I believe in writing clean, maintainable code and creating
                    user experiences that are both functional and delightful.
                  </p>

                  <p>
                    I&apos;m actively seeking internship opportunities where I can
                    contribute to impactful projects, collaborate with
                    experienced teams, and continue growing as a professional
                    developer.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section - Minimalist approach */}
            <section id="skills" className="mb-32 scroll-mt-16 lg:scroll-mt-24">
              <div>
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-8">
                  Technologies
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group py-4 px-1 border-b border-slate-800 hover:border-slate-700 transition-colors duration-300"
                  >
                    <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Resume link */}
              <div className="mt-12">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium border-b border-slate-700 group-hover:border-slate-500 pb-1">
                    View Resume
                  </span>
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-32 scroll-mt-16 lg:scroll-mt-24"
            >
              <div className="mb-12">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-8">
                  Selected Work
                </h3>
              </div>

              <div className="space-y-16">
                {projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="border-l border-slate-800 pl-8 hover:border-slate-600 transition-colors duration-500">
                      <div className="flex items-baseline justify-between mb-4">
                        <h4 className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline underline-offset-4"
                          >
                            {project.title}
                          </a>
                        </h4>
                        <span className="text-sm text-slate-500 font-mono">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-slate-400 leading-relaxed mb-6 max-w-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-sm text-slate-500 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View more projects */}
              <div className="mt-16">
                <a
                  href="https://github.com/Divyansh090?tab=repositories"
                  className="inline-flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium border-b border-slate-700 group-hover:border-slate-500 pb-1">
                    View All Projects
                  </span>
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* Minimal footer */}
            <footer className="pt-16 border-t border-slate-900">
              <div className="text-sm text-slate-500 space-y-2">
                <p>Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
                <p className="text-xs text-slate-600">© 2025 Divyansh Rathi</p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
