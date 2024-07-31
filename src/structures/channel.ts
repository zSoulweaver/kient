import { Base, Expose } from './base'

export class Channel extends Base {
	@Expose id!: string
	@Expose slug!: string
	@Expose banner_picture!: string
	@Expose description?: string
	@Expose followers_count?: number
}
