---
outline: deep
---

# `LivestreamInstance`

`LivestreamInstance` is a class returned from methods that fetch channel livestream data. It encapsulates data about the current livestream and includes methods to assist with interacting with the specified livestream.

## Properties

### `data`

::: info Returns
`GetLivestreamResponse`
:::

## Methods

### `getThumbnails()`

Gets thumbnails from `thumbnail.srcset` and organises them into an object that can be referenced by their resolution.

::: info Returns
`LivestreamThumbnails | null`
:::
