import type { BasePrivateChatroomEvent } from '../base.event'

export interface BannedUserDeletedEvent extends BasePrivateChatroomEvent {
  banned: {
    id: number
    slug: string
    username: string
  }
  created_at: Date
}
