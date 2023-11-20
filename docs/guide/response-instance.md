# Response Instances

## What is an instance?

In the context of Kient, an "instance" refers to a class that not only encapsulates the raw API or WebSocket response but also comes equipped with convenient helper functions for accessing related data or transforming information.

## Instance Structure

Instances may include a variety of helper functions available via code completion in your IDE or by browsing the reference docs for the consumed instance.

All instances provide the raw typed API or WebSocket response via the `.data` property.

## Example

In the examples below, we'll connect to the channel's chatroom using both the more verbose method and the instance method.

::: tip
Curious about the `ChannelInstance` and its capabilities? Dive into the details by exploring the [`ChannelInstance` reference](../reference/channel-instance.md).
:::

```ts
// Get a Kick channel and return a ChannelInstance
const channel = await client.api.channel.getChannel('xqc')

// Connect to the chatroom using the data from the ChannelInstance
await client.ws.chatroom.listen(channel.data.chatroom.id)
```

```ts
// Get a Kick channel and return a ChannelInstance
const channel = await client.api.channel.getChannel('xqc')

// Connect to the chatroom using the ChannelInstance
await channel.connectToChatroom()
```
