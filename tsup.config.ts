import { defineConfig } from 'tsup'
import { deepkitPlugin } from '@gjsify/esbuild-plugin-deepkit'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  esbuildPlugins: [deepkitPlugin()],
  esbuildOptions(options) {
    options.external?.push('@deepkit/type')
  },
})
