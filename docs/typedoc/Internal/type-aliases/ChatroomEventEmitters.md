# Type alias: ChatroomEventEmitters

[Internal](../index.md).ChatroomEventEmitters

> **ChatroomEventEmitters**: `Object`

## Type declaration

### CHATROOM\_CLEAR\_CHAT

> **CHATROOM\_CLEAR\_CHAT**: (`chatroomClearInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomClearInstance` | [`ChatroomClearInstance`](../classes/ChatroomClearInstance.md) |

#### Returns

`void`

### CHATROOM\_HOSTED

> **CHATROOM\_HOSTED**: (`hostedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hostedInstance` | [`StreamHostInstance`](../classes/StreamHostInstance.md) |

#### Returns

`void`

### CHATROOM\_MESSAGE

> **CHATROOM\_MESSAGE**: (`chatMessageInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatMessageInstance` | [`ChatMessageInstance`](../classes/ChatMessageInstance.md) |

#### Returns

`void`

### CHATROOM\_MESSAGE\_DELETED

> **CHATROOM\_MESSAGE\_DELETED**: (`messageDeletedInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageDeletedInstance` | [`MessageDeletedInstance`](../classes/MessageDeletedInstance.md) |

#### Returns

`void`

### CHATROOM\_MESSAGE\_PINNED

> **CHATROOM\_MESSAGE\_PINNED**: (`pinnedMessageInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pinnedMessageInstance` | [`PinnedMessageInstance`](../classes/PinnedMessageInstance.md) |

#### Returns

`void`

### CHATROOM\_MESSAGE\_UNPINNED

> **CHATROOM\_MESSAGE\_UNPINNED**: (`chatroomId`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |

#### Returns

`void`

### CHATROOM\_POLL\_DELETED

> **CHATROOM\_POLL\_DELETED**: (`chatroomId`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomId` | `string` \| `number` |

#### Returns

`void`

### CHATROOM\_POLL\_UPDATED

> **CHATROOM\_POLL\_UPDATED**: (`pollInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pollInstance` | [`PollUpdateInstance`](../classes/PollUpdateInstance.md) |

#### Returns

`void`

### CHATROOM\_SETTINGS\_UPDATED

> **CHATROOM\_SETTINGS\_UPDATED**: (`chatroomInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatroomInstance` | [`ChatroomUpdatedInstance`](../classes/ChatroomUpdatedInstance.md) |

#### Returns

`void`

### CHATROOM\_SUBSCRIPTION

> **CHATROOM\_SUBSCRIPTION**: (`subscriptionInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionInstance` | [`SubscriptionInstance`](../classes/SubscriptionInstance.md) |

#### Returns

`void`

### CHATROOM\_SUBSCRIPTIONS\_GIFTED

> **CHATROOM\_SUBSCRIPTIONS\_GIFTED**: (`giftedSubscriptionsInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `giftedSubscriptionsInstance` | [`GiftedSubscriptionsInstance`](../classes/GiftedSubscriptionsInstance.md) |

#### Returns

`void`

### CHATROOM\_USER\_BANNED

> **CHATROOM\_USER\_BANNED**: (`bannedUserInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bannedUserInstance` | [`BannedUserInstance`](../classes/BannedUserInstance.md) |

#### Returns

`void`

### CHATROOM\_USER\_UNBANNED

> **CHATROOM\_USER\_UNBANNED**: (`unbannedUserInstance`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `unbannedUserInstance` | [`UnbannedUserInstance`](../classes/UnbannedUserInstance.md) |

#### Returns

`void`

## Source

[ws/chatroom/chatroom.events.ts:30](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/chatroom/chatroom.events.ts#L30)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
