# Class: SubscriptionInstance

[Internal](../index.md).SubscriptionInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`SubscriptionEvent`](../interfaces/SubscriptionEvent.md)\>

## Constructors

### new SubscriptionInstance(data, client)

> **new SubscriptionInstance**(`data`, `client`): [`SubscriptionInstance`](SubscriptionInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`SubscriptionInstance`](SubscriptionInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/chatroom/instance/subscription.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/subscription.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`SubscriptionEvent`](../interfaces/SubscriptionEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
