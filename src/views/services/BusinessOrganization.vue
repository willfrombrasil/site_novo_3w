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
          <span>Organização Comercial</span>
        </div>
        <h1 class="page-hero-title">Organização Comercial</h1>
        <p class="page-hero-subtitle">
          Estruturação de processos comerciais e otimização de vendas
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
              Organize para vender mais
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Estruturamos e otimizamos seus processos comerciais para aumentar a eficiência e resultados de vendas. Nossa consultoria abrange desde a organização do funil de vendas até a implementação de CRM e automações.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Estruturação do funil de vendas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Implementação de CRM</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Automação de processos</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Treinamento da equipe</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Métricas e indicadores</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Organização Comercial."
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
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Organização Comercial"
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
          <h2 class="section-title">Áreas de atuação</h2>
          <p class="section-subtitle">Soluções completas para organização comercial</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Funil de Vendas</h3>
            <p class="text-gray-600">Estruturação e otimização do processo de vendas</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">CRM</h3>
            <p class="text-gray-600">Implementação e configuração de sistema de gestão</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Automação</h3>
            <p class="text-gray-600">Automatização de processos repetitivos</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Treinamentos</h3>
            <p class="text-gray-600">Capacitação da equipe comercial</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Métricas</h3>
            <p class="text-gray-600">Definição de KPIs e dashboards</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Processos</h3>
            <p class="text-gray-600">Documentação e padronização</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="business" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para organizar suas vendas?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos estruturar seus processos para aumentar a eficiência comercial
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Organização Comercial."
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
  title: 'Organização Comercial - Estruture suas Vendas',
  meta: [
    { name: 'description', content: 'Melhore a eficiência da sua equipe de vendas com nossas soluções de organização comercial.' },
    { name: 'keywords', content: 'organização comercial, funil de vendas, CRM, automação, treinamento' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/organizacao-comercial' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>