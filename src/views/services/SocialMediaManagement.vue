<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <router-link to="/servicos">Serviços</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Gestão de Redes Sociais</span>
        </div>
        <h1 class="page-hero-title">Gestão de Redes Sociais</h1>
        <p class="page-hero-subtitle">
          Transforme suas redes sociais em poderosas ferramentas de marketing e vendas
        </p>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="section-padding mt-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Main Content -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Sua marca merece destaque nas redes sociais
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Cuidamos de toda a estratégia digital da sua empresa, desde a criação de conteúdo até o relacionamento com seus clientes. Nossa equipe especializada desenvolve campanhas personalizadas que geram engajamento real e convertem seguidores em clientes.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Conteúdo criativo e estratégico</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Planejamento editorial personalizado</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Monitoramento e análise de métricas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Atendimento ao cliente via redes sociais</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Relatórios mensais detalhados</span>
              </div>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="scrollToSimulator"
                class="btn-primary"
              >
                Simular Preço
              </button>
              <a
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Gestão de Redes Sociais."
                target="_blank"
                class="btn-secondary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          
          <!-- Service Image -->
          <div>
            <img
              src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gestão de Redes Sociais"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Como funciona nosso processo</h2>
          <p class="section-subtitle">Metodologia comprovada para resultados consistentes</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="step-number mx-auto mb-4">1</div>
            <h3 class="font-semibold text-gray-900 mb-2">Análise</h3>
            <p class="text-gray-600">Estudamos seu negócio, concorrência e público-alvo</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">2</div>
            <h3 class="font-semibold text-gray-900 mb-2">Estratégia</h3>
            <p class="text-gray-600">Criamos um plano personalizado para suas redes</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">3</div>
            <h3 class="font-semibold text-gray-900 mb-2">Execução</h3>
            <p class="text-gray-600">Produzimos e publicamos conteúdo de qualidade</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">4</div>
            <h3 class="font-semibold text-gray-900 mb-2">Otimização</h3>
            <p class="text-gray-600">Analisamos resultados e otimizamos constantemente</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Packages Section -->
    <section class="section-padding mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Pacotes de Gestão</h2>
          <p class="section-subtitle">Escolha o plano ideal para seu negócio</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="pricing-badge inline-block mb-4">BÁSICO</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">1 Rede Social</h3>
            <p class="text-gray-600 mb-6">Ideal para pequenos negócios que estão começando</p>
            <ul class="text-left space-y-2 mb-8">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>12 posts por mês</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Stories 3x por semana</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Relatório mensal</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Atendimento via chat</span>
              </li>
            </ul>
            <p class="text-sm text-gray-500">A partir de</p>
            <p class="text-3xl font-bold text-primary-600">R$ 1200/mês</p>
          </div>
          
          <div class="card p-8 text-center border-2 border-primary-500 relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              MAIS POPULAR
            </div>
            <div class="pricing-badge inline-block mb-4 bg-primary-500">PROFISSIONAL</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">2-3 Redes Sociais</h3>
            <p class="text-gray-600 mb-6">Perfeito para empresas em crescimento</p>
            <ul class="text-left space-y-2 mb-8">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>20 posts por mês</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Stories diários</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Reels semanais</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Relatório quinzenal</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Suporte prioritário</span>
              </li>
            </ul>
            <p class="text-sm text-gray-500">A partir de</p>
            <p class="text-3xl font-bold text-primary-600">R$ 1.280/mês</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="pricing-badge inline-block mb-4">PREMIUM</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">4+ Redes Sociais</h3>
            <p class="text-gray-600 mb-6">Solução completa para grandes empresas</p>
            <ul class="text-left space-y-2 mb-8">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>30 posts por mês</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Stories ilimitados</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Reels 2x por semana</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Relatório semanal</span>
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                <span>Gerente dedicado</span>
              </li>
            </ul>
            <p class="text-sm text-gray-500">A partir de</p>
            <p class="text-3xl font-bold text-primary-600">R$ 1.920/mês</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="social-media" />
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section-padding mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Perguntas Frequentes</h2>
          <p class="section-subtitle">Esclareça suas dúvidas sobre gestão de redes sociais</p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="card p-6"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="faq-question w-full text-left"
            >
              <span>{{ faq.question }}</span>
              <ChevronDownIcon 
                class="w-5 h-5 transition-transform" 
                :class="{ 'rotate-180': openFaq === faq.id }"
              />
            </button>
            <div v-if="openFaq === faq.id" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para dominar as redes sociais?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Entre em contato conosco e comece a transformar sua presença digital hoje mesmo
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Gestão de Redes Sociais."
              target="_blank"
              class="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
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
import { ref } from 'vue'
import { ChevronRightIcon, ChevronDownIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import PriceSimulator from '../../components/PriceSimulator.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Gestão de Redes Sociais - Sua Marca em Destaque',
  meta: [
    { name: 'description', content: 'Transforme suas redes sociais em poderosas ferramentas de marketing e vendas com nossa gestão especializada.' },
    { name: 'keywords', content: 'gestão de redes sociais, marketing digital, social media, criação de conteúdo, engajamento' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/gestao-redes-sociais' }
  ]
})

const simulatorSection = ref<HTMLElement>()
const openFaq = ref<number | null>(null)

const faqs = [
  {
    id: 1,
    question: 'Quantas redes sociais vocês gerenciam?',
    answer: 'Gerenciamos as principais redes sociais como Instagram, Facebook, LinkedIn, TikTok, YouTube e Twitter. O número de redes incluídas depende do plano escolhido.'
  },
  {
    id: 2,
    question: 'Como é feito o conteúdo das postagens?',
    answer: 'Nosso time de criativos desenvolve conteúdo personalizado baseado na identidade da sua marca, utilizando copywriting profissional, design exclusivo e estratégias de engajamento.'
  },
  {
    id: 3,
    question: 'Vocês respondem aos comentários e mensagens?',
    answer: 'Sim! Oferecemos atendimento ao cliente via redes sociais, respondendo comentários e mensagens de forma profissional e alinhada com a voz da sua marca.'
  },
  {
    id: 4,
    question: 'Como posso acompanhar os resultados?',
    answer: 'Fornecemos relatórios detalhados mensais ou quinzenais (dependendo do plano) com métricas de engajamento, alcance, crescimento de seguidores e outras KPIs importantes.'
  },
  {
    id: 5,
    question: 'Qual é o prazo mínimo de contratação?',
    answer: 'Trabalhamos com contratos mensais, sem carência. Recomendamos pelo menos 3 meses para ver resultados consistentes na estratégia digital.'
  }
]

const toggleFaq = (id: number) => {
  openFaq.value = openFaq.value === id ? null : id
}

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>