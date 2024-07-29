import { Kient } from 'kient'
import { Events } from '../src/events'

// const kient = new Kient({
// 	connectToWebsocket: false,
// 	pusher: {
// 		appKey: '32cbd69e4b950bf97679',
// 	},
// })

const kient = new Kient()

kient.on(Events.Core.WebSocketConnected, async () => {
	console.log('connected to ws')
})
