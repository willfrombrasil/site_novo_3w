<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/"><i class="fas fa-home mr-1"></i>Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span><i class="fas fa-shield-alt mr-1"></i>Política de Privacidade</span>
        </div>
        <h1 class="page-hero-title">
          <i class="fas fa-lock mr-3"></i>
          Política de Privacidade
        </h1>
        <p class="page-hero-subtitle">
          <i class="fas fa-user-shield mr-2"></i>
          Como coletamos, usamos e protegemos suas informações pessoais - Conformidade LGPD
        </p>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="section-padding my-16">
      <div class="container">
        <div class="max-w-7xl mx-auto prose prose-lg">
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p class="text-blue-800 mb-0">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>
          </div>
          
          <h2>1. Informações Gerais</h2>
          <p>
            A 3W Online, inscrita no CNPJ 25.530.623/0001-05, está comprometida em proteger 
            a privacidade e os dados pessoais de nossos usuários, clientes e visitantes do site, 
            em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
          </p>
          
          <h2>2. Dados Coletados</h2>
          <p>Coletamos os seguintes tipos de informações:</p>
          <ul>
            <li><strong>Dados de identificação:</strong> nome, e-mail, telefone</li>
            <li><strong>Dados empresariais:</strong> nome da empresa, cargo, setor de atuação</li>
            <li><strong>Dados de navegação:</strong> endereço IP, cookies, páginas visitadas</li>
            <li><strong>Dados de comunicação:</strong> mensagens enviadas através de formulários</li>
          </ul>
          
          <h2>3. Finalidade do Tratamento</h2>
          <p>Utilizamos seus dados pessoais para:</p>
          <ul>
            <li>Responder às suas solicitações e dúvidas</li>
            <li>Enviar propostas comerciais e orçamentos</li>
            <li>Prestar os serviços contratados</li>
            <li>Melhorar nossos serviços e experiência do usuário</li>
            <li>Cumprir obrigações legais e regulamentares</li>
            <li>Enviar comunicações de marketing (com seu consentimento)</li>
          </ul>
          
          <h2>4. Base Legal</h2>
          <p>O tratamento de seus dados pessoais é baseado em:</p>
          <ul>
            <li>Consentimento do titular dos dados</li>
            <li>Execução de contrato ou procedimentos preliminares</li>
            <li>Legítimo interesse da 3W Online</li>
            <li>Cumprimento de obrigação legal</li>
          </ul>
          
          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, 
            exceto nas seguintes situações:
          </p>
          <ul>
            <li>Com prestadores de serviços que nos auxiliam na operação do negócio</li>
            <li>Quando exigido por lei ou ordem judicial</li>
            <li>Para proteger nossos direitos legais</li>
            <li>Com seu consentimento expresso</li>
          </ul>
          
          <h2>6. Segurança dos Dados</h2>
          <p>
            Implementamos medidas técnicas e organizacionais adequadas para proteger 
            seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
          
          <h2>7. Retenção de Dados</h2>
          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as 
            finalidades descritas nesta política, respeitando os prazos legais aplicáveis.
          </p>
          
          <h2>8. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados</li>
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
            <li>Solicitar a portabilidade dos dados</li>
            <li>Revogar o consentimento</li>
            <li>Apresentar reclamação à autoridade nacional</li>
          </ul>
          
          <h2>9. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência em nosso site. 
            Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
          </p>
          
          <h2>10. Alterações na Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você 
            a revise regularmente para se manter informado sobre como protegemos seus dados.
          </p>
          
          <h2>11. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
            entre em contato conosco:
          </p>
          <ul>
            <li><strong>E-mail:</strong> contato@3wonline.com.br</li>
            <li><strong>Telefone:</strong> (41) 99692-4829</li>
            <li><strong>Endereço:</strong> Curitiba, PR</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose p {
  @apply text-gray-600 mb-4;
}

.prose ul {
  @apply list-disc list-inside text-gray-600 mb-4 space-y-1;
}

.prose li {
  @apply ml-4;
}
</style>