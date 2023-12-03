# Class: SubscriptionCreatedInstance

[Internal](../index.md).SubscriptionCreatedInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`SubscriptionCreatedEvent`](../interfaces/SubscriptionCreatedEvent.md)\>

## Constructors

### new SubscriptionCreatedInstance(data, client)

> **new SubscriptionCreatedInstance**(`data`, `client`): [`SubscriptionCreatedInstance`](SubscriptionCreatedInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`SubscriptionCreatedInstance`](SubscriptionCreatedInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/private-channel/instance/subscription-created.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-channel/instance/subscription-created.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`SubscriptionCreatedEvent`](../interfaces/SubscriptionCreatedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
