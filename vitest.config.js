/// <reference types="vitest" />
/// <reference types="vite/client" />

const react = require("@vitejs/plugin-react").default;

const { defineConfig } = require("vitest/config");

const tsconfigPaths = require("vite-tsconfig-paths").default;

module.exports = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.js"],
  },
});
