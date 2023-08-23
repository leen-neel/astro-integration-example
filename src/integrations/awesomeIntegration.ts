import type { AstroIntegration, AstroConfig } from "astro";

export default function init_test(): AstroIntegration {
  return {
    name: "init_test",
    hooks: {
      "astro:config:setup": () => {
        console.log("hello world");
      },
    },
  };
}
