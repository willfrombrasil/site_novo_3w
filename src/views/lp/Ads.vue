<template>
  <div class="landing-ads">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="container relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Impulsione seu Negócio com
            <span class="text-yellow-300">Marketing Digital</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 animate-slide-up">
            Somos especialistas em marketing digital para empresas locais e pequenos negócios.
            Acreditamos que a verdadeira inovação vem da coragem de desafiar o status quo e abraçar o desconhecido.
          </p>
          <div class="animate-slide-up">
            <a
              href="#mais-informacoes"
              class="btn-primary bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🚀 Mais Informações
            </a>
          </div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="section-padding bg-white my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital e gerar resultados reais
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Gestão de Redes Sociais -->
          <div class="service-card group">
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
          <div class="service-card group">
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
          
          <!-- Criação de Sites -->
          <div class="service-card group">
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
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section id="mais-informacoes" class="section-padding bg-gradient-to-br from-gray-50 to-blue-50 my-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a 3W Online?
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Precisando transformar o seu negócio? Nossa equipe altamente qualificada está pronta para te ajudar a alcançar resultados extraordinários. Com estratégias personalizadas e focadas em dados, desenvolvemos soluções de alto impacto para impulsionar sua marca e alcançar seus objetivos.
            </p>
            
            <div class="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <p class="text-yellow-800 font-semibold">
                🎯 Pronto para dar o próximo passo? Entre em contato conosco agora e agende uma consultoria gratuita. 
                Nos próximos dias, os primeiros clientes garantem um desconto especial em nossos serviços. 
                Não perca essa oportunidade de transformar seu negócio!
              </p>
            </div>
            
            <a
              href="#contato"
              class="btn-primary bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🚀 Mais Informações
            </a>
          </div>
          
          <div class="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe 3W Online"
              class="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">150+</div>
                <div class="text-gray-600 font-medium">Projetos Entregues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding bg-white my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Mais do que uma Agência de Marketing e Software
          </h2>
          <div class="max-w-4xl mx-auto">
            <p class="text-lg text-gray-600 mb-8">
              No GRUPO 3W ONLINE, acreditamos que a inovação nasce da coragem de desafiar o convencional e explorar o novo. Nossa missão é impulsionar a mudança e oferecer ferramentas para gerar impacto duradouro. Somos uma força criativa, especializada em soluções digitais, com o compromisso de levar os negócios de nossos clientes a um novo patamar.
            </p>
            
            <p class="text-lg text-gray-600 mb-8">
              O Grupo 3W Online iniciou as atividades em 2020 com a missão de impulsionar o crescimento de empresas locais no ambiente digital. Desde então, temos conquistado resultados excepcionais para nossos clientes, construindo uma trajetória de sucesso marcada pela inovação e compromisso.
            </p>
            
            <p class="text-lg text-gray-600 mb-8">
              Nosso foco é oferecer soluções digitais eficientes, criando não apenas marcas, mas parcerias duradouras que geram resultados consistentes. Se você busca uma agência de marketing e software que vai além do convencional, a 3W Online é a escolha ideal para levar seu negócio ao próximo nível.
            </p>
            
            <p class="text-lg text-gray-600">
              Explore nosso site para conhecer nossos serviços e descobrir como podemos ajudá-lo a alcançar seus objetivos. Seja bem-vindo à nossa jornada de transformação digital!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold mb-6">
            Pronto para começar sua jornada conosco?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Se você busca marketing, publicidade e propaganda que vai além do convencional, somos a escolha certa.
            Pronto para levar o seu negócio para o próximo nível? Entre em contato hoje mesmo! Estamos ansiosos para colaborar com você e ajudá-lo a alcançar o sucesso que você merece.
          </p>
          <a
            href="#contato"
            class="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            💬 Fale Conosco
          </a>
        </div>
      </div>
    </section>

    <!-- Differentials Section -->
    <section class="section-padding bg-gray-50 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Descubra o que nos torna excepcionais:
          </h2>
        </div>
        
        <div class="space-y-12">
          <!-- Compromisso com Resultados -->
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <ChartBarIcon class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                ✅ Compromisso com Resultados Tangíveis
              </h3>
              <p class="text-lg text-gray-600">
                Não nos contentamos com o "bom o suficiente". Aqui na 3W Online, nossa missão é impulsionar o sucesso de nossos clientes através de estratégias e campanhas que geram resultados reais e mensuráveis. Não apenas criamos anúncios bonitos, mas sim soluções que convertem e impulsionam o crescimento do seu negócio.
              </p>
            </div>
          </div>
          
          <!-- Equipe Especializada -->
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <UserGroupIcon class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                👥 Equipe de Especialistas Apaixonados
              </h3>
              <p class="text-lg text-gray-600">
                Por trás de cada projeto de sucesso, há uma equipe dedicada e apaixonada. Na 3W Online, reunimos os melhores talentos da indústria, cada um trazendo uma perspectiva única e habilidades excepcionais para a mesa. Nossa paixão pelo que fazemos transparece em cada pixel de design, em cada linha de código e em cada estratégia de marketing concebida para nossos clientes.
              </p>
            </div>
          </div>
          
          <!-- Inovação -->
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <LightBulbIcon class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                🚀 Inovação Constante
              </h3>
              <p class="text-lg text-gray-600">
                O mundo digital está em constante evolução, e nós estamos na vanguarda dessa mudança. Na 3W Online, abraçamos a inovação como parte do nosso DNA. Estamos sempre explorando novas tecnologias, tendências e estratégias para garantir que nossos clientes estejam um passo à frente da concorrência.
              </p>
            </div>
          </div>
          
          <!-- Personalização -->
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <CogIcon class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                🎯 Personalização Sob Medida
              </h3>
              <p class="text-lg text-gray-600">
                Entendemos que cada negócio é único, e não existe uma solução universal. É por isso que nos dedicamos a entender profundamente as necessidades e os objetivos de cada cliente. Na 3W Online, não oferecemos soluções genéricas, mas sim estratégias personalizadas que se alinham perfeitamente com as expectativas e metas específicas de cada cliente.
              </p>
            </div>
          </div>
          
          <!-- Transparência -->
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon class="w-8 h-8 text-white" />
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                🛡️ Transparência e Integridade
              </h3>
              <p class="text-lg text-gray-600">
                Acreditamos que a confiança é a base de qualquer relacionamento bem-sucedido. Na 3W Online, valorizamos a transparência e a integridade em tudo o que fazemos. Nossos clientes podem confiar em nós para fornecer soluções honestas, éticas e eficazes que impulsionam o crescimento de seus negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offer Section -->
    <section class="section-padding bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white relative overflow-hidden py-16">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="container relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold text-lg mb-6 animate-pulse">
            🔥 OFERTA EXCLUSIVA
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Transforme sua presença online hoje!
          </h2>
          <p class="text-xl mb-8">
            Oferta exclusiva: apenas para os próximos clientes deste mês!
          </p>
          <a
            href="#servicos-detalhados"
            class="btn-primary bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🎁 Aproveitar Oferta
          </a>
        </div>
      </div>
    </section>

    <!-- Detailed Services Section -->
    <section id="servicos-detalhados" class="section-padding bg-white my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Nossa Abordagem em Serviços de Marketing Digital
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para que sua marca se destaque no mercado digital.
            Nosso foco é fornecer uma gestão completa e estratégica das principais ferramentas digitais.
          </p>
        </div>
        
        <div class="text-center mb-12">
          <router-link to="/contato" class="btn-primary text-lg px-8 py-4 rounded-full">
            📋 Solicitar Orçamento
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Gestão de Redes Sociais -->
          <div class="card p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <ChatBubbleBottomCenterTextIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">📱 Gestão de Redes Sociais</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Aumente sua visibilidade online com estratégias de marketing personalizadas. 
              Planejamos e executamos ações para ampliar o alcance da sua marca nas redes sociais.
            </p>
            <router-link to="/servicos/gestao-redes-sociais" class="text-pink-600 hover:text-pink-700 font-semibold">
              📱 Mais Informações →
            </router-link>
          </div>
          
          <!-- Gestão de Anúncios -->
          <div class="card p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <PresentationChartLineIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">🎯 Gestão de Anúncios</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Criamos campanhas direcionadas para atrair visitantes qualificados e gerar conversões reais, 
              maximizando os resultados do seu investimento.
            </p>
            <router-link to="/servicos/gestao-anuncios" class="text-blue-600 hover:text-blue-700 font-semibold">
              🎯 Mais Informações →
            </router-link>
          </div>
          
          <!-- Criação de Sites -->
          <div class="card p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <ComputerDesktopIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">💻 Criação de Sites</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Desenvolvemos sites profissionais, modernos e funcionais, que traduzem sua visão 
              e atendem às necessidades do seu negócio.
            </p>
            <router-link to="/servicos/criacao-sites" class="text-green-600 hover:text-green-700 font-semibold">
              💻 Mais Informações →
            </router-link>
          </div>
          
          <!-- Desenvolvimento de Software -->
          <div class="card p-8 hover:shadow-2xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <CubeIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">⚙️ Desenvolvimento de Software</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Oferecemos soluções tecnológicas personalizadas para otimizar processos, 
              aumentar a eficiência e impulsionar o crescimento do seu negócio.
            </p>
            <router-link to="/servicos/criacao-sistemas" class="text-purple-600 hover:text-purple-700 font-semibold">
              ⚙️ Mais Informações →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Service Detail -->
    <section class="section-padding bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <ChatBubbleBottomCenterTextIcon class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">📱 Serviço de Mídia Social</h2>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Construa sua marca online com confiança
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              Descubra como podemos ajudá-lo a construir e cultivar uma comunidade online sólida e engajada. 
              Com nosso serviço de gerenciamento de mídia social, oferecemos uma abordagem pessoal e estratégica 
              para maximizar o potencial da sua marca nas plataformas de mídia social.
            </p>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">
              O poder da conexão autêntica
            </h4>
            <p class="text-gray-600 mb-8">
              Oferecemos gerenciamento profissional de mídia social para aumentar o alcance e a visibilidade 
              da sua marca nas plataformas de mídia social.
            </p>
            <router-link to="/servicos/gestao-redes-sociais" class="btn-primary bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              📱 Mais Informações
            </router-link>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gestão de Redes Sociais"
              class="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Website Service Detail -->
    <section class="section-padding bg-gradient-to-br from-green-50 to-teal-50 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Criação de Sites"
              class="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div class="order-1 lg:order-2">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                <ComputerDesktopIcon class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-3xl font-bold text-gray-900">💻 Serviço de Criação de Sites</h2>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Construa uma presença online impactante
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              Desenvolvemos sites profissionais e responsivos que atendem às necessidades exclusivas do seu negócio, 
              garantindo uma presença online impactante.
            </p>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">
              Design personalizado e funcionalidade avançada
            </h4>
            <p class="text-gray-600 mb-8">
              Nossa equipe trabalha em estreita colaboração com você para criar site e sistemas que refletem 
              a essência da sua marca e oferece uma experiência excepcional.
            </p>
            <router-link to="/servicos/criacao-sites" class="btn-primary bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
              💻 Mais Informações
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section id="contato" class="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-600 text-white relative overflow-hidden py-16">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar sua jornada conosco?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Receba um orçamento personalizado para o seu projeto.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <a
              href="https://wa.me/5541996924829?text=Olá! Vi a landing page de anúncios e gostaria de saber mais sobre os serviços da 3W Online."
              target="_blank"
              class="btn-secondary bg-green-500 hover:bg-green-600 text-white border-green-500 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              💬 WhatsApp
            </a>
            
            <router-link 
              to="/contato"
              class="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              📋 Solicitar Orçamento
            </router-link>
          </div>
          
          <p class="text-sm text-blue-200">
            *Orçamento sem Compromisso.
          </p>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
      <div class="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 right-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-float" style="animation-delay: 2s;"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  CogIcon,
  ShieldCheckIcon,
  CubeIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
.landing-ads {
  font-family: 'Inter', sans-serif;
}

.service-card {
  @apply bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out 0.3s both;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

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

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom button styles */
.btn-primary {
  @apply inline-block text-center font-semibold transition-all duration-300 no-underline;
}

.btn-secondary {
  @apply inline-block text-center font-semibold transition-all duration-300 no-underline;
}

.btn-outline {
  @apply inline-block text-center font-semibold border-2 px-6 py-3 rounded-lg transition-all duration-300 no-underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .service-card {
    @apply p-6;
  }
  
  .hero-section h1 {
    @apply text-3xl;
  }
  
  .hero-section p {
    @apply text-lg;
  }
}
</style>