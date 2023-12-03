# Class: PrivateChatroomSocket

[Internal](../index.md).PrivateChatroomSocket

## Extends

- [`BaseSocket`](BaseSocket.md)

## Constructors

### new PrivateChatroomSocket(client)

> **new PrivateChatroomSocket**(`client`): [`PrivateChatroomSocket`](PrivateChatroomSocket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`PrivateChatroomSocket`](PrivateChatroomSocket.md)

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

> **disconnect**(`chatroomId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/private-chatroom/private-chatroom.socket.ts:87](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/private-chatroom.socket.ts#L87)

***

### listen()

> **listen**(`chatroomId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[ws/private-chatroom/private-chatroom.socket.ts:37](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/private-chatroom.socket.ts#L37)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
