import { computed } from 'vue'
import { useGoogleServices } from './useGoogleServices'

interface MarketingStrategy {
  primaryMessage: string
  secondaryMessage: string
  ctaText: string
  localizedServices: string[]
  targetAudience: string
  preferredChannel: 'whatsapp' | 'email' | 'phone'
}

export const useGeoMarketing = () => {
  const { userLocation, trackEvent } = useGoogleServices()
  
  // Estratégias de marketing por região
  const marketingStrategies: Record<string, MarketingStrategy> = {
    // Paraná
    'PR': {
      primaryMessage: 'Impulsione seu negócio no Paraná com marketing digital',
      secondaryMessage: 'Especialistas em empresas paranaenses',
      ctaText: 'Quero crescer no PR',
      localizedServices: ['SEO Local Curitiba', 'Google Ads Paraná', 'Redes Sociais PR'],
      targetAudience: 'empresas_locais_pr',
      preferredChannel: 'whatsapp'
    },
    // São Paulo
    'SP': {
      primaryMessage: 'Destaque-se no mercado paulista com marketing digital',
      secondaryMessage: 'Conquiste mais clientes em São Paulo',
      ctaText: 'Dominar SP',
      localizedServices: ['SEO São Paulo', 'Google Ads Capital', 'Marketing Digital SP'],
      targetAudience: 'empresas_sp_competitivo',
      preferredChannel: 'email'
    },
    // Rio de Janeiro
    'RJ': {
      primaryMessage: 'Faça seu negócio brilhar no Rio de Janeiro',
      secondaryMessage: 'Marketing digital para empresas cariocas',
      ctaText: 'Crescer no RJ',
      localizedServices: ['SEO Rio de Janeiro', 'Google Ads RJ', 'Mídias Sociais RJ'],
      targetAudience: 'empresas_rj_lifestyle',
      preferredChannel: 'whatsapp'
    },
    // Minas Gerais
    'MG': {
      primaryMessage: 'Expanda seus negócios em Minas Gerais',
      secondaryMessage: 'Soluções digitais para empresas mineiras',
      ctaText: 'Conquistar MG',
      localizedServices: ['SEO Belo Horizonte', 'Marketing Digital MG', 'Google Ads Minas'],
      targetAudience: 'empresas_mg_tradicional',
      preferredChannel: 'phone'
    },
    // Estratégia padrão para outras regiões
    'DEFAULT': {
      primaryMessage: 'Transforme seu negócio com marketing digital',
      secondaryMessage: 'Soluções digitais para empresas brasileiras',
      ctaText: 'Começar Agora',
      localizedServices: ['SEO Nacional', 'Google Ads Brasil', 'Marketing Digital'],
      targetAudience: 'empresas_brasil',
      preferredChannel: 'whatsapp'
    }
  }

  // Horários de funcionamento por timezone
  const businessHours: Record<string, { start: number, end: number }> = {
    'America/Sao_Paulo': { start: 8, end: 18 },
    'America/Manaus': { start: 9, end: 19 },
    'America/Fortaleza': { start: 7, end: 17 },
    'DEFAULT': { start: 8, end: 18 }
  }

  // Estratégia atual baseada na localização
  const currentStrategy = computed(() => {
    const region = userLocation.value.region || 'DEFAULT'
    return marketingStrategies[region] || marketingStrategies.DEFAULT
  })

  // Verificar se está no horário comercial
  const isBusinessHours = computed(() => {
    const now = new Date()
    const hour = now.getHours()
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const hours = businessHours[timezone] || businessHours.DEFAULT
    
    return hour >= hours.start && hour <= hours.end
  })

  // Mensagem personalizada baseada na localização
  const personalizedMessage = computed(() => {
    const strategy = currentStrategy.value
    const location = userLocation.value.city || userLocation.value.region || 'Brasil'
    
    return {
      title: strategy.primaryMessage,
      subtitle: strategy.secondaryMessage,
      cta: strategy.ctaText,
      location: location,
      isBusinessHours: isBusinessHours.value
    }
  })

  // Serviços recomendados por região
  const recommendedServices = computed(() => {
    return currentStrategy.value.localizedServices
  })

  // Canal de contato preferido
  const preferredChannel = computed(() => {
    return currentStrategy.value.preferredChannel
  })

  // Rastrear interesse por localização
  const trackLocationInterest = (service: string) => {
    trackEvent('location_based_interest', {
      service: service,
      user_region: userLocation.value.region,
      user_city: userLocation.value.city,
      target_audience: currentStrategy.value.targetAudience,
      preferred_channel: currentStrategy.value.preferredChannel
    })
  }

  // Obter preços regionais (simulação)
  const getRegionalPricing = () => {
    const region = userLocation.value.region || 'DEFAULT'
    
    // Ajustes de preço baseados na região (simulação)
    const priceMultipliers: Record<string, number> = {
      'SP': 1.2, // São Paulo tem preços mais altos
      'RJ': 1.15, // Rio também
      'PR': 1.0, // Paraná preço base
      'MG': 0.95, // Minas um pouco mais barato
      'DEFAULT': 1.0
    }
    
    const multiplier = priceMultipliers[region] || 1.0
    
    return {
      multiplier,
      region,
      currency: 'BRL',
      symbol: 'R$'
    }
  }

  // Horário recomendado para contato
  const getRecommendedContactTime = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const hours = businessHours[timezone] || businessHours.DEFAULT
    
    return {
      start: `${hours.start}:00`,
      end: `${hours.end}:00`,
      timezone: timezone,
      isBusinessHours: isBusinessHours.value
    }
  }

  // Campanhas A/B baseadas em localização
  const getABTestVariant = () => {
    const region = userLocation.value.region || 'DEFAULT'
    const city = userLocation.value.city || ''
    
    // Algoritmo simples para distribuir variants
    const hash = (city + region).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    return Math.abs(hash) % 2 === 0 ? 'A' : 'B'
  }

  // Conteúdo personalizado por região
  const getLocalizedContent = () => {
    const region = userLocation.value.region || 'DEFAULT'
    
    const content: Record<string, any> = {
      'PR': {
        testimonials: [
          'Empresa em Curitiba aumentou 300% as vendas',
          'Loja em Londrina dobrou o faturamento'
        ],
        caseStudies: ['case-curitiba', 'case-maringa'],
        localEvents: ['Workshop Marketing Digital Curitiba'],
        partnerBusinesses: ['Associação Comercial do Paraná']
      },
      'SP': {
        testimonials: [
          'Startup paulista cresceu 500% em 6 meses',
          'E-commerce de São Paulo triplicou as vendas'
        ],
        caseStudies: ['case-sao-paulo', 'case-campinas'],
        localEvents: ['Feira de Marketing Digital SP'],
        partnerBusinesses: ['FIESP', 'Sebrae SP']
      },
      'DEFAULT': {
        testimonials: [
          'Empresa aumentou 250% as vendas online',
          'Negócio local dobrou o número de clientes'
        ],
        caseStudies: ['case-nacional-1', 'case-nacional-2'],
        localEvents: ['Webinar Marketing Digital'],
        partnerBusinesses: ['Sebrae Nacional']
      }
    }
    
    return content[region] || content.DEFAULT
  }

  return {
    userLocation,
    currentStrategy,
    personalizedMessage,
    recommendedServices,
    preferredChannel,
    isBusinessHours,
    trackLocationInterest,
    getRegionalPricing,
    getRecommendedContactTime,
    getABTestVariant,
    getLocalizedContent
  }
}
