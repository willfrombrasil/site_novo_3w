<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Portfólio</span>
        </div>
        <h1 class="page-hero-title">Nosso Portfólio</h1>
        <p class="page-hero-subtitle">
          Conheça alguns dos projetos que desenvolvemos com sucesso
        </p>
      </div>
    </section>
    
    <!-- Portfolio Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Cases de Sucesso</h2>
          <p class="section-subtitle">Projetos que transformaram negócios e geraram resultados</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="portfolio-item"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="portfolio-image"
            />
            <div class="portfolio-content">
              <h3 class="portfolio-title">{{ project.title }}</h3>
              <p class="portfolio-description">{{ project.description }}</p>
              <div class="portfolio-tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="portfolio-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="section-padding bg-gray-50  mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Resultados que Comprovam</h2>
          <p class="section-subtitle">Números que demonstram nosso impacto</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="metric-card">
            <div class="metric-value">150+</div>
            <div class="metric-label">Projetos Entregues</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">98%</div>
            <div class="metric-label">Clientes Satisfeitos</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">300%</div>
            <div class="metric-label">Aumento Médio em Vendas</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">5</div>
            <div class="metric-label">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Seu projeto pode ser o próximo case de sucesso
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Entre em contato conosco e vamos discutir como podemos ajudar seu negócio
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Gostaria de discutir meu projeto."
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
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const projects = [
  {
    id: 1,
    title: 'E-commerce Fashion Store',
    description: 'Desenvolvimento completo de loja virtual com integração de pagamentos e gestão de estoque.',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-commerce', 'Design', 'Desenvolvimento']
  },
  {
    id: 2,
    title: 'Campanha Digital Restaurante',
    description: 'Gestão completa de redes sociais e anúncios que resultou em 250% de aumento nas vendas.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Marketing Digital', 'Redes Sociais', 'Anúncios']
  },
  {
    id: 3,
    title: 'App de Delivery',
    description: 'Aplicativo mobile para delivery com sistema de pedidos e rastreamento em tempo real.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['App Mobile', 'Desenvolvimento', 'UX/UI']
  },
  {
    id: 4,
    title: 'Site Institucional Clínica',
    description: 'Website responsivo com sistema de agendamento online e área do paciente.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Website', 'Sistema', 'Saúde']
  },
  {
    id: 5,
    title: 'Identidade Visual Startup',
    description: 'Criação completa de identidade visual e materiais gráficos para startup de tecnologia.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Design Gráfico', 'Branding', 'Identidade Visual']
  },
  {
    id: 6,
    title: 'Consultoria E-commerce',
    description: 'Reestruturação comercial que aumentou a conversão em 180% e reduziu o CAC em 40%.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Consultoria', 'E-commerce', 'Otimização']
  }
]
</script>