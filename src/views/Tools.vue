<template>
  <div class="tools-page">
    <!-- Header -->
    <header class="tools-header">
      <div class="container">
        <div class="header-content">
          <div class="promo-banner">
            <span class="promo-icon">🎁</span>
            <span class="promo-text">INDIQUE E GANHE</span>
            <span class="promo-icon">⭐</span>
          </div>
          <div class="header-right">
            <span class="header-subtitle">Convide amigos e ganhe créditos!</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Carrossel de Promoções -->
    <section class="promotions-carousel">
      <div class="container">
        <div class="carousel-wrapper">
          <button class="carousel-btn prev" @click="prevSlide" aria-label="Slide anterior">
            <ChevronLeftIcon class="w-6 h-6" />
          </button>
          
          <div class="carousel-container" ref="carouselContainer">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <!-- Slide 1: Indique e Ganhe -->
              <div class="carousel-slide active">
                <div class="slide-content">
                  <div class="slide-text">
                    <h2 class="slide-title">Ganhe</h2>
                    <p class="slide-subtitle">créditos!</p>
                    <div class="slide-badge">Indique e Ganhe</div>
                    <p class="slide-description">PROMOÇÃO ATIVA</p>
                    <button class="slide-cta" @click="openWhatsApp('indique')">
                      Indicar agora
                    </button>
                  </div>
                </div>
              </div>

              <!-- Slide 2: Criação de Sites -->
              <div class="carousel-slide">
                <div class="slide-content sites-slide">
                  <div class="slide-text">
                    <h2 class="slide-title">Sites</h2>
                    <p class="slide-subtitle">profissionais!</p>
                    <div class="slide-badge">Criação de Sites</div>
                    <p class="slide-description">DESENVOLVIMENTO WEB</p>
                    <button class="slide-cta" @click="openWhatsApp('sites')">
                      Solicitar orçamento
                    </button>
                  </div>
                </div>
              </div>

              <!-- Slide 3: Gestão de Redes Sociais -->
              <div class="carousel-slide">
                <div class="slide-content social-slide">
                  <div class="slide-text">
                    <h2 class="slide-title">Redes</h2>
                    <p class="slide-subtitle">sociais!</p>
                    <div class="slide-badge">Gestão de Redes Sociais</div>
                    <p class="slide-description">MARKETING DIGITAL</p>
                    <button class="slide-cta" @click="openWhatsApp('redes')">
                      Começar agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-btn next" @click="nextSlide" aria-label="Próximo slide">
            <ChevronRightIcon class="w-6 h-6" />
          </button>

          <!-- Indicadores -->
          <div class="carousel-indicators">
            <button
              v-for="(_, index) in 3"
              :key="index"
              class="indicator"
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
              :aria-label="`Ir para slide ${index + 1}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Ferramentas -->
    <section class="tools-section">
      <div class="container">
        <!-- Header da seção -->
        <div class="section-header">
          <div class="section-title">
            <CogIcon class="w-6 h-6" />
            <h2>Ferramentas</h2>
          </div>
          <button class="view-more-btn" @click="showAllTools = !showAllTools">
            {{ showAllTools ? 'Ver menos' : 'Conhecer mais ferramentas' }}
          </button>
        </div>

        <!-- Filtros e Busca -->
        <div class="tools-filters">
          <div class="search-bar">
            <MagnifyingGlassIcon class="w-5 h-5 search-icon" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar ferramentas..."
              class="search-input"
            />
          </div>
          
          <div class="category-filters">
            <button
              v-for="category in categories"
              :key="category.id"
              class="filter-btn"
              :class="{ active: selectedCategory === category.id }"
              @click="selectCategory(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Grid de Ferramentas -->
        <div class="tools-grid" style="justify-items: center;">
          <div
            v-for="tool in filteredTools"
            :key="tool.id"
            class="tool-card"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <div class="tool-image">
              <component :is="tool.icon" class="w-12 h-12 text-primary-600" />
            </div>
            <div class="tool-content" style="text-align: center;">
              <h3 class="tool-title">{{ tool.name }}</h3>
              <p class="tool-subtitle">{{ tool.subtitle }}</p>
              <p class="tool-description">{{ tool.description }}</p>
              <a :href="tool.link" target="_blank" class="tool-cta">
          Acessar
              </a>
            </div>
          </div>
        </div>

        <!-- Mostrar mais ferramentas -->
        <div v-if="!showAllTools && filteredTools.length > 4" class="show-more">
          <button class="show-more-btn" @click="showAllTools = true">
            Ver todas as ferramentas ({{ allTools.length }})
          </button>
        </div>
      </div>
    </section>

    <!-- Seção de Promoções de Grupo -->
    <section class="group-promotions">
      <div class="container">
        <div class="group-content">
          <h2 class="group-title">Já está no nosso grupo de promoções?</h2>
          <p class="group-description">
            Receba no WhatsApp e no Telegram as melhores promoções e economize mais.
          </p>
          
          <div class="group-buttons">
            <button class="group-btn whatsapp" @click="openWhatsApp('grupo-whatsapp')">
              <span class="btn-icon">💬</span>
              Clique aqui para entrar
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Todo Mundo Ganha -->
    <section class="referral-section">
      <div class="container">
        <div class="referral-content">
          <div class="referral-text">
            <h2 class="referral-title">Todo mundo ganha</h2>
            <p class="referral-description">
              Cada pessoa que você indicar recebe desconto na primeira inscrição e você ganha créditos toda vez que seu amigo fizer parte do grupo.
            </p>
            <p class="referral-question">
              Tá esperando o que para indicar seus amigos?
            </p>
            <button class="referral-btn" @click="openWhatsApp('indicar')">
              Indicar
            </button>
          </div>
          <div class="referral-image">
            <div class="referral-placeholder">
              <UsersIcon class="w-24 h-24 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CogIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  CalculatorIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  ClockIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Ferramentas',
  meta: [
    { name: 'description', content: 'Descubra nossas ferramentas úteis para freelancers, desenvolvedores e empreendedores.' },
    { name: 'keywords', content: 'ferramentas, freelancers, desenvolvedores, empreendedores, marketing digital' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/ferramentas' }
  ]
})

