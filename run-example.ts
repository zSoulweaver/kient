import { existsSync } from 'node:fs'

const args = process.argv.slice(2)
const fileName = args[0]

if (!fileName) {
	console.error('Please provide a file name.')
	process.exit(1)
}

const filePath = `./example/${fileName}.ts`

if (!existsSync(filePath)) {
	console.error(`File not found: ${filePath}`)
	process.exit(1)
}

Bun.spawn(['bun', '--watch', filePath], {
	stderr: 'inherit',
	stdin: 'inherit',
	stdout: 'inherit',
})
