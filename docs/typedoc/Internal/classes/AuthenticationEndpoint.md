# Class: AuthenticationEndpoint

[Internal](../index.md).AuthenticationEndpoint

## Extends

- [`BaseEndpoint`](BaseEndpoint.md)

## Constructors

### new AuthenticationEndpoint(client)

> **new AuthenticationEndpoint**(`client`): [`AuthenticationEndpoint`](AuthenticationEndpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`AuthenticationEndpoint`](AuthenticationEndpoint.md)

#### Inherited from

[`Internal.BaseEndpoint.constructor`](BaseEndpoint.md#constructors)

#### Source

[endpoints/endpoint.base.ts:9](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L9)

## Properties

| Modifier | Property | Type | Description | Inheritance | Source |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `readonly` | `_apiClient` | [`ApiClient`](ApiClient.md) | - | [`Internal.BaseEndpoint._apiClient`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:7](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L7) |
| `readonly` | `_client` | [`Kient`](../../classes/Kient.md) | - | [`Internal.BaseEndpoint._client`](BaseEndpoint.md) | [endpoints/endpoint.base.ts:6](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L6) |

## Methods

### checkAuthenticated()

> **`protected`** **checkAuthenticated**(): `void`

#### Returns

`void`

#### Inherited from

[`Internal.BaseEndpoint.checkAuthenticated`](BaseEndpoint.md#checkauthenticated)

#### Source

[endpoints/endpoint.base.ts:14](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/endpoint.base.ts#L14)

***

### currentUser()

> **currentUser**(): `Promise`\<[`UserResponse`](../interfaces/UserResponse.md)\>

#### Returns

`Promise`\<[`UserResponse`](../interfaces/UserResponse.md)\>

#### Source

[endpoints/authentication/authentication.endpoint.ts:105](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/authentication/authentication.endpoint.ts#L105)

***

### getTokens()

> **getTokens**(): `Promise`\<[`TokensResponse`](../interfaces/TokensResponse.md)\>

#### Returns

`Promise`\<[`TokensResponse`](../interfaces/TokensResponse.md)\>

#### Source

[endpoints/authentication/authentication.endpoint.ts:18](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/authentication/authentication.endpoint.ts#L18)

***

### login()

> **login**(`credentials`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `credentials` | [`LoginCredentials`](../interfaces/LoginCredentials.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[endpoints/authentication/authentication.endpoint.ts:30](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/authentication/authentication.endpoint.ts#L30)

***

### pusherAuthenticate()

> **pusherAuthenticate**(`params`): `Promise`\<[`PusherAuthenticationResponse`](../interfaces/PusherAuthenticationResponse.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `ChannelAuthorizationRequestParams` |

#### Returns

`Promise`\<[`PusherAuthenticationResponse`](../interfaces/PusherAuthenticationResponse.md)\>

#### Source

[endpoints/authentication/authentication.endpoint.ts:119](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/endpoints/authentication/authentication.endpoint.ts#L119)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
