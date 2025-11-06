   #FDF4E3
   #134686
   #ED3F27
   #FEB21A
   
   
   {/* Hero Section
      {/* <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-[#003049] via-[#003049] to-[#780000]"> */}
        <div className="max-w-4xl mx-auto text-center">
          <SplitText
            text="Hello, welcome to my digital portfolio"
            className="text-4xl md:text-6xl font-bold text-[#FDF0D5] mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-xl text-[#669BBC] mt-6 max-w-2xl mx-auto">
            Computer Science Student | Software Developer | Problem Solver
          </p>
        </div>
      {/* </section> */}

      {/* Scroll Indicator */}
      <div className="bg-[#003049] py-8">
        <ScrollVelocity
          texts={['Scroll Down', 'Explore My Journey', 'Let\'s Connect']}
          velocity={velocity}
          className="text-[#669BBC] text-lg font-medium"
        />
      </div>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FDF0D5]">
        <Timeline />
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDF0D5] to-[#669BBC]/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#003049]">
            Featured Projects
          </h2>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="120, 0, 0"
          />
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#780000] to-[#C1121F] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#FDF0D5] mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-[#FDF0D5]/80 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <button className="px-8 py-4 bg-[#FDF0D5] text-[#780000] font-bold rounded-lg hover:bg-[#669BBC] hover:text-[#003049] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003049] text-[#669BBC] py-8 text-center">
        <p className="text-sm">© 2025 My Portfolio. Built with React & Tailwind CSS</p>
      </footer> 