# Class: ChannelInstance

[Internal](../index.md).ChannelInstance

## Extends

- [`BaseInstance`](BaseInstance.md)\<[`GetChannelResponse`](../interfaces/GetChannelResponse.md)\>

## Constructors

### new ChannelInstance(data, client)

> **new ChannelInstance**(`data`, `client`): [`ChannelInstance`](ChannelInstance.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ChannelInstance`](ChannelInstance.md)

#### Overrides

[`Internal.BaseInstance.constructor`](BaseInstance.md#constructors)

#### Source

[endpoints/channel/instance/channel.instance.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L7)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseInstance._client`](BaseInstance.md) | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | [`GetChannelResponse`](../interfaces/GetChannelResponse.md) | - | [`Internal.BaseInstance.data`](BaseInstance.md) | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

## Methods

### connectToChatroom()

> **connectToChatroom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[endpoints/channel/instance/channel.instance.ts:15](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L15)

***

### getChatroom()

> **getChatroom**(): [`ChannelChatroom`](../interfaces/ChannelChatroom.md)

#### Returns

[`ChannelChatroom`](../interfaces/ChannelChatroom.md)

#### Source

[endpoints/channel/instance/channel.instance.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L11)

***

### getLeaderboard()

> **getLeaderboard**(): `Promise`\<[`GetLeaderboardsResponse`](../interfaces/GetLeaderboardsResponse.md)\>

#### Returns

`Promise`\<[`GetLeaderboardsResponse`](../interfaces/GetLeaderboardsResponse.md)\>

#### Source

[endpoints/channel/instance/channel.instance.ts:23](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L23)

***

### getLivestream()

> **getLivestream**(): `Promise`\<[`LivestreamInstance`](LivestreamInstance.md)\>

#### Returns

`Promise`\<[`LivestreamInstance`](LivestreamInstance.md)\>

#### Source

[endpoints/channel/instance/channel.instance.ts:19](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L19)

***

### getPoll()

> **getPoll**(): `Promise`\<[`GetPollsResponse`](../type-aliases/GetPollsResponse.md)\>

#### Returns

`Promise`\<[`GetPollsResponse`](../type-aliases/GetPollsResponse.md)\>

#### Source

[endpoints/channel/instance/channel.instance.ts:27](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/channel/instance/channel.instance.ts#L27)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
