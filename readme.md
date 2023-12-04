<h1 align="center">
Kient
</h1>

<p align="center">
  <a href="https://github.com/zSoulweaver/kient/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&labelColor=181a1e&color=00e701&">
  </a>
  <a href="https://www.npmjs.com/package/kient">
    <img src="https://img.shields.io/npm/v/kient.svg?logo=npm&style=for-the-badge&labelColor=181a1e&color=00e701&logoColor=fff">
  </a>
  <a href="https://kient.pages.dev/">
    <img src="https://img.shields.io/badge/Documentation-fff?style=for-the-badge">
  </a>
</p>

## About

Kient (**K**ick-Cl**ient**) is a versatile TypeScript client designed to simplify interaction with Kick's API and WebSocket. With Kient, you can seamlessly integrate Kick's platform into your projects, making it easier than ever to leverage its capabilities.


## Documentation

Learn how to use Kient and find detailed information on the [website](https://kient.pages.dev/).

## Installation and Example Usage

Install Kient with your preferred package manager.

```bash
$ pnpm add kient
```

Import Kient, create a new instance, and interact with API endpoints or listen to WebSocket events.
```ts
import { Events, Kient } from 'kient'

// Create a new client instance
const client = await Kient.create()

// Get a channel and listen to its chatroom
const channel = await client.api.channel.getChannel('channel_slug')
await client.ws.chatroom.listen(channel.data.chatroom.id)

// Handle incoming messages
client.on(Events.Chatroom.Message, (message) => {
  console.log(message.data)
})
```

## License

Kient is licensed under the [MIT License](https://github.com/zSoulweaver/kient/blob/master/LICENSE).
