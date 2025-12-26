<template>
  <div class="home-page">
    <!-- Hero Section com Geomarketing -->
    <section class="hero-section" :class="{ 'business-hours': geoMarketing.isBusinessHours }">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            {{ personalizedMessage.title }}
          </h1>
          <p class="hero-subtitle">
            {{ personalizedMessage.subtitle }}
          </p>
          <div class="location-badge" v-if="userLocation.city">
            📍 {{ userLocation.city }}, {{ userLocation.region }}
          </div>
          
          <!-- CTA baseado na localização -->
          <div class="hero-actions">
            <button 
              class="btn-primary" 
              @click="handleLocationBasedCTA"
              :class="{ 'urgent': !geoMarketing.isBusinessHours }"
            >
              {{ personalizedMessage.cta }}
            </button>
            
            <!-- Horário de funcionamento -->
            <div class="business-hours-info" v-if="!geoMarketing.isBusinessHours">
              <p>⏰ Fora do horário comercial</p>
              <small>Responderemos em horário comercial: {{ contactTime.start }} às {{ contactTime.end }}</small>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Anúncio Banner Superior -->
      <GoogleAd 
        ad-slot="1234567890"
        ad-format="horizontal"
        class-name="hero-ad"
      />
    </section>

    <!-- Serviços Recomendados por Região -->
    <section class="recommended-services">
      <div class="container">
        <h2>Serviços Recomendados para {{ userLocation.region || 'sua região' }}</h2>
        <div class="services-grid">
          <div 
            v-for="service in recommendedServices" 
            :key="service"
            class="service-card"
            @click="trackServiceInterest(service)"
          >
            <h3>{{ service }}</h3>
            <p>Especializado para {{ userLocation.city || 'sua cidade' }}</p>
            <div class="pricing-info">
              <span class="price">A partir de {{ formatPrice(getServicePrice(service)) }}</span>
              <small v-if="pricing.multiplier !== 1">
                Preço ajustado para {{ userLocation.region }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Anúncio Retângulo -->
    <div class="ad-section">
      <GoogleAd 
        ad-slot="0987654321"
        ad-format="rectangle"
        class-name="content-ad"
      />
    </div>

    <!-- Testemunhos Locais -->
    <section class="local-testimonials">
      <div class="container">
        <h2>O que dizem nossos clientes {{ userLocation.region ? `no ${userLocation.region}` : '' }}</h2>
        <div class="testimonials-grid">
          <div 
            v-for="testimonial in localContent.testimonials" 
            :key="testimonial"
            class="testimonial-card"
          >
            <p>"{{ testimonial }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final com Geomarketing -->
    <section class="final-cta">
      <div class="container">
        <h2>Pronto para dominar o mercado {{ userLocation.city ? `de ${userLocation.city}` : 'digital' }}?</h2>
        <p>Entre em contato através do seu canal preferido:</p>
        
        <div class="contact-options">
          <button 
            v-if="preferredChannel === 'whatsapp'"
            class="btn-whatsapp"
            @click="openWhatsApp"
          >
            💬 WhatsApp (Recomendado para {{ userLocation.region }})
          </button>
          
          <button 
            v-if="preferredChannel === 'email'"
            class="btn-email"
            @click="openEmail"
          >
            📧 Email (Preferido em {{ userLocation.region }})
          </button>
          
          <button 
            v-if="preferredChannel === 'phone'"
            class="btn-phone"
            @click="callPhone"
          >
            📞 Telefone (Tradicional em {{ userLocation.region }})
          </button>
        </div>
      </div>
    </section>

    <!-- Anúncio Skyscraper (Desktop) -->
    <div class="skyscraper-ad">
      <GoogleAd 
        ad-slot="1122334455"
        ad-format="vertical"
        class-name="sidebar-ad"
        :width="160"
        :height="600"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGoogleServices } from '../composables/useGoogleServices'
import { useGeoMarketing } from '../composables/useGeoMarketing'
import GoogleAd from '../components/GoogleAd.vue'

const googleServices = useGoogleServices()
const geoMarketing = useGeoMarketing()

// Dados reativas
const userLocation = computed(() => googleServices.userLocation.value)
const pricing = computed(() => geoMarketing.getRegionalPricing())
const contactTime = computed(() => geoMarketing.getRecommendedContactTime())
const localContent = computed(() => geoMarketing.getLocalizedContent())
const personalizedMessage = computed(() => geoMarketing.personalizedMessage.value)
const recommendedServices = computed(() => geoMarketing.recommendedServices.value)
const preferredChannel = computed(() => geoMarketing.preferredChannel.value)

// Preços base dos serviços
const servicePrices: Record<string, number> = {
  'SEO Local': 800,
  'Google Ads': 1200,
  'Redes Sociais': 600,
  'Marketing Digital': 1500
}

// Formatação de preço
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

// Calcular preço do serviço baseado na região
const getServicePrice = (service: string) => {
  const basePrice = servicePrices[service.split(' ')[0]] || 1000
  return basePrice * pricing.value.multiplier
}

// Handler para CTA baseado na localização
const handleLocationBasedCTA = () => {
  const channel = preferredChannel.value
  
  // Rastrear evento
  googleServices.trackEvent('hero_cta_click', {
    preferred_channel: channel,
    is_business_hours: geoMarketing.isBusinessHours.value,
    ab_variant: geoMarketing.getABTestVariant()
  })
  
  // Abrir canal preferido
  switch (channel) {
    case 'whatsapp':
      openWhatsApp()
      break
    case 'email':
      openEmail()
      break
    case 'phone':
      callPhone()
      break
  }
}

// Rastrear interesse em serviço
const trackServiceInterest = (service: string) => {
  geoMarketing.trackLocationInterest(service)
  
  // Rastrear conversão potencial
  googleServices.trackConversion('service_interest', getServicePrice(service))
}

// Ações de contato
const openWhatsApp = () => {
  const message = `Olá! Sou de ${userLocation.value.city}, ${userLocation.value.region} e tenho interesse nos serviços de marketing digital.`
  window.open(`https://wa.me/5541996924829?text=${encodeURIComponent(message)}`, '_blank')
}

const openEmail = () => {
  const subject = `Interesse em Marketing Digital - ${userLocation.value.city}`
  const body = `Olá! Sou de ${userLocation.value.city}, ${userLocation.value.region} e gostaria de saber mais sobre os serviços.`
  window.open(`mailto:contato@3wonline.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
}

const callPhone = () => {
  window.open('tel:+5541996924829')
}

onMounted(() => {
  // Rastrear visita da página com dados de localização
  googleServices.trackPageView('/', 'Home - Marketing Digital')
  
  // Rastrear variante A/B
  googleServices.trackEvent('ab_test_view', {
    variant: geoMarketing.getABTestVariant(),
    page: 'home'
  })
})
</script>

<style scoped>
.home-page {
  position: relative;
}

.hero-section {
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-section.business-hours {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.location-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.btn-primary {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary.urgent {
  animation: pulse 2s infinite;
  background: #ef4444;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.business-hours-info {
  text-align: center;
  opacity: 0.8;
}

.recommended-services {
  padding: 4rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.pricing-info {
  margin-top: 1rem;
}

.price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #10b981;
}

.ad-section {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.local-testimonials {
  background: #f8fafc;
  padding: 4rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.final-cta {
  background: #1e293b;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.contact-options {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-whatsapp {
  background: #25d366;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-email {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-phone {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.skyscraper-ad {
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .contact-options {
    flex-direction: column;
    align-items: center;
  }
  
  .skyscraper-ad {
    display: none;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}
</style>
