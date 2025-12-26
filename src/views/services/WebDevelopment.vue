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
          <span>Criação de Sites</span>
        </div>
        <h1 class="page-hero-title">Criação de Sites</h1>
        <p class="page-hero-subtitle">
          Sites profissionais, responsivos e otimizados para conversão
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
              Seu site é sua vitrine digital
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Desenvolvemos sites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes. Nossa equipe utiliza as melhores tecnologias e práticas de UX/UI para criar experiências digitais excepcionais.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Design responsivo e moderno</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Otimização para SEO</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Carregamento rápido</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Painel administrativo intuitivo</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Integração com ferramentas de marketing</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Criação de Sites."
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
              alt="Criação de Sites"
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
          <h2 class="section-title">Tipos de sites que desenvolvemos</h2>
          <p class="section-subtitle">Soluções personalizadas para cada necessidade</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Site Institucional</h3>
            <p class="text-gray-600 mb-4">Apresente sua empresa de forma profissional</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 1.200</p>
          </div>
          
          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">E-commerce</h3>
            <p class="text-gray-600 mb-4">Venda online com segurança e praticidade</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 7.500</p>
          </div>
          
          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Blog/Portal</h3>
            <p class="text-gray-600 mb-4">Compartilhe conteúdo e atraia audiência</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 2.500</p>
          </div>
          
          <div class="card p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sistema Web</h3>
            <p class="text-gray-600 mb-4">Soluções personalizadas para seu negócio</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 5.000</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="website" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para ter seu site profissional?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Entre em contato e transforme sua presença digital hoje mesmo
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Criação de Sites."
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
  title: 'Criação de Sites | Serviços',
  meta: [
    {
      name: 'description',
      content: 'Desenvolvemos sites profissionais, responsivos e otimizados para SEO que convertem visitantes em clientes.'
    },
    {
      name: 'keywords',
      content: 'criação de sites, desenvolvimento web, design responsivo, SEO, marketing digital'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/criacao-sites' }
  ]
})
const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>