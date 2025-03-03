import type { DeepStrictOmit } from '@kakasoo/deep-strict-types'
import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'
import { Category } from './category'

type ChannelParams = DeepStrictOmit<Flattened<Channel>, 'stream.startTime'> & {
	stream: {
		startTime: string
	}
}

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
	 * The channel's current stream details
	 * Note: If the channel is currently not live, this will show data of the most recent broadcast ot live, this will show data of the most recent broadcast ot live, this will show data of the most recent broadcast
	 */
	stream: {
		/**
		 * The current directory category of the stream
		 */
		category: Category

		/**
		 * Indicates if the stream is currently live
		 */
		isLive: boolean

		/**
		 * Indicates if the stream is for mature audiences only
		 */
		isMature: boolean

		/**
		 * The primary language of the stream
		 */
		language: string

		/**
		 * The start time of the stream
		 */
		startTime: Date

		/**
		 * The title of the stream
		 */
		streamTitle: string

		/**
		 * The viewer count of the stream
		 */
		viewerCount: number
	}

	/**
	 * The channel's private ingest details
	 */
	ingest?: {
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
	constructor(kient: Kient, data: ChannelParams) {
		super(kient)

		this.id = data.id
		this.slug = data.slug
		this.bannerPicture = data.bannerPicture
		this.channelDescription = data.channelDescription
		this.stream = {
			category: new Category(kient, data.stream.category),
			isLive: data.stream.isLive,
			isMature: data.stream.isMature,
			language: data.stream.language,
			startTime: new Date(data.stream.startTime),
			streamTitle: data.stream.streamTitle,
			viewerCount: data.stream.viewerCount,
		}
		if (data.ingest?.key && data.ingest.url) {
			this.ingest = {
				key: data.ingest.key,
				url: data.ingest.url,
			}
		}
	}

	toJSON() {
		return flatten(this)
	}
}
