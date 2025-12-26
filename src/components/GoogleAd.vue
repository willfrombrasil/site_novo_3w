<template>
  <div class="ad-container" :class="adClass">
    <ins
      class="adsbygoogle"
      :style="adStyle"
      :data-ad-client="adClient"
      :data-ad-slot="adSlot"
      :data-ad-format="adFormat"
      :data-full-width-responsive="fullWidthResponsive"
    ></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'

interface Props {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  width?: number
  height?: number
  fullWidthResponsive?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  adFormat: 'auto',
  width: 320,
  height: 100,
  fullWidthResponsive: true,
  className: ''
})

// ID do AdSense (substitua pelo seu)
const adClient = 'ca-pub-XXXXXXXXXXXXXXXX'

const adClass = computed(() => {
  const classes = ['google-ad']
  if (props.className) classes.push(props.className)
  return classes.join(' ')
})

const adStyle = computed(() => {
  if (props.adFormat === 'auto') {
    return 'display: block;'
  }
  return `display: inline-block; width: ${props.width}px; height: ${props.height}px;`
})

onMounted(() => {
  try {
    // Aguardar o AdSense carregar
    setTimeout(() => {
      if (window.adsbygoogle) {
        (window.adsbygoogle as any[]).push({})
      }
    }, 100)
  } catch (error) {
    console.warn('Erro ao carregar anúncio:', error)
  }
})
</script>

<style scoped>
.ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  min-height: 100px;
}

.google-ad {
  max-width: 100%;
}

/* Estilos responsivos para diferentes formatos */
.ad-container.banner {
  width: 100%;
  max-width: 728px;
  height: 90px;
}

.ad-container.rectangle {
  width: 300px;
  height: 250px;
}

.ad-container.skyscraper {
  width: 160px;
  height: 600px;
}

.ad-container.leaderboard {
  width: 100%;
  max-width: 728px;
  height: 90px;
}

@media (max-width: 768px) {
  .ad-container.banner,
  .ad-container.leaderboard {
    width: 320px;
    height: 50px;
  }
  
  .ad-container.rectangle {
    width: 300px;
    height: 200px;
  }
  
  .ad-container.skyscraper {
    display: none; /* Ocultar em mobile */
  }
}
</style>
