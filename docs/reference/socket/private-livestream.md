---
outline: deep
---

# `PrivateLivestreamSocket`

`PrivateLivestreamSocket` contains methods to interact with the WebSocket in relation to private livestream events.

Internally, Kient uses the Pusher channels `private-livestream_${livestreamId}` and `private-livestream-updated.${livestreamId}`.

## Methods

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `listen(livestreamId)`

Listens to a specific livestream and emits related events.


| Parameter    | Type             | Required | Default | Description                           |
| ------------ | ---------------- | :------: | ------- | ------------------------------------- |
| livestreamId | string \| number |   true   |         | The ID of the livestream to listen to |

::: info Returns
`Promise<void>`
:::

***

### <Badge type="tip">async</Badge> `disconnect(livestreamId)`

Disconnects from a specific livestream.

| Parameter    | Type             | Required | Default | Description                                 |
| ------------ | ---------------- | :------: | ------- | ------------------------------------------- |
| livestreamId | string \| number |   true   |         | The ID of the livestream to disconnect from |

::: info Returns
`Promise<void>`
:::
