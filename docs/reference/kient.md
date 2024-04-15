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
| Clips           | [ClipEndpoint](./clip-endpoint.md)                     |

::: info Returns
`Endpoints`
:::

### `ws()`

Returns available WebSockets to consume.

| Socket            | Reference                                                 |
| ----------------- | --------------------------------------------------------- |
| chatroom          | [ChatroomSocket](./socket/chatroom.md)                    |
| channel           | [ChannelSocket](./socket/channel.md)                      |
| privateChatroom   | [PrivateChatroomSocket](./socket/private-chatroom.md)     |
| privateChannel    | [PrivateChannelSocket](./socket/private-channel.md)       |
| privateLivestream | [PrivateLivestreamSocket](./socket/private-livestream.md) |

::: info Returns

`WsHandlers`
:::

## Events

### Core

Events emitted in relation to core functionality or, not emitted by a socket (sometimes).

#### WebSocketConnected

Emitted once Kient has a connection to Kick's Pusher instance.

::: info Emits
`() => void`
:::

#### WebSocketDisconnected

Emitted once Kient has disconnected from Kick's Pusher instance.

::: info Emits
`() => void`
:::

#### UnknownEvent

Emitted from sockets when they receive an event which isn't tracked by Kient. Data emitted is of any type but mostly comes in the form of `{ eventName: string, data: any }`.

::: info Emits
`(data: any) => void`
:::

<!--@include: ./socket/channel-events.md-->
<!--@include: ./socket/chatroom-events.md-->
<!--@include: ./socket/private-channel-events.md-->
<!--@include: ./socket/private-chatroom-events.md-->
<!--@include: ./socket/private-livestream-events.md-->
