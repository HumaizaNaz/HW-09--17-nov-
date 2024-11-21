import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: {
    rules: {
      // Example for handling SVG files with SVGR
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      // Aliasing imports (example)
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    moduleIdStrategy: 'deterministic', // Use 'named' for readable IDs
    treeshaking: true, // Enable tree shaking
  },
};

export default nextConfig;