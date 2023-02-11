import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets/icons'),
            to: resolve(__dirname, 'public/assets/icons')
          }
        ],
      })
    )

    return config;
  },
}

export default nextConfig;
