const KientEvents = {
	WebSocketConnected: 'KIENT_WEBSOCKET_CONNECTED',
	WebSocketDisconnected: 'KIENT_WEBSOCKET_DISCONNECTED',
} as const

type CoreEvents = {
	[KientEvents.WebSocketConnected]: () => void
	[KientEvents.WebSocketDisconnected]: () => void
}

export const Events = {
	Core: KientEvents,
}

export type KientEventEmitters = CoreEvents
