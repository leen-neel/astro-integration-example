import { defineConfig } from "astro/config";
import init_test from "./src/integrations/awesomeIntegration";

// https://astro.build/config
export default defineConfig({
  integrations: [init_test()],
});
