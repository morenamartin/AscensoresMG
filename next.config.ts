// next.config.js
import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // tus opciones aquí (si las tienes, como images, redirects, etc.)
  // si no tienes nada más, déjalo vacío
};

// 👇 IMPORTANTE: exporta la configuración envuelta
export default withBundleAnalyzer(nextConfig);