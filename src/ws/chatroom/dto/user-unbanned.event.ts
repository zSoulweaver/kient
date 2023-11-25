export interface UserUnbannedEvent {
  id: string
  user: {
    id: number
    username: string
    slug: string
  }
  unbanned_by: {
    id: number
    username: string
    slug: string
  }
}
