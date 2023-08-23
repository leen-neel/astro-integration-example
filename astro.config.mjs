import { defineConfig } from "astro/config";
import awesomeIntegration from "./src/integrations/awesomeIntegration";

// https://astro.build/config
export default defineConfig({
  integrations: [
    awesomeIntegration({
      name: "Neel",
    }),
  ],
});
