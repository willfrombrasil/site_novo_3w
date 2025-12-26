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
          <span>Planejamento de Campanhas</span>
        </div>
        <h1 class="page-hero-title">Planejamento de Campanhas</h1>
        <p class="page-hero-subtitle">
          Desenvolvimento de campanhas publicitárias integradas e eficientes
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
              Campanhas que marcam e convertem
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Criamos campanhas publicitárias integradas que conectam sua marca ao público-alvo de forma eficaz. Nossa equipe desenvolve estratégias criativas e dados-driven para maximizar o impacto e ROI das suas campanhas.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Estratégia criativa diferenciada</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Campanhas multi-canal integradas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Análise de público e personas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Cronograma detalhado de execução</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Métricas e KPIs definidos</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Planejamento de Campanhas."
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
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Planejamento de Campanhas"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Types Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Tipos de campanhas</h2>
          <p class="section-subtitle">Soluções para diferentes objetivos de marketing</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Lançamento de Produto</h3>
            <p class="text-gray-600">Campanhas estratégicas para apresentar novos produtos ao mercado</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Branding</h3>
            <p class="text-gray-600">Fortalecimento da marca e posicionamento no mercado</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Vendas</h3>
            <p class="text-gray-600">Campanhas focadas em conversão e geração de receita</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sazonais</h3>
            <p class="text-gray-600">Aproveitamento de datas comemorativas e eventos especiais</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Retenção</h3>
            <p class="text-gray-600">Fidelização de clientes e aumento do lifetime value</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Awareness</h3>
            <p class="text-gray-600">Aumento da consciência de marca e reconhecimento</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="campaign" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para criar uma campanha de sucesso?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos desenvolver uma estratégia que conecte sua marca ao público certo
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Planejamento de Campanhas."
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
  title: 'Planejamento de Campanhas - Serviços',
  meta: [
    { name: 'description', content: 'Desenvolvimento de campanhas publicitárias integradas e eficientes para conectar sua marca ao público-alvo.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/planejamento-campanhas' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>