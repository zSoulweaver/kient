---
outline: deep
---

# `ChannelEndpoint`

`ChannelEndpoint` contains methods that return instances directly related to specified Kick channels.

## Methods

### <Badge type="tip">async</Badge> `getChannel(channel)`

Retrieves information about a specified Kick channel.

| Parameter | Type   | Required | Default | Description                                       |
| --------- | ------ | :------: | ------- | ------------------------------------------------- |
| channel   | string |   true   |         | The channel name you want to retrieve details for |

::: info Returns
`Promise<ChannelInstance>`
:::

***

### <Badge type="tip">async</Badge> `getLivestream(channel)`

Retrieves information about the current livestream on a specified Kick channel.

| Parameter | Type   | Required | Default | Description                                                  |
| --------- | ------ | :------: | ------- | ------------------------------------------------------------ |
| channel   | string |   true   |         | The channel name you want to retrieve livestream details for |

::: info Returns
`Promise<LivestreamInstance>`
:::

***

### <Badge type="tip">async</Badge> `getLeaderboards(channel)`

Retrieves gifter leaderboards for a specified Kick channel.

| Parameter | Type   | Required | Default | Description                                            |
| --------- | ------ | :------: | ------- | ------------------------------------------------------ |
| channel   | string |   true   |         | The channel name you want to retrieve leaderboards for |

::: info Returns
`Promise<GetLeaderboardsResponse>`
:::

***

### <Badge type="tip">async</Badge> `getChatroomSettings(channel)`

Retrieves chatroom settings for a specified Kick channel.

| Parameter | Type   | Required | Default | Description                                                 |
| --------- | ------ | :------: | ------- | ----------------------------------------------------------- |
| channel   | string |   true   |         | The channel name you want to retrieve chatroom settings for |

::: info Returns
`Promise<GetChatroomSettingsResponse>`
:::

***

### <Badge type="tip">async</Badge> `getPoll(channel)`

Retrieves information about the current running poll on a specified Kick channel.

| Parameter | Type   | Required | Default | Description                                            |
| --------- | ------ | :------: | ------- | ------------------------------------------------------ |
| channel   | string |   true   |         | The channel name you want to retrieve poll details for |

::: info Returns
`Promise<GetPollsResponse>`
:::
