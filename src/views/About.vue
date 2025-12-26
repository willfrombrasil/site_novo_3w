<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Sobre</span>
        </div>
        <h1 class="page-hero-title">Sobre a 3W Online</h1>
        <p class="page-hero-subtitle">Impulsione seu Negócio com Marketing Digital</p>
        <p class="text-lg text-blue-100 mt-4">
          Somos especialistas em marketing digital para empresas locais e pequenos negócios.
          Acreditamos que a verdadeira inovação vem da coragem de desafiar o status quo e abraçar o desconhecido.
        </p>
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
            
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <p class="text-yellow-800 font-semibold">
                🎯 Pronto para dar o próximo passo? Entre em contato conosco agora e agende uma consultoria gratuita. 
                Nos próximos dias, os primeiros clientes garantem um desconto especial em nossos serviços. 
                Não perca essa oportunidade de transformar seu negócio!
              </p>
            </div>
            
            <div class="mb-8 flex justify-center">
              <router-link to="/contato" class="btn-primary text-lg px-8 py-4">
                📋 Mais Informações
              </router-link>
            </div>

            <span class="my-24 py-16">&nbsp;</span>

            <h3 class="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <p class="text-lg text-gray-600 mb-6">
              A 3W Online nasceu da paixão por transformar negócios através da tecnologia e do marketing digital. 
              Fundada em 2019, nossa empresa tem como missão ajudar empresas de todos os portes a alcançarem 
              seus objetivos através de soluções digitais inovadoras e estratégias de marketing eficazes.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Com uma equipe multidisciplinar de especialistas em marketing digital, desenvolvimento web, 
              design e consultoria empresarial, oferecemos um portfólio completo de serviços que abrange 
              desde a criação de sites até a gestão completa de campanhas publicitárias.
            </p>
            
            
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
    <section class="section-padding bg-gray-50 my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossos Valores</h2>
          <p class="section-subtitle">Os princípios que guiam nosso trabalho</p>
        </div>
        
        <div class="values-grid">
          <div class="value-card">
            <LightBulbIcon class="value-icon" />
            <h3 class="value-title">Inovação</h3>
            <p class="value-description">
              Buscamos constantemente novas tecnologias e metodologias para oferecer as melhores soluções.
            </p>
          </div>
          
          <div class="value-card">
            <HeartIcon class="value-icon" />
            <h3 class="value-title">Compromisso</h3>
            <p class="value-description">
              Dedicação total aos projetos dos nossos clientes, tratando cada desafio como nosso.
            </p>
          </div>
          
          <div class="value-card">
            <StarIcon class="value-icon" />
            <h3 class="value-title">Excelência</h3>
            <p class="value-description">
              Qualidade em cada detalhe, desde o primeiro contato até a entrega final do projeto.
            </p>
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