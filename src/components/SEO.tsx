// src/components/SEO.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'AuraByt – Digital Innovation Consultancy',
  description = 'AuraByt is a Toronto-based IT consultancy specializing in web development, digital marketing, and IT support.',
  keywords = 'IT consultancy, web development, digital marketing, IT support, Toronto',
  ogImage = ''
}) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://aurabyt.com';
  const currentUrl = `${baseUrl}${pathname}`;

  React.useEffect(() => {
    // Update the document title
    document.title = title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph meta tags
    const ogTitleElement = document.querySelector('meta[property="og:title"]');
    if (ogTitleElement) {
      ogTitleElement.setAttribute('content', title);
    }
    
    const ogDescriptionElement = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionElement) {
      ogDescriptionElement.setAttribute('content', description);
    }
    
    const ogUrlElement = document.querySelector('meta[property="og:url"]');
    if (ogUrlElement) {
      ogUrlElement.setAttribute('content', currentUrl);
    }
    
    const ogImageElement = document.querySelector('meta[property="og:image"]');
    if (ogImageElement) {
      ogImageElement.setAttribute('content', ogImage);
    }
    
    // Update Twitter meta tags
    const twitterTitleElement = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleElement) {
      twitterTitleElement.setAttribute('content', title);
    }
    
    const twitterDescriptionElement = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionElement) {
      twitterDescriptionElement.setAttribute('content', description);
    }
    
    const twitterUrlElement = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrlElement) {
      twitterUrlElement.setAttribute('content', currentUrl);
    }
    
    const twitterImageElement = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageElement) {
      twitterImageElement.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, currentUrl, ogImage]);

  return null; // This component doesn't render anything
};

export default SEO;