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
          <span><i class="fas fa-envelope mr-1"></i>Contato</span>
        </div>
        <h1 class="page-hero-title">Transforme Seu Negócio Hoje Mesmo</h1>
        <p class="page-hero-subtitle">
          Mais de 150 empresas já confiam na 3W Online. Junte-se a elas e veja seus resultados crescerem exponencialmente.
        </p>
        <div class="flex justify-center gap-3 mt-6">
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <i class="fas fa-check-circle text-green-300 mr-2"></i>Resposta em até 2 horas
          </span>
          <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <i class="fas fa-star text-yellow-300 mr-2"></i>98% de satisfação
          </span>
        </div>
      </div>
    </section>
    
    <!-- CTA Urgency Section -->
    <section class="bg-gradient-to-r from-orange-50 to-yellow-50 py-8">
      <div class="container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <i class="fas fa-fire text-white text-2xl"></i>
            </div>
            <div>
              <p class="text-2xl font-bold text-gray-900">
                <i class="fas fa-clock mr-2 text-orange-500"></i>Vagas Limitadas!
              </p>
              <p class="text-gray-700">Apenas 5 vagas disponíveis este mês com <strong>desconto de 20%</strong></p>
            </div>
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-600 mb-2">
              <i class="fas fa-users mr-1"></i>23 pessoas visualizando esta página agora
            </p>
            <p class="text-lg font-bold text-orange-600">
              <i class="fas fa-tag mr-1"></i>Oferta válida por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                <i class="fas fa-rocket text-primary-600 mr-2"></i>
                Receba uma Análise Gratuita do Seu Negócio
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                <i class="fas fa-gift text-green-500 mr-2"></i>
                <strong>Bônus Exclusivo:</strong> Ao preencher o formulário, você receberá:
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
                  <span class="text-gray-700">Consultoria estratégica de 30 minutos <strong>sem custo</strong></span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
                  <span class="text-gray-700">Diagnóstico completo da sua presença digital</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-500 text-xl mt-1"></i>
                  <span class="text-gray-700">Plano personalizado com estratégias comprovadas</span>
                </li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p class="text-blue-800 font-semibold flex items-center gap-2">
                  <i class="fas fa-shield-alt"></i>
                  <span>Seus dados estão protegidos. Nunca compartilhamos suas informações.</span>
                </p>
              </div>
            </div>

            <iframe
              title="Formulário de Contato 3W Online"
              src="https://3wonline.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&formTitle=Fale+conosco&submitTitle=Enviar&submitThanks=Mensagem+Enviada+com+Sucesso"
              class="w-full h-[530px] border-0 rounded-xl shadow-lg"
              style="max-width:900px;"
            ></iframe>

            <p class="text-sm text-gray-500 mt-4 text-center">
              <i class="fas fa-lock mr-1"></i>
              Ao enviar, você concorda com nossa
              <router-link to="/privacidade" class="text-primary-600 hover:text-primary-700 underline">
                Política de Privacidade
              </router-link>
              e
              <router-link to="/termos" class="text-primary-600 hover:text-primary-700 underline">
                Termos de Uso
              </router-link>
            </p>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                <i class="fas fa-headset text-primary-600 mr-2"></i>
                Canais de Atendimento
              </h2>
              <div class="space-y-6">
                <div class="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <PhoneIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">
                      <i class="fas fa-phone-alt mr-1"></i>Telefone
                    </p>
                    <a href="tel:+5541996924829" class="contact-value hover:text-primary-600 transition-colors">
                      (41) 99692-4829
                    </a>
                  </div>
                </div>

                <div class="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <EnvelopeIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">
                      <i class="fas fa-envelope mr-1"></i>E-mail
                    </p>
                    <a href="mailto:contato@3wonline.com.br" class="contact-value hover:text-primary-600 transition-colors">
                      contato@3wonline.com.br
                    </a>
                  </div>
                </div>

                <div class="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <MapPinIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">
                      <i class="fas fa-map-marker-alt mr-1"></i>Localização
                    </p>
                    <p class="contact-value">Curitiba, Paraná</p>
                  </div>
                </div>

                <div class="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <ClockIcon class="contact-icon" />
                  <div class="contact-details">
                    <p class="contact-label">
                      <i class="fas fa-clock mr-1"></i>Horário de Atendimento
                    </p>
                    <p class="contact-value">Segunda à Sexta: 8h às 18h</p>
                    <p class="text-sm text-green-600 mt-1">
                      <i class="fas fa-check-circle mr-1"></i>Atendimento ativo agora
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Proof Section -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                <i class="fas fa-trophy text-yellow-500 mr-2"></i>
                Por Que Escolher a 3W Online?
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-certificate text-primary-600 text-lg mt-1"></i>
                  <span class="text-gray-800"><strong>5+ anos</strong> de experiência</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-users text-primary-600 text-lg mt-1"></i>
                  <span class="text-gray-800"><strong>150+ projetos</strong> entregues</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-heart text-red-500 text-lg mt-1"></i>
                  <span class="text-gray-800"><strong>98%</strong> de clientes satisfeitos</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-chart-line text-green-500 text-lg mt-1"></i>
                  <span class="text-gray-800">Aumento médio de <strong>300%</strong> nas vendas</span>
                </li>
              </ul>
            </div>
            
            <!-- Quick Contact Options -->
            <div class="contact-info">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                <i class="fas fa-bolt text-yellow-500 mr-2"></i>
                Contato Rápido
              </h3>
              <div class="space-y-4">
                <a
                  href="https://wa.me/5541996924829?text=Olá! Gostaria de saber mais sobre os serviços da 3W Online."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 border-2 border-transparent hover:border-green-500"
                  title="Fale conosco via WhatsApp - Resposta rápida"
                >
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <i class="fab fa-whatsapp text-white text-2xl"></i>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">WhatsApp</p>
                    <p class="text-sm text-gray-600">Resposta em minutos</p>
                  </div>
                  <i class="fas fa-arrow-right ml-auto text-green-500"></i>
                </a>

                <a
                  href="mailto:contato@3wonline.com.br"
                  class="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                  title="Envie-nos um e-mail"
                >
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <EnvelopeIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">E-mail</p>
                    <p class="text-sm text-gray-600">contato@3wonline.com.br</p>
                  </div>
                  <i class="fas fa-arrow-right ml-auto text-blue-500"></i>
                </a>

                <a
                  href="tel:+5541996924829"
                  class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border-2 border-transparent hover:border-gray-500"
                  title="Ligue para nós agora"
                >
                  <div class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                    <PhoneIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Telefone</p>
                    <p class="text-sm text-gray-600">(41) 99692-4829</p>
                  </div>
                  <i class="fas fa-arrow-right ml-auto text-gray-500"></i>
                </a>
              </div>
            </div>

            <!-- Social Media Links -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                <i class="fas fa-share-alt text-primary-600 mr-2"></i>
                Redes Sociais
              </h3>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/grupo3wonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Seguir no Facebook"
                  title="Siga-nos no Facebook"
                >
                  <i class="fab fa-facebook-f text-xl"></i>
                </a>

                <a
                  href="https://www.instagram.com/grupo3wonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Seguir no Instagram"
                  title="Siga-nos no Instagram"
                >
                  <i class="fab fa-instagram text-xl"></i>
                </a>

                <a
                  href="https://wa.me/5541996924829?text=Olá! Gostaria de saber mais sobre os serviços da 3W Online."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Entrar em contato via WhatsApp"
                  title="Fale conosco no WhatsApp"
                >
                  <i class="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials CTA Section -->
    <section class="bg-gray-50 py-16">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            <i class="fas fa-quote-left text-primary-600 mr-2"></i>
            O Que Nossos Clientes Dizem
          </h2>
          <p class="text-lg text-gray-600">Não acredite apenas em nós. Veja o que nossos parceiros têm a dizer.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-4">"A 3W Online transformou completamente nossa presença digital. Aumentamos as vendas em 300% em 6 meses!"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span class="text-primary-600 font-semibold">JS</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">João Silva</p>
                <p class="text-sm text-gray-500">Silva & Associados</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-4">"Profissionalismo excepcional! Nosso site ficou perfeito e as redes sociais estão gerando resultados incríveis."</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span class="text-primary-600 font-semibold">MS</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Maria Santos</p>
                <p class="text-sm text-gray-500">Boutique Elegance</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <p class="text-gray-700 mb-4">"Parceria de longo prazo que só traz resultados. Recomendo a 3W Online de olhos fechados!"</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span class="text-primary-600 font-semibold">CO</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Carlos Oliveira</p>
                <p class="text-sm text-gray-500">Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-lg text-gray-700 mb-6">
            <i class="fas fa-users text-primary-600 mr-2"></i>
            Junte-se a mais de <strong>150 empresas</strong> que já transformaram seus negócios conosco!
          </p>
          <a
            href="https://wa.me/5541996924829?text=Olá! Gostaria de saber mais sobre os serviços da 3W Online e fazer parte dos cases de sucesso!"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <i class="fab fa-whatsapp"></i>
            Quero Fazer Parte Também
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contato - Fale Conosco',
  meta: [
    { name: 'description', content: 'Entre em contato com a 3W Online. Mais de 150 empresas já confiam em nossos serviços de marketing digital, desenvolvimento web e soluções tecnológicas. Resposta em até 2 horas!' },
    { name: 'keywords', content: 'contato 3w online, orçamento marketing digital, consultoria gratuita, falar com especialista, whatsapp 3w online' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/contato' }
  ]
})
</script>