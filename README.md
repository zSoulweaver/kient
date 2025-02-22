<h1 align="center">
Kient
</h1>

<p align="center">
  <a href="https://github.com/zSoulweaver/kient/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?&color=47ff47&style=for-the-badge">
  </a>
  <a href="https://www.npmjs.com/package/kient">
    <img src="https://img.shields.io/npm/v/kient.svg?logo=npm&color=47ff47&logoColor=fff&style=for-the-badge">
  </a>
  <a href="https://kient.pages.dev/">
    <img src="https://img.shields.io/badge/Documentation-fff?style=for-the-badge">
  </a>
</p>

## About

Kient (**K**ick-Cl**ient**) is a versatile TypeScript library designed to simplify interaction with Kick's API and Webhooks. With Kient, you can seamlessly integrate Kick's platform into your projects, making it easier than ever to leverage its capabilities.

## Documentation

Learn how to use Kient and find detailed information on the [website](https://kient.pages.dev/) - Very much WIP.

## Installation and Example Usage

Install Kient with your preferred package manager.

```bash
$ bun add kient
```

Import Kient, create a new instance, and interact with API endpoints or listen to WebSocket events.

```ts
import { env } from 'bun'
import { Kient } from 'kient'

// Create a new kient instance
const kient = new Kient()

// Set the authentication token
kient.setAuthToken(env.KICK_TOKEN as string)

// Get the currently authorised user
const currentUser = await kient.api.channel.getAuthorisedUser()
// Log the raw output
console.log(currentUser.raw)

// Retrieve multiple channels by their ID
const multipleUsers = await kient.api.channel.getByIds([1, 2, 3])

// Send a chat message to the first channel in the above list as the authenticated user
await kient.api.chat.send({
	type: 'user',
	message: 'Message will be send to specified user id below',
	userId: multipleUsers[0].id,
})
```

## License

Kient is licensed under the [MIT License](https://github.com/zSoulweaver/kient/blob/master/LICENSE).
