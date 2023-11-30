// TODO: Not yet complete maybe?
export interface SubscriptionCreatedEvent {
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
  subscription: {
    total: any
  }
  created_at: Date
}
