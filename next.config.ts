import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/', // redirect /auth -> /
        permanent: false, // use false for 307 temporary redirect
      },
      {
        // Redirect Google OAuth callback (if not caught by BetterAuth)
        source: '/api/auth/callback/google',
        destination: '/', // or '/dashboard' if you want to land there after login
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

export default nextConfig;
*/
