# Class: PrivateChannelSocket

[Internal](../index.md).PrivateChannelSocket

## Extends

- [`BaseSocket`](BaseSocket.md)

## Constructors

### new PrivateChannelSocket(client)

> **new PrivateChannelSocket**(`client`): [`PrivateChannelSocket`](PrivateChannelSocket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`PrivateChannelSocket`](PrivateChannelSocket.md)

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

[ws/private-channel/private-channel.socket.ts:43](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-channel/private-channel.socket.ts#L43)

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

[ws/private-channel/private-channel.socket.ts:17](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-channel/private-channel.socket.ts#L17)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
