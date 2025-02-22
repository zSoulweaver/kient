import { APIBase } from '../api-base'
import { getPublicKey } from './get-public-key'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class MiscAPI extends APIBase {
	/**
	 * Returns Kick's current public key
	 */
	getPublicKey() {
		return getPublicKey(this.kient)
	}
}
