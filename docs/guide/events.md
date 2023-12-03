# Events

Kient emits many events as it receives them from Kick's WebSocket and transforms them into instances for easy consumption.

::: tip
Not sure what an instance is? Check out the [Response Instance](./response-instance.md) page for more information on how to consume them.
:::

## Accessing Events

Kient will emit events directly off the Kient instance you create. Kient uses the [`tseep`](https://github.com/Morglod/tseep) library which implements the Node [`EventEmitter`](https://nodejs.org/api/events.html#class-eventemitter) class. Simply listen for events using `.on()`, `.once()`, or any of the functions available from `EventEmitter`.

Additionally Kient also exports the `Events` enum for easy usage of the events within your application. The events in the enum are scoped to the socket they belong to and will not emit until that socket is subscribed to.

```ts
import { Events } from 'kient'

client.on('event', (streamerIsLiveInstance) => {})
```

## Subscribing to Sockets

Before any events are emitted by Kient, you will first need to subscribe to the socket you want to listen to. Subscribing to a socket can either be done via using an instance that includes the helper function for you or via using the `listen()` function on the socket.

```ts{2}
const channel = await client.api.channel.getChannel('soulweaver')
await client.ws.channel.listen(channel.data.id)
```

Now that we are listening to the `channel` socket, Kient will emit events on the `Event.Channel` enum.

## Example

In the below example we are going to create a new Kient instance, get a channel, listen to the chatroom and print any messages in chat to the console.

```ts
import { Events, Kient } from 'kient'

const client = await Kient.create()

const channel = await client.api.channel.getChannel('xqc')
await channel.connectToChatroom()

client.on(Events.Chatroom.Message, (messageInstance) => {
  const message = messageInstance.data
  console.log(`${message.sender.username}: ${message.content}`)
})
```
