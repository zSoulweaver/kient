import { cast } from '@deepkit/type'
// eslint-disable-next-line ts/consistent-type-imports
import { GetLivestreamResponse } from '../dto/get-livestream.response'
import { BaseInstance } from '@/core/instance.base'

export interface LivestreamThumbnails {
  1080: string
  720: string
  480: string
  360: string
  160: string
}

/**
 * @category Instances
 */
export class LivestreamInstance extends BaseInstance<GetLivestreamResponse> {
  public getThumbnails() {
    if (!this.data?.thumbnail)
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
