export interface UserBannedEvent {
  id: string
  user: {
    id: number
    username: string
    slug: string
  }
  banned_by: {
    id: number
    username: string
    slug: string
  }
  expires_at: Date
}
