import { Configuration } from "@nuxt/types";

const nuxtConfig: Configuration = {
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/eslint-module"],
  build: {
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },
};

module.exports = nuxtConfig;
