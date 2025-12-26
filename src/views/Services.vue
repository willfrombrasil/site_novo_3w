<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Serviços</span>
        </div>
        <h1 class="page-hero-title">Nossos Serviços</h1>
        <p class="page-hero-subtitle">
          Soluções completas em marketing digital e desenvolvimento para impulsionar seu negócio
        </p>
      </div>
    </section>
    
    <!-- Services Grid -->
    <section class="section-padding py-16 my-16">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
          >
            <div class="feature-icon mb-6">
              <component :is="service.icon" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-500">A partir de</span>
              <span class="text-lg font-bold text-primary-600">{{ service.price }}</span>
            </div>
            <router-link
              :to="service.link"
              class="btn-primary w-full text-center"
            >
              Saiba Mais
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
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Agilidade</h3>
            <p class="text-gray-600">Entregamos projetos no prazo acordado com qualidade garantida</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CogIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Personalização</h3>
            <p class="text-gray-600">Soluções sob medida para cada necessidade e orçamento</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Resultados</h3>
            <p class="text-gray-600">Focamos em métricas que realmente impactam seu negócio</p>
          </div>
          
          <div class="text-center">
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