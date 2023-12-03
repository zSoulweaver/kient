---
outline: deep
---

# `ChannelSocket`

`ChatroomSocket` contains methods to interact with the WebSocket in relation to channel events. 

Internally, Kient uses the Pusher channel `channel.${channelId}`.

## Methods

### <Badge type="tip">async</Badge> `listen(channelId)`

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
