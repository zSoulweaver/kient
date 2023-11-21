---
outline: deep
---

# Kient Class

The entry class into Kient, provides access to Kick's API endpoints and WebSocket via ease to consume functions.

## Properties

### `authenticated`

::: info Returns
`boolean`
:::

## Methods

### <Badge type="tip">static</Badge> <Badge type="tip">async</Badge> `create()`

Creates a new Kient instance and returns it.

::: info Returns
`Promise<Kient>`
:::

## Getters

### `api()`

Returns available endpoints to consume.

| Endpoint       | Reference                                              |
| -------------- | ------------------------------------------------------ |
| Authentication | [AuthenticationEndpoint](./authentication-endpoint.md) |
| Channels       | [ChannelEndpoint](./channel-endpoint.md)               |
| Chat           | [ChatEndpoint](./chat-endpoint.md)                     |

::: info Returns
`Endpoints`
:::

***

### `ws()`

Returns available WebSockets to consume.

| Socket   | Reference      |
| -------- | -------------- |
| chatroom | [ChatroomSocket](./chatroom-socket.md) |

::: info Returns

`WsHandlers`
:::
