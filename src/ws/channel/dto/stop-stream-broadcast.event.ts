export interface StopStreamBroadcastEvent {
  livestream: {
    id: number
    channel: {
      id: number
      is_banned: boolean
    }
  }
}
