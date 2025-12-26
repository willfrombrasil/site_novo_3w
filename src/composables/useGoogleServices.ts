import { ref } from 'vue'

interface GoogleServicesConfig {
  gtmId?: string
  ga4MeasurementId?: string
  adsensePublisherId?: string
  searchConsoleVerification?: string
}

export const useGoogleServices = () => {
  const isLoaded = ref(false)
  const userLocation = ref<{
    country?: string
    region?: string
    city?: string
    latitude?: number
    longitude?: number
  }>({})

  // Configurações do Google Services
  const config: GoogleServicesConfig = {
    gtmId: 'GTM-WVMJV7G6', // Substitua pelo seu GTM ID
    ga4MeasurementId: 'G-0GGC4J7WB5', // Substitua pelo seu GA4 Measurement ID
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Substitua pelo seu Publisher ID
    searchConsoleVerification: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // Meta tag de verificação
  }

  // Inicializar Google Tag Manager
  const initGTM = () => {
    if (!config.gtmId) return

    // GTM Script
    const gtmScript = document.createElement('script')
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${config.gtmId}');
    `
    document.head.appendChild(gtmScript)

    // GTM NoScript (adicionar no body)
    const gtmNoscript = document.createElement('noscript')
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.prepend(gtmNoscript)
  }

  // Inicializar Google Analytics 4
  const initGA4 = () => {
    if (!config.ga4MeasurementId) return

    // GA4 Script
    const ga4Script = document.createElement('script')
    ga4Script.async = true
    ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga4MeasurementId}`
    document.head.appendChild(ga4Script)

    // GA4 Config
    const ga4Config = document.createElement('script')
    ga4Config.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${config.ga4MeasurementId}', {
        send_page_view: true,
        custom_map: {
          'custom_dimension_1': 'user_location',
          'custom_dimension_2': 'user_country',
          'custom_dimension_3': 'user_region'
        }
      });
    `
    document.head.appendChild(ga4Config)
  }

  // Inicializar Google AdSense
  const initAdSense = () => {
    if (!config.adsensePublisherId) return

    const adsenseScript = document.createElement('script')
    adsenseScript.async = true
    adsenseScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsensePublisherId}`
    adsenseScript.crossOrigin = 'anonymous'
    document.head.appendChild(adsenseScript)
  }

  // Adicionar meta tag do Search Console
  const addSearchConsoleVerification = () => {
    if (!config.searchConsoleVerification) return

    const metaTag = document.createElement('meta')
    metaTag.name = 'google-site-verification'
    metaTag.content = config.searchConsoleVerification
    document.head.appendChild(metaTag)
  }

  // Obter localização do usuário (geomarketing)
  const getUserLocation = async () => {
    try {
      // Primeiro, tentar obter coordenadas precisas
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            userLocation.value.latitude = latitude
            userLocation.value.longitude = longitude

            // Obter informações detalhadas usando reverse geocoding
            await getLocationDetails(latitude, longitude)
            sendLocationToGA4()
          },
          () => {
            // Fallback para geolocalização por IP
            getLocationByIP()
          }
        )
      } else {
        // Fallback para geolocalização por IP
        getLocationByIP()
      }
    } catch (error) {
      console.warn('Erro ao obter localização:', error)
      getLocationByIP()
    }
  }

  // Obter localização por coordenadas (reverse geocoding)
  const getLocationDetails = async (lat: number, lng: number) => {
    try {
      // Você pode usar a API do Google Maps ou outra API de geocoding
      // Para este exemplo, vou usar uma API gratuita
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=pt`
      )
      const data = await response.json()

      userLocation.value = {
        ...userLocation.value,
        country: data.countryName,
        region: data.principalSubdivision,
        city: data.city
      }
    } catch (error) {
      console.warn('Erro ao obter detalhes da localização:', error)
    }
  }

  // Fallback: obter localização por IP
  const getLocationByIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()

      userLocation.value = {
        country: data.country_name,
        region: data.region,
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude
      }

      sendLocationToGA4()
    } catch (error) {
      console.warn('Erro ao obter localização por IP:', error)
    }
  }

  // Enviar dados de localização para GA4
  const sendLocationToGA4 = () => {
    if (typeof window.gtag !== 'undefined' && userLocation.value) {
      window.gtag('event', 'user_location_detected', {
        custom_dimension_1: `${userLocation.value.city}, ${userLocation.value.region}, ${userLocation.value.country}`,
        custom_dimension_2: userLocation.value.country,
        custom_dimension_3: userLocation.value.region,
        event_category: 'geomarketing',
        event_label: userLocation.value.country
      })
    }
  }

  // Rastrear eventos personalizados
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    // GTM DataLayer
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
        user_location: userLocation.value
      })
    }

    // GA4 Event
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, {
        ...parameters,
        user_country: userLocation.value.country,
        user_region: userLocation.value.region,
        user_city: userLocation.value.city
      })
    }
  }

  // Rastrear conversões
  const trackConversion = (conversionLabel: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: `AW-XXXXXXXXX/${conversionLabel}`, // Substitua pelo seu Conversion ID
        value: value || 0,
        currency: 'BRL',
        user_location: `${userLocation.value.city}, ${userLocation.value.country}`
      })
    }
  }

  // Rastrear visualizações de página
  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', config.ga4MeasurementId!, {
        page_path: pagePath,
        page_title: pageTitle,
        custom_dimension_2: userLocation.value.country,
        custom_dimension_3: userLocation.value.region
      })
    }
  }

  // Inicializar todos os serviços
  const init = async () => {
    // Adicionar verificação do Search Console
    addSearchConsoleVerification()
    
    // Inicializar GTM
    initGTM()
    
    // Inicializar GA4
    initGA4()
    
    // Inicializar AdSense
    initAdSense()
    
    // Aguardar um pouco para os scripts carregarem
    setTimeout(async () => {
      await getUserLocation()
      isLoaded.value = true
    }, 1000)
  }

  return {
    isLoaded,
    userLocation,
    config,
    init,
    trackEvent,
    trackConversion,
    trackPageView,
    getUserLocation
  }
}

// Tipos globais para TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    adsbygoogle: any[]
  }
}
