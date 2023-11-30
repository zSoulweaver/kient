// TODO: Not yet complete maybe?
export interface SubscriptionGiftedEvent {
  id: string
  channel: {
    id: number
    slug: string
  }
  user: {
    id: number
    username: string
    slug: string
  }
  gifted_users: Array<{
    username: string
    [key: string]: any
  }>
  created_at: Date
}
