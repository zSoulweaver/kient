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
	identity?: {
		username_color: string
		badges: Array<{
			text: string
			type: string
			count: number
		}>
	}
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

	/**
	 * The user's chat appearance
	 */
	identity?: {
		/**
		 * The user's color in chat
		 */
		usernameColor: string

		/**
		 * The user's acquired chat badges
		 */
		badges: Array<{
			/**
			 * The badge's display name
			 */
			text: string

			/**
			 * The badge's identifier
			 */
			type: string

			/**
			 *  How many of this badge the user has
			 * 	Generally related to how many months a user has subscribed for
			 *
			 * 	TODO: This could use better clarification
			 */
			count?: number
		}>
	}

	/** @internal */
	constructor(kient: Kient, data: Flattened<ChatUser>) {
		super(kient, data)

		this.isVerified = data.isVerified
		this.slug = data.slug
		if (data.identity) {
			this.identity = data.identity
		}
	}

	static constructChatUser(data: ChatUserData): Flattened<ChatUser> {
		return {
			id: data.user_id,
			username: data.username,
			profilePicture: data.profile_picture,
			isVerified: data.is_verified,
			slug: data.channel_slug,
			identity: data.identity
				? {
						usernameColor: data.identity?.username_color,
						badges: data.identity?.badges,
					}
				: undefined,
		}
	}

	toJSON() {
		return flatten(this)
	}
}
