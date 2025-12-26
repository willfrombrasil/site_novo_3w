<template>
  <div class="price-simulator">
    <h3 class="text-xl font-bold text-gray-900 mb-4">Simulador de Preços</h3>
    <p class="text-gray-600 mb-6">Configure suas necessidades e receba uma estimativa personalizada</p>
    
    <div class="space-y-4">
        <!-- Recursos Extras -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Recursos Extras</label>
          <div class="flex flex-wrap gap-3">
            <label><input type="checkbox" v-model="extras.integration"> Integração com APIs</label>
            <label><input type="checkbox" v-model="extras.seo"> SEO Avançado</label>
            <label><input type="checkbox" v-model="extras.hosting"> Hospedagem</label>
            <label><input type="checkbox" v-model="extras.maintenance"> Manutenção</label>
            <label><input type="checkbox" v-model="extras.support"> Suporte Premium</label>
            <label><input type="checkbox" v-model="extras.security"> Segurança Avançada</label>
            <label><input type="checkbox" v-model="extras.training"> Treinamento</label>
          </div>
        </div>

        <!-- Variáveis de quantidade -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Quantidade de Usuários/Páginas/Telas</label>
          <input type="number" min="1" v-model.number="quantity" class="form-input w-32" />
        </div>

        <!-- Layout personalizado -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Layout</label>
          <select v-model="layoutType" class="form-select">
            <option value="padrao">Padrão</option>
            <option value="personalizado">Personalizado</option>
          </select>
        </div>

        <!-- Manutenção -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Manutenção</label>
          <select v-model="maintenanceType" class="form-select">
            <option value="nenhuma">Nenhuma</option>
            <option value="mensal">Mensal</option>
            <option value="anual">Anual</option>
            <option value="avulsa">Avulsa</option>
          </select>
        </div>
      <!-- Service Type -->
      <div v-if="serviceType === 'social-media'">
        <label class="block text-sm font-medium text-gray-700 mb-2">Número de Redes Sociais</label>
        <select v-model="socialMediaCount" class="form-select">
          <option value="1">1 Rede Social</option>
          <option value="2">2 Redes Sociais</option>
          <option value="3">3 Redes Sociais</option>
          <option value="4">4+ Redes Sociais</option>
        </select>
      </div>
      
      <div v-if="serviceType === 'ads'">
        <label class="block text-sm font-medium text-gray-700 mb-2">Orçamento Mensal para Anúncios</label>
        <select v-model="adsbudget" class="form-select">
          <option value="500">Até R$ 500</option>
          <option value="1000">R$ 500 - R$ 1.000</option>
          <option value="2000">R$ 1.000 - R$ 2.000</option>
          <option value="5000">R$ 2.000 - R$ 5.000</option>
          <option value="10000">Acima de R$ 5.000</option>
        </select>
      </div>
      
      <div v-if="serviceType === 'website'">
        <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Site</label>
        <select v-model="websiteType" class="form-select">
          <option value="institucional">Site Institucional</option>
          <option value="ecommerce">E-commerce</option>
          <option value="blog">Blog/Portal</option>
          <option value="sistema">Sistema Web</option>
        </select>
      </div>
      
      <div v-if="serviceType === 'app'">
        <label class="block text-sm font-medium text-gray-700 mb-2">Plataforma</label>
        <select v-model="appPlatform" class="form-select">
          <option value="android">Android</option>
          <option value="ios">iOS</option>
          <option value="both">Android + iOS</option>
        </select>
      </div>
      
      <div v-if="serviceType === 'system'">
        <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Sistema</label>
        <select v-model="systemType" class="form-select">
          <option value="crm">CRM Personalizado</option>
          <option value="erp">Sistema de Gestão (ERP)</option>
          <option value="agendamento">Sistema de Agendamento</option>
          <option value="estoque">Controle de Estoque</option>
          <option value="financeiro">Sistema Financeiro</option>
          <option value="educacional">Sistema Educacional</option>
          <option value="personalizado">Sistema Personalizado</option>
        </select>
      </div>
      
      <!-- Common fields -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Complexidade do Projeto</label>
        <select v-model="complexity" class="form-select">
          <option value="basic">Básico</option>
          <option value="intermediate">Intermediário</option>
          <option value="advanced">Avançado</option>
        </select>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Prazo Desejado</label>
        <select v-model="deadline" class="form-select">
          <option value="normal">Normal (30-60 dias)</option>
          <option value="urgent">Urgente (15-30 dias)</option>
          <option value="express">Express (até 15 dias)</option>
        </select>
      </div>
    </div>
    
    <!-- Result -->
    <div class="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="font-semibold text-primary-900">Estimativa de Investimento</h4>
          <p class="text-sm text-primary-700">Valores aproximados para este projeto</p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-primary-600">
            R$ {{ calculatedPrice.toLocaleString('pt-BR') }}
          </div>
          <div class="text-sm text-primary-600">
            <span v-if="isRecurring">/ mês</span>
            <span v-else>valor único</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-4 flex gap-3">
      <button
        @click="requestQuote"
        class="btn-primary flex-1"
      >
        Solicitar Orçamento Detalhado
      </button>
      <button
        @click="contactWhatsApp"
        class="btn-secondary flex-1"
      >
        Falar no WhatsApp
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  serviceType: string
}

