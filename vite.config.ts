import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    // Генерируем ресурсы с постоянными именами (без хешей) для простоты ссылок
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Улучшаем производительность с помощью разделения кода
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-tooltip', 'lucide-react'],
          'query': ['@tanstack/react-query'],
        }
      }
    },
    // Оптимизируем сборку для быстрой загрузки
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    cssMinify: true,
    target: 'es2015',  // Целевые современные браузеры для уменьшения размера бандла
    // Разделяем код на чанки для оптимизации загрузки
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    // Добавляем предварительную загрузку критических ресурсов
    assetsInlineLimit: 4096,
    // Оптимизируем изображения
    assetsDir: 'assets',
    // Включаем сжатие Brotli
    brotliSize: true,
    // Добавляем оптимизации для более быстрой разработки
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      esbuildOptions: {
        target: 'es2020',
        minify: true,
        treeShaking: true
      },
      // Добавляем предварительную оптимизацию зависимостей
      exclude: ['@radix-ui/react-toast', '@radix-ui/react-tooltip']
    },
    // Добавляем кэширование для разработки
    cacheDir: '.vite',
    // Оптимизируем загрузку модулей
    build: {
      modulePreload: true,
      cssCodeSplit: true
    },
    // Добавляем предварительную загрузку
    preload: true,
    // Оптимизируем изображения
    image: {
      quality: 80,
      format: ['webp', 'avif']
    }
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Для корректной работы на GitHub Pages с HashRouter
  base: '/fdfdsdfds/',
  // Добавляем предварительную сборку
  preview: {
    port: 8080,
    strictPort: true
  }
}));
