# Type alias: PrivateChannelEventEmitters

[Internal](../index.md).PrivateChannelEventEmitters

> **PrivateChannelEventEmitters**: `Object`

## Type declaration

### PRIVATE\_CHANNEL\_FOLLOWED

> **PRIVATE\_CHANNEL\_FOLLOWED**: (`followerAddedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `followerAddedInstance` | [`FollowerAddedInstance`](../classes/FollowerAddedInstance.md) |

#### Returns

`void`

### PRIVATE\_CHANNEL\_RENEWED

> **PRIVATE\_CHANNEL\_RENEWED**: (`subscriptionRenewedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionRenewedInstance` | [`SubscriptionRenewedInstance`](../classes/SubscriptionRenewedInstance.md) |

#### Returns

`void`

### PRIVATE\_CHANNEL\_SUBSCRIPTION

> **PRIVATE\_CHANNEL\_SUBSCRIPTION**: (`subscriptionCreatedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionCreatedInstance` | [`SubscriptionCreatedInstance`](../classes/SubscriptionCreatedInstance.md) |

#### Returns

`void`

### PRIVATE\_CHANNEL\_SUBSCRIPTIONS\_GIFTED

> **PRIVATE\_CHANNEL\_SUBSCRIPTIONS\_GIFTED**: (`subscriptionGiftedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionGiftedInstance` | [`SubscriptionGiftedInstance`](../classes/SubscriptionGiftedInstance.md) |

#### Returns

`void`

### PRIVATE\_CHANNEL\_UNFOLLOWED

> **PRIVATE\_CHANNEL\_UNFOLLOWED**: (`followerDeletedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `followerDeletedInstance` | [`FollowerDeletedInstance`](../classes/FollowerDeletedInstance.md) |

#### Returns

`void`

## Source

[ws/private-channel/private-channel.events.ts:16](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-channel/private-channel.events.ts#L16)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
