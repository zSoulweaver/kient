export const KientScopes = {
	UserRead: 'user:read',
	ChannelRead: 'channel:read',
	ChannelWrite: 'channel:write',
	ChatWrite: 'chat:write',
	StreamkeyRead: 'streamkey:read',
	EventsSubscribe: 'events:subscribe',
} as const

export type KientScope = (typeof KientScopes)[keyof typeof KientScopes]
