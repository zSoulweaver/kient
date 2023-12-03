# Class: ChannelEndpoint

[Internal](../index.md).ChannelEndpoint

## Extends

- [`BaseEndpoint`](BaseEndpoint.md)

## Constructors

### new ChannelEndpoint(client)

> **new ChannelEndpoint**(`client`): [`ChannelEndpoint`](ChannelEndpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ChannelEndpoint`](ChannelEndpoint.md)

#### Inherited from

[`Internal.BaseEndpoint.constructor`](BaseEndpoint.md#constructors)

#### Source

[endpoints/endpoint.base.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L9)

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_apiClient` | [`ApiClient`](ApiClient.md) | - | [`Internal.BaseEndpoint._apiClient`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L7) |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseEndpoint._client`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L6) |

## Methods

### checkAuthenticated()

> **`protected`** **checkAuthenticated**(): `void`

#### Returns

`void`

#### Inherited from

[`Internal.BaseEndpoint.checkAuthenticated`](BaseEndpoint.md#checkauthenticated)

#### Source

[endpoints/endpoint.base.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L14)

***

### getChannel()

> **getChannel**(`channel`): `Promise`\<[`ChannelInstance`](ChannelInstance.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<[`ChannelInstance`](ChannelInstance.md)\>

#### Source

[endpoints/channel/channel.endpoint.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/channel.endpoint.ts#L11)

***

### getChatroomSettings()

> **getChatroomSettings**(`channel`): `Promise`\<[`GetChatroomSettingsResponse`](../interfaces/GetChatroomSettingsResponse.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<[`GetChatroomSettingsResponse`](../interfaces/GetChatroomSettingsResponse.md)\>

#### Source

[endpoints/channel/channel.endpoint.ts:37](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/channel.endpoint.ts#L37)

***

### getLeaderboards()

> **getLeaderboards**(`channel`): `Promise`\<[`GetLeaderboardsResponse`](../interfaces/GetLeaderboardsResponse.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<[`GetLeaderboardsResponse`](../interfaces/GetLeaderboardsResponse.md)\>

#### Source

[endpoints/channel/channel.endpoint.ts:29](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/channel.endpoint.ts#L29)

***

### getLivestream()

> **getLivestream**(`channel`): `Promise`\<[`LivestreamInstance`](LivestreamInstance.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<[`LivestreamInstance`](LivestreamInstance.md)\>

#### Source

[endpoints/channel/channel.endpoint.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/channel.endpoint.ts#L20)

***

### getPoll()

> **getPoll**(`channel`): `Promise`\<[`GetPollsResponse`](../type-aliases/GetPollsResponse.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`Promise`\<[`GetPollsResponse`](../type-aliases/GetPollsResponse.md)\>

#### Source

[endpoints/channel/channel.endpoint.ts:45](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/channel.endpoint.ts#L45)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
