export const siteConfig = {
  name: 'GPA Tools',
  url: 'https://qianwindz.github.io/GPA_Calculate',
  basePath: '/GPA_Calculate'
};

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedPath === '/') {
    return siteConfig.url;
  }

  return `${siteConfig.url}${normalizedPath}`;
}
