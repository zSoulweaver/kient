# Class: ChatEndpoint

[Internal](../index.md).ChatEndpoint

## Extends

- [`BaseEndpoint`](BaseEndpoint.md)

## Constructors

### new ChatEndpoint(client)

> **new ChatEndpoint**(`client`): [`ChatEndpoint`](ChatEndpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ChatEndpoint`](ChatEndpoint.md)

#### Inherited from

[`Internal.BaseEndpoint.constructor`](BaseEndpoint.md#constructors)

#### Source

[endpoints/endpoint.base.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L9)

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_apiClient` | [`ApiClient`](ApiClient.md) | - | [`Internal.BaseEndpoint._apiClient`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L7) |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseEndpoint._client`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L6) |

## Methods

### checkAuthenticated()

> **`protected`** **checkAuthenticated**(): `void`

#### Returns

`void`

#### Inherited from

[`Internal.BaseEndpoint.checkAuthenticated`](BaseEndpoint.md#checkauthenticated)

#### Source

[endpoints/endpoint.base.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L14)

***

### deleteMessage()

> **deleteMessage**(`chatroomId`, `messageId`): `Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |
| `messageId` | `string` |

#### Returns

`Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Source

[endpoints/chat/chat.endpoint.ts:38](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/chat/chat.endpoint.ts#L38)

***

### pinMessage()

> **pinMessage**(`channel`, `messageId`): `Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |
| `messageId` | `string` |

#### Returns

`Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Source

[endpoints/chat/chat.endpoint.ts:60](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/chat/chat.endpoint.ts#L60)

***

### sendMessage()

> **sendMessage**(`chatroomId`, `message`): `Promise`\<[`SendMessageResponse`](../type-aliases/SendMessageResponse.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |
| `message` | `string` |

#### Returns

`Promise`\<[`SendMessageResponse`](../type-aliases/SendMessageResponse.md)\>

#### Source

[endpoints/chat/chat.endpoint.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/chat/chat.endpoint.ts#L9)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
