---
outline: deep
---

# `ChatEndpoint`

`ChatEndpoint` contains methods that facilitate communication with a channel's chatroom.


## Methods

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `sendMessage(chatroomId, message)`

Sends a message into the specified chatroom.

| Parameter  | Type             | Required | Default | Description                                      |
| ---------- | ---------------- | :------: | ------- | ------------------------------------------------ |
| chatroomId | string \| number |   true   |         | The chatroom where you want to send your message |
| message    | string           |   true   |         | The message to be sent                           |
| replyTo    | 	{ originalMessageId: string, originalMessageContent: string, originalSenderId: number, originalSenderUsername: string } |   false   |         | Information about the original message to reply to  |


::: info Returns
`Promise<SendMessageResponse>`
:::

***

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `deleteMessage(chatroomId, messageId)`

Deletes a message in the specified chatroom by ID.

| Parameter  | Type             | Required | Default | Description                                       |
| ---------- | ---------------- | :------: | ------- | ------------------------------------------------- |
| chatroomId | string \| number |   true   |         | The chatroom where you want to delete the message |
| messageId  | string           |   true   |         | The ID of the message you want to delete          |

::: info Returns
`Promise<GenericApiResponse<null>>`
:::

***

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `pinMessage(channel, messageId)`

Pins a message in the specified channel by ID.

| Parameter | Type   | Required | Default | Description                                   |
| --------- | ------ | :------: | ------- | --------------------------------------------- |
| chatroom  | string |   true   |         | The channel where you want to pin the message |
| messageId | string |   true   |         | The ID of the message you want to pin         |

::: info Returns
`Promise<GenericApiResponse<null>>`
:::
