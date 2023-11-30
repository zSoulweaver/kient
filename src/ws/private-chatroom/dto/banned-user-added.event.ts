import type { BasePrivateChatroomEvent } from '../base.event'

export interface BannedUserAddedEvent extends Omit<BasePrivateChatroomEvent, 'created_at'> {
  banned: {
    id: number
    slug: string
    username: string
  }
  ban: {
    reason: string
    type: string
    created_at: Date
  }
}
