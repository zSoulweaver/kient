# Interface: BasePrivateChatroomEvent

[Internal](../index.md).BasePrivateChatroomEvent

## Extended By

- [`BannedWordAddedEvent`](BannedWordAddedEvent.md)
- [`BannedUserDeletedEvent`](BannedUserDeletedEvent.md)
- [`EmotesModeActivatedEvent`](EmotesModeActivatedEvent.md)
- [`EmotesModeDeactivatedEvent`](EmotesModeDeactivatedEvent.md)
- [`FollowersModeActivatedEvent`](FollowersModeActivatedEvent.md)
- [`FollowersModeDeactivatedEvent`](FollowersModeDeactivatedEvent.md)
- [`SlowModeActivatedEvent`](SlowModeActivatedEvent.md)
- [`SlowModeDeactivatedEvent`](SlowModeDeactivatedEvent.md)
- [`SubscribersModeActivatedEvent`](SubscribersModeActivatedEvent.md)
- [`SubscribersModeDeactivatedEvent`](SubscribersModeDeactivatedEvent.md)

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `channel` | `Object` | - | [ws/private-chatroom/base.event.ts:3](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L3) |
| `channel.id` | `number` | - | [ws/private-chatroom/base.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L4) |
| `channel.slug` | `string` | - | [ws/private-chatroom/base.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L5) |
| `created_at` | `Date` | - | [ws/private-chatroom/base.event.ts:12](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L12) |
| `id` | `string` | - | [ws/private-chatroom/base.event.ts:2](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L2) |
| `user` | `Object` | - | [ws/private-chatroom/base.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L7) |
| `user.id` | `number` | - | [ws/private-chatroom/base.event.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L8) |
| `user.slug` | `string` | - | [ws/private-chatroom/base.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L9) |
| `user.username` | `string` | - | [ws/private-chatroom/base.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L10) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
