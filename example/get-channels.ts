import { env } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

const currentUser = await kient.api.channel.getAuthorisedUser()
console.log(currentUser.raw)

const multipleUsers = await kient.api.channel.getByIds([1, 2, 3])
console.log(multipleUsers.map((user) => user.raw))

const specificUser = await kient.api.channel.getById(2)
console.log(specificUser.raw)
