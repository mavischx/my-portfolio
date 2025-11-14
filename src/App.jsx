import SplitText from './SplitText.jsx'
import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import knowYourCountries2Img from './assets/knowYourCountries2.png'
import knowYourCountries3Img from './assets/knowYourCountries3.png'
import knowYourCountries4Img from './assets/knowYourCountries.png'
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
import phpLogo from './assets/php.png'
import ericssonLogo from './assets/ericsson.png'
import oracleCert from './assets/oracle_cert.png'
import codeiumCert from './assets/codeium_cert.png'
import nasaCert2023 from './assets/nasaCert2023.png'
import nasaCert2024 from './assets/nasaCert2024.png'
import nasaCert2025 from './assets/nasaCert2025.png'
import deans2024 from './assets/deans2024.jpeg'

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const CompetitionsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const certifications = [
    { name: "Oracle 1Z0-811 Java Certification", link: "/certs/oracle-java.pdf", image: oracleCert },
    { name: "Codeium AI Coding Assistant Certification", link: "/certs/codeium.pdf", image: codeiumCert },
    { name: "Dean's Honours List 2024", link: "/certs/deans-honours.pdf", image: deans2024 }
  ]

  const allImages = certifications

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(allImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(allImages[prevIndex])
  }

  return (
    <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat
          containerClassName="mb-8 text-center"
          textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          Certifications
        </ScrollFloat>
        
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {allImages.map((item, index) => (
            <div key={index} className="text-center cursor-pointer">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                onClick={() => openModal(item, index)}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <p className="text-white text-xs mt-2 font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all text-2xl"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all text-2xl"
              >
                ›
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const ExtracurricularSection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const activities = {
    hackathons: [
      { name: "NASA Space Apps Challenge 2025 - 2nd Place", link: "/certs/nasa-2025.pdf", image: nasaCert2025 },
      { name: "NASA Space Apps Challenge 2024 - Participant", link: "/certs/nasa-2024.pdf", image: nasaCert2024 },
      { name: "NASA Space Apps Challenge 2023 - Participant", link: "/certs/nasa-2023.pdf", image: nasaCert2023 },
      // { name: "Cisco Jam 2024 - Winner", link: "/certs/cisco-jam.pdf" }
    ],
    leadership: [
      { name: "Education Ireland Student Ambassador (2023-2024)", blogLink: "https://blog.educationinireland.com/ireland-a-study-abroad-adventure/#more-247879" },
      { name: "TUS Asian Society Vice President (2023-2024)", instagramLink: "https://www.instagram.com/p/C5nmkccoRtb/?igsh=eGNyeHVzdDB2dDRjhttps://www.instagram.com/tus_athasoc/" }
    ],
    sports: [
      { name: "TUS Badminton College Team (2022-2024)", link: "/certs/badminton-team.pdf" }
    ]
  }

  const allImages = activities.hackathons.filter(h => h.image)

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(allImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(allImages[prevIndex])
  }

  return (
    <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#F5F1DC]">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat
          containerClassName="mb-8 text-center"
          textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
        >
          Extracurricular Activities
        </ScrollFloat>
        
        <div className="space-y-8">
          {Object.entries(activities).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black capitalize">
                  {category === 'hackathons' ? 'Hackathons' :
                   category === 'leadership' ? 'Leadership' :
                   category === 'sports' ? 'Sports' : category}
                </h3>
                {/* {category === 'leadership' && (
                  <a 
                    href="https://blog.educationinireland.com/ireland-a-study-abroad-adventure/#more-247879" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium text-sm"
                  >
                    Read my blog
                  </a>
                )} */}
              </div>
              
              {category === 'hackathons' ? (
                <div className="grid grid-cols-3 gap-4 justify-items-center">
                  {items.map((item, index) => (
                    <div key={index} className="text-center">
                      {item.image ? (
                        <div className="cursor-pointer" onClick={() => openModal(item, allImages.findIndex(img => img.name === item.name))}>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                            onError={(e) => { e.currentTarget.style.display = 'none' }}
                          />
                          <p className="text-black text-xs mt-2 font-medium">{item.name}</p>
                        </div>
                      ) : (
                        <div className="bg-white p-4 rounded-lg shadow-md">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium text-sm"
                          >
                            {item.name}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="text-black font-medium">{item.name}</span>
                        {item.blogLink && (
                          <a 
                            href={item.blogLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium text-sm"
                          >
                            Read my blog
                          </a>
                        )}
                        {item.instagramLink && (
                          <a 
                            href={item.instagramLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium text-sm"
                          >
                            Check it out
                          </a>
                        )}
                        {/* {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#BF092F] hover:text-black transition-colors duration-200 underline hover:no-underline font-medium text-sm"
                          >
                            View
                          </a>
                        )} */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all text-2xl"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all text-2xl"
              >
                ›
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
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
    <section id="projects" className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#BF092F]">
      <div className="max-w-7xl mx-auto">
        {/* <h3 className="text-4xl font-bold text-white mb-16 text-center">Projects</h3> */}
        <ScrollFloat
          containerClassName="mb-8 text-center"
          textClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white"
        >
          Projects
        </ScrollFloat>
        <div className="space-y-8">
          {resolvedProjects.map((project) => {
            const imgs = project.images || [];
            const idx = currentImageIndex[project.id] || 0;
            return (
              <div key={project.id} className="project-card bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:min-h-60">
                  <div className="md:w-2/5 h-48 md:h-auto md:min-h-full bg-gray-700 relative overflow-hidden flex-shrink-0">
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
      <header className="p-6 sm:p-8 md:p-12 lg:p-16 flex justify-between items-center">
        {/* <h1 className="text-3xl font-bold text-black font-['Raleway']">Mavis Hye Xuan Chia</h1> */}
        <nav className="space-x-8">
          <a href="#about" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">About</a>
          <a href="#projects" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Projects</a>
          <a href="#contact" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero & About Section */}
      <section id="about" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Text */}
            <div className="text-center lg:text-left">
              <SplitText
                text="Hey, I'm Mavis :)"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight"
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
            </div>

            {/* Right Side - About Content */}
            <div className="text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">Full Stack Developer & Designer</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Hi! I'm Mavis Hye Xuan Chia, came from <span className="text-[#BF092F] font-semibold">Malaysia</span> to <span className="text-[#BF092F]font-semibold">Ireland</span> in 2022 to pursue my university studies.
                I’m currently completing my <span className="text-[#BF092F] font-semibold">Bachelor’s degree in Software Design</span> based in <span className="text-[#BF092F] font-semibold">Athlone</span>.
                I enjoy <span className="text-[#BF092F] font-semibold">learning new things</span>, actively participating in <span className="text-[#BF092F] font-semibold">events</span>, and taking on <span className="text-[#BF092F] font-semibold">challenges</span>.
                I specialize in <span className="text-[#BF092F] font-semibold">full stack web development</span> and have a strong interest in <span className="text-[#BF092F] font-semibold">AI integration</span>.
                Beyond coding, I enjoy <span className="text-[#BF092F] font-semibold">outdoor activities</span>, <span className="text-[#BF092F] font-semibold">baking</span>, and <span className="text-[#BF092F] font-semibold">traveling</span>.
              </p>


              {/* Resume Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4">
                <a href="/MavisHyeXuanChia_CV2025.pdf" download className="bg-[#BF092F] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-black hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg text-sm sm:text-base font-semibold">
                  <span>Download CV</span>
                </a>
                <a href="https://www.linkedin.com/in/mavis-hye-xuan-chia-a763a2237/" target="_blank" rel="noopener noreferrer" className="bg-[#0a66c2] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg text-sm sm:text-base font-semibold">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/mavischx" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg text-sm sm:text-base font-semibold">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#BF092F]">
        <div className="max-w-5xl mx-auto">
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white"
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
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Moved to Ireland from Malaysia for university.
                      Bachelor student in BSC Software Design with AI and Cloud computing in Technological University of the Shannon, Athlone.
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
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2">Graduation!</h4>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg">Bachelor's degree completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section (reverted section bg, cards switched to white) */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#F5F1DC]">
        <div className="max-w-6xl mx-auto">
          {/* <h3 className="text-4xl font-bold text-black mb-16 text-center">Work Experience</h3> */}
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black"
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
                  "Transitioned a <span class='text-[#BF092F] font-semibold'>legacy monolithic system</span> to a <span class='text-[#BF092F] font-semibold'>microservice architecture</span>, accelerating feature rollout by <span class='text-[#BF092F] font-semibold'>~85%</span> using <span class='text-[#BF092F] font-semibold'>Python</span>, <span class='text-[#BF092F] font-semibold'>TypeScript</span>, <span class='text-[#BF092F] font-semibold'>Redis</span>, and <span class='text-[#BF092F] font-semibold'>Docker</span>.",
                  "Automated <span class='text-[#BF092F] font-semibold'>software modelling</span> and <span class='text-[#BF092F] font-semibold'>document generation pipelines</span> (<span class='text-[#BF092F] font-semibold'>docxtpl</span>, <span class='text-[#BF092F] font-semibold'>StringTemplate</span>, custom <span class='text-[#BF092F] font-semibold'>Python workflows</span>), reducing document processing time from <span class='text-[#BF092F] font-semibold'>27 days to 3 days</span>.",
                  "Developed an internal <span class='text-[#BF092F] font-semibold'>RAG-based chatbot</span> integrating <span class='text-[#BF092F] font-semibold'>Redis</span>, <span class='text-[#BF092F] font-semibold'>Neo4j</span>, and a <span class='text-[#BF092F] font-semibold'>custom vector store</span> for knowledge retrieval.",
                  "Collaborated in an <span class='text-[#BF092F] font-semibold'>Agile environment</span> with <span class='text-[#BF092F] font-semibold'>sprint planning</span>, <span class='text-[#BF092F] font-semibold'>code reviews</span>, and <span class='text-[#BF092F] font-semibold'>Git-based workflows</span> to ensure iterative delivery."
                ]

              },
              {
                title: "Summer Intern",
                company: "Ericsson",
                period: "June 2024 – August 2024",
                descriptionLines: [
                  "Built a <span class='text-[#BF092F] font-semibold'>transition-year program website</span> as a guide, collaborating with a <span class='text-[#BF092F] font-semibold'>cross-functional team</span> using <span class='text-[#BF092F] font-semibold'>Python</span>, <span class='text-[#BF092F] font-semibold'>HTML</span> and <span class='text-[#BF092F] font-semibold'>CSS</span>.",
                  "Authored <span class='text-[#BF092F] font-semibold'>comprehensive documentation</span> for project files to improve <span class='text-[#BF092F] font-semibold'>maintainability</span> for future developers.",
                  "Developed a <span class='text-[#BF092F] font-semibold'>3D VR office simulator</span> using <span class='text-[#BF092F] font-semibold'>Unity</span> and <span class='text-[#BF092F] font-semibold'>C#</span> for <span class='text-[#BF092F] font-semibold'>Ericsson's 50th anniversary</span>, engaging <span class='text-[#BF092F] font-semibold'>100+ employees</span> in interactive sessions."
                ]

              }
            ].map((job, index) => (
              <div key={index} className="work-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={ericssonLogo} alt="Ericsson" className="h-6 sm:h-8 object-contain" />
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">{job.title}</h4>
                    </div>
                    <p className="text-[#BF092F] font-medium mb-3 text-sm sm:text-base md:text-lg">{job.company}</p>
                    <ul className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed list-disc ml-5 space-y-2">
                      {/* {job.descriptionLines.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))} */}
                      {job.descriptionLines.map((line, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: line }} />
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
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white"
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
                  { logo: jsLogo, name: 'JavaScript' },
                  { logo: nodeLogo, name: 'Node.js' },
                  { logo: pythonLogo, name: 'Python' },
                  { logo: javaLogo, name: 'Java' },
                  { logo: phpLogo, name: 'PHP' },
                  // { logo: csharpLogo, name: 'C#' },
                  // { logo: unityLogo, name: 'Unity' },
                  { logo: flaskLogo, name: 'Flask' },
                  { logo: springLogo, name: 'Spring' },
                  { logo: mysqlLogo, name: 'MySQL' },
                  { logo: postgresLogo, name: 'PostgreSQL' },
                  { logo: mongoLogo, name: 'MongoDB' },
                  { logo: redisLogo, name: 'Redis' },
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

      {/* Competitions & Certifications Section */}
      <CompetitionsSection />

      {/* Extracurricular Section */}
      <ExtracurricularSection />

      {/* Contact Section (replaced with inline form — sends directly via Formspree) */}
      <section id="contact" className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* <h3 className="text-4xl font-bold text-white mb-6 text-center">Get In Touch</h3> */}
          <ScrollFloat
            containerClassName="mb-8 text-center"
            textClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white"
          >
            Get In Touch
          </ScrollFloat>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 text-center">Write me a message below, let me know what you think about bread</p>

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
      <footer className="py-12 px-6 sm:px-8 md:px-12 lg:px-16 text-center bg-black">
        <p className="text-white text-sm sm:text-base md:text-lg">&copy; 2025 Mavis Chia Hye Xuan. Thanks for watching!</p>
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