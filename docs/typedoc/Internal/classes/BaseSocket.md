# Class: `abstract` BaseSocket

[Internal](../index.md).BaseSocket

## Extended By

- [`ChatroomSocket`](ChatroomSocket.md)
- [`ChannelSocket`](ChannelSocket.md)
- [`PrivateChatroomSocket`](PrivateChatroomSocket.md)
- [`PrivateChannelSocket`](PrivateChannelSocket.md)
- [`PrivateLivestreamSocket`](PrivateLivestreamSocket.md)

## Constructors

### new BaseSocket(client)

> **new BaseSocket**(`client`): [`BaseSocket`](BaseSocket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`BaseSocket`](BaseSocket.md)

#### Source

[ws/socket.base.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L8)

## Properties

| Modifier | Property | Type | Description | Source |
| :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [ws/socket.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L5) |
| `readonly` | `_wsClient` | [`WsClient`](WsClient.md) | - | [ws/socket.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/socket.base.ts#L6) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
