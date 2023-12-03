# Class: PrivateLivestreamSocket

[Internal](../index.md).PrivateLivestreamSocket

## Extends

- [`BaseSocket`](BaseSocket.md)

## Constructors

### new PrivateLivestreamSocket(client)

> **new PrivateLivestreamSocket**(`client`): [`PrivateLivestreamSocket`](PrivateLivestreamSocket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`PrivateLivestreamSocket`](PrivateLivestreamSocket.md)

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

> **disconnect**(`livestreamId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `livestreamId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/private-livestream/private-livestream.socket.ts:53](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-livestream/private-livestream.socket.ts#L53)

***

### listen()

> **listen**(`livestreamId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `livestreamId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/private-livestream/private-livestream.socket.ts:22](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-livestream/private-livestream.socket.ts#L22)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
