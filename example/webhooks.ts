import { env } from 'bun'
import { Kient, kientToJSON } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

if (kient.webhookServerFetch) {
	Bun.serve({
		fetch: kient.webhookServerFetch,
		port: 3000,
	})
}

const specificUserBySlug = await kient.api.channel.getBySlug('kient')

const subscription = await kient.api.event.subscribe({
	method: 'webhook',
	broadcaster_user_id: Number.parseInt(specificUserBySlug.id),
	events: [
		{
			name: 'livestream.status.updated',
			version: 1,
		},
		{
			name: 'chat.message.sent',
			version: 1,
		},
	],
})
console.log(kientToJSON(subscription))

const subscriptions = await kient.api.event.getSubscriptions()
console.log(subscriptions.map((sub) => sub.toJSON()))
// subscriptions.forEach((sub) => sub.unsubscribe())

kient.addListener('KIENT_CHAT_MESSAGE_SENT', (message) => {
	console.log('chat message received from', message.sender.username)
	console.log(kientToJSON(message))
})

kient.addListener('KIENT_LIVESTREAM_STATUS_UPDATED', (message) => {
	console.log(kientToJSON(message))
})
