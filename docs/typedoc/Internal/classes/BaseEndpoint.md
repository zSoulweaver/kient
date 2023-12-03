# Class: `abstract` BaseEndpoint

[Internal](../index.md).BaseEndpoint

## Extended By

- [`AuthenticationEndpoint`](AuthenticationEndpoint.md)
- [`ChannelEndpoint`](ChannelEndpoint.md)
- [`ChatEndpoint`](ChatEndpoint.md)

## Constructors

### new BaseEndpoint(client)

> **new BaseEndpoint**(`client`): [`BaseEndpoint`](BaseEndpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`BaseEndpoint`](BaseEndpoint.md)

#### Source

[endpoints/endpoint.base.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L9)

## Properties

| Modifier | Property | Type | Description | Source |
| :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_apiClient` | [`ApiClient`](ApiClient.md) | - | [endpoints/endpoint.base.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L7) |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [endpoints/endpoint.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L6) |

## Methods

### checkAuthenticated()

> **`protected`** **checkAuthenticated**(): `void`

#### Returns

`void`

#### Source

[endpoints/endpoint.base.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L14)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
