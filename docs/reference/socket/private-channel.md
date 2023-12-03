---
outline: deep
---

# `PrivateChannelSocket`

`PrivateChannelSocket` contains methods to interact with the WebSocket in relation to private channel events.

Internally, Kient uses the Pusher channel `private-channel_${channelId}`.

## Methods

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `listen(channelId)`

Listens to a specific channel and emits related events.


| Parameter | Type             | Required | Default | Description                        |
| --------- | ---------------- | :------: | ------- | ---------------------------------- |
| channelId | string \| number |   true   |         | The ID of the channel to listen to |

::: info Returns
`Promise<void>`
:::

***

### <Badge type="tip">async</Badge> `disconnect(channelId)`

Disconnects from a specific channel.

| Parameter | Type             | Required | Default | Description                              |
| --------- | ---------------- | :------: | ------- | ---------------------------------------- |
| channelId | string \| number |   true   |         | The ID of the channel to disconnect from |

::: info Returns
`Promise<void>`
:::
