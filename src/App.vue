<template>
  <div id="app">
      <!-- Google Tag Manager (noscript) -->
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVMJV7G6"
        height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>
      </noscript>
      <!-- End Google Tag Manager (noscript) -->
    
      <!-- Skip Link for Accessibility -->
      <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
    
      <!-- Navigation -->
      <Navbar v-if="!$route.meta.noLayout" />
    
      <!-- Main Content -->
      <main id="main-content">
        <router-view />
      </main>
    
      <!-- Footer -->
      <Footer v-if="!$route.meta.noLayout" />
    
      <!-- WhatsApp Float Button -->
      <WhatsAppFloat v-if="!$route.meta.noLayout" />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

// Inicializar Google Analytics 4
onMounted(() => {
  // Google Tag Manager
  const gtmScript = document.createElement('script')
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtag.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WVMJV7G6');
  `
  document.head.appendChild(gtmScript)

  // Google tag (gtag.js)
  const gtScript = document.createElement('script')
  gtScript.async = true
  gtScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0GGC4J7WB5'
  document.head.appendChild(gtScript)

  // Google Analytics config
  const gtConfigScript = document.createElement('script')
  gtConfigScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0GGC4J7WB5');
  `
  document.head.appendChild(gtConfigScript)
})

useHead({
  titleTemplate: title => title ? `3w Online - ${title}` : '3w Online',
  htmlAttrs: {
    lang: 'pt-BR',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'A 3w Online é uma agência especializada em marketing digital, desenvolvimento de software e soluções inovadoras para negócios de todos os tamanhos.' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'keywords', content: 'agência de marketing, marketing digital, desenvolvimento de software, soluções digitais, SEO, publicidade, transformação digital' },
    { name: 'author', content: 'Grupo 3w Online' },
    { name: 'copyright', content: '© Grupo 3w Online' },
    { name: 'robots', content: 'all, index, follow' },
    { name: 'image', content: 'https://www.3wonline.com.br/images/preview.png' },
    { name: 'generator', content: 'VS Code' },
    { name: 'rating', content: 'general' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/' },
  ],
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>