import { nanoid } from 'nanoid'
import { randomBytes, createHash } from 'node:crypto'
import type { KientScope } from './scopes'
import { ofetch } from 'ofetch'
import { Token } from '../structures/token'

interface KientUserAuthenticationParams {
	clientId: string
	clientSecret: string
	redirectUri: string
}

interface KientUserAuthoriseParams {
	scopes: KientScope[]
	codeVerifier?: string
	state?: string
}

interface KientUserTokenParams {
	code: string
	codeVerifier: string
}

interface KientUserRefreshTokenParams {
	refreshToken: string
}

interface KientUserTokenRevoke {
	token: string
	type: 'access_token' | 'refresh_token'
}

interface TokenResponse {
	access_token: string
	token_type: 'Bearer'
	refresh_token: string
	expires_in: number
	scope: string
}

const KICK_AUTH_ENDPOINT = 'https://id.kick.com/oauth/authorize'
const KICK_TOKEN_ENDPOINT = 'https://id.kick.com/oauth/token'
const KICK_TOKEN_REVOKE = 'https://id.kick.com/oauth/revoke'

export class KientUserTokenAuthentication {
	params: KientUserAuthenticationParams

	constructor(params: KientUserAuthenticationParams) {
		this.params = params
	}

	constructAuthoriseUrl(params: KientUserAuthoriseParams) {
		const state = params.state ?? nanoid()
		let verifier = params.codeVerifier
		if (!verifier) {
			verifier = base64URLEncode(randomBytes(32))
		}
		const challenge = base64URLEncode(sha256(verifier))

		const authParams = new URLSearchParams({
			client_id: this.params.clientId,
			redirect_uri: this.params.redirectUri,
			response_type: 'code',
			scope: params.scopes.join(' '),
			code_challenge: challenge,
			code_challenge_method: 'S256',
			state,
		})
		const url = `${KICK_AUTH_ENDPOINT}?${authParams.toString()}`

		return {
			url,
			state,
			verifier,
		}
	}

	async generateToken(params: KientUserTokenParams) {
		const tokenParams = new URLSearchParams({
			code: params.code,
			client_id: this.params.clientId,
			client_secret: this.params.clientSecret,
			redirect_uri: this.params.redirectUri,
			grant_type: 'authorization_code',
			code_verifier: params.codeVerifier,
		})

		const req = await ofetch<TokenResponse>(KICK_TOKEN_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: tokenParams.toString(),
		})

		return new Token({
			accessToken: req.access_token,
			tokenType: req.token_type,
			refreshToken: req.refresh_token,
			expiresIn: req.expires_in,
			scope: req.scope,
		})
	}

	async refeshToken(params: KientUserRefreshTokenParams) {
		const refreshParams = new URLSearchParams({
			refresh_token: params.refreshToken,
			client_id: this.params.clientId,
			client_secret: this.params.clientSecret,
			grant_type: 'refresh_token',
		})

		const req = await ofetch<TokenResponse>(KICK_TOKEN_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: refreshParams.toString(),
		})

		return new Token({
			accessToken: req.access_token,
			tokenType: req.token_type,
			refreshToken: req.refresh_token,
			expiresIn: req.expires_in,
			scope: req.scope,
		})
	}

	// TODO: Endpoint currently not working
	// async revokeToken(params: KientUserTokenRevoke) {
	// 	const revokeParams = new URLSearchParams({
	// 		token: params.token,
	// 	})

	// 	await ofetch(`${KICK_TOKEN_REVOKE}?${revokeParams.toString()}`, { method: 'POST' })

	// 	await ofetch(KICK_TOKEN_REVOKE, {
	// 		method: 'POST',
	// 	})
	// }
}

function base64URLEncode(buffer: Buffer) {
	return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

function sha256(buffer: string) {
	return createHash('sha256').update(buffer).digest()
}
