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
          <span>Marketing Digital Para seu Negócio</span>
        </div>
        <h1 class="page-hero-title">Marketing Digital Para seu Negócio</h1>
        <p class="page-hero-subtitle">
          Aumente sua presença online, atraia mais clientes e gere resultados concretos
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
              Transforme seu negócio com marketing digital
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Agradecemos pela oportunidade de apresentar esta proposta para a prestação de serviços de Gestão de Anúncios e Gestão de Redes Sociais. Nosso objetivo é ajudá-lo a aumentar sua presença online, atrair mais clientes e gerar resultados concretos para o seu negócio.
            </p>
            
            <!-- Special Offer -->
            <div class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 rounded-lg mb-8">
              <h3 class="text-2xl font-bold mb-2">Oferta Especial</h3>
              <p class="text-lg mb-4">Pacote completo de Marketing Digital a partir de</p>
              <div class="text-4xl font-bold">R$ 500,00</div>
              <p class="text-sm opacity-90">Gestão de anúncios + redes sociais por 30 dias</p>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="scrollToPackage"
                class="btn-primary"
              >
                Ver Detalhes do Pacote
              </button>
              <a
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no pacote de Marketing Digital por R$ 500."
                target="_blank"
                class="btn-secondary"
              >
                Contratar Agora
              </a>
            </div>
          </div>
          
          <!-- Service Image -->
          <div>
            <img
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Marketing Digital Para seu Negócio"
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
          <h2 class="section-title">O que está incluído no pacote</h2>
          <p class="section-subtitle">Serviços completos para impulsionar seu negócio</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Gestão de Anúncios -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <PresentationChartLineIcon class="w-6 h-6 text-primary-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Gestão de Anúncios</h3>
            </div>
            <p class="text-gray-600 mb-6">Google Ads, Facebook Ads, Instagram Ads</p>
            
            <ul class="space-y-4">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Planejamento e Criação de Campanhas:</strong>
                  <p class="text-gray-600">Desenvolvimento de campanhas pagas para alcançar o público-alvo de forma eficiente e gerar tráfego qualificado para o seu site ou redes sociais.</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Segmentação Avançada:</strong>
                  <p class="text-gray-600">Definição de segmentos de público com base em interesses, localização, comportamento e dados demográficos para maximizar a relevância dos anúncios.</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Acompanhamento e Otimização:</strong>
                  <p class="text-gray-600">Monitoramento contínuo das campanhas e ajustes semanais para garantir o melhor retorno sobre o investimento (ROI).</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Relatório de Desempenho:</strong>
                  <p class="text-gray-600">Envio de relatórios mensais com análise de desempenho dos anúncios e sugestões de melhorias.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <!-- Gestão de Redes Sociais -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                <ChatBubbleBottomCenterTextIcon class="w-6 h-6 text-secondary-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Gestão de Redes Sociais</h3>
            </div>
            <p class="text-gray-600 mb-6">Facebook, Instagram, Google</p>
            
            <ul class="space-y-4">
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Planejamento de Conteúdo:</strong>
                  <p class="text-gray-600">Criação de um calendário de publicações com conteúdo relevante, engajador e alinhado com sua marca.</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Produção de Conteúdo:</strong>
                  <p class="text-gray-600">Desenvolvimento de postagens criativas (imagens, textos e vídeos curtos), adaptadas ao perfil do seu público.</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Gestão de Interações:</strong>
                  <p class="text-gray-600">Monitoramento das interações (comentários, mensagens e curtidas) e resposta ativa para engajar seu público e fortalecer o relacionamento.</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong class="text-gray-900">Análise de Métricas:</strong>
                  <p class="text-gray-600">Acompanhamento do desempenho das publicações e insights para otimização das futuras ações.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Package Details Section -->
    <section ref="packageSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="section-title">Investimento</h2>
            <p class="section-subtitle">Pacote completo com excelente custo-benefício</p>
          </div>
          
          <div class="card p-8 text-center border-2 border-primary-500 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full font-semibold">
              OFERTA ESPECIAL
            </div>
            
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Pacote Inicial Completo</h3>
            
            <div class="text-6xl font-bold text-primary-600 mb-2">R$ 500</div>
            <p class="text-xl text-gray-600 mb-6">por 30 dias</p>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 class="font-semibold text-gray-900 mb-4">Este valor inclui:</h4>
              <ul class="text-left space-y-2">
                <li class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                  <span>Gestão completa de anúncios (Google, Facebook, Instagram)</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                  <span>Gestão de redes sociais com conteúdo criativo</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                  <span>Relatórios mensais de desempenho</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                  <span>Suporte e otimização contínua</span>
                </li>
                <li class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                  <span>Todos os serviços descritos acima</span>
                </li>
              </ul>
            </div>
            
            <p class="text-sm text-gray-600 mb-6">
              A proposta está sujeita a ajustes conforme a evolução das campanhas e necessidades específicas de sua empresa.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5541996924829?text=Olá! Quero contratar o pacote de Marketing Digital por R$ 500. Quando podemos começar?"
                target="_blank"
                class="btn-primary text-lg px-8 py-4"
              >
                Contratar Agora
              </a>
              <router-link to="/contato" class="btn-outline text-lg px-8 py-4">
                Solicitar Proposta Personalizada
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Por que escolher nosso pacote?</h2>
          <p class="section-subtitle">Vantagens exclusivas para seu negócio</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CurrencyDollarIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Preço Acessível</h3>
            <p class="text-gray-600">Pacote completo por apenas R$ 500, muito abaixo do mercado</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Resultados Rápidos</h3>
            <p class="text-gray-600">Primeiros resultados visíveis em até 15 dias</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Equipe Especializada</h3>
            <p class="text-gray-600">Profissionais certificados em Google e Meta Ads</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Relatórios Detalhados</h3>
            <p class="text-gray-600">Acompanhe todos os resultados com transparência total</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Aproveite esta oferta especial e comece a ver resultados em 30 dias
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero aproveitar a oferta especial de Marketing Digital por R$ 500!"
              target="_blank"
              class="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Contratar Agora - R$ 500
            </a>
            <router-link to="/contato" class="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Falar com Especialista
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  ChevronRightIcon, 
  CheckCircleIcon,
  PresentationChartLineIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Marketing Digital | Sua Empresa',
  meta: [
    { name: 'description', content: 'Serviços de marketing digital para impulsionar sua presença online e aumentar suas vendas.' },
    { name: 'keywords', content: 'marketing digital, SEO, redes sociais, anúncios online' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/marketing-digital' }
  ]
})

const packageSection = ref<HTMLElement>()

const scrollToPackage = () => {
  packageSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>