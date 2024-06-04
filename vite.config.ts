import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        // uncommenting this does not work
        alias: {
        },
        globals: true,
        environment: "node",
        environmentOptions: {},
        setupFiles: ["./test.setup.ts"],
        server: {
            deps: {
                inline: ["@sideway/address"],
            },
        },
    },
});
