import type { BasePrivateChatroomEvent } from '../base.event'

export interface UserTimeoutedEvent extends Omit<BasePrivateChatroomEvent, 'created_at'> {
  banned: {
    id: number
    slug: string
    username: string
  }
  ban: {
    reason: string
    type: string
    created_at: Date
    expires_at: Date
  }
}
