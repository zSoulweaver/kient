# Getting Started with Kient

## Installation

Kient is available as an NPM package. You can install it with your preferred package manager using one of the following commands:

::: code-group
```sh[pnpm]
$ pnpm add kient
```

```sh[npm]
$ npm add kient
```

```sh[yarn]
$ yarn add kient
```
:::

## Import Kient

To start using Kient, you first need to import it and create an instance. Here's how you can do it: 

```ts
import { Kient } from 'kient'

const kient = await Kient.create()
```

## Calling Your First Endpoint

Once you've created an instance of Kient you can proceed to call any of the available endpoints, here's an example on retrieving channel information and outputting the response to the console:
```ts
const channelData = await kient.api.channel.getChannel('xqc')
console.log(channelData.data)
```

Logging `channelData.data` to the console will spit out all the information Kick provides on their channel endpoint, the object properties will also have types assigned for your convenience.
```json
{
  "id": 668, // number
  "user_id": 676, // number
  "slug": "xqc", // string
  "is_banned": false, // boolean
  "playback_url": "", // string
  "vod_enabled": true, // boolean
  "subscription_enabled": true, // boolean
  "followers_count": 573576 // number
  // ... (other properties)
}
```
