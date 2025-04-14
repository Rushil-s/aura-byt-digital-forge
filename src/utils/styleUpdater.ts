// This script should be placed in a file that you'll create: src/utils/styleUpdater.ts
// It dynamically injects our new styles into index.css

export const updateStyles = () => {
    // CSS for new animations
    const newStyles = `
  /* New animated background elements */
  .animated-bg {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    z-index: -1;
    pointer-events: none;
  }
  
  .animated-bg-1 {
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.2));
    width: 50vw;
    height: 50vw;
    max-width: 700px;
    max-height: 700px;
    top: -10%;
    right: -20%;
    animation: float-slow 20s ease-in-out infinite alternate;
  }
  
  .animated-bg-2 {
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.3));
    width: 40vw;
    height: 40vw;
    max-width: 500px;
    max-height: 500px;
    bottom: -5%;
    left: -10%;
    animation: float-slow 15s ease-in-out infinite alternate-reverse;
  }
  
  .animated-bg-3 {
    background: radial-gradient(circle, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.1));
    width: 60vw;
    height: 30vw;
    max-width: 800px;
    max-height: 400px;
    top: 20%;
    left: -30%;
    animation: float-slow 25s ease-in-out infinite alternate;
    transform-origin: center center;
  }
  
  /* New floating animation variants */
  @keyframes float-slow {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(2%, 2%) scale(1.05);
    }
    100% {
      transform: translate(-2%, -1%) scale(0.95);
    }
  }
  
  /* Enhanced logo glow effect */
  .logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.5) 0%,
      rgba(99, 102, 241, 0.3) 30%,
      rgba(59, 130, 246, 0.1) 70%,
      transparent 100%
    );
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.7;
    z-index: -1;
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.7;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  
  /* Fixed navbar for better visibility on mobile */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    transition: all 0.3s ease-in-out;
  }
  
  .navbar-scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
  
  /* Particle effect for tech feel */
  .particle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(139, 92, 246, 0.3);
    pointer-events: none;
    z-index: 1;
  }
  
  /* Code typing animation effect */
  .code-animation {
    font-family: monospace;
    position: relative;
    display: inline-block;
  }
  
  .code-animation::after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: blink 1s step-end infinite;
  }
  
  /* Mouse tracking effect */
  .mouse-follower {
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(99, 102, 241, 0.05) 50%, 
      transparent 70%
    );
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  /* New section reveal animation */
  .reveal-section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  
  .reveal-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Digital rain effect for code sections */
  .digital-rain-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.05;
    pointer-events: none;
  }
  
  .digital-rain {
    color: #8B5CF6;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    position: absolute;
    user-select: none;
    pointer-events: none;
  }
  
  /* Enhanced button hover effects */
  .btn-tech-hover {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }
  
  .btn-tech-hover:hover::before {
    left: 100%;
  }
  
  /* Tilt effect for cards */
  .tilt-card {
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: transform 0.1s ease;
  }
  
  .tilt-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
  }
  
  /* Loading animation */
  .loading-animation {
    position: relative;
    width: 80px;
    height: 80px;
  }
  
  .loading-animation div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
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
  
  /* Tech grid background effect */
  .tech-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: -1;
  }
  
  /* Better mobile navbar with improved contrast */
  .mobile-navbar {
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  /* Tech lines animation */
  .tech-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  
  .tech-line {
    position: absolute;
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
    animation: tech-line-animation 8s linear infinite;
    opacity: 0;
  }
  
  @keyframes tech-line-animation {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
  
  @keyframes digital-rain-fall {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(2000px);
    }
  }
  
  /* Prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animated-bg,
    .tech-line,
    .particle,
    .logo-glow,
    .tech-lines,
    .loading-animation div,
    .digital-rain {
      animation: none !important;
      transition: none !important;
    }
    
    .mouse-follower {
      display: none !important;
    }
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
  
  // Call this function to apply styles
  export default updateStyles;