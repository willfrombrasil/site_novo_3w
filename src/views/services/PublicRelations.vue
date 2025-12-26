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
          <span>Relações Públicas</span>
        </div>
        <h1 class="page-hero-title">Relações Públicas</h1>
        <p class="page-hero-subtitle">
          Assessoria de imprensa e gestão da comunicação corporativa
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
              Construa uma reputação sólida
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Gerenciamos a comunicação da sua empresa com a imprensa e stakeholders, construindo uma reputação sólida e positiva. Nossa equipe desenvolve estratégias de comunicação que fortalecem a imagem da marca.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Assessoria de imprensa completa</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Gestão de crise e reputação</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Relacionamento com mídia</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Comunicação interna</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Eventos corporativos</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Relações Públicas."
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
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Relações Públicas"
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
          <h2 class="section-title">Nossos serviços de RP</h2>
          <p class="section-subtitle">Comunicação estratégica para fortalecer sua marca</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Assessoria de Imprensa</h3>
            <p class="text-gray-600">Relacionamento com jornalistas e veículos de comunicação</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Gestão de Crise</h3>
            <p class="text-gray-600">Estratégias para proteger a reputação em momentos críticos</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Press Release</h3>
            <p class="text-gray-600">Criação e distribuição de comunicados para a imprensa</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Eventos</h3>
            <p class="text-gray-600">Organização de coletivas e eventos corporativos</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Monitoramento</h3>
            <p class="text-gray-600">Acompanhamento da repercussão na mídia</p>
          </div>
          
          <div class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Comunicação Interna</h3>
            <p class="text-gray-600">Estratégias para engajar colaboradores</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="pr" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para fortalecer sua comunicação?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos construir uma estratégia de comunicação que valorize sua marca
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Relações Públicas."
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
  title: 'Relações Públicas - Serviços',
  meta: [
    { name: 'description', content: 'Assessoria de imprensa e gestão da comunicação corporativa' },
    { name: 'keywords', content: 'relações públicas, assessoria de imprensa, comunicação corporativa' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/relacoes-publicas' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>