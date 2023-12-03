# Class: UserTimeoutedInstance

[Internal](../index.md).UserTimeoutedInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`UserTimeoutedEvent`](../interfaces/UserTimeoutedEvent.md)\>

## Constructors

### new UserTimeoutedInstance(data, client)

> **new UserTimeoutedInstance**(`data`, `client`): [`UserTimeoutedInstance`](UserTimeoutedInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`UserTimeoutedInstance`](UserTimeoutedInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[ws/private-chatroom/instance/user-timeouted.instance.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/instance/user-timeouted.instance.ts#L8)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`UserTimeoutedEvent`](../interfaces/UserTimeoutedEvent.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
