import { env } from 'bun'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { KientScopes, KientUserTokenAuthentication } from 'kient'

const app = new Hono()

const auth = new KientUserTokenAuthentication({
	redirectUri: 'http://localhost:3000/callback',
	clientId: env.KICK_CLIENT_ID as string,
	clientSecret: env.KICK_CLIENT_SECRET as string,
})

const url = auth.constructAuthoriseUrl({
	scopes: [
		'channel:read',
		'channel:write',
		'chat:write',
		'events:subscribe',
		'streamkey:read',
		'user:read',
	],
})

console.log(url)

app.get('/callback', async (c) => {
	const code = c.req.query('code')
	if (!code) {
		throw new HTTPException(400, { message: 'No code found in the url' })
	}
	const token = await auth.generateToken({
		code,
		codeVerifier: url.verifier,
	})

	return c.body(token.toJSON())
})

Bun.serve({
	fetch: app.fetch,
	port: 3000,
})
