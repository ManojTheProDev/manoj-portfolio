import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";
import obfuscator from "rollup-plugin-javascript-obfuscator";
import compression from "vite-plugin-compression";

const isProd = process.env.NODE_ENV === "production";

// javascript-obfuscator options — tweak carefully
const obfuscatorOptions = {
  rotateStringArray: true,
  stringArray: true,
  stringArrayThreshold: 0.75,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: true,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  // domainLock: ['yourdomain.com'], // optional - will break when run on other host
  // identifierNamesGenerator: 'hexadecimal',
  // reservedNames: ['^__TO_KEEP_'] // use to keep names unchanged
};

export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: false,
      disable: false,
      threshold: 1024, // only assets bigger than 1kb
      algorithm: "gzip", // 'gzip' | 'brotliCompress'
      ext: ".gz",
    }),
  ],
  build: {
    target: "es2019",
    minify: "terser", // 'esbuild' is faster but terser gives finer control (mangle options)
    sourcemap: false, // IMPORTANT: disable source maps for production
    brotliSize: true,
    rollupOptions: {
      // This plugin array is passed to rollup for final bundling.
      // Terser for extra aggressive minimization + optional obfuscation
      plugins: [
        terser({
          compress: {
            passes: 3,
            drop_console: true, // remove console.* calls in production
            drop_debugger: true,
          },
          mangle: {
            toplevel: true,
          },
          format: {
            comments: false,
          },
        }),
        // Optional: run obfuscator as a last step to make the final bundle harder to read.
        // WARNING: obfuscation can significantly slow build and may increase size.
        ...(isProd ? [obfuscator(obfuscatorOptions)] : []),
      ],
      output: {
        // control chunk file names (optional)
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(css)$/.test(name ?? ""))
            return "assets/css/[name]-[hash][extname]";
          return "assets/[name]-[hash][extname]";
        },
        manualChunks(id) {
          // ensure large libs are split to vendor chunks for caching
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // reduce inlineDynamicImports if desired
    chunkSizeWarningLimit: 2000, // raise warning limit if you have large chunks
  },
  server: {
    host: true, // bind to 0.0.0.0
    port: 3000, // ensure port
    strictPort: true, // fail if port is taken
  },
});
