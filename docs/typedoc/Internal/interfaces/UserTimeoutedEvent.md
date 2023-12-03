# Interface: UserTimeoutedEvent

[Internal](../index.md).UserTimeoutedEvent

## Extends

- `Omit`\<[`BasePrivateChatroomEvent`](BasePrivateChatroomEvent.md), `"created_at"`\>

## Properties

| Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ |
| `ban` | `Object` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L9) |
| `ban.created_at` | `Date` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:12](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L12) |
| `ban.expires_at` | `Date` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:13](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L13) |
| `ban.reason` | `string` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L10) |
| `ban.type` | `string` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L11) |
| `banned` | `Object` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L4) |
| `banned.id` | `number` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L5) |
| `banned.slug` | `string` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L6) |
| `banned.username` | `string` | - | - | [ws/private-chatroom/dto/user-timeouted.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/dto/user-timeouted.event.ts#L7) |
| `channel` | `Object` | - | `Omit.channel` | [ws/private-chatroom/base.event.ts:3](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L3) |
| `channel.id` | `number` | - | - | [ws/private-chatroom/base.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L4) |
| `channel.slug` | `string` | - | - | [ws/private-chatroom/base.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L5) |
| `id` | `string` | - | `Omit.id` | [ws/private-chatroom/base.event.ts:2](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L2) |
| `user` | `Object` | - | `Omit.user` | [ws/private-chatroom/base.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L7) |
| `user.id` | `number` | - | - | [ws/private-chatroom/base.event.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L8) |
| `user.slug` | `string` | - | - | [ws/private-chatroom/base.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L9) |
| `user.username` | `string` | - | - | [ws/private-chatroom/base.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/private-chatroom/base.event.ts#L10) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
