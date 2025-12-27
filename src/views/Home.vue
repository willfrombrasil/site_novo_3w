<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
      <div class="container relative z-10">
        <div class="hero-content text-center">
          <div class="mb-6 flex justify-center gap-3 flex-wrap">
            <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse" title="Mais de 150 projetos entregues com sucesso">
              <i class="fas fa-trophy text-yellow-300 mr-2"></i>150+ Projetos Entregues
            </span>
            <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium" title="98% dos nossos clientes recomendam nossos serviços">
              <i class="fas fa-heart text-red-300 mr-2"></i>98% Satisfação
            </span>
            <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium" title="Estamos no mercado há mais de 5 anos">
              <i class="fas fa-certificate text-green-300 mr-2"></i>5+ Anos
            </span>
          </div>

          <h1 class="hero-title animate-fade-in">
            <i class="fas fa-rocket mr-3"></i>
            Transforme Seu Negócio com
            <span class="text-gradient block mt-2">Soluções Digitais de Alto Impacto</span>
          </h1>
          <p class="hero-subtitle animate-slide-up">
            <i class="fas fa-chart-line mr-2"></i>
            Especialistas em marketing digital, desenvolvimento web e soluções tecnológicas que <strong>realmente geram resultados</strong>
          </p>

          <div class="hero-buttons animate-slide-up flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <router-link
              to="/contato"
              class="btn-primary inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              title="Solicite um orçamento gratuito agora"
            >
              <i class="fas fa-paper-plane"></i>
              Solicitar Orçamento Gratuito
              <i class="fas fa-arrow-right"></i>
            </router-link>
            <router-link
              to="/servicos"
              class="btn-outline bg-white text-primary-600 hover:bg-primary-600 hover:text-white inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              title="Conheça todos os nossos serviços"
            >
              <i class="fas fa-th-large"></i>
              Conhecer Nossos Serviços
            </router-link>
          </div>

          <p class="mt-6 text-blue-100 text-sm">
            <i class="fas fa-shield-alt mr-2"></i>
            <strong>100% Seguro</strong> - Seus dados protegidos conforme LGPD
          </p>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="stats-card">
            <div class="stats-number">150+</div>
            <div class="stats-label">Projetos Entregues</div>
          </div>
          <div class="stats-card">
            <div class="stats-number">98%</div>
            <div class="stats-label">Clientes Satisfeitos</div>
          </div>
          <div class="stats-card">
            <div class="stats-number">5</div>
            <div class="stats-label">Anos de Experiência</div>
          </div>
          <div class="stats-card">
            <div class="stats-number">24/7</div>
            <div class="stats-label">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossos Serviços</h2>
          <p class="section-subtitle">Soluções completas para todas as necessidades do seu negócio</p>
        </div>
        
        <div class="services-grid">
          <div
            v-for="service in featuredServices"
            :key="service.id"
            class="service-card"
          >
            <div class="feature-icon">
              <component :is="service.icon" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <router-link
              :to="service.link"
              class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              Saiba mais
              <ArrowRightIcon class="w-4 h-4 ml-1" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="section-padding bg-gray-50 my-16 py-16">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Por que escolher a 3W Online?</h2>
            <div class="space-y-6">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <p class="benefit-text">
                  <strong>Expertise Comprovada:</strong> Mais de 5 anos de experiência em marketing digital e desenvolvimento
                </p>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <p class="benefit-text">
                  <strong>Resultados Mensuráveis:</strong> Focamos em métricas que realmente impactam seu negócio
                </p>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <p class="benefit-text">
                  <strong>Atendimento Personalizado:</strong> Cada projeto é único e recebe atenção exclusiva
                </p>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <p class="benefit-text">
                  <strong>Tecnologia Atualizada:</strong> Utilizamos as melhores ferramentas e práticas do mercado
                </p>
              </div>
            </div>
            <div class="mt-8 flex justify-center">
              <router-link to="/sobre" class="btn-primary">
                Conheça Nossa História
              </router-link>
            </div>
          </div>
          <div class="about-image">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe 3W Online trabalhando"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">O que nossos clientes dizem</h2>
          <p class="section-subtitle">Depoimentos reais de quem confia em nosso trabalho</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial-card"
          >
            <p class="text-gray-600 mb-6">{{ testimonial.text }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-semibold">{{ testimonial.avatar }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Pronto para transformar seu negócio?</h2>
          <p class="cta-subtitle">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <div class="cta-buttons">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Falar com Especialista
            </router-link>
            <a
              href="https://wa.me/5541996924829"
              target="_blank"
              class="btn-info border-white text-white hover:bg-white hover:text-primary-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Transforme seu negócio com soluções digitais',
  meta: [
    { name: 'description', content: 'Especialistas em marketing digital, desenvolvimento web e soluções tecnológicas para impulsionar seus resultados.' },
    { name: 'keywords', content: 'marketing digital, desenvolvimento web, soluções tecnológicas, gestão de redes sociais, criação de sites' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/' }
  ]
})

const featuredServices = [
  {
    id: 1,
    title: 'Gestão de Redes Sociais',
    description: 'Criação de conteúdo, planejamento estratégico e gestão completa das suas redes sociais.',
    icon: ChatBubbleBottomCenterTextIcon,
    link: '/servicos/gestao-redes-sociais'
  },
  {
    id: 2,
    title: 'Criação de Sites',
    description: 'Sites profissionais, responsivos e otimizados para conversão e SEO.',
    icon: ComputerDesktopIcon,
    link: '/servicos/criacao-sites'
  },
  {
    id: 3,
    title: 'Gestão de Anúncios',
    description: 'Campanhas eficientes no Google Ads e Meta Ads para maximizar seu ROI.',
    icon: PresentationChartLineIcon,
    link: '/servicos/gestao-anuncios'
  },
  {
    id: 4,
    title: 'Desenvolvimento de Apps',
    description: 'Aplicativos mobile nativos e híbridos para iOS e Android.',
    icon: DevicePhoneMobileIcon,
    link: '/servicos/desenvolvimento-apps'
  },
  {
    id: 5,
    title: 'Design Gráfico',
    description: 'Identidade visual, materiais gráficos e peças publicitárias criativas.',
    icon: PaintBrushIcon,
    link: '/servicos/design-grafico'
  },
  {
    id: 6,
    title: 'Publicidade e Propaganda',
    description: 'Campanhas publicitárias integradas para online e offline.',
    icon: MegaphoneIcon,
    link: '/servicos/publicidade'
  }
]

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    company: 'Silva & Associados',
    avatar: 'JS',
    text: 'A 3W Online transformou nossa presença digital. Aumentamos as vendas em 300% em apenas 6 meses!'
  },
  {
    id: 2,
    name: 'Maria Santos',
    company: 'Boutique Elegance',
    avatar: 'MS',
    text: 'Profissionalismo e qualidade excepcionais. Nosso site ficou perfeito e as redes sociais estão bombando!'
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    company: 'Tech Solutions',
    avatar: 'CO',
    text: 'Parceria de longo prazo que só traz resultados. Recomendo a 3W Online de olhos fechados!'
  }
]
</script>