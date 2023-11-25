export interface GiftsLeaderboardUpdatedEvent {
  channel: {
    id: number
    user_id: number
    slug: string
    is_banned: boolean
    playback_url: string
    name_updated_at: unknown
    can_host: boolean
    chatroom: {
      id: number
      chatable_type: string
      channel_id: number
      created_at: Date
      updated_at: Date
      chat_mode_old: string
      chat_mode: string
      slow_mode: boolean
      chatablle_id: number
      followers_mode: boolean
      subscribers_mode: boolean
      emotes_mode: boolean
      message_interval: number
      following_min_duration: number
    }
  }
  leaderboard: Array<{
    user_id: number
    username: string
    quantity: number
  }>
  weekly_leaderboard: Array<{
    user_id: number
    username: string
    quantity: number
  }>
  monthly_leaderboard: Array<{
    user_id: number
    username: string
    quantity: number
  }>
  gifter_id: number
  gifted_quantity: number
}
