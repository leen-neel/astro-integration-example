import type { AstroIntegration } from "astro";

type AwesomeType = {
  name: string;
};

export default function awesomeIntegration(
  options: AwesomeType
): AstroIntegration {
  return {
    name: "init_test",
    hooks: {
      "astro:config:setup": ({ command, config, injectScript }) => {
        console.log(`astro:config:setup> running command: ${command}`);
        console.log(`Greetings from ${options.name}!`);
        injectScript("page", 'console.log("sex")');
      },
      "astro:config:done": ({ config }) => {
        // console.log(config);
      },
      "astro:build:setup": ({ pages }) => {
        console.log(pages);
      },
    },
  };
}
