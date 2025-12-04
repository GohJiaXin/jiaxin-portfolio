'use client';

import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation on mount
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-[#1e3a5f] dark:from-purple-600 dark:to-[#2d4a6f] flex items-center justify-center text-white text-4xl font-bold">
                GJX
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Goh Jia Xin
          </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-2">
              Applied Computing Student
            </p>
            <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-8">
              Specializing in FinTech
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building innovative solutions at the intersection of data science, machine learning, and financial technology. 
              Passionate about transforming complex data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-[#1e3a5f] dark:bg-[#2d4a6f] text-white rounded-lg font-semibold hover:bg-[#152a45] dark:hover:bg-[#1e3a5f] transition-colors shadow-lg hover:shadow-xl"
              >
                View Resume
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-[#1e3a5f] dark:text-white border-2 border-[#1e3a5f] dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I am an Applied Computing student with a specialized focus on Financial Technology, 
                  combining strong analytical skills with practical software development expertise. 
                  My passion lies in leveraging data science and machine learning to solve complex 
                  problems in the financial sector, from market trend analysis to building resilient 
                  transaction systems.
                </p>
                <p>
                  Through hands-on projects and industry experience, I've developed expertise in 
                  time-series analysis, feature engineering, and data visualization. I'm particularly 
                  interested in creating robust, scalable solutions that can handle real-world 
                  financial data challenges while maintaining high performance and reliability.
                </p>
                <p>
                  My technical foundation spans Python-based data science tools, cloud platforms 
                  like AWS, containerization with Docker, and modern development practices. I thrive 
                  in collaborative environments and am always eager to learn new technologies that 
                  can enhance my ability to deliver impactful solutions.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Education
              </h3>
              <Timeline
                items={[
                  {
                    title: 'Diploma in Applied Computing',
                    organization: 'Singapore Polytechnic',
                    period: '2022 - Present',
                    description: 'Specializing in FinTech with focus on data science, machine learning, and financial technology solutions.',
                    details: [
                      'Specialization in Financial Technology',
                      'Core coursework in Data Science, Machine Learning, and Software Engineering',
                      'Hands-on projects in time-series analysis and financial systems',
                    ],
                  },
                ]}
              />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Relevant certifications and achievements (to be updated)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="Data Science & ML"
              skills={[
                'Python',
                'Pandas',
                'NumPy',
                'Scikit-learn',
                'Time-series Analysis',
                'Feature Engineering',
              ]}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
            
            <SkillCard
              title="Visualization & Tools"
              skills={[
                'Matplotlib',
                'Seaborn',
                'Plotly',
                'ELK Stack',
                'Data Visualization',
              ]}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              }
            />
            
            <SkillCard
              title="Development & Platforms"
              skills={[
                'Git',
                'Docker',
                'REST API',
                'AWS',
                'MongoDB',
                'Cloud Computing',
              ]}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
            
            <SkillCard
              title="Scripting & Systems"
              skills={[
                'Bash',
                'Linux/Unix',
                'Windows Server',
                'System Administration',
              ]}
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Stock Market Trend Analysis"
              description="Comprehensive time-series analysis project focusing on market trend prediction through advanced feature engineering and data visualization techniques."
              techStack={['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Time-series Analysis']}
              contribution="Developed end-to-end analysis pipeline including data preprocessing, feature engineering, and trend visualization. Implemented statistical models to identify market patterns and created interactive visualizations for insights."
              githubLink="https://github.com/GohJiaXin/Project-1-Stock-Market-Trend-Analysis"
            />
            
            <ProjectCard
              title="Cursor Vibe Coding Hackathon"
              description="Real-time voice-based language learning application built during a hackathon, focusing on interactive learning experiences through voice recognition technology."
              techStack={['Real-time Processing', 'Voice Recognition', 'Web Technologies']}
              contribution="Contributed to the development of real-time voice processing features and user interface design. Implemented core functionality for voice-based interactions and learning progress tracking."
            />
            
            <ProjectCard
              title="Resilient Transaction Fallback System"
              description="Fault-tolerant financial transaction system designed to handle failures gracefully and ensure system reliability in critical financial operations."
              techStack={['Fault Tolerance', 'Financial Systems', 'System Design', 'Error Handling']}
              contribution="Architected fallback mechanisms and error recovery strategies. Designed and implemented transaction retry logic and failure detection systems to ensure high availability and data integrity."
            />
            
            <ProjectCard
              title="Honeypot Studio Final Year Project"
              description="Comprehensive security project utilizing Docker containerization and ELK Stack for log aggregation and analysis, focusing on automation and monitoring."
              techStack={['Docker', 'ELK Stack', 'Automation', 'Log Analysis', 'Security']}
              contribution="Set up containerized infrastructure using Docker and integrated ELK Stack for centralized logging. Developed automation scripts for deployment and monitoring, creating a scalable security monitoring solution."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Work Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Timeline
              items={[
                {
                  title: 'Technical Intern / Analyst',
                  organization: 'Aegis Technology',
                  period: '2023 - 2024',
                  description: 'Specialized in network analysis, performance testing, and data analytics for enterprise solutions.',
                  details: [
                    'Developed and executed packet crafting techniques for network protocol testing and analysis',
                    'Conducted comprehensive load testing to evaluate system performance under various conditions',
                    'Analyzed network traffic patterns and generated insights using data analytics tools',
                    'Collaborated with cross-functional teams to identify and resolve performance bottlenecks',
                  ],
                },
                {
                  title: 'Hardware Advisory Intern',
                  organization: 'FSSOCOM',
                  period: '2022 - 2023',
                  description: 'Provided technical advisory services for hardware solutions and system implementations.',
                  details: [
                    'Advised clients on hardware selection and configuration for optimal performance',
                    'Assessed technical requirements and recommended appropriate hardware solutions',
                    'Supported implementation and troubleshooting of hardware systems',
                    'Documented technical specifications and provided training to end users',
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:goh6sqps@gmail.com" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      goh6sqps@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+6589016224" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      +65 8901 6224
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/goh-jia-xin" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      linkedin.com/in/goh-jia-xin
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-1.004-.013-1.845-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a href="https://github.com/GohJiaXin/Project-1-Stock-Market-Trend-Analysis" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      github.com/GohJiaXin
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic would go here
                alert('Thank you for your message! I will get back to you soon.');
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
