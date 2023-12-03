# Class: ApiClient

[Internal](../index.md).ApiClient

## Constructors

### new ApiClient(client)

> **`private`** **new ApiClient**(`client`): [`ApiClient`](ApiClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

[`ApiClient`](ApiClient.md)

#### Source

[client/api.client.ts:27](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L27)

## Properties

| Modifier | Property | Type | Description | Source |
| :------ | :------ | :------ | :------ | :------ |
| `private` | `_apiFetch` | `$Fetch` | - | [client/api.client.ts:22](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L22) |
| `private` | `_client` | [`Kient`](../../classes/Kient.md) | - | [client/api.client.ts:21](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L21) |
| `private` | `_cycleClient` | `CycleTLSClient` | - | [client/api.client.ts:23](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L23) |
| `private` | `bearerToken` | `string` | - | [client/api.client.ts:25](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L25) |
| `private` | `cookieJar` | `CookieJar` | - | [client/api.client.ts:24](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L24) |

## Methods

### callKickApi()

> **callKickApi**(`params`): `Promise`\<`CycleTLSResponse`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`CallKickAPICycles`](../interfaces/CallKickAPICycles.md) |

#### Returns

`Promise`\<`CycleTLSResponse`\>

#### Source

[client/api.client.ts:47](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L47)

***

### handleCookies()

> **`private`** **handleCookies**(`response`, `url`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `response` | `CycleTLSResponse` |
| `url` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[client/api.client.ts:71](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L71)

***

### init()

> **`private`** **init**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[client/api.client.ts:34](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L34)

***

### setBearerToken()

> **setBearerToken**(`token`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

[client/api.client.ts:67](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L67)

***

### create()

> **`static`** **create**(`client`): `Promise`\<[`ApiClient`](ApiClient.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `client` | [`Kient`](../../classes/Kient.md) |

#### Returns

`Promise`\<[`ApiClient`](ApiClient.md)\>

#### Source

[client/api.client.ts:41](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/api.client.ts#L41)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
