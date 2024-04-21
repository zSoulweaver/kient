---
outline: deep
---

# `AuthenticationEndpoint`

`AuthenticationEndpoint` contains methods that facilitate authenticating with the Kick application to access privledged routes.

## Methods

### <Badge type="tip">async</Badge> `getTokens()`

Retrieves tokens required for the login flow.

::: info Returns
`Promise<TokensResponse>`
:::

***

### <Badge type="tip">async</Badge> `login(credentials)`

Attempts authentication with Kick.

| Parameter   | Type             | Required | Default | Description                                            |
| ----------- | ---------------- | :------: | ------- | ------------------------------------------------------ |
| credentials | LoginCredentials |   true   |         | The credentials for the account that is authenticating |
| options     | LoginOptions     |   false  |         | Optional settings for the login process                |

::: info Returns
`Promise<void>`
:::

***

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `currentUser()`

Retrieves details of the currently logged-in user if authenticated.

::: info Returns
`Promise<UserResponse>`
:::
