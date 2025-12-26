<template>
  <div class="landing-prd">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky py-4 top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-primary-600">
            <a href="/" class="">3w online</a></div>
          <nav class="hidden md:flex space-x-8">
            <a href="#servicos" class="text-gray-700 hover:text-primary-600 transition-colors">Serviços</a>
            <a href="#portfolio" class="text-gray-700 hover:text-primary-600 transition-colors">Portfólio</a>
            <a href="#sobre" class="text-gray-700 hover:text-primary-600 transition-colors">Sobre</a>
            <a href="#contato" class="text-gray-700 hover:text-primary-600 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Soluções Digitais 
              <span class="text-primary-600">Sob Medida</span> para 
              Alavancar Seu Negócio
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Seu site, seu sistema, do seu jeito. Gerenciamos sua presença online 
              para você focar no que importa.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="#servicos" 
                class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
          
          <!-- Stats Cards -->
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div class="text-gray-600">Projetos Entregues</div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div class="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div class="text-gray-600">Tempo de Resposta</div>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div class="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre a 3w online -->
    <section id="sobre" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Sobre a <span class="text-primary-600">3w online</span>
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-12">
            Somos a 3w online, uma software house e agência de marketing digital dedicada a transformar 
            ideias em soluções digitais personalizadas. Criamos sites modernos e sistemas sob demanda 
            que atendem às necessidades específicas do seu negócio. Além disso, gerenciamos suas redes 
            sociais e campanhas de anúncios para garantir alcance, engajamento e conversão.
          </p>
        </div>
      </div>
    </section>

    <!-- Nossos Serviços -->
    <section id="servicos" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital e impulsionar seu negócio
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Criação de Sites -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <ComputerDesktopIcon class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Criação de Sites Personalizados</h3>
            <p class="text-gray-600 mb-6">
              Desenvolvemos sites modernos, responsivos e exclusivos, que refletem a identidade 
              da sua marca e oferecem a melhor experiência para seus clientes.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Design responsivo e moderno
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Otimização para SEO
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Integração com sistemas
              </li>
            </ul>
          </div>

          <!-- Desenvolvimento de Sistemas -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <CogIcon class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Desenvolvimento de Sistemas Sob Demanda</h3>
            <p class="text-gray-600 mb-6">
              Soluções tecnológicas feitas sob medida para otimizar processos, melhorar a gestão 
              e impulsionar resultados.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Automação de processos
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Integração com APIs
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Relatórios personalizados
              </li>
            </ul>
          </div>

          <!-- Gestão de Redes Sociais -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
              <ChatBubbleBottomCenterTextIcon class="w-8 h-8 text-pink-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestão de Redes Sociais</h3>
            <p class="text-gray-600 mb-6">
              Planejamento e execução estratégica para fortalecer sua presença online, aumentar 
              o engajamento e construir relacionamento com seu público.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Conteúdo estratégico
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Gestão de comunidade
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Relatórios de performance
              </li>
            </ul>
          </div>

          <!-- Campanhas de Anúncios -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <PresentationChartLineIcon class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Campanhas de Anúncios Digitais</h3>
            <p class="text-gray-600 mb-6">
              Campanhas segmentadas que geram tráfego qualificado, conversões reais e crescimento 
              do seu negócio.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Google Ads e Meta Ads
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Segmentação avançada
              </li>
              <li class="flex items-center">
                <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
                Otimização contínua
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Por Que Escolher -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Por Que Escolher a <span class="text-primary-600">3w online</span>?
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CogIcon class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Personalização Total</h3>
            <p class="text-gray-600">
              Cada projeto é único e desenhado para atender às suas necessidades específicas.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserGroupIcon class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Atendimento Próximo</h3>
            <p class="text-gray-600">
              Consultoria dedicada e suporte contínuo para garantir seu sucesso.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <LightBulbIcon class="w-10 h-10 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Tecnologia e Inovação</h3>
            <p class="text-gray-600">
              Usamos as melhores ferramentas para entregar soluções modernas e eficientes.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChartBarIcon class="w-10 h-10 text-orange-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Resultados Comprovados</h3>
            <p class="text-gray-600">
              Clientes satisfeitos e cases de sucesso que falam por nós.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfólio -->
    <section id="portfolio" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Portfólio</h2>
          <p class="text-xl text-gray-600">
            Confira alguns dos projetos que transformaram negócios como o seu
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Projeto 1 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <ComputerDesktopIcon class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Site para Startup X</h3>
              <p class="text-gray-600 mb-4">
                Design exclusivo e plataforma integrada que aumentou a captação de leads em 40%.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Website</span>
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">SEO</span>
              </div>
            </div>
          </div>

          <!-- Projeto 2 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <CogIcon class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Sistema sob demanda para Empresa Y</h3>
              <p class="text-gray-600 mb-4">
                Automação completa de processos internos, economizando 30% do tempo da equipe.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Sistema</span>
                <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Automação</span>
              </div>
            </div>
          </div>

          <!-- Projeto 3 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
              <ChatBubbleBottomCenterTextIcon class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Gestão de Redes para Marca Z</h3>
              <p class="text-gray-600 mb-4">
                Crescimento de seguidores em 150% e aumento de engajamento em 80%.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Social Media</span>
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Depoimentos</h2>
          <p class="text-xl text-gray-600">
            Veja o que nossos clientes falam sobre nosso trabalho
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gray-50 rounded-xl p-8 relative">
            <div class="text-4xl text-primary-600 mb-4">"</div>
            <p class="text-gray-700 mb-6 italic">
              A 3w online entendeu nossas necessidades e entregou um sistema que facilitou muito nossa operação. Atendimento excelente!
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-bold">JS</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">João S.</div>
                <div class="text-gray-600">CEO da Empresa Y</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 relative">
            <div class="text-4xl text-primary-600 mb-4">"</div>
            <p class="text-gray-700 mb-6 italic">
              O trabalho com a equipe da 3w foi fundamental para aumentar nossa presença digital e trazer mais clientes.
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-bold">AM</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Ana M.</div>
                <div class="text-gray-600">Fundadora da Startup X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-blue-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar seu negócio?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Vamos criar soluções digitais personalizadas que impulsionem seus resultados. 
          Solicite um orçamento sem compromisso!
        </p>
        <a 
          href="#contato" 
          class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
        >
          Solicitar Orçamento Gratuito
        </a>
      </div>
    </section>

    <!-- Formulário de Contato -->
    <section id="contato" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Solicite Seu Orçamento</h2>
            <p class="text-xl text-gray-600">
              Quer transformar sua presença digital e impulsionar seus resultados? 
              Solicite um orçamento personalizado agora mesmo!
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label for="empresa" class="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    v-model="form.empresa"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label for="telefone" class="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    id="telefone"
                    v-model="form.telefone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-4">
                  Serviços de interesse *
                </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center">
                    <input
                      v-model="form.servicos"
                      type="checkbox"
                      value="site"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-gray-700">Criação de Site</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="form.servicos"
                      type="checkbox"
                      value="sistema"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-gray-700">Sistema Sob Demanda</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="form.servicos"
                      type="checkbox"
                      value="redes-sociais"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-gray-700">Gestão de Redes Sociais</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="form.servicos"
                      type="checkbox"
                      value="anuncios"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-gray-700">Campanhas de Anúncios</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  v-model="form.mensagem"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>
              
              <div class="text-center">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  <span v-if="isSubmitting">Enviando...</span>
                  <span v-else>Solicitar Orçamento</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-2xl font-bold text-primary-400 mb-4">3w online</div>
            <p class="text-gray-300 mb-4">
              Software house e agência de marketing digital especializada em soluções personalizadas.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contato</h3>
            <div class="space-y-2 text-gray-300">
              <p>📧 contato@3wonline.com.br</p>
              <p>📱 (41) 99692-4829</p>
              <p>🌐 www.3wonline.com.br</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/grupo3wonline" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/grupo3wonline" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 3w online – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { 
  ComputerDesktopIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

const isSubmitting = ref(false)

const form = reactive({
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  servicos: [] as string[],
  mensagem: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const servicosText = form.servicos.length > 0 ? form.servicos.join(', ') : 'Não especificado'
    const message = `
Novo contato da Landing Page PRD:

Nome: ${form.nome}
Empresa: ${form.empresa || 'Não informado'}
Email: ${form.email}
Telefone: ${form.telefone}
Serviços de interesse: ${servicosText}
Mensagem: ${form.mensagem || 'Não informado'}
    `.trim()
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    Object.assign(form, {
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      servicos: [],
      mensagem: ''
    })
    
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.')
    
  } catch (error) {
    alert('Erro ao enviar mensagem. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.landing-prd {
  font-family: 'Inter', sans-serif;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>