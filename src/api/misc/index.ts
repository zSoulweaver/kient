import { APIBase } from '../api-base'
import { getPublicKey } from './get-public-key'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class MiscAPI extends APIBase {
	/**
	 * Returns an array of users by an array of IDs
	 *
	 * @param ids Accepts an array of user IDs that will be queried for
	 */
	getPublicKey() {
		return getPublicKey(this.kient)
	}
}
