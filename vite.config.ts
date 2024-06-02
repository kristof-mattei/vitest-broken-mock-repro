import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environment: "node",
        environmentOptions: {},
        setupFiles: ["./test.setup.ts"],
        server: {
            deps: {
                inline: ["@hapi/address"],
            },
        },
    },
});
