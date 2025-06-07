// Utility to validate internal and external links
export const validateLinks = () => {
  const internalLinks = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/services#web-development',
    '/services#digital-marketing',
    '/services#it-support'
  ];

  const externalLinks = [
    'https://www.facebook.com/aurabyt.inc',
    'https://twitter.com/aurabyt_inc',
    'https://www.instagram.com/aurabyt.inc',
    'https://www.linkedin.com/company/aurabyt',
    'tel:+14379252744',
    'mailto:connect@aurabyt.com'
  ];

  // Check if all internal routes are properly defined
  const checkInternalLinks = () => {
    const validRoutes = ['/', '/about', '/services', '/contact', '/thank-you'];
    const invalidLinks = internalLinks.filter(link => {
      const basePath = link.split('#')[0];
      return !validRoutes.includes(basePath);
    });
    
    if (invalidLinks.length > 0) {
      console.warn('Invalid internal links found:', invalidLinks);
    }
    
    return invalidLinks.length === 0;
  };

  // Validate external links format
  const checkExternalLinks = () => {
    const urlPattern = /^(https?:\/\/|tel:|mailto:)/;
    const invalidLinks = externalLinks.filter(link => !urlPattern.test(link));
    
    if (invalidLinks.length > 0) {
      console.warn('Invalid external links found:', invalidLinks);
    }
    
    return invalidLinks.length === 0;
  };

  return {
    internalLinksValid: checkInternalLinks(),
    externalLinksValid: checkExternalLinks(),
    allLinksValid: checkInternalLinks() && checkExternalLinks()
  };
};

// Smooth scroll to anchor links
export const smoothScrollToAnchor = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -100; // Account for fixed navbar
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// Handle anchor link clicks
export const handleAnchorClick = (href: string) => {
  if (href.includes('#')) {
    const [path, anchor] = href.split('#');
    if (window.location.pathname === path || path === '') {
      smoothScrollToAnchor(anchor);
      return true;
    }
  }
  return false;
};