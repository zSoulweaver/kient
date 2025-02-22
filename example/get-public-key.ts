import { env } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

const publicKey = await kient.api.misc.getPublicKey()
console.log(publicKey)
