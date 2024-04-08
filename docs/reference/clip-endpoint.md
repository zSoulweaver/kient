---
outline: deep
---

# `ClipEndpoint`

`ClipEndpoint` contains methods that facilitate obtaining clips information and their temporary video files.

## Methods

### <Badge type="tip">async</Badge> `getClip(clipId)`

Retrieves information about a specified clip identifier.

| Parameter | Type   | Required | Default | Description                                       |
| --------- | ------ | :------: | ------- | ------------------------------------------------- |
| clipId   | string |   true   |         | The ID you want to retrieve details for |

::: info Returns
`Promise<GetClipResponse>`
:::

***

### <Badge type="warning">Authentication Required</Badge> <Badge type="tip">async</Badge> `downloadClip(clipId)`

Retrieves a temporary video url from a specified clip identifier.

| Parameter | Type   | Required | Default | Description                                       |
| --------- | ------ | :------: | ------- | ------------------------------------------------- |
| clipId   | string |   true   |         | The ID you want to retrieve its temporary video url for |

::: info Returns
`Promise<DownloadClipResponse>`
:::