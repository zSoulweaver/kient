import { BaseInstance } from '@/utils/instance.base'
import { GetLivestreamResponse } from '../dto/get-livestream.response'
import { Kient } from '@/client/kient'
import { deserialize } from '@deepkit/type'

export interface LivestreamThumbnails {
  1080: string
  720: string
  480: string
  360: string
  160: string
}

export class LivestreamInstance extends BaseInstance<GetLivestreamResponse> {
  constructor(data: any, client: Kient) {
    super(deserialize<GetLivestreamResponse>(data), client)
  }

  getThumbnails() {
    const pairs = this.data.thumbnail.srcset.split(', ')
    const result: Record<string, string> = {}
    pairs.forEach(pair => {
      const url = pair.split(' ')[0]
      const filename = url.match(/([\w\d_-]*)\.?[^\\\/]*$/i)
      if (filename && filename[1]) {
        result[filename[1]] = url
      }
    })

    return deserialize<LivestreamThumbnails>(result)
  }
}
