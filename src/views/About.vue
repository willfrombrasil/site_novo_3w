<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">
            <i class="fas fa-home mr-1"></i>Home
          </router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span><i class="fas fa-info-circle mr-1"></i>Sobre</span>
        </div>
        <h1 class="page-hero-title">
          <i class="fas fa-rocket mr-3"></i>
          Transformando Negócios Desde 2019
        </h1>
        <p class="page-hero-subtitle">
          <i class="fas fa-award text-yellow-300 mr-2"></i>
          Mais de 150 projetos entregues. 98% de satisfação. Resultados comprovados.
        </p>
        <div class="flex justify-center gap-4 mt-6 flex-wrap">
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <i class="fas fa-users text-blue-300 mr-2"></i>150+ Clientes Ativos
          </span>
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <i class="fas fa-trophy text-yellow-300 mr-2"></i>5+ Anos de Mercado
          </span>
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <i class="fas fa-chart-line text-green-300 mr-2"></i>300% Aumento Médio
          </span>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="section-padding mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossos Serviços</h2>
          <p class="section-subtitle">Soluções completas para transformar sua presença digital</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <!-- Gestão de Redes Sociais -->
          <div class="service-card group flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ChatBubbleBottomCenterTextIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestão de Redes Sociais</h3>
            <p class="text-gray-600 mb-6">
              Criamos conteúdo relevante e engajador para aumentar o alcance da sua marca.
            </p>
            <router-link to="/servicos/gestao-redes-sociais" class="btn-outline group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300">
              📱 Saiba Mais
            </router-link>
          </div>
          
          <!-- Gestão de Anúncios -->
          <div class="service-card group flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PresentationChartLineIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Gestão de Anúncios</h3>
            <p class="text-gray-600 mb-6">
              Campanhas de anúncios pagos para alcançar clientes em potencial de forma eficaz.
            </p>
            <router-link to="/servicos/gestao-anuncios" class="btn-outline group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
              🎯 Saiba Mais
            </router-link>
          </div>
          
          <!-- Criação de Sites e Sistemas -->
          <div class="service-card group flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ComputerDesktopIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Criação de Sites e Sistemas</h3>
            <p class="text-gray-600 mb-6">
              Desenvolvemos sites responsivos e modernos para uma experiência positiva.
            </p>
            <router-link to="/servicos/criacao-sites" class="btn-outline group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
              💻 Saiba Mais
            </router-link>
          </div>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Por que escolher a 3W Online?</h2>
            <p class="text-lg text-gray-600 mb-6">
              Precisando transformar o seu negócio? Nossa equipe altamente qualificada está pronta para te ajudar a alcançar resultados extraordinários. Com estratégias personalizadas e focadas em dados, desenvolvemos soluções de alto impacto para impulsionar sua marca e alcançar seus objetivos.
            </p>
            
            <div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <i class="fas fa-fire text-white text-xl"></i>
                </div>
                <div>
                  <p class="text-orange-900 font-bold text-lg mb-2">
                    <i class="fas fa-gift mr-2"></i>
                    Oferta Especial Por Tempo Limitado!
                  </p>
                  <p class="text-orange-800 mb-3">
                    <strong>BÔNUS EXCLUSIVO:</strong> Os primeiros 5 clientes este mês recebem:
                  </p>
                  <ul class="space-y-2 text-orange-800">
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check-circle text-green-600"></i>
                      <span>Consultoria estratégica gratuita (valor R$ 500)</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check-circle text-green-600"></i>
                      <span>Desconto de 20% no primeiro projeto</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check-circle text-green-600"></i>
                      <span>Diagnóstico completo da presença digital</span>
                    </li>
                  </ul>
                  <p class="text-orange-900 font-semibold mt-3">
                    <i class="fas fa-clock mr-2"></i>
                    Restam apenas 2 vagas! Garanta a sua agora.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-8 flex justify-center">
              <router-link
                to="/contato"
                class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                title="Garantir minha vaga agora"
              >
                <i class="fas fa-rocket"></i>
                Quero Aproveitar Esta Oferta
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>

            <div class="text-center mb-8">
              <p class="text-sm text-gray-500">
                <i class="fas fa-shield-alt mr-1"></i>
                <strong>100% Seguro</strong> - Seus dados protegidos conforme a LGPD
              </p>
            </div>

            <span class="my-24 py-16">&nbsp;</span>

            <h3 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i class="fas fa-book-open text-primary-600"></i>
              Nossa História de Sucesso
            </h3>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <p class="text-lg text-gray-700 leading-relaxed">
                <i class="fas fa-quote-left text-blue-400 mr-2"></i>
                Tudo começou em 2019, quando percebemos que <strong>pequenas e médias empresas</strong> eram deixadas para trás na transformação digital. Decidimos mudar isso.
              </p>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Hoje, a <strong>3W Online</strong> é referência em soluções digitais, tendo ajudado <strong>mais de 150 empresas</strong> a crescerem de forma sustentável. Nossa missão vai além de entregar projetos — queremos ser <strong>parceiros estratégicos</strong> no crescimento do seu negócio.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
                <div class="text-4xl font-bold text-blue-600 mb-2">
                  <i class="fas fa-medal mr-2"></i>150+
                </div>
                <p class="text-gray-700 font-semibold">Projetos de Sucesso</p>
                <p class="text-sm text-gray-500 mt-2">Resultados comprovados</p>
              </div>
              <div class="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-green-500">
                <div class="text-4xl font-bold text-green-600 mb-2">
                  <i class="fas fa-percentage mr-2"></i>98%
                </div>
                <p class="text-gray-700 font-semibold">Clientes Satisfeitos</p>
                <p class="text-sm text-gray-500 mt-2">Avaliação média 4.9/5</p>
              </div>
              <div class="text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-orange-500">
                <div class="text-4xl font-bold text-orange-600 mb-2">
                  <i class="fas fa-chart-line mr-2"></i>300%
                </div>
                <p class="text-gray-700 font-semibold">Crescimento Médio</p>
                <p class="text-sm text-gray-500 mt-2">Retorno sobre investimento</p>
              </div>
            </div>
            
            
          </div>
          <div class="about-image">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe 3W Online"
              class="w-full h-auto rounded-lg shadow-lg"
            />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Nossa Missão</h3>
                <p class="text-gray-600">
                  Transformar ideias em resultados concretos, oferecendo soluções digitais que impulsionam 
                  o crescimento e o sucesso dos nossos clientes.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Nossa Visão</h3>
                <p class="text-gray-600">
                  Ser reconhecida como a principal referência em soluções digitais integradas, 
                  contribuindo para o crescimento sustentável dos negócios.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50 my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">
            <i class="fas fa-heart text-red-500 mr-3"></i>
            Nossos Valores
          </h2>
          <p class="section-subtitle">Os princípios que nos tornam diferentes e confiáveis</p>
        </div>

        <div class="values-grid">
          <div class="value-card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-yellow-400">
            <div class="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <LightBulbIcon class="w-12 h-12 text-yellow-600" />
            </div>
            <h3 class="value-title text-2xl">
              <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
              Inovação Constante
            </h3>
            <p class="value-description text-gray-700">
              Sempre à frente das tendências, utilizando as <strong>tecnologias mais modernas</strong> para garantir que você tenha a melhor solução do mercado.
            </p>
            <div class="mt-4 text-sm text-gray-500 italic">
              <i class="fas fa-quote-left mr-1"></i>
              Tecnologia de ponta a serviço do seu sucesso
            </div>
          </div>

          <div class="value-card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-red-400">
            <div class="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon class="w-12 h-12 text-red-600" />
            </div>
            <h3 class="value-title text-2xl">
              <i class="fas fa-handshake text-red-500 mr-2"></i>
              Compromisso Total
            </h3>
            <p class="value-description text-gray-700">
              Seu sucesso é nosso sucesso. Tratamos cada projeto com <strong>dedicação exclusiva</strong>, como se fosse nosso próprio negócio.
            </p>
            <div class="mt-4 text-sm text-gray-500 italic">
              <i class="fas fa-quote-left mr-1"></i>
              Parceiros, não apenas fornecedores
            </div>
          </div>

          <div class="value-card bg-white shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-400">
            <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <StarIcon class="w-12 h-12 text-blue-600" />
            </div>
            <h3 class="value-title text-2xl">
              <i class="fas fa-star text-blue-500 mr-2"></i>
              Excelência Premium
            </h3>
            <p class="value-description text-gray-700">
              Não aceitamos menos que perfeito. <strong>Qualidade impecável</strong> em cada detalhe, do planejamento à entrega final.
            </p>
            <div class="mt-4 text-sm text-gray-500 italic">
              <i class="fas fa-quote-left mr-1"></i>
              Satisfação garantida ou seu dinheiro de volta
            </div>
          </div>
        </div>

        <!-- Guarantee Section -->
        <div class="mt-16 bg-white p-8 rounded-2xl shadow-2xl border-2 border-green-300">
          <div class="text-center">
            <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <i class="fas fa-shield-check text-white text-3xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              <i class="fas fa-certificate text-green-500 mr-2"></i>
              Garantia de Satisfação 100%
            </h3>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Estamos tão confiantes na qualidade do nosso trabalho que oferecemos uma <strong>garantia incondicional</strong>.
              Se você não ficar completamente satisfeito com os resultados, <strong>devolvemos seu investimento</strong>.
            </p>
            <div class="flex justify-center gap-6 flex-wrap">
              <div class="flex items-center gap-2 text-green-700">
                <i class="fas fa-check-circle text-2xl"></i>
                <span class="font-semibold">Sem riscos</span>
              </div>
              <div class="flex items-center gap-2 text-green-700">
                <i class="fas fa-check-circle text-2xl"></i>
                <span class="font-semibold">Resultado garantido</span>
              </div>
              <div class="flex items-center gap-2 text-green-700">
                <i class="fas fa-check-circle text-2xl"></i>
                <span class="font-semibold">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossa Equipe</h2>
          <p class="section-subtitle">Profissionais especializados e apaixonados pelo que fazem</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <UserIcon class="w-16 h-16 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Marketing Digital</h3>
            <p class="text-gray-600">Especialistas em estratégias digitais e gestão de campanhas</p>
          </div>
          
          <div class="text-center">
            <div class="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CodeBracketIcon class="w-16 h-16 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Desenvolvimento</h3>
            <p class="text-gray-600">Desenvolvedores experientes em tecnologias modernas</p>
          </div>
          
          <div class="text-center">
            <div class="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <PaintBrushIcon class="w-16 h-16 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Design</h3>
            <p class="text-gray-600">Designers criativos focados em experiência do usuário</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Falar Conosco
            </router-link>
            <a
              href="https://wa.me/5541996924829?text=Olá! Gostaria de conhecer melhor a 3W Online."
              target="_blank"
              class="btn-info border-white text-white hover:bg-white hover:text-primary-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  ChevronRightIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  HeartIcon,
  StarIcon,
  UserIcon,
  CodeBracketIcon,
  PaintBrushIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Sobre',
  meta: [
    { name: 'description', content: 'Conheça a equipe da 3w Online e nossa trajetória no marketing digital e desenvolvimento.' },
    { name: 'keywords', content: 'sobre a agência, equipe 3w Online, história da 3w Online, sobre, agência de marketing, software, soluções digitais, empresas locais, pequenos negócios, crescimento, inovação' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/sobre' },
  ],
})
</script>