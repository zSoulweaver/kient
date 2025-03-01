import type { Kient } from 'kient'
import { Base } from './base'
import { flatten } from '../util/flatten'

export interface ChatUserData {
	is_anonymous: boolean
	user_id: number
	username: string
	is_verified: boolean
	profile_picture: string
	channel_slug: string
}

export class ChatUser extends Base {
	/**
	 * The user's ID
	 */
	id: number

	/**
	 * The user's username
	 */
	username: string

	/**
	 * The user's verification status
	 */
	isVerified: boolean

	/**
	 * The user's profile picture
	 */
	profilePicture: string

	/**
	 * The user's channel slug
	 */
	slug: string

	/** @internal */
	constructor(kient: Kient, data: ChatUserData) {
		super(kient)

		this.id = data.user_id
		this.username = data.username
		this.isVerified = data.is_verified
		this.profilePicture = data.profile_picture
		this.slug = data.channel_slug
	}

	toJSON() {
		return flatten(this)
	}
}
