import { sentryVitePlugin } from "@sentry/vite-plugin";
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), visualizer() as PluginOption, sentryVitePlugin({
        org: "aligoligo",
        project: "aliogo_oligo"
    })],
    resolve: {
        alias: [
          { find: "@", replacement: "/src" },
        ],
      },
});