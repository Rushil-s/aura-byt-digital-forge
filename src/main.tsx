import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import updateStyles from './utils/styleUpdater';

// Apply the animation styles
updateStyles();

createRoot(document.getElementById("root")!).render(<App />);