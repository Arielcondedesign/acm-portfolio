import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import mdx from "@astrojs/mdx";

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), ...(isProd ? [compress()] : [])],
  redirects: {
    // Casos de estudio específicos (migrrados desde /projects)
    '/projects/jean-pierre-bua': '/portfolio/jean-pierre-bua/',
    '/projects/denodl': '/portfolio/denodl/',
    '/projects/people-of-leisure': '/portfolio/people-of-leisure/',
    '/projects/bloc-district': '/portfolio/bloc-district/',
    // Página B2C antigua
    '/b2c': '/portfolio/',
  }
});