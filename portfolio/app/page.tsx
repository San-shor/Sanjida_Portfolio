'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className='container'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '70px',
            }}>
            <h1
              style={{
                fontSize: '20px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Sanjida
            </h1>
            <div style={{ display: 'flex', gap: '32px' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: activeSection === item.id ? '#1f2937' : '#6b7280',
                    cursor: 'pointer',
                    textDecoration:
                      activeSection === item.id ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                  }}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home'>
        <div className='container'>
          <div
            className='fade-in'
            style={{ textAlign: 'center', padding: '80px 0' }}>
            <div
              style={{
                width: '96px',
                height: '96px',
                margin: '0 auto 32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              }}>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                S
              </span>
            </div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
              }}>
              Hi, I'm Sanjida
            </h1>
            <p
              style={{
                fontSize: '20px',
                color: '#6b7280',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px',
              }}>
              Full-Stack Developer focused on creating clean, functional web
              applications
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
              <button
                onClick={() => scrollToSection('projects')}
                className='btn-primary'>
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='btn-secondary'>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about'>
        <div className='container'>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            About
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}>
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#1f2937',
                }}>
                Developer & Problem Solver
              </h3>
              <p
                style={{
                  color: '#6b7280',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                }}>
                I'm a passionate full-stack developer with experience in modern
                web technologies. I enjoy building applications that solve
                real-world problems with clean, efficient code.
              </p>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                When I'm not coding, I'm learning new technologies and
                contributing to open-source projects.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}>
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Python',
                'PostgreSQL',
              ].map((skill, index) => (
                <div
                  key={index}
                  className='card'
                  style={{ padding: '16px', textAlign: 'center' }}>
                  <span className='skill-tag'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects'>
        <div className='container'>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Projects
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}>
            {[
              {
                title: 'E-Commerce Platform',
                description:
                  'Full-stack e-commerce solution with modern payment integration.',
                tech: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Task Management App',
                description:
                  'Collaborative task management tool with real-time updates.',
                tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
              },
              {
                title: 'Weather Dashboard',
                description:
                  'Beautiful weather application with location-based forecasts.',
                tech: ['React', 'API Integration', 'Chart.js'],
              },
              {
                title: 'Portfolio Website',
                description:
                  'Clean and responsive portfolio website built with Next.js.',
                tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
              },
            ].map((project, index) => (
              <div
                key={index}
                className='card hover-lift'
                style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#1f2937',
                  }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    color: '#6b7280',
                    marginBottom: '16px',
                    lineHeight: '1.5',
                  }}>
                  {project.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px',
                  }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className='skill-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1f2937',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}>
                    Live Demo →
                  </button>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}>
                    GitHub →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact'>
        <div className='container'>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            Contact
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '48px',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#1f2937',
                }}>
                Get In Touch
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                  <div className='contact-icon'>📧</div>
                  <div>
                    <p
                      style={{
                        fontWeight: '500',
                        color: '#1f2937',
                        marginBottom: '2px',
                      }}>
                      Email
                    </p>
                    <p style={{ color: '#6b7280' }}>sanjida@example.com</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                  <div className='contact-icon'>💼</div>
                  <div>
                    <p
                      style={{
                        fontWeight: '500',
                        color: '#1f2937',
                        marginBottom: '2px',
                      }}>
                      LinkedIn
                    </p>
                    <p style={{ color: '#6b7280' }}>linkedin.com/in/sanjida</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                  <div className='contact-icon'>💻</div>
                  <div>
                    <p
                      style={{
                        fontWeight: '500',
                        color: '#1f2937',
                        marginBottom: '2px',
                      }}>
                      GitHub
                    </p>
                    <p style={{ color: '#6b7280' }}>github.com/sanjida</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                <input type='text' placeholder='Your Name' required />
                <input type='email' placeholder='Your Email' required />
                <textarea
                  rows={4}
                  placeholder='Your Message'
                  required></textarea>
                <button
                  type='submit'
                  className='btn-primary'
                  style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className='container'>
          <p style={{ textAlign: 'center', color: '#6b7280' }}>
            © 2025 Sanjida. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
