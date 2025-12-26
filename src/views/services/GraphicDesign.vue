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
          <span>Design Gráfico</span>
        </div>
        <h1 class="page-hero-title">Design Gráfico</h1>
        <p class="page-hero-subtitle">
          Identidade visual, materiais gráficos e peças publicitárias criativas
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
              Design que comunica e converte
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Criamos identidades visuais marcantes e materiais gráficos que fortalecem sua marca. Nossa equipe de designers desenvolve peças criativas que comunicam sua mensagem de forma clara e impactante.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Identidade visual completa</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Materiais para redes sociais</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Peças publicitárias criativas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Manual de marca</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Materiais impressos e digitais</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Design Gráfico."
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
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Design Gráfico"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossos serviços de design</h2>
          <p class="section-subtitle">Soluções completas para todas as suas necessidades visuais</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Identidade Visual</h3>
            <p class="text-gray-600 mb-4">Logo, cores, tipografia e elementos visuais da marca</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 1.800</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Social Media</h3>
            <p class="text-gray-600 mb-4">Posts, stories, banners e templates para redes sociais</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 800</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Material Impresso</h3>
            <p class="text-gray-600 mb-4">Cartões, folders, catálogos e materiais promocionais</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 600</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Embalagens</h3>
            <p class="text-gray-600 mb-4">Design de embalagens e rótulos para produtos</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 1.200</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Apresentações</h3>
            <p class="text-gray-600 mb-4">Slides profissionais para vendas e apresentações</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 500</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sinalização</h3>
            <p class="text-gray-600 mb-4">Placas, banners e materiais de ponto de venda</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 400</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="design" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para fortalecer sua identidade visual?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos criar um design que representa verdadeiramente sua marca
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Design Gráfico."
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
  title: 'Design Gráfico | Amplifique sua Marca',
  meta: [
    { name: 'description', content: 'Serviços de design gráfico para fortalecer sua identidade visual e criar materiais impactantes.' },
    { name: 'keywords', content: 'design gráfico, identidade visual, branding, materiais gráficos, peças publicitárias' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/design-grafico' }
  ]
})
const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>