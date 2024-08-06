// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'
// biome-ignore lint/style/useImportType: deepkit/type
import { Category } from './category'
// biome-ignore lint/style/useImportType: deepkit/type
import { Channel } from './channel'
// biome-ignore lint/style/useImportType: deepkit/type
import { User } from './user'

/**
 * Data structure of a clip from a livestream
 *
 * @group API Structures
 */
export class Clip {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public title: string,
		public duration: number,
		public views_count: number,
		public likes_count: number,
		public thumbnail_url: string,
		public playback_url: string,
		public creator: {
			user: User
			channel: Channel
		},
		public streamer: {
			user: User
			channel: Channel
		},
		public category: Category,
		public created_at: Date,
	) {
		this.creator.channel.kient = this.kient
		this.creator.user.kient = this.kient
		this.streamer.channel.kient = this.kient
		this.streamer.user.kient = this.kient
		this.category.kient = this.kient
	}

	toJSON() {
		return serialize<Clip>(this, { groupsExclude: ['exclude'] })
	}
}
