const { NODE_ENV, APP_NAME, VERCEL_URL, HOTPEPPER_API_KEY } = process.env;

const nextConfig = {
  publicRuntimeConfig: {
    env: NODE_ENV,
    APP_NAME,
    VERCEL_URL,
  },
  serverRuntimeConfig: {
    HOTPEPPER_API_KEY,
  },
};

module.exports = nextConfig;
