import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allow describe/it/test without imports
    environment: "jsdom", // simulate browser for React
    setupFiles: "./src/setupTests.ts", // run before tests
  },
});
