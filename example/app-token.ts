import { env } from 'bun'
import { KientAppTokenAuthentication } from 'kient'

const auth = new KientAppTokenAuthentication({
  clientId: env.KICK_CLIENT_ID as string,
  clientSecret: env.KICK_CLIENT_SECRET as string,
})

const tokenDetails = await auth.generateToken()
console.log(tokenDetails)