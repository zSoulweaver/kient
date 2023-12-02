import { cast } from '@deepkit/type'
import type { GetLivestreamResponse } from '../dto/get-livestream.response'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'

export interface LivestreamThumbnails {
  1080: string
  720: string
  480: string
  360: string
  160: string
}

export class LivestreamInstance extends BaseInstance<GetLivestreamResponse | null> {
  public constructor(data: any, client: Kient) {
    super(cast<GetLivestreamResponse | null>(data), client)
  }

  public getThumbnails() {
    if (!this.data)
      return null

    const pairs = this.data.thumbnail.srcset.split(', ')
    const result: Record<string, string> = {}
    pairs.forEach((pair) => {
      const url = pair.split(' ')[0]
      const filename = url.match(/([\w\d_-]*)\.?[^\\\/]*$/i)
      if (filename && filename[1])
        result[filename[1]] = url
    })

    return cast<LivestreamThumbnails>(result)
  }
}
