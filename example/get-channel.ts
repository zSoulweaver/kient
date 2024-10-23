import { inspect } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
const res = await kient.api.channel.get('channel_01GFZ7V9JR2H2AM2B3ZP7EDVKF')

console.log(res.channel.toJSON())
console.log(res.user.toJSON())
