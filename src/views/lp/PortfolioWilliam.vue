<template>
  <div class="william-portfolio">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
    </div>

    <!-- Header -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <a href="#home" class="logo">William Camargo</a>
        <nav>
          <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
            <li><a href="#about" class="nav-link" @click="closeMobileMenu"><i class="fab fa-linkedin"></i> Sobre</a></li>
            <li><a href="#projects" class="nav-link" @click="closeMobileMenu"><i class="fab fa-github"></i> Projetos</a></li>
            <li><a href="#contact" class="nav-link" @click="closeMobileMenu"><i class="fab fa-whatsapp"></i> Contato</a></li>
          </ul>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content fade-in">
        <h1 class="hero-title">William <span class="highlight">Camargo</span></h1>
        <h2 class="hero-subtitle">Web Developer Full Stack</h2>
        <div class="hero-description">
          <p>Profissional apaixonado por tecnologia, com mais de 5 anos de experiência no desenvolvimento de soluções digitais inovadoras e eficientes. Especializado em sistemas robustos e escaláveis, atuo com <strong>PHP (Laravel)</strong>, <strong>JavaScript (Vue.js)</strong>, <strong>Python</strong> e <strong>Node.js</strong>, além de integrações com APIs, arquitetura monolítica e de microsserviços, e bancos de dados como <strong>MySQL</strong> e <strong>PostgreSQL</strong>.</p>
          
          <p>Experiência sólida em <strong>Back-End</strong> e <strong>Front-End</strong>, com gestão de projetos voltados a resultados excepcionais. Desenvolvo sites e sistemas utilizando <strong>WordPress</strong> e frameworks como <strong>Tailwind CSS</strong> e <strong>Bootstrap</strong>.</p>
          
          <p>Também atuo em <strong>Web Design</strong> e <strong>Marketing Digital</strong>, combinando criatividade e análise de dados para gerar campanhas eficazes e de alto impacto.</p>
        </div>
        <div class="hero-buttons">
          <a href="https://wa.me/5541996924829" class="btn btn-primary" target="_blank">
            <i class="fab fa-whatsapp"></i> Contato
          </a>
          <a href="https://github.com/willfrombrasil" class="btn btn-secondary" target="_blank">
            <i class="fab fa-github"></i> Projetos
          </a>
          <a href="https://www.linkedin.com/in/william-camargo-dev" class="btn btn-outline" target="_blank">
            <i class="fab fa-linkedin"></i> Sobre
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <h2 class="section-title fade-in">Sobre Mim</h2>
        <div class="about-content">
          <div class="about-text fade-in">
            <p>Sou um desenvolvedor web full stack apaixonado por criar soluções digitais que fazem a diferença. Com mais de 5 anos de experiência, tenho trabalhado em projetos diversos, desde sites institucionais até sistemas complexos de gestão empresarial.</p>
            
            <p>Minha jornada na tecnologia começou com curiosidade e evoluiu para uma carreira dedicada à inovação e excelência técnica. Acredito que a tecnologia deve ser uma ferramenta para resolver problemas reais e melhorar a vida das pessoas.</p>
            
            <p>Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, mantendo-me atualizado com as últimas tendências e tecnologias do mercado.</p>
            
            <a href="https://www.linkedin.com/in/william-camargo-dev" class="btn btn-primary" target="_blank">
              <i class="fab fa-linkedin"></i> Ver Perfil Completo
            </a>
          </div>
          <div class="skills-grid fade-in">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <i :class="skill.icon"></i>
              <h4>{{ skill.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
      <div class="container">
        <h2 class="section-title fade-in">Projetos em Destaque</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.id" class="project-card fade-in">
            <div class="project-image">
              <i :class="project.icon"></i>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a href="https://github.com/willfrombrasil" class="project-link" target="_blank">
                  <i class="fab fa-github"></i> Código
                </a>
                <a href="#" class="project-link">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
          <a href="https://github.com/willfrombrasil" class="btn btn-primary" target="_blank">
            <i class="fab fa-github"></i> Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title fade-in">Entre em Contato</h2>
        <div class="contact-content">
          <div class="contact-info fade-in">
            <h3 style="margin-bottom: 2rem; color: #1e293b;">Informações de Contato</h3>
            <div v-for="contact in contactInfo" :key="contact.type" class="contact-item">
              <i :class="contact.icon"></i>
              <div>
                <h4>{{ contact.label }}</h4>
                <a v-if="contact.link" :href="contact.link" target="_blank" :style="{ color: contact.color, textDecoration: 'none' }">
                  {{ contact.value }}
                </a>
                <p v-else :style="{ color: '#64748b', margin: 0 }">{{ contact.value }}</p>
              </div>
            </div>
          </div>

          <form class="contact-form fade-in" @submit.prevent="submitForm">
            <h3 style="margin-bottom: 2rem; color: #1e293b;">Envie uma Mensagem</h3>
            <div class="form-group">
              <label for="name" class="form-label">Nome *</label>
              <input type="text" id="name" v-model="form.name" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">E-mail *</label>
              <input type="email" id="email" v-model="form.email" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="subject" class="form-label">Assunto *</label>
              <input type="text" id="subject" v-model="form.subject" class="form-input" required>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Mensagem *</label>
              <textarea id="message" v-model="form.message" class="form-textarea" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              <i class="fas fa-paper-plane"></i> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2025 William Camargo. All Rights Reserved.</p>
          <div class="footer-links">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'

// Reactive state
const isLoading = ref(true)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Skills data
const skills = ref([
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'WordPress', icon: 'fab fa-wordpress' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Tailwind', icon: 'fas fa-wind' },
  { name: 'Marketing', icon: 'fas fa-chart-line' }
])

// Projects data
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Completo',
    description: 'Sistema de e-commerce desenvolvido com Laravel e Vue.js, incluindo painel administrativo, gestão de produtos, carrinho de compras e integração com gateways de pagamento.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    icon: 'fas fa-shopping-cart'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados com gráficos em tempo real, desenvolvido com Python (Django) e JavaScript. Inclui relatórios personalizáveis e exportação de dados.',
    technologies: ['Python', 'Django', 'Chart.js', 'PostgreSQL'],
    icon: 'fas fa-chart-bar'
  },
  {
    id: 3,
    title: 'App Mobile Híbrido',
    description: 'Aplicativo mobile híbrido desenvolvido com Vue.js e Capacitor, incluindo autenticação, notificações push e sincronização offline. Disponível para iOS e Android.',
    technologies: ['Vue.js', 'Capacitor', 'Node.js', 'MongoDB'],
    icon: 'fas fa-mobile-alt'
  },
  {
    id: 4,
    title: 'Sistema de Gestão',
    description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios. Desenvolvido com arquitetura de microsserviços e API RESTful.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'Redis'],
    icon: 'fas fa-cogs'
  }
])

