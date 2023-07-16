---
endpoint: 0
---

# ChannelEndpoint

API methods for dealing with channels.

## Methods

### getBans()

> **getBans**(`channel`): `Promise`\< [`GetBansResponse`](class.GetBansResponse.md) \>

Returns the chatroom bans on specified channel

#### Version

API v2

#### Parameters

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `channel` | `string` | The channel you want to retreive bans from |

#### Returns

`Promise`\< [`GetBansResponse`](class.GetBansResponse.md) \>

GetBansResponse

#### Source

endpoints/channel/channel.endpoint.ts:18

---

### getBans2()

> **getBans2**(`channel`): `Promise`\< [`GetBansResponse`](class.GetBansResponse.md) \>

Returns the chatroom bans on specified channel two

#### Version

API v2

#### Parameters

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `channel` | `string` | The channel you want to retreive bans from |

#### Returns

`Promise`\< [`GetBansResponse`](class.GetBansResponse.md) \>

GetBansResponse

#### Source

endpoints/channel/channel.endpoint.ts:33

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
