// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'

export class Social {
	constructor(public kient: Kient & Group<'exclude'>) {}

	toJSON() {
		return serialize<Social>(this, { groupsExclude: ['exclude'] })
	}
}
