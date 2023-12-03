# Class: WsClient

[Internal](../index.md).WsClient

## Constructors

### new WsClient(client)

> **new WsClient**(`client`): [`WsClient`](WsClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`WsClient`](WsClient.md)

#### Source

[client/ws.client.ts:13](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L13)

## Properties

| Modifier | Property | Type | Description | Source |
| :------ | :------ | :------ | :------ | :------ |
| `private` | `PUSHER_APP_KEY` | `"eb1d5f283081a78b932c"` | - | [client/ws.client.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L10) |
| `private` | `_client` | [`Kient`](../../classes/Kient.md) | - | [client/ws.client.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L9) |
| `private` | `pusher` | `default` | - | [client/ws.client.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L11) |

## Methods

### handlePusherAuthentication()

> **`private`** **handlePusherAuthentication**(`params`, `callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `ChannelAuthorizationRequestParams` |
| `callback` | `ChannelAuthorizationCallback` |

#### Returns

`void`

#### Source

[client/ws.client.ts:50](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L50)

***

### subscribe()

> **subscribe**(`channel`): `Promise`\<`default`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<`default`\>

#### Source

[client/ws.client.ts:29](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L29)

***

### unsubscribe()

> **unsubscribe**(`channel`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[client/ws.client.ts:46](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/ws.client.ts#L46)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
