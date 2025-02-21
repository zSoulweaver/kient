import type { Kient } from '../kient'
import { Base } from './base'

export interface CategoryData {
	id: string
	name: string
	thumbnail: string
}

/**
 * Data structure of a stream category
 *
 * @group API Structures
 */
export class Category extends Base<CategoryData> {
	/**
	 * The category's id
	 */
	id: string

	/**
	 * The category's name
	 */
	name: string

	/**
	 * The category's thumbnail image url
	 */
	thumbnail: string

	/** @internal */
	constructor(kient: Kient, data: CategoryData) {
		super(kient, data)

		this.id = data.id
		this.name = data.name
		this.thumbnail = data.thumbnail
	}
}
