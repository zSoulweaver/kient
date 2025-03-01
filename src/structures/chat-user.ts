import type { Kient } from 'kient'
import { flatten, type Flattened } from '../util/flatten'
import { BaseUser } from './base-user'

export interface ChatUserData {
	is_anonymous: boolean
	user_id: number
	username: string
	is_verified: boolean
	profile_picture: string
	channel_slug: string
}

export class ChatUser extends BaseUser {
	/**
	 * The user's verification status
	 */
	isVerified: boolean

	/**
	 * The user's channel slug
	 */
	slug: string

	/** @internal */
	constructor(kient: Kient, data: Flattened<ChatUser>) {
		super(kient, data)

		this.isVerified = data.isVerified
		this.slug = data.slug
	}

	static constructChatUser(data: ChatUserData): Flattened<ChatUser> {
		return {
			id: data.user_id,
			username: data.username,
			profilePicture: data.profile_picture,
			isVerified: data.is_verified,
			slug: data.channel_slug,
		}
	}

	toJSON() {
		return flatten(this)
	}
}
