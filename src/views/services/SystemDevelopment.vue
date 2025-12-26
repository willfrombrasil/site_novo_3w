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
          <span>Criação de Sistemas</span>
        </div>
        <h1 class="page-hero-title">Criação de Sistemas</h1>
        <p class="page-hero-subtitle">
          Sistemas web personalizados para automatizar e otimizar seus processos
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
              Sistemas sob medida para seu negócio
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Desenvolvemos sistemas web personalizados que automatizam processos, aumentam a produtividade e proporcionam controle total sobre suas operações. Nossa equipe especializada cria soluções escaláveis e seguras para empresas de todos os portes.
            </p>
            
            <!-- Benefits -->
            <div class="space-y-4 mb-8">
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Sistemas 100% personalizados</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Automação de processos</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Interface intuitiva e responsiva</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Integração com APIs e serviços</span>
              </div>
              <div class="benefit-item">
                <CheckCircleIcon class="benefit-icon" />
                <span class="benefit-text">Segurança e backup automático</span>
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
                href="https://wa.me/5541996924829?text=Olá! Tenho interesse no serviço de Criação de Sistemas."
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
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Criação de Sistemas"
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
          <h2 class="section-title">Tipos de sistemas que desenvolvemos</h2>
          <p class="section-subtitle">Soluções personalizadas para diferentes necessidades</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <ClipboardDocumentListIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sistema de Gestão (ERP)</h3>
            <p class="text-gray-600 mb-4">Controle completo de vendas, estoque, financeiro e clientes</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 15.200</p>
          </div>
          
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <UserGroupIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">CRM Personalizado</h3>
            <p class="text-gray-600 mb-4">Gestão de relacionamento com clientes e pipeline de vendas</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 12.000</p>
          </div>
          
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <CalendarDaysIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sistema de Agendamento</h3>
            <p class="text-gray-600 mb-4">Agendamento online com calendário e notificações</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 5.600</p>
          </div>
          
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <CubeIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Controle de Estoque</h3>
            <p class="text-gray-600 mb-4">Gestão inteligente de produtos e movimentações</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 6.400</p>
          </div>
          
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <BanknotesIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sistema Financeiro</h3>
            <p class="text-gray-600 mb-4">Controle de contas a pagar, receber e fluxo de caixa</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 14.400</p>
          </div>
          
          <div class="card p-6">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <AcademicCapIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Sistema Educacional</h3>
            <p class="text-gray-600 mb-4">Plataforma de ensino com cursos e avaliações</p>
            <p class="text-lg font-bold text-primary-600">A partir de R$ 16.000</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="section-padding mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Recursos incluídos em todos os sistemas</h2>
          <p class="section-subtitle">Funcionalidades essenciais para garantir eficiência</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Segurança Avançada</h3>
            <p class="text-gray-600">Criptografia, autenticação e controle de acesso</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CloudIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Backup Automático</h3>
            <p class="text-gray-600">Seus dados sempre seguros na nuvem</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DevicePhoneMobileIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Design Responsivo</h3>
            <p class="text-gray-600">Acesso perfeito em qualquer dispositivo</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Relatórios Avançados</h3>
            <p class="text-gray-600">Dashboards e relatórios personalizados</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nosso processo de desenvolvimento</h2>
          <p class="section-subtitle">Metodologia ágil para entregas de qualidade</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div class="text-center">
            <div class="step-number mx-auto mb-4">1</div>
            <h3 class="font-semibold text-gray-900 mb-2">Análise</h3>
            <p class="text-gray-600">Levantamento detalhado dos requisitos</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">2</div>
            <h3 class="font-semibold text-gray-900 mb-2">Prototipagem</h3>
            <p class="text-gray-600">Criação de wireframes e protótipos</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">3</div>
            <h3 class="font-semibold text-gray-900 mb-2">Desenvolvimento</h3>
            <p class="text-gray-600">Codificação com metodologia ágil</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">4</div>
            <h3 class="font-semibold text-gray-900 mb-2">Testes</h3>
            <p class="text-gray-600">Validação e correção de bugs</p>
          </div>
          <div class="text-center">
            <div class="step-number mx-auto mb-4">5</div>
            <h3 class="font-semibold text-gray-900 mb-2">Entrega</h3>
            <p class="text-gray-600">Deploy e treinamento da equipe</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Price Simulator Section -->
    <section ref="simulatorSection" class="section-padding mt-16 py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <PriceSimulator service-type="system" />
        </div>
      </div>
    </section>
    
    <!-- Technologies Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Tecnologias que utilizamos</h2>
          <p class="section-subtitle">Stack moderno para sistemas robustos e escaláveis</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Frontend</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Vue.js / React.js
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                TypeScript
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Tailwind CSS
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Progressive Web App (PWA)
              </li>
            </ul>
          </div>
          
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Backend</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Node.js / PHP / Python
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                MySQL / PostgreSQL
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                APIs RESTful
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-3" />
                Cloud Computing (AWS/Google Cloud)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para automatizar seus processos?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Vamos criar um sistema personalizado que transforme sua operação
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Solicitar Orçamento
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre Criação de Sistemas."
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
import { 
  ChevronRightIcon, 
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CubeIcon,
  BanknotesIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'
import PriceSimulator from '../../components/PriceSimulator.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Criação de Sistemas | Serviços',
  meta: [
    { name: 'description', content: 'Desenvolvemos sistemas web personalizados que automatizam processos, aumentam a produtividade e proporcionam controle total sobre suas operações.' },
    { name: 'keywords', content: 'sistemas, desenvolvimento, software, web, personalizado, automação, ERP, CRM' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.seuwebsite.com/servicos/criacao-sistemas' }
  ]
})

const simulatorSection = ref<HTMLElement>()

const scrollToSimulator = () => {
  simulatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>