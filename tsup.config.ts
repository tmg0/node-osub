import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.ts'],
  splitting: false,
  clean: true,
  treeshake: true,
  format: ['esm'],
  minify: !options.watch
}))
