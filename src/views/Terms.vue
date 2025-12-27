<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/"><i class="fas fa-home mr-1"></i>Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span><i class="fas fa-file-contract mr-1"></i>Termos de Uso</span>
        </div>
        <h1 class="page-hero-title">
          <i class="fas fa-gavel mr-3"></i>
          Termos de Uso
        </h1>
        <p class="page-hero-subtitle">
          <i class="fas fa-info-circle mr-2"></i>
          Condições gerais para utilização dos nossos serviços - Conformidade LGPD
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
          
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar os serviços da 3W Online, você concorda em cumprir 
            e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
            parte destes termos, não deve utilizar nossos serviços.
          </p>
          
          <h2>2. Descrição dos Serviços</h2>
          <p>A 3W Online oferece os seguintes serviços:</p>
          <ul>
            <li>Gestão de Redes Sociais</li>
            <li>Gestão de Anúncios Digitais</li>
            <li>Criação e Desenvolvimento de Sites</li>
            <li>Desenvolvimento de Aplicativos</li>
            <li>Consultoria em Marketing Digital</li>
            <li>Design Gráfico e Identidade Visual</li>
            <li>Outros serviços relacionados ao marketing digital</li>
          </ul>
          
          <h2>3. Responsabilidades do Cliente</h2>
          <p>O cliente se compromete a:</p>
          <ul>
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Colaborar com o fornecimento de materiais necessários</li>
            <li>Respeitar os prazos acordados para aprovações</li>
            <li>Efetuar os pagamentos conforme acordado</li>
            <li>Não utilizar os serviços para atividades ilegais</li>
            <li>Respeitar direitos autorais e propriedade intelectual</li>
          </ul>
          
          <h2>4. Responsabilidades da 3W Online</h2>
          <p>A 3W Online se compromete a:</p>
          <ul>
            <li>Prestar os serviços com qualidade e profissionalismo</li>
            <li>Cumprir os prazos acordados</li>
            <li>Manter confidencialidade das informações do cliente</li>
            <li>Fornecer suporte técnico adequado</li>
            <li>Respeitar as diretrizes das plataformas utilizadas</li>
          </ul>
          
          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todos os materiais criados pela 3W Online, incluindo designs, códigos, 
            estratégias e conteúdos, são de propriedade da empresa, salvo acordo 
            específico em contrário. O cliente recebe licença de uso conforme 
            especificado no contrato de prestação de serviços.
          </p>
          
          <h2>6. Pagamentos e Cancelamentos</h2>
          <p>
            Os valores e condições de pagamento são estabelecidos em contrato específico. 
            O cancelamento de serviços deve seguir as condições previstas no contrato, 
            respeitando eventuais períodos de aviso prévio.
          </p>
          
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A 3W Online não se responsabiliza por danos indiretos, lucros cessantes 
            ou prejuízos decorrentes de fatores externos ao seu controle, como 
            mudanças em algoritmos de plataformas, instabilidades técnicas de terceiros 
            ou decisões de moderação de conteúdo.
          </p>
          
          <h2>8. Confidencialidade</h2>
          <p>
            Todas as informações compartilhadas entre as partes serão tratadas como 
            confidenciais e não serão divulgadas a terceiros sem autorização expressa, 
            exceto quando exigido por lei.
          </p>
          
          <h2>9. Modificações dos Termos</h2>
          <p>
            A 3W Online reserva-se o direito de modificar estes termos a qualquer momento. 
            As alterações entrarão em vigor imediatamente após a publicação no site. 
            É responsabilidade do usuário verificar periodicamente os termos atualizados.
          </p>
          
          <h2>10. Resolução de Conflitos</h2>
          <p>
            Eventuais conflitos serão resolvidos preferencialmente por negociação direta. 
            Caso não seja possível, será aplicada a legislação brasileira e o foro 
            competente será o da comarca de Curitiba, PR.
          </p>
          
          <h2>11. Disposições Gerais</h2>
          <p>
            Estes termos constituem o acordo completo entre as partes em relação ao 
            uso dos serviços. A invalidade de qualquer cláusula não afetará a validade 
            das demais disposições.
          </p>
          
          <h2>12. Contato</h2>
          <p>
            Para dúvidas sobre estes termos ou nossos serviços, entre em contato:
          </p>
          <ul>
            <li><strong>E-mail:</strong> contato@3wonline.com.br</li>
            <li><strong>Telefone:</strong> (41) 99692-4829</li>
            <li><strong>Endereço:</strong> Curitiba, PR</li>
            <li><strong>CNPJ:</strong> 25.530.623/0001-05</li>
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