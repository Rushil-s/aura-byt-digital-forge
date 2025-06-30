import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';
import './styles/performance.css';

createRoot(document.getElementById("root")!).render(<App />);
