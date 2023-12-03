# Class: MessageDeletedInstance

[Internal](../index.md).MessageDeletedInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`MessageDeletedEvent`](../interfaces/MessageDeletedEvent.md)\>

## Constructors

### new MessageDeletedInstance(data, client)

> **new MessageDeletedInstance**(`data`, `client`): [`MessageDeletedInstance`](MessageDeletedInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`MessageDeletedInstance`](MessageDeletedInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/chatroom/instance/message-deleted.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/message-deleted.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`MessageDeletedEvent`](../interfaces/MessageDeletedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

## Methods

### getMessageId()

> **getMessageId**(): `string`

#### Returns

`string`

#### Source

[ws/chatroom/instance/message-deleted.instance.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/message-deleted.instance.ts#L20)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
