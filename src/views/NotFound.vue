<template>
  <div class="not-found flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
    <h1 class="text-6xl font-bold text-primary-600 mb-6">404</h1>
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Página não encontrada</h2>
    <p class="text-gray-600 mb-8">A URL acessada não existe ou foi removida.<br>Verifique o endereço ou volte para a página inicial.</p>
    <router-link to="/" class="btn-primary px-6 py-3 rounded">Voltar para Home</router-link>
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica extra necessária
</script>

<style scoped>
.not-found {
  background: linear-gradient(135deg, #fbbf24 0%, #3b82f6 100%);
}
.btn-primary {
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #1d4ed8;
}
</style>
