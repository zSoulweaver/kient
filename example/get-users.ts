import { env } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

const currentUser = await kient.api.users.getAuthorisedUser()
console.log(currentUser.toJSON())

const multipleUsers = await kient.api.users.getByIds([1, 2, 3])
console.log(multipleUsers[0].toJSON())

const specificUser = await kient.api.users.getById(2)
console.log(specificUser.toJSON())
