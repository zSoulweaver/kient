import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['typedoc/**.ts'],
  outDir: 'typedoc/dist',
  clean: true,
})
