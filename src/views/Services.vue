<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/"><i class="fas fa-home mr-1"></i>Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span><i class="fas fa-briefcase mr-1"></i>Serviços</span>
        </div>
        <h1 class="page-hero-title">
          <i class="fas fa-gem text-yellow-300 mr-3"></i>
          Soluções Digitais Completas
        </h1>
        <p class="page-hero-subtitle">
          <i class="fas fa-chart-line mr-2"></i>
          Transforme seu negócio com nossas soluções em marketing digital, desenvolvimento e consultoria estratégica
        </p>
        <div class="flex justify-center gap-4 mt-6 flex-wrap">
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse" title="Planos personalizados para seu orçamento">
            <i class="fas fa-tags text-green-300 mr-2"></i>Planos Flexíveis
          </span>
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium" title="Garantia de satisfação ou seu dinheiro de volta">
            <i class="fas fa-shield-check text-blue-300 mr-2"></i>Garantia 100%
          </span>
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium" title="Suporte dedicado sempre que precisar">
            <i class="fas fa-headset text-yellow-300 mr-2"></i>Suporte 24/7
          </span>
        </div>
      </div>
    </section>
    
    <!-- Services Grid -->
    <section class="section-padding py-16 my-16">
      <div class="container">
        <div class="mb-12 text-center">
          <div class="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl shadow-lg inline-block">
            <p class="text-xl font-bold text-gray-900 mb-2">
              <i class="fas fa-fire text-orange-500 mr-2 animate-pulse"></i>
              Oferta Especial: <span class="text-orange-600">20% de Desconto</span> no Primeiro Mês!
            </p>
            <p class="text-gray-700">
              <i class="fas fa-clock mr-2"></i>
              Válido apenas para os <strong>próximos 5 clientes</strong> que fecharem hoje
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card group relative"
          >
            <div class="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
              <i class="fas fa-star mr-1"></i>Popular
            </div>
            <div class="feature-icon mb-6 group-hover:scale-110 transition-transform">
              <component :is="service.icon" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <i class="fas fa-check-circle text-green-500"></i>
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <div class="flex items-center justify-between mb-4 p-3 bg-blue-50 rounded-lg">
              <span class="text-sm text-gray-600 flex items-center gap-1">
                <i class="fas fa-tag"></i>
                A partir de
              </span>
              <span class="text-lg font-bold text-primary-600">{{ service.price }}</span>
            </div>
            <router-link
              :to="service.link"
              class="btn-primary w-full text-center inline-flex items-center justify-center gap-2 group-hover:shadow-xl transition-all"
              :title="`Saiba mais sobre ${service.title}`"
            >
              <i class="fas fa-info-circle"></i>
              Saiba Mais
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section class="section-padding bg-gray-50 py-16 my-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Por que escolher nossos serviços?</h2>
          <p class="section-subtitle">Diferenciais que fazem a diferença no seu resultado</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <i class="fas fa-bolt text-yellow-500"></i>
              Agilidade
            </h3>
            <p class="text-gray-600">Entregamos projetos no prazo acordado com <strong>qualidade garantida</strong></p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CogIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <i class="fas fa-puzzle-piece text-purple-500"></i>
              Personalização
            </h3>
            <p class="text-gray-600">Soluções <strong>sob medida</strong> para cada necessidade e orçamento</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <i class="fas fa-chart-line text-green-500"></i>
              Resultados
            </h3>
            <p class="text-gray-600">Focamos em métricas que <strong>realmente impactam</strong> seu negócio</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Suporte</h3>
            <p class="text-gray-600">Atendimento especializado e suporte contínuo</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Não encontrou o que procura?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Entre em contato conosco e vamos criar uma solução personalizada para você
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-info bg-white text-primary-600 hover:bg-gray-100">
              Falar com Especialista
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Preciso de uma solução personalizada."
              target="_blank"
              class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
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
  ChevronRightIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  SpeakerWaveIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  UserGroupIcon,
  CubeIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Serviços',
  meta: [
    { name: 'description', content: 'Conheça nossos serviços de marketing digital e desenvolvimento para impulsionar seu negócio.' },
    { name: 'keywords', content: 'marketing digital, desenvolvimento web, criação de sites, gestão de redes sociais' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos' }
  ]
})

const services = [
  {
    id: 0,
    title: 'Marketing Digital Para seu Negócio',
    description: 'Pacote completo de gestão de anúncios e redes sociais por 30 dias.',
    price: 'R$ 500',
    icon: StarIcon,
    link: '/servicos/marketing-digital'
  },
  {
    id: 1,
    title: 'Gestão de Redes Sociais',
    description: 'Criação de conteúdo, planejamento estratégico e gestão completa das suas redes sociais.',
    price: 'R$ 800/mês',
    icon: ChatBubbleBottomCenterTextIcon,
    link: '/servicos/gestao-redes-sociais'
  },
  {
    id: 2,
    title: 'Gestão de Anúncios',
    description: 'Campanhas eficientes no Google Ads e Meta Ads para maximizar seu ROI.',
    price: 'R$ 1.200/mês',
    icon: PresentationChartLineIcon,
    link: '/servicos/gestao-anuncios'
  },
  {
    id: 3,
    title: 'Criação de Sites',
    description: 'Sites profissionais, responsivos e otimizados para conversão e SEO.',
    price: 'R$ 1.200',
    icon: ComputerDesktopIcon,
    link: '/servicos/criacao-sites'
  },
  {
    id: 4,
    title: 'Criação de Sistemas',
    description: 'Sistemas web personalizados para automatizar e otimizar seus processos.',
    price: 'R$ 5.000',
    icon: CubeIcon,
    link: '/servicos/criacao-sistemas'
  },
  {
    id: 5,
    title: 'Desenvolvimento de Apps',
    description: 'Aplicativos mobile nativos e híbridos para iOS e Android.',
    price: 'R$ 7.000',
    icon: DevicePhoneMobileIcon,
    link: '/servicos/desenvolvimento-apps'
  },
  {
    id: 6,
    title: 'Consultoria em Marketing',
    description: 'Estratégias personalizadas para otimizar seus resultados em marketing digital.',
    price: 'R$ 2.500/mês',
    icon: LightBulbIcon,
    link: '/servicos/consultoria-marketing'
  },
  {
    id: 7,
    title: 'Planejamento de Campanhas',
    description: 'Desenvolvimento de campanhas publicitárias integradas e eficientes.',
    price: 'R$ 3.500',
    icon: DocumentTextIcon,
    link: '/servicos/planejamento-campanhas'
  },
  {
    id: 8,
    title: 'Design Gráfico',
    description: 'Identidade visual, materiais gráficos e peças publicitárias criativas.',
    price: 'R$ 1.800',
    icon: PaintBrushIcon,
    link: '/servicos/design-grafico'
  },
  {
    id: 9,
    title: 'Publicidade e Propaganda',
    description: 'Campanhas publicitárias integradas para online e offline.',
    price: 'R$ 5.000',
    icon: MegaphoneIcon,
    link: '/servicos/publicidade'
  },
  {
    id: 10,
    title: 'Organização Comercial',
    description: 'Estruturação de processos comerciais e otimização de vendas.',
    price: 'R$ 3.500',
    icon: BriefcaseIcon,
    link: '/servicos/organizacao-comercial'
  },
  {
    id: 11,
    title: 'Relações Públicas',
    description: 'Assessoria de imprensa e gestão da comunicação corporativa.',
    price: 'R$ 2.800/mês',
    icon: SpeakerWaveIcon,
    link: '/servicos/relacoes-publicas'
  }
]
</script>