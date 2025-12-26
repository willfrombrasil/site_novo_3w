<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <router-link to="/blog">Blog</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>{{ post.title }}</span>
        </div>
        <h1 class="page-hero-title">{{ post.title }}</h1>
        <div class="flex items-center space-x-4 text-blue-100 mt-4">
          <div class="flex items-center">
            <CalendarDaysIcon class="w-5 h-5 mr-2" />
            <span>{{ formatDate(post.date) }}</span>
          </div>
          <div class="flex items-center">
            <UserIcon class="w-5 h-5 mr-2" />
            <span>{{ post.author }}</span>
          </div>
          <div class="flex items-center">
            <ClockIcon class="w-5 h-5 mr-2" />
            <span>{{ post.readTime }} min de leitura</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Post Content -->
    <section class="section-padding">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <article class="lg:col-span-2">
              <!-- Featured Image -->
              <div class="mb-8">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <!-- Post Meta -->
              <div class="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <UserIcon class="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">{{ post.author }}</p>
                    <p class="text-sm text-gray-500">{{ post.authorRole }}</p>
                  </div>
                </div>
                
                <div class="flex items-center text-gray-500">
                  <CalendarDaysIcon class="w-5 h-5 mr-2" />
                  <span>{{ formatDate(post.date) }}</span>
                </div>
                
                <div class="flex items-center text-gray-500">
                  <ClockIcon class="w-5 h-5 mr-2" />
                  <span>{{ post.readTime }} min de leitura</span>
                </div>
                
                <div class="flex items-center">
                  <TagIcon class="w-5 h-5 mr-2 text-gray-500" />
                  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {{ post.category }}
                  </span>
                </div>
              </div>
              
              <!-- Post Content -->
              <div class="prose prose-lg max-w-none">
                <div v-html="post.content"></div>
              </div>
              
              <!-- Tags -->
              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
              
              <!-- Share Buttons -->
              <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Compartilhar</h3>
                <div class="flex space-x-4">
                  <button
                    @click="shareOnFacebook"
                    class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                  
                  <button
                    @click="shareOnTwitter"
                    class="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  
                  <button
                    @click="shareOnLinkedIn"
                    class="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </button>
                  
                  <button
                    @click="shareOnWhatsApp"
                    class="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
              
              <!-- Post Navigation -->
              <div class="mt-12 pt-8 border-t border-gray-200">
                <div class="flex justify-between items-center">
                  <div v-if="previousPost" class="flex-1 mr-4">
                    <p class="text-sm text-gray-500 mb-2">Post Anterior</p>
                    <router-link
                      :to="`/blog/${previousPost.slug}`"
                      class="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {{ previousPost.title }}
                    </router-link>
                  </div>
                  
                  <div v-if="nextPost" class="flex-1 ml-4 text-right">
                    <p class="text-sm text-gray-500 mb-2">Próximo Post</p>
                    <router-link
                      :to="`/blog/${nextPost.slug}`"
                      class="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {{ nextPost.title }}
                    </router-link>
                  </div>
                </div>
              </div>
            </article>
            
            <!-- Sidebar -->
            <aside class="lg:col-span-1">
              <!-- Author Info -->
              <div class="card p-6 mb-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Sobre o Autor</h3>
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <UserIcon class="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">{{ post.author }}</h4>
                    <p class="text-sm text-gray-500">{{ post.authorRole }}</p>
                  </div>
                </div>
                <p class="text-gray-600 text-sm">{{ post.authorBio }}</p>
              </div>
              
              <!-- Related Posts -->
              <div class="card p-6 mb-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Posts Relacionados</h3>
                <div class="space-y-4">
                  <div
                    v-for="relatedPost in relatedPosts"
                    :key="relatedPost.id"
                    class="flex space-x-3"
                  >
                    <img
                      :src="relatedPost.image"
                      :alt="relatedPost.title"
                      class="w-16 h-16 object-cover rounded"
                    />
                    <div class="flex-1">
                      <router-link
                        :to="`/blog/${relatedPost.slug}`"
                        class="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                      >
                        {{ relatedPost.title }}
                      </router-link>
                      <p class="text-xs text-gray-500 mt-1">{{ formatDate(relatedPost.date) }}</p>
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
            </aside>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  ChevronRightIcon, 
  CalendarDaysIcon, 
  UserIcon, 
  ClockIcon, 
  TagIcon 
} from '@heroicons/vue/24/outline'

