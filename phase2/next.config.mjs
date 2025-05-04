/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: '.next',
   
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Login.html',
          permanent: false,
        },
      ]
    }
  };
  
  export default nextConfig;