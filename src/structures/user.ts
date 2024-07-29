import { Base, Expose } from './base'

export class User extends Base {
	@Expose id!: string
	@Expose username!: string
	@Expose is_verified!: boolean
	@Expose profile_picture!: string
}
