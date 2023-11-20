# Authentication

While we await proper OAuth authentication support from Kick for third-party developers, we currently rely on the standard consumer login method with a workaround.

Kick enforces two-factor authentication (2FA), requiring users to provide a one-time code during the authentication process. Kient does not generate these codes and leaves it to the end user. A recommended approach is to use a TOTP library like [`otpauth`](https://github.com/hectorm/otpauth) to generate a one-time code for Kient authentication.

## Authenticating Kient

To authenticate with Kient after initializing the client, use the following straightforward function:

```ts
await client.api.authentication.login({
  email: '', // mail@example.com
  password: '', // qwerty123
  otc: 123456 // one-time code provided via TOTP or Email
})
```

::: info
Security is paramount. Ensure the secure management of authentication credentials and avoid hardcoding sensitive information in your source code.
:::

In case of authentication failure, Kient will throw a `KientAuthenticationError` with detailed information on the cause of the failure.

## Using Authenticated Endpoints

Once authenticated, Kient can interact with endpoints requiring authentication, such as sending messages to chatrooms. If an authenticated endpoint is called before the client is authenticated, Kient will throw a `KientUnauthenticated` error.

```ts{4}
const channel = await client.api.channel.getChannel('xqc')

// Throws `KientUnauthenticated` if not authenticated
await client.api.chat.sendMessage(channel.data.chatroom.id, 'Hello!')
```
