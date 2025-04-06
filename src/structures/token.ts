import type { KientScope } from '../authentication/scopes'
import { flatten, type Flattened } from '../util/flatten'

type TokenDataParams = Omit<Flattened<Token>, 'scopes' | 'isAppToken'>

/**
 * Response when generating an authorisation token
 *
 * @group API Structures
 */
export class Token {
	/**
	 * The access token
	 */
	accessToken: string

	/**
	 * The type of token presented
	 */
	tokenType: 'Bearer'

	/**
	 * The refresh token used to get a new access token
	 */
	refreshToken?: string

	/**
	 * The seconds until the access token expires
	 */
	expiresIn: number

	/**
	 * A string of space seperated scopes available to this token
	 */
	scope?: string

	/** @internal */
	constructor(data: TokenDataParams) {
		this.accessToken = data.accessToken
		this.tokenType = data.tokenType
		this.refreshToken = data.refreshToken
		this.expiresIn = data.expiresIn
		this.scope = data.scope
	}

	/**
	 * An array of scopes available to this token
	 */
	get scopes() {
		return this.scope ? this.scope.split(' ') as KientScope[] : []
	}
	
	/**
	 * Returns true if the token is an app token type
	 */
	get isAppToken() {
		return !this.scope || !this.refreshToken
	}

	toJSON() {
		return flatten(this)
	}
}
