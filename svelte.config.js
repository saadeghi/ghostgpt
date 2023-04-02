import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
