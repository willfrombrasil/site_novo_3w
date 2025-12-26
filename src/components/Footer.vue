<template>
  <footer class="footer">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="footer-section">
          <h3 class="footer-title">3W Online</h3>
          <p class="text-gray-300 mb-4">
            Sua parceira em soluções digitais e marketing. Transformamos ideias em resultados.
          </p>
          <div class="text-gray-300 text-sm">
            <p>CNPJ: 25.530.623/0001-05</p>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-title">Links Rápidos</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/sobre" class="footer-link">Sobre</router-link></li>
            <li><router-link to="/institucional" class="footer-link">Institucional</router-link></li>
            <li><router-link to="/servicos" class="footer-link">Serviços</router-link></li>
            <li><router-link to="/ferramentas" class="footer-link">Ferramentas</router-link></li>
            <li><router-link to="/contato" class="footer-link">Contato</router-link></li>
          </ul>
        </div>
        
        <!-- Services -->
        <div class="footer-section">
          <h3 class="footer-title">Serviços</h3>
          <ul class="space-y-2">
            <li><router-link to="/servicos/gestao-redes-sociais" class="footer-link">Gestão de Redes Sociais</router-link></li>
            <li><router-link to="/servicos/gestao-anuncios" class="footer-link">Gestão de Anúncios</router-link></li>
            <li><router-link to="/servicos/criacao-sites" class="footer-link">Criação de Sites</router-link></li>
            <li><router-link to="/servicos/desenvolvimento-apps" class="footer-link">Desenvolvimento de Apps</router-link></li>
            <li><router-link to="/servicos/consultoria-marketing" class="footer-link">Consultoria em Marketing</router-link></li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-title">Contato</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-center">
              <PhoneIcon class="w-4 h-4 mr-2" />
              <a href="tel:+5541996924829" class="footer-link">(41) 99692-4829</a>
            </li>
            <li class="flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-2" />
              <a href="mailto:contato@3wonline.com.br" class="footer-link">contato@3wonline.com.br</a>
            </li>
            <li class="flex items-center">
              <MapPinIcon class="w-4 h-4 mr-2" />
              <span>Curitiba, PR</span>
            </li>
          </ul>
          
          <!-- Social Media -->
          <div class="social-links">
            <a href="https://www.facebook.com/grupo3wonline" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/grupo3wonline" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468zm7.519 0c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {{ new Date().getFullYear() }} Grupo 3w Online. Todos os direitos reservados.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <router-link to="/privacidade" class="footer-link">Política de Privacidade</router-link>
            <router-link to="/termos" class="footer-link">Termos de Uso</router-link>
            <router-link to="/regulamento" class="footer-link">Regulamento de Uso</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>