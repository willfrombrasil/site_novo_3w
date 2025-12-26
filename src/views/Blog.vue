<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Blog</span>
        </div>
        <h1 class="page-hero-title">Blog 3W Online</h1>
        <p class="page-hero-subtitle">
          Conteúdos exclusivos sobre marketing digital, tecnologia e negócios
        </p>
      </div>
    </section>
    
    <!-- Blog Section -->
    <section class="section-padding">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article
                v-for="post in posts"
                :key="post.id"
                class="blog-card"
              >
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="blog-image"
                />
                <div class="blog-content">
                  <div class="blog-meta mb-3">
                    <span class="blog-category">{{ post.category }}</span>
                    <span class="blog-date">{{ post.date }}</span>
                  </div>
                  <h2 class="blog-title">{{ post.title }}</h2>
                  <p class="blog-excerpt">{{ post.excerpt }}</p>
                  <router-link :to="`/blog/${post.slug}`" class="text-primary-600 hover:text-primary-700 font-medium">
                    Ler mais →
                  </router-link>
                </div>
              </article>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Categories -->
            <div class="card p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Categorias</h3>
              <ul class="space-y-2">
                <li v-for="category in categories" :key="category.name">
                  <a href="#" class="flex items-center justify-between text-gray-600 hover:text-primary-600">
                    <span>{{ category.name }}</span>
                    <span class="text-sm bg-gray-100 px-2 py-1 rounded">{{ category.count }}</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Recent Posts -->
            <div class="card p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Posts Recentes</h3>
              <div class="space-y-4">
                <div v-for="recent in recentPosts" :key="recent.id" class="flex space-x-3">
                  <img
                    :src="recent.image"
                    :alt="recent.title"
                    class="w-16 h-16 object-cover rounded"
                  />
                  <div class="flex-1">
                    <router-link :to="`/blog/${recent.slug}`" class="text-sm font-medium text-gray-900 mb-1 hover:text-primary-600 transition-colors">{{ recent.title }}</router-link>
                    <p class="text-xs text-gray-500">{{ recent.date }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Newsletter -->
            <div class="card p-6 bg-primary-50 border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Newsletter</h3>
              <p class="text-gray-600 mb-4">Receba conteúdos exclusivos sobre marketing digital</p>
              <form class="space-y-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  class="form-input"
                />
                <button type="submit" class="btn-primary w-full">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const posts = [
  {
    id: 1,
    slug: 'estrategias-marketing-digital-2024',
    title: '10 Estratégias de Marketing Digital para 2024',
    excerpt: 'Descubra as principais tendências e estratégias que vão dominar o marketing digital este ano.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marketing Digital',
    date: '15 Jan 2024'
  },
  {
    id: 2,
    slug: 'seo-guia-completo',
    title: 'Como Otimizar seu Site para SEO',
    excerpt: 'Guia completo com técnicas práticas para melhorar o ranqueamento do seu site no Google.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SEO',
    date: '12 Jan 2024'
  },
  {
    id: 3,
    slug: 'redes-sociais-empresas',
    title: 'Redes Sociais: Tendências para Empresas',
    excerpt: 'As principais mudanças nas redes sociais e como sua empresa pode se adaptar.',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Redes Sociais',
    date: '10 Jan 2024'
  },
  {
    id: 4,
    slug: 'ecommerce-vendas',
    title: 'E-commerce: Como Aumentar suas Vendas',
    excerpt: 'Estratégias comprovadas para otimizar sua loja virtual e aumentar as conversões.',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'E-commerce',
    date: '08 Jan 2024'
  }
]

const categories = [
  { name: 'Marketing Digital', count: 15 },
  { name: 'SEO', count: 8 },
  { name: 'Redes Sociais', count: 12 },
  { name: 'E-commerce', count: 6 },
  { name: 'Desenvolvimento', count: 10 },
  { name: 'Design', count: 7 }
]

const recentPosts = [
  {
    id: 1,
    slug: 'google-analytics-4-guia',
    title: 'Google Analytics 4: Guia Completo',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '18 Jan 2024'
  },
  {
    id: 2,
    slug: 'instagram-shopping-configurar',
    title: 'Instagram Shopping: Como Configurar',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '16 Jan 2024'
  },
  {
    id: 3,
    slug: 'copywriting-conversao',
    title: 'Copywriting para Conversão',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '14 Jan 2024'
  }
]
</script>