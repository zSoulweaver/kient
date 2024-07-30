import { Expose } from './base'

export class Chatroom {
	@Expose id!: string
	@Expose channel_id!: string
}
