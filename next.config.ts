
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: [
    'https://ide.cloud.google.com',
    'https://console.cloud.google.com',
    'https://3001-firebase-studio-1753308015982.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev',
    'https://3002-firebase-studio-1753308015982.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev'
  ]
};

export default nextConfig;
