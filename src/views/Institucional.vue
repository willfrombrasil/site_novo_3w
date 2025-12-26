<template>
  <div>
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link>
          <ChevronRightIcon class="w-4 h-4 breadcrumb-separator" />
          <span>Institucional</span>
        </div>
        <h1 class="page-hero-title">3W Online</h1>
        <p class="page-hero-subtitle">
          Transformando negócios através da tecnologia e marketing digital desde 2019
        </p>
      </div>
    </section>
    
    <!-- Company Overview -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title">Mais do que uma Agência de Marketing e Software</h2>
            <p class="text-lg text-gray-600 mb-6">
              No GRUPO 3W ONLINE, acreditamos que a inovação nasce da coragem de desafiar o convencional e explorar o novo. Nossa missão é impulsionar a mudança e oferecer ferramentas para gerar impacto duradouro. Somos uma força criativa, especializada em soluções digitais, com o compromisso de levar os negócios de nossos clientes a um novo patamar.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              O Grupo 3W Online iniciou as atividades em 2020 com a missão de impulsionar o crescimento de empresas locais no ambiente digital. Desde então, temos conquistado resultados excepcionais para nossos clientes, construindo uma trajetória de sucesso marcada pela inovação e compromisso.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Nosso foco é oferecer soluções digitais eficientes, criando não apenas marcas, mas parcerias duradouras que geram resultados consistentes. Se você busca uma agência de marketing e software que vai além do convencional, a 3W Online é a escolha ideal para levar seu negócio ao próximo nível.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Explore nosso site para conhecer nossos serviços e descobrir como podemos ajudá-lo a alcançar seus objetivos. Seja bem-vindo à nossa jornada de transformação digital!
            </p>
            
            <!-- Company Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">150+</div>
                <div class="text-gray-600">Projetos Entregues</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div class="text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe 3W Online"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- What Makes Us Exceptional Section -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Descubra o que nos torna excepcionais</h2>
          <p class="section-subtitle">Os diferenciais que fazem da 3W Online sua melhor escolha</p>
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
    
    <!-- Mission, Vision, Values -->
    <section class="section-padding bg-gray-50 mb-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossos Pilares</h2>
          <p class="section-subtitle">Os valores que guiam nossa empresa</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <RocketLaunchIcon class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Missão</h3>
            <p class="text-gray-600">
              Transformar ideias em resultados concretos, oferecendo soluções digitais 
              que impulsionam o crescimento e o sucesso dos nossos clientes através de 
              tecnologia inovadora e estratégias de marketing eficazes.
            </p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <EyeIcon class="w-8 h-8 text-secondary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Visão</h3>
            <p class="text-gray-600">
              Ser reconhecida como a principal referência em soluções digitais integradas 
              no Brasil, contribuindo para o crescimento sustentável dos negócios e 
              democratizando o acesso à tecnologia de qualidade.
            </p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon class="w-8 h-8 text-accent-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Valores</h3>
            <p class="text-gray-600">
              Inovação constante, compromisso com a excelência, transparência nas relações, 
              foco no cliente, trabalho em equipe e responsabilidade social. Estes valores 
              norteiam todas as nossas decisões e ações.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Company Information -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Legal Information -->
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Informações Legais</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <BuildingOfficeIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Razão Social</h4>
                  <p class="text-gray-600">3W Online Soluções Digitais LTDA</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <DocumentTextIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">CNPJ</h4>
                  <p class="text-gray-600">25.530.623/0001-05</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <MapPinIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Endereço</h4>
                  <p class="text-gray-600">Curitiba, Paraná, Brasil</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <CalendarDaysIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Fundação</h4>
                  <p class="text-gray-600">2019</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <UserGroupIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Porte</h4>
                  <p class="text-gray-600">Microempresa</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contato</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <PhoneIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Telefone</h4>
                  <p class="text-gray-600">(41) 99692-4829</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <EnvelopeIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">E-mail</h4>
                  <p class="text-gray-600">contato@3wonline.com.br</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <ClockIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Horário de Atendimento</h4>
                  <p class="text-gray-600">Segunda à Sexta: 8h às 18h</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <GlobeAltIcon class="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 class="font-semibold text-gray-900">Website</h4>
                  <p class="text-gray-600">www.3wonline.com.br</p>
                </div>
              </div>
            </div>
            
            <!-- Quick Actions -->
            <div class="mt-8 space-y-3">
              <a
                href="tel:+5541996924829"
                class="btn-primary w-full text-center"
              >
                📞 Ligar Agora
              </a>
              <a
                href="https://wa.me/5541996924829?text=Olá! Gostaria de conhecer melhor a 3W Online."
                target="_blank"
                class="btn-secondary w-full text-center"
              >
                💬 WhatsApp
              </a>
              <router-link to="/contato" class="btn-outline w-full text-center">
                📧 Enviar E-mail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Overview -->
    <section class="section-padding bg-gray-50 my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Áreas de Atuação</h2>
          <p class="section-subtitle">Soluções completas para transformar seu negócio</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ChatBubbleBottomCenterTextIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Marketing Digital</h3>
            <p class="text-sm text-gray-600">Gestão de redes sociais e campanhas publicitárias</p>
          </div>
          
          <div class="card p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ComputerDesktopIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Desenvolvimento Web</h3>
            <p class="text-sm text-gray-600">Sites, sistemas e e-commerce personalizados</p>
          </div>
          
          <div class="card p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DevicePhoneMobileIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Apps Mobile</h3>
            <p class="text-sm text-gray-600">Aplicativos para iOS e Android</p>
          </div>
          
          <div class="card p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PaintBrushIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Design Gráfico</h3>
            <p class="text-sm text-gray-600">Identidade visual e materiais gráficos</p>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <router-link to="/servicos" class="btn-primary">
            Ver Todos os Serviços
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Certifications and Partnerships -->
    <section class="section-padding my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Certificações e Parcerias</h2>
          <p class="section-subtitle">Reconhecimento e qualificações que garantem excelência</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">G</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Google Partner</h3>
            <p class="text-sm text-gray-600">Certificação em Google Ads e Analytics</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">M</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Meta Business</h3>
            <p class="text-sm text-gray-600">Parceiro certificado em Facebook e Instagram Ads</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckBadgeIcon class="w-10 h-10 text-green-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">ISO 9001</h3>
            <p class="text-sm text-gray-600">Gestão da qualidade certificada</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon class="w-10 h-10 text-purple-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">LGPD Compliance</h3>
            <p class="text-sm text-gray-600">Conformidade com proteção de dados</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Timeline -->
    <section class="section-padding bg-gray-50 my-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossa Trajetória</h2>
          <p class="section-subtitle">Marcos importantes da nossa história</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2019</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Fundação da 3W Online</h3>
                <p class="text-gray-600">
                  Início das atividades com foco em desenvolvimento web e marketing digital 
                  para pequenas e médias empresas em Curitiba.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2020</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Expansão dos Serviços</h3>
                <p class="text-gray-600">
                  Ampliação do portfólio com desenvolvimento de aplicativos mobile e 
                  sistemas personalizados. Primeiros 50 projetos entregues.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2021</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Certificações Importantes</h3>
                <p class="text-gray-600">
                  Obtenção das certificações Google Partner e Meta Business Partner, 
                  consolidando nossa expertise em marketing digital.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2022</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Crescimento Nacional</h3>
                <p class="text-gray-600">
                  Expansão do atendimento para todo o Brasil, com clientes em mais de 
                  15 estados. Marco de 100 projetos entregues.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2023</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Inovação e Tecnologia</h3>
                <p class="text-gray-600">
                  Implementação de IA em nossos processos e lançamento de soluções 
                  inovadoras para e-commerce e automação comercial.
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold">2024</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Consolidação e Futuro</h3>
                <p class="text-gray-600">
                  Mais de 150 projetos entregues, equipe especializada e foco em 
                  soluções sustentáveis e responsabilidade social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="section-padding my16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Nossa Equipe</h2>
          <p class="section-subtitle">Profissionais especializados e apaixonados pelo que fazem</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CodeBracketIcon class="w-12 h-12 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Desenvolvedores</h3>
            <p class="text-gray-600">Especialistas em tecnologias modernas e melhores práticas</p>
          </div>
          
          <div class="text-center">
            <div class="w-24 h-24 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <PresentationChartLineIcon class="w-12 h-12 text-secondary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Marketing</h3>
            <p class="text-gray-600">Estrategistas digitais focados em resultados mensuráveis</p>
          </div>
          
          <div class="text-center">
            <div class="w-24 h-24 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <PaintBrushIcon class="w-12 h-12 text-accent-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Designers</h3>
            <p class="text-gray-600">Criativos experientes em UX/UI e identidade visual</p>
          </div>
          
          <div class="text-center">
            <div class="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <UserGroupIcon class="w-12 h-12 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Consultores</h3>
            <p class="text-gray-600">Especialistas em estratégia e gestão de projetos</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Social Responsibility -->
    <section class="section-padding bg-gray-50 mt-16 py-16">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title">Responsabilidade Social</h2>
          <p class="section-subtitle">Nosso compromisso com a sociedade e meio ambiente</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GlobeAltIcon class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Sustentabilidade</h3>
            <p class="text-gray-600">
              Utilizamos serviços de cloud computing sustentáveis e promovemos 
              a digitalização para reduzir o uso de papel e recursos físicos.
            </p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AcademicCapIcon class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Educação</h3>
            <p class="text-gray-600">
              Oferecemos workshops gratuitos sobre marketing digital e tecnologia 
              para pequenos empreendedores e estudantes.
            </p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HandRaisedIcon class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Comunidade</h3>
            <p class="text-gray-600">
              Apoiamos ONGs locais com serviços pro bono e participamos de 
              iniciativas de desenvolvimento tecnológico na região.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Pronto para começar sua jornada conosco?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Se você busca marketing, publicidade e propaganda que vai além do convencional, somos a escolha certa.
            Pronto para levar o seu negócio para o próximo nível? Entre em contato hoje mesmo! Estamos ansiosos para colaborar com você e ajudá-lo a alcançar o sucesso que você merece.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contato" class="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Fale Conosco
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
  RocketLaunchIcon,
  EyeIcon,
  HeartIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  MapPinIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  ChartBarIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Institucional',
  meta: [
    { name: 'description', content: 'Somos especialistas em marketing digital para empresas locais e pequenos negócios. Acreditamos que a verdadeira inovação vem da coragem de desafiar o status quo e abraçar o desconhecido.' },
    { name: 'keywords', content: 'marketing digital, empresas locais, pequenos negócios, inovação, estratégias de marketing' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.3wonline.com.br/institucional' },
  ],
})
</script>