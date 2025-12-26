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
          <span>Desenvolvimento de Apps</span>
        </div>
        <h1 class="page-hero-title">Desenvolvimento de Apps</h1>
        <p class="page-hero-subtitle">
          Aplicativos mobile nativos e híbridos para iOS e Android
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
              Leve seu negócio para o mobile
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Desenvolvemos aplicativos mobile personalizados que oferecem experiências excepcionais aos usuários. Nossa equipe especializada utiliza as melhores tecnologias para criar apps nativos e híbridos para iOS e Android.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Design UX/UI otimizado para mobile</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Performance nativa</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Integração com APIs e serviços</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Publicação nas lojas oficiais</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Suporte e manutenção</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Desenvolvimento de Apps."
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
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Desenvolvimento de Apps"
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
          <h2 class="section-title">Plataformas e tecnologias</h2>
          <p class="section-subtitle">Desenvolvemos para todas as principais plataformas</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">iOS</h3>
            <p class="text-gray-600 mb-6">Apps nativos para iPhone e iPad usando Swift e Objective-C</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 7.000</p>
          </div>
          
          <div class="card p-8 text-center border-2 border-primary-500">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Android</h3>
            <p class="text-gray-600 mb-6">Apps nativos para smartphones e tablets Android</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 7.000</p>
          </div>
          
          <div class="card p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Híbrido</h3>
            <p class="text-gray-600 mb-6">Uma base de código para iOS e Android com React Native</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 12.600</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="app" />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para criar seu app?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Transforme sua ideia em um aplicativo de sucesso
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Desenvolvimento de Apps."
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
  title: 'Desenvolvimento de Apps | Seu Negócio no Mobile',
  meta: [
    { name: 'description', content: 'Desenvolvemos aplicativos mobile nativos e híbridos para iOS e Android, com design otimizado e performance excepcional.' },
    { name: 'keywords', content: 'desenvolvimento de apps, aplicativos mobile, iOS, Android, React Native' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/desenvolvimento-apps' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>