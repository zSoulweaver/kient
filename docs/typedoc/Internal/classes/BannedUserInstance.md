# Class: BannedUserInstance

[Internal](../index.md).BannedUserInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`UserBannedEvent`](../interfaces/UserBannedEvent.md)\>

## Constructors

### new BannedUserInstance(data, client)

> **new BannedUserInstance**(`data`, `client`): [`BannedUserInstance`](BannedUserInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`BannedUserInstance`](BannedUserInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/chatroom/instance/banned-user.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/instance/banned-user.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`UserBannedEvent`](../interfaces/UserBannedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
