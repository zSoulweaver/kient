# Class: ChannelSocket

[Internal](../index.md).ChannelSocket

## Extends

- [`BaseSocket`](BaseSocket.md)

## Constructors

### new ChannelSocket(client)

> **new ChannelSocket**(`client`): [`ChannelSocket`](ChannelSocket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ChannelSocket`](ChannelSocket.md)

#### Inherited from

[`Internal.BaseSocket.constructor`](BaseSocket.md#constructors)

#### Source

[ws/socket.base.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L8)

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseSocket._client`](BaseSocket.md) | [ws/socket.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L5) |
| `readonly` | `_wsClient` | [`WsClient`](WsClient.md) | - | [`Internal.BaseSocket._wsClient`](BaseSocket.md) | [ws/socket.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L6) |

## Methods

### disconnect()

> **disconnect**(`channelId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/channel/channel.socket.ts:58](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/channel.socket.ts#L58)

***

### listen()

> **listen**(`channelId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/channel/channel.socket.ts:23](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/channel.socket.ts#L23)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
