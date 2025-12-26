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
          <span>Gestão de Anúncios</span>
        </div>
        <h1 class="page-hero-title">Gestão de Anúncios</h1>
        <p class="page-hero-subtitle">
          Maximize seu ROI com campanhas de Google Ads e Meta Ads otimizadas
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
              Anúncios que realmente convertem
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Nossa equipe especializada em tráfego pago cria e otimiza campanhas no Google Ads e Meta Ads (Facebook e Instagram) para gerar leads qualificados e vendas para seu negócio. Utilizamos estratégias avançadas de segmentação e otimização contínua.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Campanhas otimizadas para conversão</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Segmentação avançada de público</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Monitoramento e otimização diária</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Relatórios detalhados de performance</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Gestão de orçamento inteligente</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Gestão de Anúncios."
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
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gestão de Anúncios"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Platforms Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Plataformas que dominamos</h2>
          <p class="section-subtitle">Expertise comprovada nas principais plataformas de anúncios</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Google Ads</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Campanhas de Pesquisa
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Display e Remarketing
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                YouTube Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Shopping Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Performance Max
              </li>
            </ul>
          </div>
          
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Meta Ads</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Facebook Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Instagram Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Stories e Reels
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Messenger Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Audience Network
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
          <PriceSimulator service-type="ads" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para aumentar suas vendas?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Comece hoje mesmo a gerar leads qualificados com nossas campanhas otimizadas
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Gestão de Anúncios."
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
  title: 'Gestão de Anúncios - Maximize seu ROI com Google Ads e Meta Ads',
  meta: [
    { name: 'description', content: 'Aumente suas vendas com campanhas otimizadas de Google Ads e Meta Ads. Fale conosco!' },
    { name: 'keywords', content: 'gestão de anúncios, Google Ads, Meta Ads, tráfego pago, marketing digital' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/gestao-anuncios' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>