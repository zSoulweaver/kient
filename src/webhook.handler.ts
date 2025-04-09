import type { Kient } from 'kient'
import type { WebhookEvent } from './structures/base-event'
import { ChatMessage } from './structures/chat-message'
import { ChannelFollow } from './structures/channel-follow'
import { ChannelSubscription } from './structures/channel-subscription'
import { ChannelSubscriptionGift } from './structures/channel-subscription-gift'
import { LivestreamStatus } from './structures/livestream-status'

export type WebhookEventNames =
	| 'chat.message.sent'
	| 'channel.followed'
	| 'channel.subscription.renewal'
	| 'channel.subscription.gifts'
	| 'channel.subscription.new'
	| 'livestream.status.updated'

export const WebhookEvents = {
	Chat: {
		MessageSent: 'KIENT_CHAT_MESSAGE_SENT',
	},
	Channel: {
		Follow: 'KIENT_CHANNEL_FOLLOW',
		Subscription: 'KIENT_CHANNEL_SUBSCRIPTION',
		Resubscription: 'KIENT_CHANNEL_RESUBSCRIPTION',
		GiftSubscriptions: 'KIENT_CHANNEL_GIFT_SUBSCRIPTIONS',
	},
	Livestream: {
		StatusUpdated: 'KIENT_LIVESTREAM_STATUS_UPDATED',
	},
} as const

export type WebhookEvents = {
	[WebhookEvents.Chat.MessageSent]: (chatMessage: ChatMessage) => void
	[WebhookEvents.Channel.Follow]: (channelFollow: ChannelFollow) => void
	[WebhookEvents.Channel.Subscription]: (channelSubscription: ChannelSubscription) => void
	[WebhookEvents.Channel.Resubscription]: (channelSubscription: ChannelSubscription) => void
	[WebhookEvents.Channel.GiftSubscriptions]: (
		channelSubscriptionsGift: ChannelSubscriptionGift,
	) => void
	[WebhookEvents.Livestream.StatusUpdated]: (livestreamStatus: LivestreamStatus) => void
}

export class WebhookHandler {
	private kient: Kient

	constructor(kient: Kient) {
		this.kient = kient
	}

	handleEvent(event: WebhookEvent) {
		switch (event.type as WebhookEventNames) {
			case 'chat.message.sent': {
				const chatMessage = new ChatMessage(this.kient, event)
				this.kient.emit('KIENT_CHAT_MESSAGE_SENT', chatMessage)
				break
			}

			case 'channel.followed': {
				const channelFollow = new ChannelFollow(this.kient, event)
				this.kient.emit('KIENT_CHANNEL_FOLLOW', channelFollow)
				break
			}

			case 'channel.subscription.new': {
				const channelSubscription = new ChannelSubscription(this.kient, event)
				this.kient.emit('KIENT_CHANNEL_SUBSCRIPTION', channelSubscription)
				break
			}

			case 'channel.subscription.renewal': {
				const channelSubscription = new ChannelSubscription(this.kient, event)
				this.kient.emit('KIENT_CHANNEL_RESUBSCRIPTION', channelSubscription)
				break
			}

			case 'channel.subscription.gifts': {
				const channelSubscriptionGift = new ChannelSubscriptionGift(this.kient, event)
				this.kient.emit('KIENT_CHANNEL_GIFT_SUBSCRIPTIONS', channelSubscriptionGift)
				break
			}

			case 'livestream.status.updated': {
				const livestreamStatus = new LivestreamStatus(this.kient, event)
				this.kient.emit('KIENT_LIVESTREAM_STATUS_UPDATED', livestreamStatus)
				break
			}

			default:
				break
		}
	}
}
