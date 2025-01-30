import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enables global `test` and `expect`
    environment: "node", // 'jsdom' for frontend testing
    coverage: {
      provider: "istanbul", // Enables code coverage reports
    },
  },
});
