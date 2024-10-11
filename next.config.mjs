/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'uploadthing.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '**',
              },
          ],
    }
};

export default nextConfig;