const props = defineProps<Props>()

const socialMediaCount = ref('2')
const adsbudget = ref('1000')
const websiteType = ref('institucional')
const appPlatform = ref('android')
const systemType = ref('crm')
const complexity = ref('intermediate')
const deadline = ref('normal')

// Novas variáveis
const extras = ref({
  integration: false,
  seo: false,
  hosting: false,
  maintenance: false,
  support: false,
  security: false,
  training: false
})
const quantity = ref(1)
const layoutType = ref('padrao')
const maintenanceType = ref('nenhuma')

const isRecurring = computed(() => {
  return ['social-media', 'ads', 'consulting'].includes(props.serviceType)
})

const calculatedPrice = computed(() => {
  let basePrice = 0
  
  switch (props.serviceType) {
    case 'social-media':
      basePrice = 800
      basePrice += parseInt(socialMediaCount.value) * 400
      break
    case 'ads':
      basePrice = 1200
      basePrice += parseInt(adsbudget.value) * 0.15
      break
    case 'website':
      switch (websiteType.value) {
        case 'institucional':
          basePrice = 1200
          break
        case 'ecommerce':
          basePrice = 7500
          break
        case 'blog':
          basePrice = 2500
          break
        case 'sistema':
          basePrice = 5000
          break
      }
      break
    case 'app':
      basePrice = 7000
      if (appPlatform.value === 'both') {
        basePrice *= 1.8
      }
      break
    case 'system':
      switch (systemType.value) {
        case 'crm':
          basePrice = 15000
          break
        case 'erp':
          basePrice = 19000
          break
        case 'agendamento':
          basePrice = 7000
          break
        case 'estoque':
          basePrice = 8000
          break
        case 'financeiro':
          basePrice = 18000
          break
        case 'educacional':
          basePrice = 20000
          break
        case 'personalizado':
          basePrice = 22000
          break
      }
      break
    case 'consulting':
      basePrice = 2500
      break
    case 'campaign':
      basePrice = 4500
      break
    case 'design':
      basePrice = 1800
      break
    case 'advertising':
      basePrice = 6000
      break
    case 'business':
      basePrice = 3500
      break
    case 'pr':
      basePrice = 2800
      break
    default:
      basePrice = 1500
  }
  
  // Apply complexity multiplier
  switch (complexity.value) {
    case 'basic':
      basePrice *= 0.8
      break
    case 'advanced':
      basePrice *= 1.4
      break
  }
  
  // Apply deadline multiplier
  switch (deadline.value) {
    case 'urgent':
      basePrice *= 1.3
      break
    case 'express':
      basePrice *= 1.6
      break
  }

  // Novas variáveis e condições
  // Quantidade de usuários/páginas/telas
  basePrice += (quantity.value - 1) * 250

  // Recursos extras
  if (extras.value.integration) basePrice += 1200
  if (extras.value.seo) basePrice += 900
  if (extras.value.hosting) basePrice += 400
  if (extras.value.maintenance) basePrice += 800
  if (extras.value.support) basePrice += 600
  if (extras.value.security) basePrice += 700
  if (extras.value.training) basePrice += 500

  // Layout personalizado
  if (layoutType.value === 'personalizado') basePrice *= 1.15

  // Manutenção
  if (maintenanceType.value === 'mensal') basePrice += 350 * 12
  if (maintenanceType.value === 'anual') basePrice += 350 * 1.1
  if (maintenanceType.value === 'avulsa') basePrice += 500

  // Desconto para combos/pacotes
  if (extras.value.integration && extras.value.seo && extras.value.hosting) basePrice *= 0.95

  // Urgência extrema (prazo express + layout personalizado)
  if (deadline.value === 'express' && layoutType.value === 'personalizado') basePrice *= 1.1

  // Limite mínimo
  if (basePrice < 800) basePrice = 800
  
  return Math.round(basePrice)
})

const requestQuote = () => {
  let serviceDetails = ''
  
  if (props.serviceType === 'system') {
    serviceDetails = `Tipo: ${systemType.value}, `
  } else if (props.serviceType === 'website') {
    serviceDetails = `Tipo: ${websiteType.value}, `
  } else if (props.serviceType === 'app') {
    serviceDetails = `Plataforma: ${appPlatform.value}, `
  }
  
  const message = `Olá! Gostaria de solicitar um orçamento detalhado para ${props.serviceType}. ${serviceDetails}Complexidade: ${complexity.value}, Prazo: ${deadline.value}. Estimativa inicial: R$ ${calculatedPrice.value.toLocaleString('pt-BR')}.`
  
  window.open(`https://wa.me/5541996924829?text=${encodeURIComponent(message)}`, '_blank')
}

const contactWhatsApp = () => {
  const message = `Olá! Tenho interesse no serviço de ${props.serviceType} e gostaria de conversar sobre meu projeto.`
  
  window.open(`https://wa.me/5541996924829?text=${encodeURIComponent(message)}`, '_blank')
}
</script>