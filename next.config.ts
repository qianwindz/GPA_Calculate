import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoBasePath = '/GPA_Calculate';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? repoBasePath : undefined,
  assetPrefix: isGitHubPages ? repoBasePath : undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
