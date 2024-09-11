import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ['../shared/**/*.{ts,tsx}'], // Adjust the path as necessary

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/addon-styling",
    "@storybook/addon-onboarding" // Consider moving this to the end or removing if not needed
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["../public"], // Ensure the path is correct

  docs: {
    autodocs: true, // Enable autodocs for better documentation integration
  },

  typescript: {
    reactDocgen: "react-docgen-typescript", // Ensure you have the correct package installed
  },

  webpackFinal: async (config) => {
    // Custom Webpack configuration can go here if needed
    return config;
  },
};

export default config;
