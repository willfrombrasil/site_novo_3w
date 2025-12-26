<template>
  <div class="landing-sites-sistemas">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-primary-600">3W Online</div>
          <nav class="hidden md:flex space-x-8">
            <a href="#solucoes" class="text-gray-700 hover:text-primary-600 transition-colors">Soluções</a>
            <a href="#sobre" class="text-gray-700 hover:text-primary-600 transition-colors">Sobre</a>
            <a href="#depoimentos" class="text-gray-700 hover:text-primary-600 transition-colors">Clientes</a>
            <a href="#contato" class="text-gray-700 hover:text-primary-600 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Transforme Sua Presença Digital com Sites e Sistemas Profissionais
        </h1>
        <p class="text-xl md:text-2xl mb-4 text-blue-100 animate-slide-up">
          Desenvolvimento sob medida que impulsiona seu negócio
        </p>
        <p class="text-lg md:text-xl mb-8 text-blue-200 animate-slide-up">
          Sites responsivos, sistemas personalizados e soluções que geram resultados reais
        </p>
        <div class="animate-slide-up">
          <a
            href="#contato"
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block mr-4 mb-4"
          >
            Solicitar Orçamento Gratuito
          </a>
          <a
            href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre desenvolvimento de sites e sistemas."
            target="_blank"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block mb-4"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-yellow-300 mb-2">150+</div>
            <div class="text-blue-200">Projetos Entregues</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-yellow-300 mb-2">98%</div>
            <div class="text-blue-200">Clientes Satisfeitos</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-yellow-300 mb-2">5+</div>
            <div class="text-blue-200">Anos de Experiência</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-yellow-300 mb-2">24h</div>
            <div class="text-blue-200">Suporte Técnico</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que escolher a 3W Online -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Por que escolher a 3W Online?
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Soluções Sob Medida -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Soluções Sob Medida</h3>
            <p class="text-gray-600">
              Sistemas criados de acordo com a realidade e demanda do seu negócio.
            </p>
          </div>

          <!-- Eficiência Garantida -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Eficiência Garantida</h3>
            <p class="text-gray-600">
              Tecnologias inovadoras que melhoram a produtividade e decisões.
            </p>
          </div>

          <!-- Escalabilidade -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Escalabilidade</h3>
            <p class="text-gray-600">
              Sistemas que crescem junto com sua empresa, acompanhando sua evolução.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quem Somos -->
    <section id="sobre" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Quem Somos</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            Na 3W Online, somos apaixonados por tecnologia e inovação. Nossa missão é ajudar 
            empresas a alcançarem o sucesso digital por meio de soluções personalizadas e 
            eficientes. Com anos de experiência no mercado, trabalhamos lado a lado com nossos 
            clientes para entender suas necessidades e entregar projetos de alta qualidade que 
            fazem a diferença.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Seja você uma pequena empresa ou uma grande organização, estamos aqui para 
            transformar suas ideias em realidade e impulsionar seus negócios para o próximo nível.
          </p>
        </div>
      </div>
    </section>

    <!-- Nossas Soluções -->
    <section id="solucoes" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Nossas Soluções
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Desenvolvimento de Sites -->
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Desenvolvimento de Sites</h3>
              <p class="text-gray-600 mb-6">
                Sites que precisam de uma presença online profissional.
              </p>
            </div>
            <div class="text-center mb-6">
              <span class="text-orange-500 font-bold text-lg">A partir de</span>
              <div class="text-3xl font-bold text-gray-800">R$ 1.200,00</div>
            </div>
            <button 
              @click="openWhatsApp('site')"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Saiba Mais
            </button>
          </div>

          <!-- Sistemas Personalizados -->
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-orange-500 relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MAIS POPULAR
            </div>
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Sistemas Personalizados</h3>
              <p class="text-gray-600 mb-6">
                Automatize processos e controle sua gestão com sistemas sob medida.
              </p>
            </div>
            <div class="text-center mb-6">
              <span class="text-orange-500 font-bold text-lg">A partir de</span>
              <div class="text-3xl font-bold text-gray-800">R$ 5.000,00</div>
            </div>
            <button 
              @click="openWhatsApp('sistema')"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Saiba Mais
            </button>
          </div>

          <!-- Aplicativos Mobile -->
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Aplicativos Mobile</h3>
              <p class="text-gray-600 mb-6">
                Leve sua ideia para dispositivos móveis com design intuitivo.
              </p>
            </div>
            <div class="text-center mb-6">
              <span class="text-orange-500 font-bold text-lg">A partir de</span>
              <div class="text-3xl font-bold text-gray-800">R$ 7.500,00</div>
            </div>
            <button 
              @click="openWhatsApp('app')"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Garantia -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-6">🛡️ Garantia de Satisfação</h2>
          <p class="text-xl text-blue-100 mb-8">
            Oferecemos 30 dias de garantia em todos os nossos projetos. Se não ficar satisfeito, 
            fazemos os ajustes necessários sem custo adicional.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-blue-700 rounded-lg p-6">
              <h3 class="font-semibold mb-2">✅ Suporte Técnico</h3>
              <p class="text-blue-200">30 dias de suporte gratuito</p>
            </div>
            <div class="bg-blue-700 rounded-lg p-6">
              <h3 class="font-semibold mb-2">🔧 Ajustes Inclusos</h3>
              <p class="text-blue-200">Correções sem custo adicional</p>
            </div>
            <div class="bg-blue-700 rounded-lg p-6">
              <h3 class="font-semibold mb-2">📞 Atendimento Direto</h3>
              <p class="text-blue-200">Contato direto com nossa equipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          O que nossos clientes dizem
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-50 rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">JS</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">João Silva</h4>
                <p class="text-sm text-gray-600">CEO, TechStart</p>
              </div>
            </div>
            <p class="text-gray-700 italic mb-4">
              "A 3W Online transformou completamente nossos processos internos com um sistema incrível!"
            </p>
            <div class="flex text-yellow-400">
              <span class="text-2xl">⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">MO</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Maria Oliveira</h4>
                <p class="text-sm text-gray-600">Diretora, Inovação Corp</p>
              </div>
            </div>
            <p class="text-gray-700 italic mb-4">
              "Graças ao aplicativo desenvolvido pela 3W, nossos vendas aumentaram significativamente."
            </p>
            <div class="flex text-yellow-400">
              <span class="text-2xl">⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">CS</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Carlos Souza</h4>
                <p class="text-sm text-gray-600">Proprietário, Loja Virtual</p>
              </div>
            </div>
            <p class="text-gray-700 italic mb-4">
              "Equipe altamente profissional e dedicada. Recomendo!"
            </p>
            <div class="flex text-yellow-400">
              <span class="text-2xl">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Entre em contato
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Quer saber mais sobre nossas soluções? Estamos prontos para ajudar!
        </p>
        <a
          href="https://wa.me/5541996924829?text=Olá! Quero saber mais sobre desenvolvimento de sites e sistemas."
          target="_blank"
          class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
        >
          Fale Conosco no WhatsApp
        </a>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Perguntas Frequentes
        </h2>
        
        <div class="max-w-4xl mx-auto space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
            >
              <span class="font-semibold text-gray-800">{{ faq.question }}</span>
              <svg 
                class="w-5 h-5 text-gray-600 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              v-if="openFaq === index"
              class="px-6 pb-4 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contato" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Solicite Seu Orçamento
          </h2>
          
          <div class="bg-gray-50 rounded-lg shadow-lg p-8">
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
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
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
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
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
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
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
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-4">
                  Tipo de Projeto *
                </label>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="flex items-center">
                    <input
                      v-model="form.projeto"
                      type="radio"
                      value="site"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span class="ml-2 text-gray-700">Site Institucional</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="form.projeto"
                      type="radio"
                      value="sistema"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span class="ml-2 text-gray-700">Sistema Personalizado</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="form.projeto"
                      type="radio"
                      value="app"
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span class="ml-2 text-gray-700">Aplicativo Mobile</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Projeto
                </label>
                <textarea
                  id="mensagem"
                  v-model="form.mensagem"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-colors duration-300"
                  placeholder="Descreva seu projeto e necessidades..."
                ></textarea>
              </div>
              
              <div class="text-center">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span v-if="isSubmitting">Enviando...</span>
                  <span v-else>Solicitar Orçamento Gratuito</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-2xl font-bold mb-4">3W Online</div>
            <p class="text-blue-200 mb-4">
              Especialistas em desenvolvimento de sites, sistemas personalizados e aplicativos mobile.
            </p>
            <p class="text-sm text-blue-300">
              CNPJ: 25.530.623/0001-05
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contato</h3>
            <div class="space-y-2 text-blue-200">
              <p>📧 contato@3wonline.com.br</p>
              <p>📱 (41) 99692-4829</p>
              <p>🌐 www.3wonline.com.br</p>
              <p>📍 Curitiba, PR</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/grupo3wonline" target="_blank" class="text-blue-200 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/grupo3wonline" target="_blank" class="text-blue-200 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468zm7.519 0c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467s-2.009 4.468-4.467 4.468z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-primary-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 3W Online – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const isSubmitting = ref(false)
