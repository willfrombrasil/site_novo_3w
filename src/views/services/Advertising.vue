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
          <span>Publicidade e Propaganda</span>
        </div>
        <h1 class="page-hero-title">Publicidade e Propaganda</h1>
        <p class="page-hero-subtitle">
          Campanhas publicitárias integradas para online e offline
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
              Publicidade que gera impacto
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Desenvolvemos campanhas publicitárias completas que conectam sua marca ao público-alvo através de múltiplos canais. Nossa abordagem integrada garante consistência e máximo impacto em todas as plataformas.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Campanhas 360° integradas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Criação publicitária diferenciada</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Mídia online e offline</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Planejamento de mídia estratégico</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Mensuração de resultados</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Publicidade e Propaganda."
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
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Publicidade e Propaganda"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Channels Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Canais de comunicação</h2>
          <p class="section-subtitle">Presença estratégica em todos os pontos de contato</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Mídia Digital</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Google Ads e Meta Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                YouTube e TikTok Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                LinkedIn e Twitter Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Programática e Display
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Influencer Marketing
              </li>
            </ul>
          </div>
          
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Mídia Tradicional</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Rádio e TV
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Jornais e Revistas
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Outdoor e Busdoor
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Material Impresso
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Eventos e Ativações
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="advertising" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para amplificar sua marca?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos criar uma campanha publicitária que gere resultados reais
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Publicidade e Propaganda."
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
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import PriceSimulator from '../../components/PriceSimulator.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Publicidade e Propaganda - Amplifique sua Marca',
  meta: [
    { name: 'description', content: 'Descubra nossas soluções em publicidade e propaganda para impulsionar sua marca.' },
    { name: 'keywords', content: 'publicidade, propaganda, marketing digital, branding' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/publicidade' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>