### Chatroom

Events emitted in relation to chatrooms.

#### Message

::: info Emits
`(chatMessageInstance: ChatMessageInstance) => void`
:::

#### MessageDeleted

::: info Emits
`(messageDeletedInstance: MessageDeletedInstance) => void`
:::

#### UserBanned

::: info Emits
`(bannedUserInstance: BannedUserInstance) => void`
:::

#### UserUnbanned

::: info Emits
`(unbannedUserInstance: UnbannedUserInstance) => void`
:::

#### MessagePinned

::: info Emits
`(pinnedMessageInstance: PinnedMessageInstance) => void`
:::

#### MessageUnpinned

::: info Emits
`(chatroomId: string | number) => void`
:::

#### Subscription

::: info Emits
`(subscriptionInstance: SubscriptionInstance) => void`
:::

#### SubscriptionsGifted

::: info Emits
`(giftedSubscriptionsInstance: GiftedSubscriptionsInstance) => void`
:::

#### PollUpdated

::: info Emits
`(pollInstance: PollUpdateInstance) => void`
:::

#### PollDeleted

::: info Emits
`(chatroomId: string | number) => void`
:::

#### SettingsUpdated

::: info Emits
`(chatroomInstance: ChatroomUpdatedInstance) => void`
:::

#### ClearChat

::: info Emits
`(chatroomClearInstance: ChatroomClearInstance) => void`
:::

#### Hosted

::: info Emits
`(hostedInstance: StreamHostInstance) => void`
:::
