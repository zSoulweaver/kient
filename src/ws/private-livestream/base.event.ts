export interface BasePrivateLivestreamEvent {
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
  created_at: Date
}
