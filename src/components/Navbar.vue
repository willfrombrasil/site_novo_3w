<template>
  <nav class="navbar">
    <div class="container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand">
          3W Online
        </router-link>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex navbar-nav">
          <router-link to="/" class="navbar-link">Home</router-link>
          <router-link to="/sobre" class="navbar-link">Sobre</router-link>
          <router-link to="/institucional" class="navbar-link">Institucional</router-link>
          <router-link to="/servicos" class="navbar-link">Serviços</router-link>
          <router-link to="/ferramentas" class="navbar-link">Ferramentas</router-link>
          <router-link to="/contato" class="navbar-link">Contato</router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Abrir menu"
          :aria-expanded="mobileMenuOpen"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="mobile-menu">
      <div class="mobile-menu-header">
        <div class="navbar-brand">3W Online</div>
        <button @click="toggleMobileMenu" class="p-2" aria-label="Fechar menu">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      
      <div class="mobile-menu-nav">
        <router-link to="/" class="mobile-menu-link" @click="closeMobileMenu">Home</router-link>
        <router-link to="/sobre" class="mobile-menu-link" @click="closeMobileMenu">Sobre</router-link>
        <router-link to="/institucional" class="mobile-menu-link" @click="closeMobileMenu">Institucional</router-link>
        <router-link to="/servicos" class="mobile-menu-link" @click="closeMobileMenu">Serviços</router-link>
        <router-link to="/ferramentas" class="mobile-menu-link" @click="closeMobileMenu">Ferramentas</router-link>
        <router-link to="/contato" class="mobile-menu-link" @click="closeMobileMenu">Contato</router-link>        
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const showMobileServices = ref(false)
const showMobileTools = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  showMobileServices.value = false
  showMobileTools.value = false
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.transition-transform {
  transition-property: transform;
}
.duration-200 {
  transition-duration: 200ms;
}
</style>
