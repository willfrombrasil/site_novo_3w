import { App } from 'vue'
import { useGoogleServices } from '../composables/useGoogleServices'

export default {
  install(app: App) {
    const googleServices = useGoogleServices()
    
    // Disponibilizar globalmente
    app.config.globalProperties.$googleServices = googleServices
    app.provide('googleServices', googleServices)
    
    // Inicializar serviços automaticamente
    if (typeof window !== 'undefined') {
      googleServices.init()
    }
  }
}

// Plugin para auto-tracking de rotas (se usando Vue Router)
export const setupRouteTracking = (router: any) => {
  const { trackPageView } = useGoogleServices()
  
  router.afterEach((to: any) => {
    // Aguardar um pouco para garantir que a página foi renderizada
    setTimeout(() => {
      trackPageView(to.path, to.meta?.title || document.title)
    }, 100)
  })
}
