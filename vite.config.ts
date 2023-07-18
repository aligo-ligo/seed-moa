/// <reference types="vitest" />
/// <reference types="vite/client" />

import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer() as PluginOption],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
	},
});
