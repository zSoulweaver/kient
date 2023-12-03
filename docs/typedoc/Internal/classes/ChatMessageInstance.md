# Class: ChatMessageInstance

[Internal](../index.md).ChatMessageInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`ChatMessageEvent`](../interfaces/ChatMessageEvent.md)\>

## Constructors

### new ChatMessageInstance(data, client)

> **new ChatMessageInstance**(`data`, `client`): [`ChatMessageInstance`](ChatMessageInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ChatMessageInstance`](ChatMessageInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/chatroom/instance/chat-message.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/chat-message.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`ChatMessageEvent`](../interfaces/ChatMessageEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

## Methods

### chatterIs()

> **chatterIs**(`chatterStatus`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatterStatus` | `string` |

#### Returns

`boolean`

#### Source

[ws/chatroom/instance/chat-message.instance.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/chat-message.instance.ts#L20)

***

### deleteMessage()

> **deleteMessage**(): `Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Returns

`Promise`\<[`GenericApiResponse`](../interfaces/GenericApiResponse.md)\<`null`\>\>

#### Source

[ws/chatroom/instance/chat-message.instance.ts:25](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/chat-message.instance.ts#L25)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
