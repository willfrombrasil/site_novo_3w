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
          <span>Consultoria em Marketing</span>
        </div>
        <h1 class="page-hero-title">Consultoria em Marketing</h1>
        <p class="page-hero-subtitle">
          Estratégias personalizadas para otimizar seus resultados em marketing digital
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
              Estratégias que geram resultados
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Nossa consultoria em marketing digital oferece análises profundas e estratégias personalizadas para otimizar seus investimentos em marketing. Identificamos oportunidades, corrigimos falhas e criamos planos de ação eficazes.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Auditoria completa do marketing atual</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Plano estratégico personalizado</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Análise de concorrência</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Definição de KPIs e métricas</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Acompanhamento mensal</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Consultoria em Marketing."
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
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Consultoria em Marketing"
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
          <h2 class="section-title">Processo de consultoria</h2>
          <p class="section-subtitle">Metodologia estruturada para resultados consistentes</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="step-number mx-auto mb-4">1</div>
            <h3 class="font-semibold text-gray-900 mb-2">Diagnóstico</h3>
            <p class="text-gray-600">Análise completa da situação atual do seu marketing</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">2</div>
            <h3 class="font-semibold text-gray-900 mb-2">Estratégia</h3>
            <p class="text-gray-600">Desenvolvimento de plano estratégico personalizado</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">3</div>
            <h3 class="font-semibold text-gray-900 mb-2">Implementação</h3>
            <p class="text-gray-600">Suporte na execução das estratégias definidas</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">4</div>
            <h3 class="font-semibold text-gray-900 mb-2">Monitoramento</h3>
            <p class="text-gray-600">Acompanhamento e otimização contínua</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="consulting" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para otimizar seu marketing?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Agende uma consultoria e descubra como melhorar seus resultados
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Consultoria em Marketing."
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
  title: 'Consultoria em Marketing | Sua Empresa',
  meta: [
    { name: 'description', content: 'Oferecemos consultoria em marketing digital para otimizar seus resultados e investimentos.' },
    { name: 'keywords', content: 'consultoria, marketing digital, estratégia, resultados' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/consultoria-marketing' }
  ]
})
const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>