// Estado do carrossel
const currentSlide = ref(0)
const carouselContainer = ref<HTMLElement>()

// Estado das ferramentas
const searchQuery = ref('')
const selectedCategory = ref('all')
const showAllTools = ref(false)

// Categorias
const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'calculator', name: 'Calculadoras' },
  { id: 'development', name: 'Desenvolvimento' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'business', name: 'Negócios' }
]

// Ferramentas
const allTools = [
  {
    id: 1,
    name: 'Freelance Calc',
    subtitle: 'Calcule quanto cobrar como freelancer',
    description: 'A ferramenta definitiva para programadores freelancers precificarem corretamente seu trabalho e aumentarem seus lucros.',
    category: 'calculator',
    icon: CalculatorIcon,
    link: '#'
  },
  {
    id: 2,
    name: 'Calc Dev',
    subtitle: 'Calculadora para Programadores',
    description: 'Estime projetos, calcule horas e gere orçamentos profissionais em segundos. A ferramenta definitiva para desenvolvedores freelancers.',
    category: 'calculator',
    icon: CodeBracketIcon,
    link: '#'
  },
  {
    id: 3,
    name: 'Price Savvy Calculator',
    subtitle: 'Descubra Quanto Cobrar pelo Seu Trabalho',
    description: 'Calcule preços justos e profissionais para seus produtos e serviços. Grátis, rápido e sem complicação.',
    category: 'calculator',
    icon: CurrencyDollarIcon,
    link: '#'
  },
  {
    id: 4,
    name: 'Price Calc',
    subtitle: 'Calcule o Preço Ideal para seus Produtos e Serviços',
    description: 'Ferramenta inteligente que considera custos, tempo, margem de lucro para sugerir preços justos e competitivos.',
    category: 'calculator',
    icon: ChartBarIcon,
    link: '#'
  },
  {
    id: 5,
    name: 'Gerador de Contratos',
    subtitle: 'Crie contratos profissionais',
    description: 'Gere contratos personalizados para freelancers e prestadores de serviços com cláusulas profissionais.',
    category: 'business',
    icon: DocumentTextIcon,
    link: '#'
  },
  {
    id: 6,
    name: 'Editor de Imagens',
    subtitle: 'Edite suas fotos online',
    description: 'Editor de imagens profissional online com filtros, efeitos e ferramentas avançadas de edição.',
    category: 'design',
    icon: PhotoIcon,
    link: '#'
  },
  {
    id: 7,
    name: 'Conversor de Vídeo',
    subtitle: 'Converta vídeos facilmente',
    description: 'Converta vídeos entre diferentes formatos de forma rápida e gratuita, direto no seu navegador.',
    category: 'design',
    icon: VideoCameraIcon,
    link: '#'
  },
  {
    id: 8,
    name: 'Time Tracker',
    subtitle: 'Controle seu tempo de trabalho',
    description: 'Monitore o tempo gasto em projetos e tarefas para melhorar sua produtividade e precificação.',
    category: 'business',
    icon: ClockIcon,
    link: '#'
  },
  {
    id: 9,
    name: 'Color Palette Generator',
    subtitle: 'Gere paletas de cores',
    description: 'Crie paletas de cores harmoniosas para seus projetos de design e desenvolvimento web.',
    category: 'design',
    icon: PaintBrushIcon,
    link: '#'
  },
  {
    id: 10,
    name: 'SEO Analyzer',
    subtitle: 'Analise seu SEO',
    description: 'Analise e otimize seu site para mecanismos de busca com relatórios detalhados e sugestões.',
    category: 'marketing',
    icon: GlobeAltIcon,
    link: '#'
  },
  {
    id: 11,
    name: 'App Mockup',
    subtitle: 'Crie mockups de aplicativos',
    description: 'Ferramenta para criar protótipos e mockups de aplicativos mobile de forma rápida e profissional.',
    category: 'design',
    icon: DevicePhoneMobileIcon,
    link: '#'
  },
  {
    id: 12,
    name: 'E-commerce Calculator',
    subtitle: 'Calcule custos de e-commerce',
    description: 'Calcule todos os custos envolvidos na operação de um e-commerce e defina preços competitivos.',
    category: 'business',
    icon: ShoppingCartIcon,
    link: '#'
  }
]

