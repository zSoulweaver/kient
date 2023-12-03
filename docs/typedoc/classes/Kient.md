# Class: Kient

The entry class into Kient, provides access to Kick's API endpoints and WebSocket via ease to consume functions.

## Extends

- `EventEmitter`\<[`KientEventEmitters`](../Internal/type-aliases/KientEventEmitters.md)\>

## Properties

| Property | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| `_apiClient` | [`ApiClient`](../Internal/classes/ApiClient.md) | - | [client/kient.ts:37](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L37) |
| `_wsClient` | [`WsClient`](../Internal/classes/WsClient.md) | - | [client/kient.ts:38](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L38) |
| `authenticated` | `boolean` | - | [client/kient.ts:39](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L39) |

## Accessors

### api

> **`get`** **api**(): [`Endpoints`](../Internal/interfaces/Endpoints.md)

#### Returns

[`Endpoints`](../Internal/interfaces/Endpoints.md)

#### Source

[client/kient.ts:71](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L71)

***

### ws

> **`get`** **ws**(): [`WsHandlers`](../Internal/interfaces/WsHandlers.md)

#### Returns

[`WsHandlers`](../Internal/interfaces/WsHandlers.md)

#### Source

[client/kient.ts:75](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L75)

## Methods

### create()

> **`static`** **create**(): `Promise`\<[`Kient`](Kient.md)\>

#### Returns

`Promise`\<[`Kient`](Kient.md)\>

#### Source

[client/kient.ts:65](https://github.com/zSoulweaver/kient/blob/cb3a38e/src/client/kient.ts#L65)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
