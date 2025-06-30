import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    target: "esnext",
    minify: "esbuild",
    // Optimize chunks for better loading performance
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          react: ["react", "react-dom"],
          
          // Router
          router: ["react-router-dom"],
          
          // UI framework - Radix components
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip"
          ],
          
          // Animation libraries (separate for lazy loading)
          "framer-motion": ["framer-motion"],
          "three": ["three"],
          
          // Data fetching and state management
          query: ["@tanstack/react-query"],
          
          // Form handling
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
          
          // Utilities
          utils: ["clsx", "class-variance-authority", "tailwind-merge", "date-fns"],
          
          // Analytics (separate chunk for better caching)
          analytics: ["@vercel/analytics", "@vercel/speed-insights"],
          
          // Icons (separate for better caching)
          icons: ["lucide-react"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react", 
      "react-dom", 
      "react-router-dom",
      "@tanstack/react-query",
      "lucide-react",
    ],
    // Exclude heavy animation libraries from pre-bundling
    exclude: ["framer-motion", "three"],
    force: false,
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    target: "esnext",
    // Drop console logs in production
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
  preview: {
    port: 8080,
    host: "::",
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "camelCase",
    },
  },
}));