// Mock data - in a real app, this would come from an API
const post = ref({
  id: 1,
  slug: 'estrategias-marketing-digital-2024',
  title: '10 Estratégias de Marketing Digital para 2024',
  excerpt: 'Descubra as principais tendências e estratégias que vão dominar o marketing digital este ano.',
  content: `
    <p>O marketing digital está em constante evolução, e 2024 promete ser um ano de grandes transformações. Neste artigo, vamos explorar as 10 principais estratégias que toda empresa deveria considerar para se destacar no mercado digital.</p>
    
    <h2>1. Inteligência Artificial e Automação</h2>
    <p>A IA está revolucionando a forma como interagimos com os clientes. Chatbots mais inteligentes, personalização em tempo real e automação de campanhas são apenas o começo.</p>
    
    <h2>2. Conteúdo Interativo</h2>
    <p>Quizzes, enquetes, vídeos interativos e experiências imersivas estão ganhando cada vez mais espaço nas estratégias de marketing digital.</p>
    
    <h2>3. Marketing de Influência Micro e Nano</h2>
    <p>Influenciadores com audiências menores, mas mais engajadas, estão se tornando mais valiosos para as marcas.</p>
    
    <h2>4. Vídeos Curtos e Stories</h2>
    <p>O formato de vídeo curto continua dominando as redes sociais, especialmente no TikTok, Instagram Reels e YouTube Shorts.</p>
    
    <h2>5. SEO para Pesquisa por Voz</h2>
    <p>Com o crescimento dos assistentes virtuais, otimizar para pesquisas por voz se torna essencial.</p>
    
    <h2>Conclusão</h2>
    <p>O sucesso no marketing digital em 2024 dependerá da capacidade de adaptar-se rapidamente às mudanças e abraçar novas tecnologias. As empresas que investirem nessas estratégias estarão à frente da concorrência.</p>
  `,
  image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'Marketing Digital',
  tags: ['marketing', 'digital', '2024', 'estratégias', 'tendências'],
  date: '2024-01-15',
  readTime: 8,
  author: 'João Silva',
  authorRole: 'Especialista em Marketing Digital',
  authorBio: 'João é especialista em marketing digital com mais de 10 anos de experiência ajudando empresas a crescerem online.'
})

const relatedPosts = ref([
  {
    id: 2,
    slug: 'seo-guia-completo',
    title: 'SEO: Guia Completo para Iniciantes',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-01-12'
  },
  {
    id: 3,
    slug: 'redes-sociais-empresas',
    title: 'Como Usar Redes Sociais para Empresas',
    image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-01-10'
  },
  {
    id: 4,
    slug: 'google-ads-iniciantes',
    title: 'Google Ads para Iniciantes: Primeiros Passos',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-01-08'
  }
])

const previousPost = ref({
  slug: 'como-criar-conteudo-viral',
  title: 'Como Criar Conteúdo Viral nas Redes Sociais'
})

const nextPost = ref({
  slug: 'email-marketing-2024',
  title: 'Email Marketing: Estratégias que Funcionam em 2024'
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value.title)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, '_blank')
}

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value.title)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
}

const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value.title)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank')
}

const shareOnWhatsApp = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value.title)
  window.open(`https://wa.me/?text=${title} ${url}`, '_blank')
}

// SEO Meta tags
onMounted(() => {
  document.title = `${post.value.title} | 3W Online Blog`
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', post.value.excerpt)
  }
  
  // Add Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', post.value.title)
  document.head.appendChild(ogTitle)
  
  const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
  ogDescription.setAttribute('property', 'og:description')
  ogDescription.setAttribute('content', post.value.excerpt)
  document.head.appendChild(ogDescription)
  
  const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta')
  ogImage.setAttribute('property', 'og:image')
  ogImage.setAttribute('content', post.value.image)
  document.head.appendChild(ogImage)
})
</script>

<style scoped>
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul, .prose ol {
  @apply mb-4 ml-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-4 border-primary-500 pl-4 italic text-gray-600 my-6;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-100 p-4 rounded-lg overflow-x-auto;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>