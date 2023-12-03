# Interface: BannedUserDeletedEvent

[Internal](../index.md).BannedUserDeletedEvent

## Extends

- [`BasePrivateChatroomEvent`](BasePrivateChatroomEvent.md)

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `banned` | `Object` | - | - | [ws/private-chatroom/dto/banned-user-deleted.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/banned-user-deleted.event.ts#L4) |
| `banned.id` | `number` | - | - | [ws/private-chatroom/dto/banned-user-deleted.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/banned-user-deleted.event.ts#L5) |
| `banned.slug` | `string` | - | - | [ws/private-chatroom/dto/banned-user-deleted.event.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/banned-user-deleted.event.ts#L6) |
| `banned.username` | `string` | - | - | [ws/private-chatroom/dto/banned-user-deleted.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/banned-user-deleted.event.ts#L7) |
| `channel` | `Object` | - | [`Internal.BasePrivateChatroomEvent.channel`](BasePrivateChatroomEvent.md) | [ws/private-chatroom/base.event.ts:3](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L3) |
| `channel.id` | `number` | - | - | [ws/private-chatroom/base.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L4) |
| `channel.slug` | `string` | - | - | [ws/private-chatroom/base.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L5) |
| `created_at` | `Date` | - | [`Internal.BasePrivateChatroomEvent.created_at`](BasePrivateChatroomEvent.md) | [ws/private-chatroom/dto/banned-user-deleted.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/banned-user-deleted.event.ts#L9) |
| `id` | `string` | - | [`Internal.BasePrivateChatroomEvent.id`](BasePrivateChatroomEvent.md) | [ws/private-chatroom/base.event.ts:2](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L2) |
| `user` | `Object` | - | [`Internal.BasePrivateChatroomEvent.user`](BasePrivateChatroomEvent.md) | [ws/private-chatroom/base.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L7) |
| `user.id` | `number` | - | - | [ws/private-chatroom/base.event.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L8) |
| `user.slug` | `string` | - | - | [ws/private-chatroom/base.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L9) |
| `user.username` | `string` | - | - | [ws/private-chatroom/base.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L10) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
