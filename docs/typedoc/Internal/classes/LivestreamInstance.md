# Class: LivestreamInstance

[Internal](../index.md).LivestreamInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`GetLivestreamResponse`](../interfaces/GetLivestreamResponse.md) \| `null`\>

## Constructors

### new LivestreamInstance(data, client)

> **new LivestreamInstance**(`data`, `client`): [`LivestreamInstance`](LivestreamInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`LivestreamInstance`](LivestreamInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[endpoints/channel/instance/livestream.instance.ts:15](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/livestream.instance.ts#L15)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | `null` \| [`GetLivestreamResponse`](../interfaces/GetLivestreamResponse.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

## Methods

### getThumbnails()

> **getThumbnails**(): `null` \| [`LivestreamThumbnails`](../interfaces/LivestreamThumbnails.md)

#### Returns

`null` \| [`LivestreamThumbnails`](../interfaces/LivestreamThumbnails.md)

#### Source

[endpoints/channel/instance/livestream.instance.ts:19](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/livestream.instance.ts#L19)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
