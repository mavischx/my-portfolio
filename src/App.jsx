import SplitText from './SplitText.jsx'
import MagicBento from './MagicBento'
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


// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ExtracurricularSection = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const activities = [
    {
      id: 1,
      title: "Hackathon Achievements",
      category: "Competitions",
      period: "2023 — 2024",
      image: "/hackathon.jpg", // Add your image path
      shortDesc: "2nd place in XYZ Hackathon, Finalist in ABC Hackathon.",
      fullDesc: "Won first place at XYZ Hackathon with an innovative ML-powered web application. Also achieved finalist position at ABC Hackathon, building rapid prototypes focused on machine learning and modern web technologies. These experiences enhanced my problem-solving skills and ability to work under pressure while collaborating with diverse teams.",
      achievements: ["1st Place - XYZ Hackathon", "Finalist - ABC Hackathon", "Best Innovation Award"]
    },
    {
      id: 2,
      title: "Campus Ambassador",
      category: "Leadership",
      period: "2024 — Present",
      image: "/ambassador.jpg",
      shortDesc: "Organized workshops and mentored new students in coding.",
      fullDesc: "Served as Campus Ambassador, organizing technical workshops, running community meetups, and mentoring new students in coding and open-source contributions. Led initiatives to bridge the gap between industry and academia, facilitating knowledge transfer and skill development among peers.",
      achievements: ["Organized 15+ workshops", "Mentored 50+ students", "Community Growth Award"]
    },
    {
      id: 3,
      title: "Tech Events & Volunteering",
      category: "Community",
      period: "2022 — 2025",
      image: "/events.jpg",
      shortDesc: "Coordinated tech-fests and coding competitions.",
      fullDesc: "Actively coordinated major tech-fests and coding competitions, volunteered for outreach programs, and organized onboarding events for freshmen. Played a key role in building an inclusive tech community within the campus, fostering collaboration and knowledge sharing among students.",
      achievements: ["Coordinated 5+ major events", "200+ participants engaged", "Excellence in Service Award"]
    },
    {
      id: 4,
      title: "Open Source Contributions",
      category: "Development",
      period: "2023 — Present",
      image: "/opensource.jpg",
      shortDesc: "Contributing to various open source projects.",
      fullDesc: "Actively contributing to open source projects, focusing on web development frameworks and developer tools. Maintained several repositories, fixed bugs, and implemented new features. Participated in Hacktoberfest and other community-driven initiatives to give back to the developer community.",
      achievements: ["50+ contributions", "3 maintained repositories", "Hacktoberfest participant"]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(activities.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(activities.length / 3)) % Math.ceil(activities.length / 3))
  }

  return (
    <section className="py-16 px-6 bg-[#F5F1DC]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-black mb-16 text-center">Extracurricular Activities</h3>
        
        {/* Swipe Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={prevSlide}
            className="bg-black text-white p-3 rounded-full hover:bg-[#BF092F] transition-colors"
          >
            ←
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(activities.length / 3) }).map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-[#BF092F]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="bg-black text-white p-3 rounded-full hover:bg-[#BF092F] transition-colors"
          >
            →
          </button>
        </div>

        {/* Cards Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(activities.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activities.slice(slideIndex * 3, slideIndex * 3 + 3).map((activity) => (
                    <div key={activity.id} className="relative">
                      <div 
                        className={`bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                          expandedCard === activity.id ? 'transform scale-105' : ''
                        }`}
                        onClick={() => setExpandedCard(expandedCard === activity.id ? null : activity.id)}
                      >
                        {/* Image */}
                        <div className="h-48 bg-gray-700 relative overflow-hidden">
                          {activity.image && (
                            <img 
                              src={activity.image} 
                              alt={activity.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          )}
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#BF092F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {activity.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-white mb-2">{activity.title}</h4>
                          <p className="text-[#BF092F] font-medium mb-3">{activity.period}</p>
                          <p className="text-gray-300 mb-4">
                            {expandedCard === activity.id ? activity.fullDesc : activity.shortDesc}
                          </p>
                          
                          {expandedCard === activity.id && (
                            <div className="mt-4">
                              <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                              <ul className="space-y-1">
                                {activity.achievements.map((achievement, index) => (
                                  <li key={index} className="text-gray-300 text-sm flex items-center">
                                    <span className="text-[#BF092F] mr-2">•</span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="mt-4 text-center">
                            <span className="text-[#BF092F] text-sm font-medium">
                              {expandedCard === activity.id ? 'Click to collapse' : 'Click to expand'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
    <section id="projects" className="py-16 px-6 bg-[#BF092F]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-white mb-16 text-center">Projects</h3>
        <div className="space-y-8">
          {resolvedProjects.map((project) => {
            const imgs = project.images || [];
            const idx = currentImageIndex[project.id] || 0;
            return (
              <div key={project.id} className="bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:min-h-80">
                  <div className="md:w-2/5 h-64 md:h-auto md:min-h-full bg-gray-700 relative overflow-hidden flex-shrink-0">
                    {imgs[idx] ? (
                      <img
                        src={imgs[idx]}
                        alt={`${project.title} ${idx+1}`}
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
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-[#BF092F] font-medium mb-3">{project.category}</p>
                      <p className="text-gray-300 mb-4">{project.fullDesc}</p>

                      {project.achievements?.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="text-gray-300 text-sm flex items-center">
                                <span className="text-[#BF092F] mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#BF092F] underline hover:text-white transition-colors">
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

  // Ensure Tailwind & font are loaded at runtime and provide a small fallback stylesheet
  useEffect(() => {
    // inject Tailwind CDN script
    if (typeof document !== 'undefined' && !document.getElementById('tailwind-cdn')) {
      const s = document.createElement('script')
      s.id = 'tailwind-cdn'
      s.src = 'https://cdn.tailwindcss.com'
      s.async = true
      document.head.appendChild(s)
    }

    // inject Google Font (Raleway)
    if (typeof document !== 'undefined' && !document.getElementById('google-font-raleway')) {
      const l = document.createElement('link')
      l.id = 'google-font-raleway'
      l.rel = 'stylesheet'
      l.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;900&display=swap'
      document.head.appendChild(l)
    }

    // small fallback base styles in case CDN is delayed
    if (typeof document !== 'undefined' && !document.getElementById('site-base-styles')) {
      const style = document.createElement('style')
      style.id = 'site-base-styles'
      style.innerHTML = `
        html,body,#root { height: 100%; }
        body { font-family: 'Raleway', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background-color: #F5F1DC; }
        .text-black { color: #000 !important; }
        .bg-[#F5F1DC] { background-color: #F5F1DC !important; }
        .bg-black { background-color: #000 !important; }
      `
      document.head.appendChild(style)
    }
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

  return (
    <div className="bg-[#F5F1DC] min-h-screen font-['Raleway']">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        {/* <h1 className="text-3xl font-bold text-black font-['Raleway']">Mavis Hye Xuan Chia</h1> */}
        <nav className="space-x-8">
          <a href="#about" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">About</a>
          <a href="#projects" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Projects</a>
          <a href="#contact" className="text-lg text-gray-700 hover:text-[#BF092F] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero & About Section */}
        <section id="about" className="text-center py-20 px-6">
          <SplitText
            text="Hello, I'm Mavis"
            className="text-5xl md:text-9xl font-bold text-black mb-4 mt-20"
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
          <p className="text-2xl text-gray-600 mb-12">Full Stack Developer & Designer</p>
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-4xl font-bold text-black mb-10">About Me</h3>
            <p className="text-xl text-gray-700 text-center leading-relaxed">
          I'm an international student from Malaysia doing my Bachelor's degree in Software Design based in Athlone. I specialize in full-stack web development . Beyond coding, I enjoy going outoors, baking and traveling.
            </p>
          </div>
          
          {/* Resume Buttons */}
        <div className="flex justify-center space-x-4">
          <a href="/assets/MavisHyeXuanChia_CV2025.pdf" download className="bg-[#BF092F] text-white px-8 py-4 rounded-lg hover:bg-black hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg text-lg font-semibold">
            <span>Download CV</span>
          </a>
          <button onClick={() => setShowPDF(true)} className="border-2 border-[#BF092F] text-[#BF092F] px-8 py-4 rounded-lg hover:bg-[#BF092F] hover:text-white hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg text-lg font-semibold">
            <span>View CV</span>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-6 bg-[#BF092F]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-8 text-center">My Journey</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white" style={{height: 'calc(100% - 3rem)'}}></div>
            
            {/* Timeline Items */}
            <div className="space-y-6">
              {/* Start College */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-l mx-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-black mb-2">Started University</h4>
                    <p className="text-[#BF092F] font-semibold mb-3 text-base">2022 - Present</p>
                    <p className="text-gray-700 text-lg">Bachelor student in BSC Software Design with AI and Cloud computing in Technological University of the Shannon, Athlone.
                    <br/>Coursework includes Software and Web development, Databases, REST Api, Agile methodologies, Machine Learning.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Summer Intern */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-l mx-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-black mb-2">Summer Internship</h4>
                    <p className="text-[#BF092F] font-semibold mb-3 text-base">June 2024 - August 2024</p>
                    <p className="text-gray-700 text-lg">Summer intern in Ericsson, Athlone</p>
                  </div>
                </div>
              </div>

              {/* Official Intern */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-l mx-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h4 className="text-2xl font-bold text-black mb-2">Official Internship</h4>
                    <p className="text-[#BF092F] font-semibold mb-3 text-base">January 2025 - August 2025</p>
                    <p className="text-gray-700 text-lg">Full-time internship position in Ericsson, Athlone</p>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Graduation */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-l mx-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-black">
                    <h4 className="text-2xl font-bold text-black mb-2">Graduation</h4>
                    <p className="text-[#BF092F] font-semibold mb-3 text-base">2026</p>
                    <p className="text-gray-700 text-lg">Bachelor's degree completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section (reverted section bg, cards switched to white) */}
      <section className="py-16 px-6 bg-[#F5F1DC]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-black mb-16 text-center">Work Experience</h3>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-black mb-2">{job.title}</h4>
                    <p className="text-[#BF092F] font-medium mb-3 text-lg">{job.company}</p>
                    <ul className="text-gray-700 text-lg leading-relaxed list-disc ml-5 space-y-2">
                      {job.descriptionLines.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <span className="bg-[#BF092F] text-white px-4 py-2 rounded-full text-base font-semibold">{job.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-[#F5F1DC]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-black mb-16 text-center">Skills & Technologies</h3>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={8}
            glowColor="191, 9, 47"
          />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Extracurricular Section */}
      <ExtracurricularSection />

      {/* Contact Section (replaced with inline form — sends directly via Formspree) */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6 text-center">Get In Touch</h3>
          <p className="text-lg text-gray-300 mb-8 text-center">Write me a message below.</p>

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
      <footer className="py-12 px-6 text-center bg-black">
        <p className="text-white text-lg">&copy; 2025 Mavis Chia Hye Xuan. All rights reserved.</p>
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