# Interface: ChatMoveToSupportedChannelEvent

[Internal](../index.md).ChatMoveToSupportedChannelEvent

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `channel` | `Object` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:2](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L2) |
| `channel.can_host` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:11](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L11) |
| `channel.current_livestream` | `Object` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:12](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L12) |
| `channel.current_livestream.channel_id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:15](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L15) |
| `channel.current_livestream.created_at` | `Date` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:16](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L16) |
| `channel.current_livestream.duration` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:23](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L23) |
| `channel.current_livestream.id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:13](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L13) |
| `channel.current_livestream.is_live` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:18](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L18) |
| `channel.current_livestream.is_mature` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:25](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L25) |
| `channel.current_livestream.language` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:24](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L24) |
| `channel.current_livestream.risk_level_id` | `unknown` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:19](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L19) |
| `channel.current_livestream.session_title` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:17](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L17) |
| `channel.current_livestream.slug` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L14) |
| `channel.current_livestream.source` | `unknown` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:21](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L21) |
| `channel.current_livestream.start_time` | `Date` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:20](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L20) |
| `channel.current_livestream.twitch_channel?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:22](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L22) |
| `channel.current_livestream.viewer_count` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:26](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L26) |
| `channel.id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:3](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L3) |
| `channel.is_banned` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L6) |
| `channel.name_updated_at` | `unknown` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:8](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L8) |
| `channel.playback_url` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L7) |
| `channel.slug` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:5](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L5) |
| `channel.subscription_enabled` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:10](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L10) |
| `channel.user` | `Object` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:28](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L28) |
| `channel.user.agreed_to_terms` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:31](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L31) |
| `channel.user.bio?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:33](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L33) |
| `channel.user.city?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:36](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L36) |
| `channel.user.country?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:34](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L34) |
| `channel.user.discord?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:40](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L40) |
| `channel.user.email_verified_at` | `Date` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:32](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L32) |
| `channel.user.facebook?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:42](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L42) |
| `channel.user.id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:29](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L29) |
| `channel.user.instgram?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:37](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L37) |
| `channel.user.state?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:35](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L35) |
| `channel.user.tiktok?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:41](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L41) |
| `channel.user.twitter?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:38](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L38) |
| `channel.user.username` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:30](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L30) |
| `channel.user.youtube?` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:39](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L39) |
| `channel.user_id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:4](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L4) |
| `channel.vod_enabled` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L9) |
| `hosted` | `Object` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:46](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L46) |
| `hosted.category` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:53](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L53) |
| `hosted.id` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:47](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L47) |
| `hosted.is_live` | `boolean` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:51](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L51) |
| `hosted.preview_thumbnail` | `Object` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:54](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L54) |
| `hosted.preview_thumbnail.src` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:56](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L56) |
| `hosted.preview_thumbnail.srcset` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:55](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L55) |
| `hosted.profile_pic` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:52](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L52) |
| `hosted.slug` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:49](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L49) |
| `hosted.username` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:48](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L48) |
| `hosted.viewers_count` | `number` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:50](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L50) |
| `slug` | `string` | - | [ws/channel/dto/chat-move-to-supported-channel.event.ts:45](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/ws/channel/dto/chat-move-to-supported-channel.event.ts#L45) |

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
