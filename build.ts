import dts from 'bun-plugin-dts'

await Bun.build({
	entrypoints: ['./src/index.ts'],
	outdir: './dist',
	target: 'node',
	// @ts-expect-error https://bun.sh/docs/bundler#packages
	packages: 'external',
	plugins: [dts()],
})
