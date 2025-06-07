// Optimized style updater with performance improvements
export const updateStyles = () => {
  const newStyles = `
  /* Optimized animated background elements */
  .animated-bg {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
    will-change: transform;
  }
  
  .animated-bg-1 {
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.15));
    width: 40vw;
    height: 40vw;
    max-width: 600px;
    max-height: 600px;
    top: -5%;
    right: -15%;
    animation: float-slow 25s ease-in-out infinite alternate;
  }
  
  .animated-bg-2 {
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.2));
    width: 35vw;
    height: 35vw;
    max-width: 450px;
    max-height: 450px;
    bottom: -5%;
    left: -10%;
    animation: float-slow 20s ease-in-out infinite alternate-reverse;
  }
  
  /* Optimized floating animation */
  @keyframes float-slow {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(1%, 1%) scale(1.02);
    }
    100% {
      transform: translate(-1%, -0.5%) scale(0.98);
    }
  }
  
  /* Enhanced logo glow effect - optimized */
  .logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.3) 0%,
      rgba(99, 102, 241, 0.2) 30%,
      rgba(59, 130, 246, 0.1) 70%,
      transparent 100%
    );
    border-radius: 50%;
    filter: blur(15px);
    opacity: 0.6;
    z-index: -1;
    animation: pulse-glow 4s ease-in-out infinite;
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
  
  /* Optimized particle effect */
  .particle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(139, 92, 246, 0.2);
    pointer-events: none;
    z-index: 1;
    will-change: transform;
  }
  
  /* Optimized mouse tracking effect */
  .mouse-follower {
    position: fixed;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(
      circle, 
      rgba(139, 92, 246, 0.08) 0%, 
      rgba(99, 102, 241, 0.04) 50%, 
      transparent 70%
    );
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    will-change: transform;
  }
  
  /* Optimized section reveal animation */
  .reveal-section {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .reveal-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Optimized button hover effects */
  .btn-tech-hover {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    will-change: transform;
  }
  
  .btn-tech-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: all 0.5s ease;
  }
  
  .btn-tech-hover:hover::before {
    left: 100%;
  }
  
  /* Optimized tilt effect */
  .tilt-card {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: transform 0.2s ease;
    will-change: transform;
  }
  
  .tilt-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.2s ease;
    will-change: transform;
  }
  
  /* Optimized loading animation */
  .loading-animation {
    position: relative;
    width: 60px;
    height: 60px;
  }
  
  .loading-animation div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #8B5CF6;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  
  .loading-animation div:nth-child(1) {
    left: 8px;
    animation: loading-animation1 0.6s infinite;
  }
  
  .loading-animation div:nth-child(2) {
    left: 8px;
    animation: loading-animation2 0.6s infinite;
  }
  
  .loading-animation div:nth-child(3) {
    left: 32px;
    animation: loading-animation2 0.6s infinite;
  }
  
  .loading-animation div:nth-child(4) {
    left: 56px;
    animation: loading-animation3 0.6s infinite;
  }
  
  @keyframes loading-animation1 {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }
  
  @keyframes loading-animation2 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(24px, 0); }
  }
  
  @keyframes loading-animation3 {
    0% { transform: scale(1); }
    100% { transform: scale(0); }
  }
  
  /* Optimized tech grid background */
  .tech-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: -1;
  }
  
  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .animated-bg,
    .particle,
    .logo-glow,
    .loading-animation div {
      animation: none !important;
      transition: none !important;
    }
    
    .mouse-follower {
      display: none !important;
    }
    
    .reveal-section,
    .scroll-animate,
    .service-card {
      opacity: 1 !important;
      transform: none !important;
    }
  }
  
  /* GPU acceleration hints */
  .professional-card,
  .service-card,
  .scroll-animate,
  .animated-bg {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  /* Reduce layout shifts */
  .container {
    contain: layout style;
  }`;
  
  // Check if the style element already exists
  let styleElement = document.getElementById('aurabyt-animation-styles');
  
  // If it doesn't exist, create it
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'aurabyt-animation-styles';
    document.head.appendChild(styleElement);
  }
  
  // Add the styles
  styleElement.textContent = newStyles;
};

export default updateStyles;