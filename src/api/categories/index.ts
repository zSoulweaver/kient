import { APIBase } from '../api-base'
import { getCategoriesByQuery } from './get-categories'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class CategoriesAPI extends APIBase {
	/**
	 * Returns an array of categories matching search query
	 *
	 * @param {string} query Accepts a string that will be matched against the category title
	 */
	query(query: string) {
		return getCategoriesByQuery(this.kient, query)
	}
}
