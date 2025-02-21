import type { Kient } from 'kient'
import type { KientScope } from '../authentication/scopes'
import { Base } from './base'

export interface TokenResponseData {
	access_token: string
	token_type: 'Bearer'
	refresh_token: string
	expires_in: number
	scope: string
}

/**
 * Response when generating an authorisation token
 *
 * @group API Structures
 */
export class TokenResponse {
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
	refreshToken: string

	/**
	 * The seconds until the access token expires
	 */
	expiresIn: number

	/**
	 * An array of scopes available to this token
	 */
	scopes: KientScope[]

	/** @internal */
	constructor(data: TokenResponseData) {
		this.accessToken = data.access_token
		this.tokenType = data.token_type
		this.refreshToken = data.refresh_token
		this.expiresIn = data.expires_in
		this.scopes = data.scope.split(' ') as KientScope[]
	}
}
