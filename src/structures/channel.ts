import type { Kient } from '../kient'
import { Base } from './base'
import { Category, type CategoryData } from './category'

export interface ChannelData {
	banner_picture: string
	broadcaster_user_id: string
	category: CategoryData
	channel_description: string
	slug: string
	stream: {
		key: string
		url: string
	}
	stream_title: string
}

/**
 * Data structure of a user's channel
 *
 * @group API Structures
 */
export class Channel extends Base<ChannelData> {
	/**
	 * The channel owner's user ID
	 */
	id: string

	/**
	 * The slug of the channel
	 */
	slug: string

	/**
	 * The banner picture url of the channel
	 */
	bannerPicture: string

	/**
	 * The description of the channel
	 */
	channelDescription: string

	/**
	 * The stream title of the channel
	 */
	streamTitle: string

	/**
	 * The current directory category of the channel
	 */
	category: Category

	/**
	 * The stream key details of the channel
	 */
	stream?: {
		/**
		 * The stream key of the channel
		 */
		key: string

		/**
		 * The ingest url of the channel
		 */
		url: string
	}

	/** @internal */
	constructor(kient: Kient, data: ChannelData) {
		super(kient, data)

		this.id = data.broadcaster_user_id
		this.slug = data.slug
		this.bannerPicture = data.banner_picture
		this.channelDescription = data.channel_description
		this.streamTitle = data.stream_title
		this.category = new Category(kient, data.category)
		this.stream = data.stream
	}
}
