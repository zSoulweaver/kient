import { env } from 'bun'
import { Kient, kientToJSON } from 'kient'

const kient = new Kient()
kient.setAuthToken(env.KICK_TOKEN as string)

// const currentUser = await kient.api.channel.getAuthorisedUser()
// console.log(currentUser.toJSON())

// const multipleUsers = await kient.api.channel.getByIds([1, 2, 3])
// console.log(kientToJSON(multipleUsers))

const specificUser = await kient.api.channel.getById(676)
console.log(specificUser.toJSON())

// const multipleUsersBySlugs = await kient.api.channel.getBySlugs(['kient', 'user1', 'user2'])
// console.log(kientToJSON(multipleUsersBySlugs))

// const specificUserBySlug = await kient.api.channel.getBySlug('kient')
// console.log(specificUserBySlug.toJSON())
