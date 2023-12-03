# Interface: GiftsLeaderboardUpdatedEvent

[Internal](../index.md).GiftsLeaderboardUpdatedEvent

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `channel` | `Object` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:2](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L2) |
| `channel.can_host` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L9) |
| `channel.chatroom` | `Object` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L10) |
| `channel.chatroom.channel_id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:13](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L13) |
| `channel.chatroom.chat_mode` | `string` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:17](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L17) |
| `channel.chatroom.chat_mode_old` | `string` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:16](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L16) |
| `channel.chatroom.chatable_type` | `string` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:12](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L12) |
| `channel.chatroom.chatablle_id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:19](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L19) |
| `channel.chatroom.created_at` | `Date` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L14) |
| `channel.chatroom.emotes_mode` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:22](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L22) |
| `channel.chatroom.followers_mode` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L20) |
| `channel.chatroom.following_min_duration` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:24](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L24) |
| `channel.chatroom.id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L11) |
| `channel.chatroom.message_interval` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:23](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L23) |
| `channel.chatroom.slow_mode` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:18](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L18) |
| `channel.chatroom.subscribers_mode` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:21](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L21) |
| `channel.chatroom.updated_at` | `Date` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:15](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L15) |
| `channel.id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:3](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L3) |
| `channel.is_banned` | `boolean` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L6) |
| `channel.name_updated_at` | `unknown` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L8) |
| `channel.playback_url` | `string` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L7) |
| `channel.slug` | `string` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L5) |
| `channel.user_id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L4) |
| `gifted_quantity` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:43](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L43) |
| `gifter_id` | `number` | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:42](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L42) |
| `leaderboard` | `Object`[] | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:27](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L27) |
| `monthly_leaderboard` | `Object`[] | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:37](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L37) |
| `weekly_leaderboard` | `Object`[] | - | [ws/channel/dto/gifts-leaderboard-updated.event.ts:32](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/gifts-leaderboard-updated.event.ts#L32) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
