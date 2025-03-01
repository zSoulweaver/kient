import { env } from 'bun'
import { Kient } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

const currentUser = await kient.api.user.getAuthorisedUser()
console.log(currentUser.toJSON())

const multipleUsers = await kient.api.user.getByIds([1, 2, 3])
console.log(multipleUsers.map((user) => user.toJSON()))

const specificUser = await kient.api.user.getById(2)
console.log(specificUser.toJSON())
