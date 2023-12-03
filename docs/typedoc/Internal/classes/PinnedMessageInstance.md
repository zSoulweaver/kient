# Class: PinnedMessageInstance

[Internal](../index.md).PinnedMessageInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`PinnedMessageCreatedEvent`](../interfaces/PinnedMessageCreatedEvent.md)\>

## Constructors

### new PinnedMessageInstance(data, client)

> **new PinnedMessageInstance**(`data`, `client`): [`PinnedMessageInstance`](PinnedMessageInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`PinnedMessageInstance`](PinnedMessageInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/chatroom/instance/pinned-message.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/pinned-message.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`PinnedMessageCreatedEvent`](../interfaces/PinnedMessageCreatedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

## Methods

### getMessage()

> **getMessage**(): `string`

#### Returns

`string`

#### Source

[ws/chatroom/instance/pinned-message.instance.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/pinned-message.instance.ts#L20)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
