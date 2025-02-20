// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, MapName } from '@deepkit/type'
import type { KientScope } from '../authentication/scopes'

/**
 * Response when generating an authorisation token
 *
 * @group API Structures
 */
export class TokenResponse {
	scopes: KientScope[]

	/** @internal */
	constructor(
		public accessToken: string & MapName<'access_token'>,
		public tokenType: 'Bearer' & MapName<'token_type'>,
		public refreshToken: string & MapName<'refresh_token'>,
		public expiresIn: number & MapName<'expires_in'>,
		public scopeString: string & MapName<'scope'>,
	) {
		this.scopes = scopeString.split(' ') as KientScope[]
	}

	toJSONObject() {
		return serialize<TokenResponse>(this)
	}

	toJSON() {
		return JSON.stringify(serialize<TokenResponse>(this))
	}
}
