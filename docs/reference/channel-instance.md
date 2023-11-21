---
outline: deep
---

# `ChannelInstance`

`ChannelInstance` is a class returned from methods that fetch Kick channels. It encapsulates data about the channel and includes methods to assist with interacting with the specified channel.

## Properties

### `data`

::: info Returns
`GetChannelResponse`
:::

## Methods

### `getChatroom()`

Returns the `chatroom` object from the channel data.

::: info Returns
`ChannelChatroom`
:::

***

### <Badge type="tip">async</Badge> `connectToChatroom()`

Connects to the channel's chatoom and listens for events

::: info Returns
`Promise<void>`
:::

***

### <Badge type="tip">async</Badge> `getLivestream()`

Gets information for the current livestream running on this channel.

::: info Returns
`Promise<LivestreamInstance>`
:::

***

### <Badge type="tip">async</Badge> `getLeaderboard()`

Gets information for gifting leaderboard.

::: info Returns
`Promise<GetLeaderboardsResponse>`
:::

***

### <Badge type="tip">async</Badge> `getPoll()`

Gets information for current running poll.
::: info Returns
`Promise<GetPollsResponse>`
:::
