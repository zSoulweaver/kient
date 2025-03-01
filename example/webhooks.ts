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

const subscription = await kient.api.webhook.subscribe({
	method: 'webhook',
	events: [
		{
			name: 'chat.message.sent',
			version: 1,
		},
	],
})
console.log(kientToJSON(subscription))

const subscriptions = await kient.api.webhook.getSubscriptions()
console.log(subscriptions.map((sub) => sub.toJSON()))

kient.addListener('KIENT_CHAT_MESSAGE_SENT', (message) => {
	console.log('chat message received from', message.sender.username)
	console.log(kientToJSON(message))
})
