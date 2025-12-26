<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Contato</span>
        </div>
        <h1 class="page-hero-title">Entre em Contato</h1>
        <p class="page-hero-subtitle">
          Estamos prontos para ajudar você a transformar suas ideias em realidade
        </p>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Solicite seu orçamento</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="form-input"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="form-input"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de interesse *
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="form-select"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="gestao-redes-sociais">Gestão de Redes Sociais</option>
                  <option value="gestao-anuncios">Gestão de Anúncios</option>
                  <option value="criacao-sites">Criação de Sites</option>
                  <option value="desenvolvimento-apps">Desenvolvimento de Apps</option>
                  <option value="consultoria-marketing">Consultoria em Marketing</option>
                  <option value="planejamento-campanhas">Planejamento de Campanhas</option>
                  <option value="design-grafico">Design Gráfico</option>
                  <option value="publicidade">Publicidade e Propaganda</option>
                  <option value="organizacao-comercial">Organização Comercial</option>
                  <option value="relacoes-publicas">Relações Públicas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="form-textarea"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>
              
              <div class="flex items-start">
                <input
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="form-checkbox mt-1"
                />
                <label for="privacy" class="ml-2 text-sm text-gray-600">
                  Li e concordo com a 
                  <router-link to="/privacidade" class="text-primary-600 hover:text-primary-700">
                    Política de Privacidade
                  </router-link>
                  e autorizo o contato da 3W Online *
                </label>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full"
              >
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar Mensagem</span>
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              <div class="space-y-6">
                <div class="flex items-start">
                  <PhoneIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">Telefone</p>
                    <p class="contact-value">(41) 99692-4829</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <EnvelopeIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">E-mail</p>
                    <p class="contact-value">contato@3wonline.com.br</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <MapPinIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">Localização</p>
                    <p class="contact-value">Curitiba, Paraná</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <ClockIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">Horário de Atendimento</p>
                    <p class="contact-value">Segunda à Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Quick Contact Options -->
            <div class="contact-info">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Contato Rápido</h3>
              <div class="space-y-4">
                <a
                  href="https://wa.me/5541996924829?text=Olá! Gostaria de saber mais sobre os serviços da 3W Online."
                  target="_blank"
                  class="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">WhatsApp</p>
                    <p class="text-sm text-gray-600">Resposta imediata</p>
                  </div>
                </a>
                
                <a
                  href="mailto:contato@3wonline.com.br"
                  class="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <EnvelopeIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">E-mail</p>
                    <p class="text-sm text-gray-600">contato@3wonline.com.br</p>
                  </div>
                </a>
                
                <a
                  href="tel:+5541996924829"
                  class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                    <PhoneIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Telefone</p>
                    <p class="text-sm text-gray-600">(41) 99692-4829</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Social Media Links -->
          <div class="mt-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h3>
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/grupo3wonline"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                aria-label="Seguir no Facebook"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://www.instagram.com/grupo3wonline"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                aria-label="Seguir no Instagram"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468zm7.519 0c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468z"/>
                </svg>
              </a>
              
              <a
                href="https://wa.me/5541996924829?text=Olá! Gostaria de saber mais sobre os serviços da 3W Online."
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
                aria-label="Entrar em contato via WhatsApp"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { 
  ChevronRightIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/vue/24/outline'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  privacy: false
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const message = `
Novo contato do site 3W Online:

Nome: ${form.name}
Email: ${form.email}
Telefone: ${form.phone}
Empresa: ${form.company || 'Não informado'}
Serviço: ${form.service}
Mensagem: ${form.message}
    `.trim()
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      privacy: false
    })
    
    alert('Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.')
    
  } catch (error) {
    alert('Erro ao enviar mensagem. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>