// Computed
const filteredTools = computed(() => {
  let tools = allTools

  // Filtrar por categoria
  if (selectedCategory.value !== 'all') {
    tools = tools.filter(tool => tool.category === selectedCategory.value)
  }

  // Filtrar por busca
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    tools = tools.filter(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.subtitle.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query)
    )
  }

  // Limitar quantidade se não estiver mostrando todas
  if (!showAllTools.value) {
    tools = tools.slice(0, 4)
  }

  return tools
})

// Métodos do carrossel
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play do carrossel
let autoPlayInterval: ReturnType<typeof setInterval>

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

// Métodos de filtro
const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId
  showAllTools.value = false
}

// Métodos de navegação
const openWhatsApp = (type: string, toolName?: string) => {
  let message: string;
  const baseMessages: { [key: string]: string } = {
    'indique': 'Olá! Gostaria de saber mais sobre o programa Indique e Ganhe.',
    'sites': 'Olá! Tenho interesse em criar um site profissional. Gostaria de saber mais.',
    'redes': 'Olá! Preciso de ajuda com gestão de redes sociais. Podem me ajudar?',
    'grupo-whatsapp': 'Olá! Gostaria de entrar no grupo de promoções do WhatsApp.',
    'indicar': 'Olá! Quero indicar amigos e participar do programa de indicações.'
  };

  if (type === 'ferramenta' && toolName) {
    message = `Olá! Gostaria de saber mais sobre a ferramenta ${toolName}.`;
  } else {
    message = baseMessages[type] || 'Olá! Gostaria de saber mais sobre os serviços.';
  }

  const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Lifecycle
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tools-page {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.tools-header {
  background: linear-gradient(135deg, #3b4cca 0%, #4f46e5 100%);
  color: white;
  padding: 0.75rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.promo-banner {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
}

.promo-icon {
  font-size: 1rem;
}

.header-subtitle {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Carrossel de Promoções */
.promotions-carousel {
  background: linear-gradient(135deg, #3b4cca 0%, #4f46e5 100%);
  padding: 2rem 0;
  position: relative;
}

.carousel-wrapper {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-container {
  overflow: hidden;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  padding: 3rem 2rem;
}

.slide-content {
  text-align: center;
  color: white;
}

.slide-title {
  font-size: 3rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 0.5rem;
}

.slide-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.slide-badge {
  display: inline-block;
  background: #fbbf24;
  color: #1e293b;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.slide-description {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.slide-cta {
  background: #f97316;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slide-cta:hover {
  background: #ea580c;
  transform: translateY(-2px);
}

/* Slides específicos */
.sites-slide .slide-title {
  color: #10b981;
}

.sites-slide .slide-badge {
  background: #10b981;
  color: white;
}

.social-slide .slide-title {
  color: #ec4899;
}

.social-slide .slide-badge {
  background: #ec4899;
  color: white;
}

/* Botões do carrossel */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.carousel-btn.prev {
  left: -1rem;
}

.carousel-btn.next {
  right: -1rem;
}

/* Indicadores */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
}

/* Seção de Ferramentas */
.tools-section {
  padding: 3rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
}

.view-more-btn {
  color: #06b6d4;
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.view-more-btn:hover {
  color: #0891b2;
}

/* Filtros */
.tools-filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-bar {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
}

.search-input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #64748b;
  border-radius: 2rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.filter-btn.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

/* Grid de Ferramentas */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tool-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.tool-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.tool-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: #f1f5f9;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.tool-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.tool-subtitle {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.tool-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tool-cta {
  width: 100%;
  background: #06b6d4;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tool-cta:hover {
  background: #0891b2;
}

/* Mostrar mais */
.show-more {
  text-align: center;
}

.show-more-btn {
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #d1d5db;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  background: #e2e8f0;
  color: #475569;
}

/* Seção de Promoções de Grupo */
.group-promotions {
  background: #f8fafc;
  padding: 3rem 0;
  text-align: center;
}

.group-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.group-description {
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.group-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.group-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.group-btn.whatsapp {
  background: #22c55e;
  color: white;
}

.group-btn.whatsapp:hover {
  background: #16a34a;
}

.group-btn.telegram {
  background: #3b82f6;
  color: white;
}

.group-btn.telegram:hover {
  background: #2563eb;
}

/* Seção de Indicações */
.referral-section {
  padding: 3rem 0;
  background: white;
}

.referral-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.referral-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.referral-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.referral-question {
  color: #64748b;
  margin-bottom: 2rem;
}

.referral-btn {
  background: #06b6d4;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.referral-btn:hover {
  background: #0891b2;
}

.referral-image {
  display: flex;
  justify-content: center;
}

.referral-placeholder {
  width: 200px;
  height: 200px;
  background: #f1f5f9;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .header-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .carousel-slide {
    padding: 2rem 1rem;
  }

  .slide-title {
    font-size: 2rem;
  }

  .carousel-btn {
    display: none;
  }

  .tools-filters {
    align-items: stretch;
  }

  .search-bar {
    max-width: none;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .group-buttons {
    flex-direction: column;
    align-items: center;
  }

  .group-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .referral-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .referral-image {
    order: -1;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 1.5rem;
  }

  .slide-subtitle {
    font-size: 1.125rem;
  }

  .tools-section {
    padding: 2rem 0;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .category-filters {
    justify-content: center;
  }
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tool-card {
  animation: fadeIn 0.6s ease-out;
}

/* Estados de loading */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #64748b;
}

/* Estados vazios */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #64748b;
}

.empty-state h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    transition: none;
  }
  
  .tool-card {
    animation: none;
  }
  
  * {
    transition: none !important;
  }
}

/* Focus states */
.search-input:focus,
.filter-btn:focus,
.tool-cta:focus,
.group-btn:focus,
.referral-btn:focus,
.carousel-btn:focus,
.indicator:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>