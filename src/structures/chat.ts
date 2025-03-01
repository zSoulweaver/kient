import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'

/**
 * Data structure of a chat message
 *
 * @group API Structures
 */
export class Chat extends Base {
	/**
	 * The id of the sent message
	 */
	id: string

	/**
	 *  A boolean indicating if the message has been sent
	 */
	isSent: boolean

	/** @internal */
	constructor(kient: Kient, data: Flattened<Chat>) {
		super(kient)

		this.id = data.id
		this.isSent = data.isSent
	}

	toJSON() {
		return flatten(this)
	}
}
