module.exports = {
    webpack: (config, { dev, isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false
        };
      }
      return config;
    }
  };
  