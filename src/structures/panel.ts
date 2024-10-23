// biome-ignore lint/style/useImportType: deepkit/type
import { Group, serialize } from '@deepkit/type'
import type { Kient } from '../kient'

/**
 * Data structure of a channel's panels in their about page
 *
 * @group API Structures
 */
export class Panel {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,
	) {}

	toJSON() {
		return serialize<Panel>(this, { groupsExclude: ['exclude'] })
	}
}
