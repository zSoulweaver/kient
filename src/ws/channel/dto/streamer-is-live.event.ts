export interface StreamerIsLiveEvent {
  livestream: {
    id: number
    channel_id: number
    session_title: string
    source?: unknown
    created_at: Date
  }
}