const openFaq = ref<number | null>(null)

const form = reactive({
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  projeto: '',
  mensagem: ''
})

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Sites simples ficam prontos em 7-15 dias, enquanto projetos mais complexos podem levar de 30 a 60 dias."
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer: "Sim! Oferecemos 30 dias de suporte gratuito para correções e ajustes. Também temos planos de manutenção mensal para atualizações contínuas."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos PIX, cartão de crédito, débito, transferência bancária e boleto. Para projetos maiores, oferecemos parcelamento personalizado."
  },
  {
    question: "Posso alterar o projeto depois de iniciado?",
    answer: "Sim, mas alterações significativas podem impactar prazo e valor. Sempre discutimos mudanças antes de implementá-las."
  },
  {
    question: "Como é feito o acompanhamento do projeto?",
    answer: "Mantemos comunicação constante via WhatsApp e e-mail, com atualizações regulares sobre o progresso do desenvolvimento."
  },
  {
    question: "Vocês trabalham com empresas de outros estados?",
    answer: "Sim! Atendemos clientes de todo o Brasil. Todo o processo pode ser feito remotamente com total eficiência."
  },
  {
    question: "Existe algum tipo de garantia?",
    answer: "Oferecemos 30 dias de garantia para correções de bugs e ajustes sem custo adicional."
  },
  {
    question: "Posso solicitar uma consultoria antes de contratar?",
    answer: "Claro! Oferecemos consultoria gratuita para entender suas necessidades e propor a melhor solução."
  },
  {
    question: "Vocês fazem apenas sites ou também sistemas complexos?",
    answer: "Desenvolvemos desde sites institucionais até sistemas complexos de gestão, e-commerce e aplicativos mobile."
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer: "Você pode preencher o formulário nesta página ou entrar em contato diretamente pelo WhatsApp. Respondemos em até 24 horas."
  }
]

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

const openWhatsApp = (tipo: string) => {
  const messages = {
    site: "Olá! Tenho interesse em desenvolver um site. Gostaria de saber mais detalhes.",
    sistema: "Olá! Preciso de um sistema personalizado para minha empresa. Podem me ajudar?",
    app: "Olá! Quero desenvolver um aplicativo mobile. Vamos conversar?"
  }
  
  const message = messages[tipo as keyof typeof messages] || "Olá! Gostaria de saber mais sobre os serviços da 3W Online."
  const whatsappUrl = `https://wa.me/5541996924829?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const message = `
Novo orçamento solicitado:

Nome: ${form.nome}
Empresa: ${form.empresa || 'Não informado'}
Email: ${form.email}
Telefone: ${form.telefone}
Tipo de Projeto: ${form.projeto}
Descrição: ${form.mensagem || 'Não informado'}
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
      projeto: '',
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
.landing-sites-sistemas {
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out 0.3s both;
}

/* Hover effects */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid {
    gap: 1.5rem;
  }
  
  .hero-section h1 {
    font-size: 2.5rem;
  }
  
  .hero-section p {
    font-size: 1.125rem;
  }
}

/* Focus styles for accessibility */
input:focus,
textarea:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>