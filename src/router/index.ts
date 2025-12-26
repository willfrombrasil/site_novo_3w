import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Regulamento from '../views/Regulamento.vue'
import Institucional from '../views/Institucional.vue'

// Landing Pages
import SocialMediaManagement from '../views/services/SocialMediaManagement.vue'
import AdsManagement from '../views/services/AdsManagement.vue'
import WebDevelopment from '../views/services/WebDevelopment.vue'
import AppDevelopment from '../views/services/AppDevelopment.vue'
import MarketingConsulting from '../views/services/MarketingConsulting.vue'
import CampaignPlanning from '../views/services/CampaignPlanning.vue'
import GraphicDesign from '../views/services/GraphicDesign.vue'
import Advertising from '../views/services/Advertising.vue'
import BusinessOrganization from '../views/services/BusinessOrganization.vue'
import PublicRelations from '../views/services/PublicRelations.vue'
import MarketingDigital from '../views/services/MarketingDigital.vue'
import SystemDevelopment from '../views/services/SystemDevelopment.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  },
  {
    path: '/servicos',
    name: 'Services',
    component: Services
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/privacidade',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/termos',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/regulamento',
    name: 'Regulamento',
    component: Regulamento
  },
  {
    path: '/institucional',
    name: 'Institucional',
    component: Institucional
  },
  // serviços
  {
    path: '/servicos/gestao-redes-sociais',
    name: 'SocialMediaManagement',
    component: SocialMediaManagement
  },
  {
    path: '/servicos/gestao-anuncios',
    name: 'AdsManagement',
    component: AdsManagement
  },
  {
    path: '/servicos/criacao-sites',
    name: 'WebDevelopment',
    component: WebDevelopment
  },
  {
    path: '/servicos/desenvolvimento-apps',
    name: 'AppDevelopment',
    component: AppDevelopment
  },
  {
    path: '/servicos/consultoria-marketing',
    name: 'MarketingConsulting',
    component: MarketingConsulting
  },
  {
    path: '/servicos/planejamento-campanhas',
    name: 'CampaignPlanning',
    component: CampaignPlanning
  },
  {
    path: '/servicos/design-grafico',
    name: 'GraphicDesign',
    component: GraphicDesign
  },
  {
    path: '/servicos/publicidade',
    name: 'Advertising',
    component: Advertising
  },
  {
    path: '/servicos/organizacao-comercial',
    name: 'BusinessOrganization',
    component: BusinessOrganization
  },
  {
    path: '/servicos/relacoes-publicas',
    name: 'PublicRelations',
    component: PublicRelations
  },
  {
    path: '/servicos/marketing-digital',
    name: 'MarketingDigital',
    component: MarketingDigital
  },
  {
    path: '/servicos/criacao-sistemas',
    name: 'SystemDevelopment',
    component: SystemDevelopment
  },
  {
    path: '/ferramentas',
    name: 'Tools',
    component: () => import('../views/Tools.vue')
  },
  //blog
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue')
  },
  //lp
  {
    path: '/lp/3wonline',
    name: 'LpHome',
    component: () => import('../views/lp/G3w.vue')
    ,meta: { noLayout: true }
  },
  {
    path: '/lp/anuncios',
    name: 'LpAds',
    component: () => import('../views/lp/Ads.vue')
    ,meta: { noLayout: true }
  },
  {
    path: '/lp/mkt',
    name: 'LpMarketing',
    component: () => import('../views/lp/Marketing.vue')
    ,meta: { noLayout: true }
  },
  {
    path: '/lp/sites-sistemas',
    name: 'LpSitesSistemas',
    component: () => import('../views/lp/SitesSistemas.vue')
    ,meta: { noLayout: true }
  },
    {
    path: '/portifolio/william',
    name: 'WilliamPortfolio',
    component: () => import('../views/lp/PortfolioWilliam.vue')
    ,meta: { noLayout: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
      meta: { noLayout: false }
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router