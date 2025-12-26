/**
 * Configuração para Google Search Console
 * 
 * Para configurar completamente o Google Search Console, você precisa:
 * 
 * 1. Verificar propriedade no Google Search Console:
 *    - Acesse https://search.google.com/search-console
 *    - Adicione sua propriedade (www.3wonline.com.br)
 *    - Use o método de verificação por meta tag HTML
 *    - Copie o código de verificação para useGoogleServices.ts
 * 
 * 2. Submeter sitemap:
 *    - Crie um sitemap.xml (veja exemplo abaixo)
 *    - Faça upload para a raiz do site
 *    - Submeta no Search Console
 * 
 * 3. Configurar dados estruturados:
 *    - Implemente schema.org nos componentes
 *    - Use JSON-LD para dados estruturados
 */

// Schema.org para organização
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "3W Online",
  "url": "https://www.3wonline.com.br",
  "logo": "https://www.3wonline.com.br/logo.png",
  "description": "Agência especializada em marketing digital para empresas locais e pequenos negócios",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressRegion": "PR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-41-99692-4829",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://wa.me/5541996924829",
    // Adicione suas redes sociais aqui
  ]
}

// Schema.org para serviços
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Marketing Digital",
  "provider": {
    "@type": "Organization",
    "name": "3W Online"
  },
  "areaServed": "Brazil",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
}

// Schema.org para artigos do blog
export const articleSchema = (article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "3W Online",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.3wonline.com.br/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image,
  "url": article.url
})

// Meta tags padrão para SEO
export const defaultMetaTags = {
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  "http-equiv": "X-UA-Compatible",
  content: "IE=edge",
  robots: "index, follow",
  language: "pt-BR",
  author: "3W Online",
  publisher: "3W Online",
  "theme-color": "#3b82f6"
}

// Open Graph tags padrão
export const defaultOGTags = {
  "og:site_name": "3W Online",
  "og:type": "website",
  "og:locale": "pt_BR",
  "twitter:card": "summary_large_image",
  "twitter:site": "@3wonline" // Substitua pelo seu Twitter
}
