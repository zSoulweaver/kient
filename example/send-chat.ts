import { env } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

const bot = await kient.api.chat.send({
	type: 'bot',
	message: 'Message will be send to authenticated user channel',
})
console.log(bot.raw)

const user = await kient.api.chat.send({
	type: 'user',
	message: 'Message will be send to specified user id',
	userId: 0,
})
console.log(user.raw)