// Contact info data
const contactInfo = ref([
  {
    type: 'whatsapp',
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp',
    value: '(41) 99692-4829',
    link: 'https://wa.me/5541996924829',
    color: '#22c55e'
  },
  {
    type: 'linkedin',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'william-camargo-dev',
    link: 'https://www.linkedin.com/in/william-camargo-dev',
    color: '#0077b5'
  },
  {
    type: 'github',
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'willfrombrasil',
    link: 'https://github.com/willfrombrasil',
    color: '#333'
  },
  {
    type: 'email',
    icon: 'fas fa-envelope',
    label: 'E-mail',
    value: 'william@exemplo.com',
    link: 'mailto:william@exemplo.com',
    color: '#2563eb'
  },
  {
    type: 'location',
    icon: 'fas fa-map-marker-alt',
    label: 'Localização',
    value: 'Curitiba, PR - Brasil',
    link: null,
    color: '#64748b'
  }
])

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const submitForm = () => {
  const whatsappMessage = `Olá William! 

*Nome:* ${form.name}
*E-mail:* ${form.email}
*Assunto:* ${form.subject}

*Mensagem:*
${form.message}

Enviado através do seu portfólio.`
  
  const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(whatsappMessage)}`
  window.open(whatsappUrl, '_blank')
  
  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  alert('Mensagem preparada! Você será redirecionado para o WhatsApp.')
}

// Lifecycle hooks
onMounted(() => {
  // Loading screen
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
  
  // Scroll listener
  window.addEventListener('scroll', handleScroll)
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const href = anchor.getAttribute('href')
      if (href) {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          closeMobileMenu()
        }
      }
    })
  })
  
  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
  
  // SEO Meta tags
  document.title = 'William Camargo - Web Developer Full Stack'
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'William Camargo - Desenvolvedor Web Full Stack especializado em PHP, JavaScript, Python e Node.js. Mais de 5 anos de experiência em soluções digitais.')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.william-portfolio {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #1d4ed8;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  color: #2563eb;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-title .highlight {
  color: #fbbf24;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-decoration: underline;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-description strong {
  color: #fbbf24;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: #22c55e;
  color: white;
}

.btn-primary:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #1f2937;
  color: white;
}

.btn-secondary:hover {
  background: #111827;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #2563eb;
  transform: translateY(-2px);
}

/* About Section */
.about {
  padding: 5rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 3rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #64748b;
}

.about-text p {
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.skill-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-item i {
  font-size: 2rem;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

/* Projects Section */
.projects {
  padding: 5rem 0;
  background: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #1d4ed8;
}

/* Contact Section */
.contact {
  padding: 5rem 0;
  background: #f8fafc;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item i {
  font-size: 1.5rem;
  color: #2563eb;
  width: 2rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Footer */
.footer {
  background: #1e293b;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}

/* Loading Animation */
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    display: flex;
  }

  .mobile-menu-btn {
    display: block;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>