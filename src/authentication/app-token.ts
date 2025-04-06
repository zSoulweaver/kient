import { ofetch } from 'ofetch'
import { Token } from '../structures/token'

interface KientAuthenticationParams {
	clientId: string
	clientSecret: string
}

interface TokenResponse {
	access_token: string
	token_type: 'Bearer'
	expires_in: number
}

const KICK_TOKEN_ENDPOINT = 'https://id.kick.com/oauth/token'

export class KientAppTokenAuthentication {
	params: KientAuthenticationParams

	constructor(params: KientAuthenticationParams) {
		this.params = params
	}

	async generateToken() {
		const tokenParams = new URLSearchParams({
			client_id: this.params.clientId,
			client_secret: this.params.clientSecret,
			grant_type: 'client_credentials',
		})

		const req = await ofetch<TokenResponse>(KICK_TOKEN_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: tokenParams.toString(),
		})

    console.log(req)

		return new Token({
			accessToken: req.access_token,
			tokenType: req.token_type,
			expiresIn: req.expires_in,
		})
	}
}