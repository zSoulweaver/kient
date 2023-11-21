---
outline: deep
---

# `ChatMessageInstance`

`ChatMessageInstance` is a class returned from a chat message event. It encapsulates data about the message and includes methods to assist with interacting with the specified message event.

## Properties

### `data`

::: info Returns
`ChatMessageEvent`
:::

## Methods

### `chatterIs(chatterStatus)`

Check if the user in chat has a specified status. This method checks the badges displayed in chat, and if a certain badge is hidden by the user, it will not return true, even though the user may be a part of this group.

| Parameter     | Type                    | Required | Default | Description                                        |
| ------------- | ----------------------- | :------: | ------- | -------------------------------------------------- |
| chatterStatus | ChatterStatus \| string |   true   |         | The status type you want to check against the user |

::: info Returns
`boolean`
:::

***

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `deleteMessage()`

Deletes the message.

::: info Returns
`Promise<GenericApiResponse<null>>`
:::
