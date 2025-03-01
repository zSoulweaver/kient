import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'
import { Category } from './category'

/**
 * Data structure of a user's channel
 *
 * @group API Structures
 */
export class Channel extends Base {
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
	constructor(kient: Kient, data: Flattened<Channel>) {
		super(kient)

		this.id = data.id
		this.slug = data.slug
		this.bannerPicture = data.bannerPicture
		this.channelDescription = data.channelDescription
		this.streamTitle = data.streamTitle
		this.category = new Category(kient, data.category)
		this.stream = data.stream
	}

	toJSON() {
		return flatten(this)
	}
}
