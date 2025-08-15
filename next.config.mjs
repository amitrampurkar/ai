const repoBase = process.env.BASE_PATH || "";
export default {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: repoBase,
  assetPrefix: repoBase ? `${repoBase}/` : undefined,
  trailingSlash: true
};
