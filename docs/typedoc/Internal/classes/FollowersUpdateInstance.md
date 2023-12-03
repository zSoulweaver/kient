# Class: FollowersUpdateInstance

[Internal](../index.md).FollowersUpdateInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`FollowersUpdatedEvent`](../interfaces/FollowersUpdatedEvent.md)\>

## Constructors

### new FollowersUpdateInstance(data, client)

> **new FollowersUpdateInstance**(`data`, `client`): [`FollowersUpdateInstance`](FollowersUpdateInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`FollowersUpdateInstance`](FollowersUpdateInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/channel/instance/followers-updated.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/instance/followers-updated.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`FollowersUpdatedEvent`](../interfaces/FollowersUpdatedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
