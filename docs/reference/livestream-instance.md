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
```ts
interface {
  id: number
  slug: string
  session_title: string
  created_at: Date
  language: string
  is_mature: boolean
  viewers: number
  category: {
    id: number
    name: string
    slug: string
    tags: string[]
    parent_category: {
      id: number
      slug: string
    }
  }
  playback_url: string
  thumbnail: {
    src: string
    srcset: string
  }
}
```

## Methods

### `getThumbnails()`

Gets thumbnails from `thumbnail.srcset` and organised them into an object that can be referenced by their resolution.
::: info Returns
`LivestreamThumbnails | null`
:::
