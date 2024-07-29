import { Kient } from 'kient'
import { inspect } from 'bun'

const kient = new Kient()
const channel = await kient.api.getChannel('channel_01GFZ7V9JR2H2AM2B3ZP7EDVKF')
console.log(
	inspect(channel, {
		colors: true,
	}),
)
