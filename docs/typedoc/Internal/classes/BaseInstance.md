# Class: `abstract` BaseInstance\<T\>

[Internal](../index.md).BaseInstance

## Extended By

- [`FollowersUpdateInstance`](FollowersUpdateInstance.md)
- [`ChannelSubscriptionInstance`](ChannelSubscriptionInstance.md)
- [`LuckyUsersWhoGotGiftSubscriptionsInstance`](LuckyUsersWhoGotGiftSubscriptionsInstance.md)
- [`GiftsLeaderboardUpdatedInstance`](GiftsLeaderboardUpdatedInstance.md)
- [`ChatMoveToSupportedChannelInstance`](ChatMoveToSupportedChannelInstance.md)
- [`StreamerIsLiveInstance`](StreamerIsLiveInstance.md)
- [`StopStreamBroadcastInstance`](StopStreamBroadcastInstance.md)
- [`ChatMessageInstance`](ChatMessageInstance.md)
- [`MessageDeletedInstance`](MessageDeletedInstance.md)
- [`BannedUserInstance`](BannedUserInstance.md)
- [`UnbannedUserInstance`](UnbannedUserInstance.md)
- [`PinnedMessageInstance`](PinnedMessageInstance.md)
- [`SubscriptionInstance`](SubscriptionInstance.md)
- [`GiftedSubscriptionsInstance`](GiftedSubscriptionsInstance.md)
- [`PollUpdateInstance`](PollUpdateInstance.md)
- [`ChatroomUpdatedInstance`](ChatroomUpdatedInstance.md)
- [`ChatroomClearInstance`](ChatroomClearInstance.md)
- [`StreamHostInstance`](StreamHostInstance.md)
- [`SubscriptionCreatedInstance`](SubscriptionCreatedInstance.md)
- [`SubscriptionRenewedInstance`](SubscriptionRenewedInstance.md)
- [`SubscriptionGiftedInstance`](SubscriptionGiftedInstance.md)
- [`FollowerAddedInstance`](FollowerAddedInstance.md)
- [`FollowerDeletedInstance`](FollowerDeletedInstance.md)
- [`BannedWordAddedInstance`](BannedWordAddedInstance.md)
- [`BannedWordDeletedInstance`](BannedWordDeletedInstance.md)
- [`BannedUserAddedInstance`](BannedUserAddedInstance.md)
- [`BannedUserDeletedInstance`](BannedUserDeletedInstance.md)
- [`EmotesModeActivatedInstance`](EmotesModeActivatedInstance.md)
- [`EmotesModeDeactivatedInstance`](EmotesModeDeactivatedInstance.md)
- [`FollowersModeActivatedInstance`](FollowersModeActivatedInstance.md)
- [`FollowersModeDeactivatedInstance`](FollowersModeDeactivatedInstance.md)
- [`SlowModeActivatedInstance`](SlowModeActivatedInstance.md)
- [`SlowModeDeactivatedInstance`](SlowModeDeactivatedInstance.md)
- [`SubscribersModeActivatedInstance`](SubscribersModeActivatedInstance.md)
- [`SubscribersModeDeactivatedInstance`](SubscribersModeDeactivatedInstance.md)
- [`UserTimeoutedInstance`](UserTimeoutedInstance.md)
- [`HostReceivedInstance`](HostReceivedInstance.md)
- [`TitleChangedInstance`](TitleChangedInstance.md)
- [`MatureModeActivatedInstance`](MatureModeActivatedInstance.md)
- [`MatureModeDeactivatedInstance`](MatureModeDeactivatedInstance.md)
- [`UpdatedLiveStreamInstance`](UpdatedLiveStreamInstance.md)
- [`ChannelInstance`](ChannelInstance.md)
- [`LivestreamInstance`](LivestreamInstance.md)

## Type parameters

| Parameter |
| :------ |
| `T` |

## Constructors

### new BaseInstance(data, client)

> **new BaseInstance**\<`T`\>(`data`, `client`): [`BaseInstance`](BaseInstance.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `T` |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`BaseInstance`](BaseInstance.md)\<`T`\>

#### Source

[utils/instance.base.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L7)

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `_client` | [`Kient`](../../classes/Kient.md) | - | [utils/instance.base.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L4) |
| `data` | `T` | - | [utils/instance.base.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/utils/instance.base.ts#L5) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
