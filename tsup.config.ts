import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  format: ['esm'],
  minify: !options.watch
}))
