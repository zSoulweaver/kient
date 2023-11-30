export interface FollowerAddedEvent {
  id: string
  channel: {
    id: number
    slug: string
  }
  user: {
    id: number
    slug: string
    username: string
  }
  followers_count: number
  created_at: Date
}
