import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'

/**
 * Data structure of a stream category
 *
 * @group API Structures
 */
export class Category extends Base {
	/**
	 * The category's id
	 */
	id: number

	/**
	 * The category's name
	 */
	name: string

	/**
	 * The category's thumbnail image url
	 */
	thumbnail: string

	/** @internal */
	constructor(kient: Kient, data: Flattened<Category>) {
		super(kient)

		this.id = data.id
		this.name = data.name
		this.thumbnail = data.thumbnail
	}

	toJSON() {
		return flatten(this)
	}
}
