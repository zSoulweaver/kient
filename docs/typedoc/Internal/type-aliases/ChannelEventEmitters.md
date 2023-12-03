# Type alias: ChannelEventEmitters

[Internal](../index.md).ChannelEventEmitters

> **ChannelEventEmitters**: `Object`

## Type declaration

### CHANNEL\_BANNED

> **CHANNEL\_BANNED**: (`channelId`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelId` | `string` \| `number` |

#### Returns

`void`

### CHANNEL\_FOLLOWERS\_UPDATE

> **CHANNEL\_FOLLOWERS\_UPDATE**: (`followersUpdateInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `followersUpdateInstance` | [`FollowersUpdateInstance`](../classes/FollowersUpdateInstance.md) |

#### Returns

`void`

### CHANNEL\_LEADERBOARD\_UPDATE

> **CHANNEL\_LEADERBOARD\_UPDATE**: (`giftsLeaderboardUpdatedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `giftsLeaderboardUpdatedInstance` | [`GiftsLeaderboardUpdatedInstance`](../classes/GiftsLeaderboardUpdatedInstance.md) |

#### Returns

`void`

### CHANNEL\_START\_HOST

> **CHANNEL\_START\_HOST**: (`chatMoveToSupportedChannelInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatMoveToSupportedChannelInstance` | [`ChatMoveToSupportedChannelInstance`](../classes/ChatMoveToSupportedChannelInstance.md) |

#### Returns

`void`

### CHANNEL\_START\_STREAM

> **CHANNEL\_START\_STREAM**: (`streamerIsLiveInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `streamerIsLiveInstance` | [`StreamerIsLiveInstance`](../classes/StreamerIsLiveInstance.md) |

#### Returns

`void`

### CHANNEL\_STOP\_STREAM

> **CHANNEL\_STOP\_STREAM**: (`stopStreamBroadcastInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stopStreamBroadcastInstance` | [`StopStreamBroadcastInstance`](../classes/StopStreamBroadcastInstance.md) |

#### Returns

`void`

### CHANNEL\_SUBSCRIPTION

> **CHANNEL\_SUBSCRIPTION**: (`channelSubscriptionInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channelSubscriptionInstance` | [`ChannelSubscriptionInstance`](../classes/ChannelSubscriptionInstance.md) |

#### Returns

`void`

### CHANNEL\_SUBSCRIPTIONS\_GIFTED

> **CHANNEL\_SUBSCRIPTIONS\_GIFTED**: (`luckyUsersWhoGotGiftSubscriptionsInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `luckyUsersWhoGotGiftSubscriptionsInstance` | [`LuckyUsersWhoGotGiftSubscriptionsInstance`](../classes/LuckyUsersWhoGotGiftSubscriptionsInstance.md) |

#### Returns

`void`

## Source

[ws/channel/channel.events.ts:25](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/channel.events.ts#L25)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
