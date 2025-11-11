import SplitText from './SplitText.jsx'
import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import knowYourCountries2Img from './assets/knowYourCountries2.png'
import knowYourCountries3Img from './assets/knowYourCountries3.png'
import knowYourCountries4Img from './assets/knowYourCountries4.png'
import nasaAthlone1Img from './assets/nasaAthlone1.png'
import nasaAthlone2Img from './assets/nasaAthlone2.png'
import nasaAthlone3Img from './assets/nasaAthlone3.png'
import PAM1 from './assets/PAM1.png'
import PAM2 from './assets/PAM2.png'
import PAM3 from './assets/PAM3.png'
import ScrollFloat from './ScrollFloat';
import reactLogo from './assets/react.svg'
import jsLogo from './assets/javascript.svg'
import tsLogo from './assets/typescript.svg'
import nodeLogo from './assets/nodejs.svg'
import pythonLogo from './assets/python.svg'
import javaLogo from './assets/java.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import bootstrapLogo from './assets/boostrap.svg'
import flaskLogo from './assets/flask.svg'
import springLogo from './assets/spring.svg'
import mysqlLogo from './assets/mysql.svg'
import postgresLogo from './assets/postgresql.svg'
import mongoLogo from './assets/mongodb.svg'
import redisLogo from './assets/redis.svg'
import dockerLogo from './assets/docker.svg'
import gitLogo from './assets/git.svg'

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ExtracurricularSection = () => {
  const achievements = {
    competitions: [
      { name: "NASA Space Apps Challenge 2025 - 2nd Place", link: "/certs/nasa-2025.pdf" },
      { name: "NASA Space Apps Challenge 2024 - Participant", link: "/certs/nasa-2024.pdf" },
      { name: "NASA Space Apps Challenge 2023 - Participant", link: "/certs/nasa-2023.pdf" },
      { name: "Cisco Jam 2024 - Winner", link: "/certs/nasa-2023.pdf" }
    ],
    certifications: [
      { name: "Oracle 1Z0-811 Java Certification", link: "/certs/oracle-java.pdf" },
      { name: "Codeium AI Coding Assistant Certification", link: "/certs/codeium.pdf" }
    ],
    leadership: [
      { name: "Ireland International Ambassador (2023-24)", link: "/certs/ireland-ambassador.pdf" },
      { name: "TUS Asian Society Vice President (2023-24)", link: "/certs/tus-society.pdf" }
    ],
    academic: [
      { name: "Dean's Honours List 2023/24", link: "/certs/deans-honours.pdf" },
      { name: "Dean's Honours List 2024/25", link: "/certs/deans-honours.pdf" }
    ],
    sports: [
      { name: "TUS Badminton College Team (2022-2024)", link: "/certs/badminton-team.pdf" }
    ]
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#F5F1DC]">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat
          containerClassName="mb-8 text-center"
          textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-black"
        >
          Achievements & Activities
        </ScrollFloat>
                        {/* <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
          >
            Get In Touch
          </ScrollFloat> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(achievements).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 capitalize">
                {category === 'certifications' ? 'Certifications' : 
                 category === 'leadership' ? 'Leadership' :
                 category === 'academic' ? 'Academic Excellence' :
                 category === 'sports' ? 'Sports' : 'Competitions'}
              </h4>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const projects = [
    {
      id: 1,
      title: "Know Your Countries",
      category: "Web Development",
      images: [knowYourCountries2Img, knowYourCountries3Img, knowYourCountries4Img],
      shortDesc: "HTML, CSS, JavaScript",
      fullDesc: "'Know Your Countries' uses RestCountries API to provide info on countries. Users can input a country name, filter by region, and enjoy a flag-guessing mini-game. Seamlessly blending education and interactivity, the site offers a user-friendly exploration of global data.",
      achievements: ["Interactive flag guessing game", "RestCountries API integration", "Region filtering system"],
      githubLink: "https://rest-countries-api-web.vercel.app/"
    },
    {
      id: 2,
      title: "NASA Space Apps Challenge 2024",
      category: "Frontend Web Development",
      images: [nasaAthlone1Img, nasaAthlone2Img, nasaAthlone3Img],
      shortDesc: "React, Tailwind CSS, Vercel",
      fullDesc: "Worked on frontend development with a global team for the official website for the NASA Space Apps Challenge 2024 in Athlone. The site provides event details, registration information, and resources for participants. Built using React and styled with Tailwind CSS, it ensures a responsive and engaging user experience.",
      achievements: ["Collaborated with international team", "Responsive design implementation", "Git workflow"],
      githubLink: "https://nasa-spaceapps.vercel.app/"
    },
    {
      id: 3,
      title: "Pollen Alert Map",
      category: "Web Development, Machine Learning, Open Data",
      images: [PAM2, PAM3, PAM1],
      shortDesc: "JavaScript, Python, Google APIs",
      fullDesc: "P.A.M is a pollen alert map that visualizes pollen forecasts to help individuals suffering from pollen allergies. Research shows that pollen seasons are lengthening due to climate change, increasing allergy risks. Features real-time pollen forecasting up to 5 days, interactive heatmap visualization, pollen alerts with health advice, and extended forecasts up to 12 periods using machine learning models trained on NASA MODIS NDVI data.",
      achievements: ["Real-time pollen forecasting", "Interactive heatmap visualization", "Machine learning predictions"],
      githubLink: "https://tusmm-my.sharepoint.com/:f:/g/personal/a00303784_student_tus_ie/EssSzmyR9I9Ok47ofWcmiqoBV4dABGY-5zlAH3bMIAQNAQ?e=fbB2ol"
    },
  ];

  // Resolve images to absolute paths (supports imported modules and public folder strings)
  const resolvedProjects = projects.map(p => {
    const resolved = (p.images || []).map(img =>
      typeof img === 'string'
        ? img.startsWith('/') ? img : `/${img}`
        : img // assume imported image module
    );
    return { ...p, images: resolved };
  });

  const nextImage = (projectId, e) => {
    e.stopPropagation();
    const project = resolvedProjects.find(p => p.id === projectId);
    const len = (project?.images || []).length || 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % len
    }));
  }

  const prevImage = (projectId, e) => {
    e.stopPropagation();
    const project = resolvedProjects.find(p => p.id === projectId);
    const len = (project?.images || []).length || 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + len) % len
    }));
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 bg-[#BF092F]">
      <div className="max-w-7xl mx-auto">
        {/* <h3 className="text-4xl font-bold text-white mb-16 text-center">Projects</h3> */}
                  <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white"
          >
            Projects
          </ScrollFloat>
        <div className="space-y-8">
          {resolvedProjects.map((project) => {
            const imgs = project.images || [];
            const idx = currentImageIndex[project.id] || 0;
            return (
              <div key={project.id} className="project-card bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:min-h-80">
                  <div className="md:w-2/5 h-64 md:h-auto md:min-h-full bg-gray-700 relative overflow-hidden flex-shrink-0">
                    {imgs[idx] ? (
                      <img
                        src={imgs[idx]}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">No image</div>
                    )}

                    {imgs.length > 1 && (
                      <>
                        <button
                          onClick={(e) => prevImage(project.id, e)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all"
                        >
                          ‹
                        </button>
                        <button
                          onClick={(e) => nextImage(project.id, e)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {imgs.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="md:w-3/5 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-[#BF092F] font-medium mb-3 text-sm sm:text-base">{project.category}</p>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base hidden sm:block">{project.fullDesc}</p>
                      <p className="text-gray-300 mb-4 text-sm sm:hidden">{project.shortDesc}</p>

                      {project.achievements?.length > 0 && (
                        <div className="mb-4 hidden sm:block">
                          <h5 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Features:</h5>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="text-gray-300 text-xs sm:text-sm flex items-center">
                                <span className="text-[#BF092F] mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#BF092F] underline hover:text-white transition-colors text-sm sm:text-base">
                        Check it out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

function App() {
  const [showPDF, setShowPDF] = useState(false)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageWidth, setPageWidth] = useState(800)

  // contact form state
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth * 0.8, 800))
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])



  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  // Sends directly via Formspree (no mail client). Replace YOUR_FORMSPREE_ID below.
  const handleSendEmail = async (e) => {
    e?.preventDefault()
    setError(null)
    setSending(true)
    try {
      const FORMSPREE_ID = 'xeopyvgy' // formspree id provided
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send message')
      setSent(true)
      setContactName('')
      setContactEmail('')
      setContactMessage('')
      setTimeout(() => setSent(false), 3000)
    } catch (err) {
      setError(err.message || 'Failed to send message')
    } finally {
      setSending(false)
    }
  }

  // Timeline animation
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const styleId = 'timeline-reveal-style';
    if (!document.getElementById(styleId)) {
      const s = document.createElement('style');
      s.id = styleId;
      s.textContent = `
        .timeline-item { 
          opacity: 0; 
          transform: translateY(30px) scale(0.98); 
          transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.9, 0.2, 1); 
        }
        .work-card, .project-card { 
          opacity: 0; 
          transform: translateY(50px) scale(0.95); 
          transition: opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
        }
        .timeline-item.from-left { transform: translateX(-60px) translateY(18px) scale(0.98); }
        .timeline-item.from-right { transform: translateX(60px) translateY(18px) scale(0.98); }
        .timeline-item.is-visible, .work-card.is-visible, .project-card.is-visible { 
          opacity: 1; 
          transform: translateX(0) translateY(0) scale(1); 
        }
      `;
      document.head.appendChild(s);
    }

    const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
    const workCards = Array.from(document.querySelectorAll('.work-card'));
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const allItems = [...timelineItems, ...workCards, ...projectCards];
    
    if (!allItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          if (el.classList.contains('timeline-item')) {
            const index = Math.max(0, timelineItems.indexOf(el));
            el.classList.add(index % 2 === 0 ? 'from-left' : 'from-right');
            const delay = Math.min(index, 10) * 120;
            setTimeout(() => el.classList.add('is-visible'), delay);
          } else if (el.classList.contains('work-card')) {
            const index = Math.max(0, workCards.indexOf(el));
            const delay = index * 400;
            setTimeout(() => el.classList.add('is-visible'), delay);
          } else if (el.classList.contains('project-card')) {
            const index = Math.max(0, projectCards.indexOf(el));
            const delay = index * 500;
            setTimeout(() => el.classList.add('is-visible'), delay);
          }
          
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.18 });

    allItems.forEach(i => observer.observe(i));

    return () => {
      observer.disconnect();
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-[#F5F1DC] min-h-screen font-['Raleway']">
      {/* Header */}
      <header className="p-4 sm:p-6 flex justify-between items-center">
        {/* <h1 className="text-3xl font-bold text-black font-['Raleway']">Mavis Hye Xuan Chia</h1> */}
        <nav className="space-x-8">
          <a href="#about" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">About</a>
          <a href="#projects" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Projects</a>
          <a href="#contact" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero & About Section */}
      <section id="about" className="text-center py-20 px-4 sm:px-6">
        <SplitText
          text="Welcome"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-black mb-4 mt-20"
          delay={80}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
          tag="h2"
        />
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12">Full Stack Developer & Designer</p>
        <div className="max-w-4xl mx-auto mb-16">
          {/* <h3 className="text-4xl font-bold text-black mb-10">About Me</h3> */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed">
            I'm an international student from Malaysia doing my Bachelor's degree in Software Design based in Athlone. I specialize in full-stack web development . Beyond coding, I enjoy going outoors, baking and traveling.
          </p>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href="/assets/MavisHyeXuanChia_CV2025.pdf" download className="bg-[#BF092F] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg hover:bg-black hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg text-sm sm:text-base md:text-lg font-semibold">
            <span>Download CV</span>
          </a>
          <a href="https://www.linkedin.com/in/mavis-hye-xuan-chia-a763a2237/" target="_blank" rel="noopener noreferrer" className="bg-[#0a66c2] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg text-sm sm:text-base md:text-lg font-semibold">
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/mavischx" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg text-sm sm:text-base md:text-lg font-semibold">
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-4 sm:px-6 bg-[#BF092F]">
        <div className="max-w-5xl mx-auto">
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white"
          >
            My Journey
          </ScrollFloat>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white" style={{ height: 'calc(100% - 3rem)' }}></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Start College */}
              <div className="flex items-center timeline-item">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Started University</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Bachelor student in BSC Software Design with AI and Cloud computing in Technological University of the Shannon, Athlone.
                      <br />Coursework includes Software and Web development, Databases, REST Api, Agile methodologies, Machine Learning.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8 flex items-center">
                  <div className="text-white text-sm sm:text-base md:text-xl font-bold">2022 - Present</div>
                </div>
              </div>

              {/* Summer Intern */}
              <div className="flex items-center timeline-item">
                <div className="w-1/2 pr-8 flex justify-end items-center">
                  <div className="text-white text-sm sm:text-base md:text-xl font-bold">June 2024 - August 2024</div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Summer Internship</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Summer intern in Ericsson, Athlone</p>
                  </div>
                </div>
              </div>

              {/* Official Intern */}
              <div className="flex items-center timeline-item">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Internship</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Full-time internship position in Ericsson, Athlone</p>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8 flex items-center">
                  <div className="text-white text-sm sm:text-base md:text-xl font-bold">January 2025 - August 2025</div>
                </div>
              </div>

              {/* Graduation */}
              <div className="flex items-center timeline-item">
                <div className="w-1/2 pr-8 flex justify-end items-center">
                  <div className="text-white text-sm sm:text-base md:text-xl font-bold">2026</div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-black">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Graduation</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Bachelor's degree completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section (reverted section bg, cards switched to white) */}
      <section className="py-16 px-4 sm:px-6 bg-[#F5F1DC]">
        <div className="max-w-6xl mx-auto">
          {/* <h3 className="text-4xl font-bold text-black mb-16 text-center">Work Experience</h3> */}
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-black"
          >
            Work Experience
          </ScrollFloat>

          <div className="space-y-8">
            {[
              {
                title: "Software Development Intern",
                company: "Ericsson",
                period: "January 2025 – August 2025",
                descriptionLines: [
                  "Transitioned a legacy monolithic system to a microservice architecture, accelerating feature rollout by ~85% using Python, TypeScript, Redis, and Docker.",
                  "Automated software modelling and document generation pipelines (docxtpl, StringTemplate, custom Python workflows), reducing document processing time from 27 days to 3 days.",
                  "Developed an internal RAG-based chatbot integrating Redis, Neo4j, and a custom vector store for knowledge retrieval.",
                  "Collaborated in an Agile environment with sprint planning, code reviews, and Git-based workflows to ensure iterative delivery."
                ]
              },
              {
                title: "Summer Intern",
                company: "Ericsson",
                period: "June 2024 – August 2024",
                descriptionLines: [
                  "Built a transition-year program website as a guide, collaborating with a cross-functional team using Python, HTML and CSS.",
                  "Authored comprehensive documentation for project files to improve maintainability for future developers.",
                  "Developed a 3D VR office simulator using Unity and C# for Ericsson's 50th anniversary, engaging 100+ employees in interactive sessions."
                ]
              }
            ].map((job, index) => (
              <div key={index} className="work-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">{job.title}</h4>
                    <p className="text-[#BF092F] font-medium mb-3 text-sm sm:text-base md:text-lg">{job.company}</p>
                    <ul className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed list-disc ml-5 space-y-2">
                      {job.descriptionLines.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <span className="bg-[#BF092F] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold">{job.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white"
          >
            Skills & Technologies
          </ScrollFloat>
          
          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 text-center">Frontend</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {[
                  { logo: reactLogo, name: 'React' },
                  { logo: jsLogo, name: 'JavaScript' },
                  { logo: tsLogo, name: 'TypeScript' },
                  { logo: htmlLogo, name: 'HTML' },
                  { logo: cssLogo, name: 'CSS' },
                  { logo: bootstrapLogo, name: 'Bootstrap' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-8 sm:h-10 mb-1">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 text-center">Backend</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {[
                  { logo: nodeLogo, name: 'Node.js' },
                  { logo: pythonLogo, name: 'Python' },
                  { logo: javaLogo, name: 'Java' },
                  { logo: flaskLogo, name: 'Flask' },
                  { logo: springLogo, name: 'Spring' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-8 sm:h-10 mb-1">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 text-center">Database</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {[
                  { logo: mysqlLogo, name: 'MySQL' },
                  { logo: postgresLogo, name: 'PostgreSQL' },
                  { logo: mongoLogo, name: 'MongoDB' },
                  { logo: redisLogo, name: 'Redis' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-8 sm:h-10 mb-1">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 text-center">Tools</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {[
                  { logo: dockerLogo, name: 'Docker' },
                  { logo: gitLogo, name: 'Git' }
                ].map((skill, index) => (
                  <div key={index} className="bg-white p-2 sm:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-8 sm:h-10 mb-1">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Extracurricular Section */}
      <ExtracurricularSection />

      {/* Contact Section (replaced with inline form — sends directly via Formspree) */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* <h3 className="text-4xl font-bold text-white mb-6 text-center">Get In Touch</h3> */}
                    <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white"
          >
            Get In Touch
          </ScrollFloat>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 text-center">Write me a message below.</p>

          <form onSubmit={handleSendEmail} className="bg-[#F5F1DC] p-6 rounded-lg max-w-2xl mx-auto">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full p-3 rounded border border-gray-300"
              />
              <input
                type="email"
                placeholder="Your email (optional)"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full p-3 rounded border border-gray-300"
              />
              <textarea
                placeholder="Your message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 h-36 resize-vertical"
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className={`bg-[#BF092F] text-white px-6 py-3 rounded-lg transition-colors font-semibold ${sending ? 'opacity-60 cursor-not-allowed' : 'hover:bg-black'}`}
                >
                  {sending ? 'Sending…' : 'Send'}
                </button>
                <div className="text-sm text-gray-700">
                  {sent ? <span className="text-green-600">Message sent — thank you.</span> : null}
                  {error ? <span className="text-red-600 block">{error}</span> : null}
                </div>
              </div>

              <div className="pt-3 text-sm text-gray-700">
                Or email me directly:
                <a
                  href="mailto:mavis.chx@gmail.com"
                  className="ml-2 text-[#BF092F] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mavis.chx@gmail.com
                </a>
              </div>

              {/* External profile buttons */}
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/mavis-hye-xuan-chia-a763a2237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0a66c2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mavischx" /* replace with your GitHub profile */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors font-semibold"
                >
                  GitHub
                </a>
              </div>

            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 text-center bg-black">
        <p className="text-white text-sm sm:text-base md:text-lg">&copy; 2025 Mavis Chia Hye Xuan. All rights reserved.</p>
      </footer>

      {/* PDF Modal */}
      {showPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-black">Resume</h3>
              <button
                onClick={() => setShowPDF(false)}
                className="text-gray-500 hover:text-black text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex-1 p-4 flex flex-col">
              <div className="flex-1 flex justify-center items-center overflow-auto">
                <Document
                  file="/assets/MavisHyeXuanChia_CV2025.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="max-w-full"
                >
                  <Page
                    pageNumber={pageNumber}
                    className="max-w-full"
                    width={pageWidth}
                  />
                </Document>
              </div>
              {numPages && (
                <div className="flex justify-center items-center space-x-4 mt-4 p-2 bg-gray-100 rounded">
                  <button
                    onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                    disabled={pageNumber <= 1}
                    className="px-3 py-1 bg-[#BF092F] text-white rounded disabled:bg-gray-400"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-700">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                    disabled={pageNumber >= numPages}
                    className="px-3 py-1 bg-[#BF092F] text-white rounded disabled:bg-gray-400"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App