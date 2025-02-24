import type { Kient } from 'kient'
import crypto from 'node:crypto'
import type { WebhookEvent } from './structures/base-event'
import { ChatMessage } from './structures/chat-message'

interface VerifySignatureParams {
	publicKey: string
	messageId: string
	signature: string
	timestamp: string
	body: string
}

export type WebhookEventNames =
	| 'chat.message.sent'
	| 'channel.followed'
	| 'channel.subscription.renewal'
	| 'channel.subscription.gifts'
	| 'channel.subscription.new'

export const WebhookEvents = {
	Chat: {
		MessageSent: 'KIENT_CHAT_MESSAGE_SENT',
	},
} as const

export type WebhookEvents = {
	[WebhookEvents.Chat.MessageSent]: (chatMessage: ChatMessage) => void
}

export class WebhookHandler {
	private kient: Kient

	constructor(kient: Kient) {
		this.kient = kient
	}

	handleEvent(event: WebhookEvent) {
		switch (event.type) {
			case 'chat.message.sent': {
				const chatMessage = new ChatMessage(this.kient, event)
				this.kient.emit('KIENT_CHAT_MESSAGE_SENT', chatMessage)
				break
			}

			case 'channel.followed':
				break

			case 'channel.subscription.renewal':
				break

			case 'channel.subscription.gifts':
				break

			case 'channel.subscription.new':
				break

			default:
				break
		}
	}

	static verifySignature(params: VerifySignatureParams) {
		try {
			const data = `${params.messageId}.${params.timestamp}.${params.body}`

			const verifer = crypto.createVerify('RSA-SHA256')
			verifer.update(data)

			const signature = Buffer.from(params.signature, 'base64')
			const isValid = verifer.verify(params.publicKey, signature)
			if (!isValid) {
				console.warn('Webhook signature verification failed')
			}
			return isValid
		} catch (err) {
			console.error('Unable to verify signature of webhook event', err)
			return false
		}
	}
}
