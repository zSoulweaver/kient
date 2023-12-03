---
outline: deep
---

# `PrivateChatroomSocket`

`PrivateChatroomSocket` contains methods to interact with the WebSocket in relation to private chatroom events.

Internally, Kient uses the Pusher channel `private-chatroom_${chatroomId}`.

## Methods

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `listen(chatroomId)`

Listens to a specific chatroom and emits related events.


| Parameter  | Type             | Required | Default | Description                         |
| ---------- | ---------------- | :------: | ------- | ----------------------------------- |
| chatroomId | string \| number |   true   |         | The ID of the chatroom to listen to |

::: info Returns
`Promise<void>`
:::

***

### <Badge type="tip">async</Badge> `disconnect(chatroomId)`

Disconnects from a specific chatroom.

| Parameter  | Type             | Required | Default | Description                               |
| ---------- | ---------------- | :------: | ------- | ----------------------------------------- |
| chatroomId | string \| number |   true   |         | The ID of the chatroom to disconnect from |

::: info Returns
`Promise<void>`
:::
