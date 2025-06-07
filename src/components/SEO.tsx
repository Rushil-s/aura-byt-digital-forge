import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'AuraByt – Enterprise IT Consultancy & Digital Solutions',
  description = 'AuraByt is a Toronto-based enterprise IT consultancy specializing in software development, digital transformation, and infrastructure solutions. Transform your business with our expert team.',
  keywords = 'IT consultancy, software development, digital transformation, web development, digital marketing, IT support, Toronto, enterprise solutions, cloud solutions',
  ogImage = '/assets/aurabytlogo.png',
  canonical
}) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://aurabyt.com';
  const currentUrl = canonical || `${baseUrl}${pathname}`;

  React.useEffect(() => {
    // Update the document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaElement = document.querySelector(selector);
      
      if (metaElement) {
        metaElement.setAttribute('content', content);
      } else {
        metaElement = document.createElement('meta');
        if (property) {
          metaElement.setAttribute('property', name);
        } else {
          metaElement.setAttribute('name', name);
        }
        metaElement.setAttribute('content', content);
        document.head.appendChild(metaElement);
      }
    };

    // Update canonical link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', currentUrl);
    } else {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      canonicalElement.setAttribute('href', currentUrl);
      document.head.appendChild(canonicalElement);
    }

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'AuraByt');
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'AuraByt', true);
    
    // Twitter meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', currentUrl);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);
    updateMetaTag('twitter:site', '@aurabyt_inc');
    
    // Additional SEO meta tags
    updateMetaTag('theme-color', '#3B82F6');
    updateMetaTag('msapplication-TileColor', '#3B82F6');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    
  }, [title, description, keywords, currentUrl, ogImage]);

  return null;
};

export default SEO;