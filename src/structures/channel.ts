// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'

export class Channel {
	constructor(
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public slug: string,
		public banner_picture: string,
		public description: string,
		public followers_count: number,
	) {}

	toJSON() {
		return serialize<Channel>(this, { groupsExclude: ['exclude'] })
	}
}
