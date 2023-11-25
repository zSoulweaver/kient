export interface ChatMoveToSupportedChannelEvent {
  channel: {
    id: number
    user_id: number
    slug: string
    is_banned: boolean
    playback_url: string
    name_updated_at: unknown
    vod_enabled: boolean
    subscription_enabled: boolean
    can_host: boolean
    current_livestream: {
      id: number
      slug: string
      channel_id: number
      created_at: Date
      session_title: string
      is_live: boolean
      risk_level_id: unknown
      start_time: Date
      source: unknown
      twitch_channel?: string
      duration: number
      language: string
      is_mature: boolean
      viewer_count: number
    }
    user: {
      id: number
      username: string
      agreed_to_terms: boolean
      email_verified_at: Date
      bio?: string
      country?: string
      state?: string
      city?: string
      instgram?: string
      twitter?: string
      youtube?: string
      discord?: string
      tiktok?: string
      facebook?: string
    }
  }
  slug: string
  hosted: {
    id: number
    username: string
    slug: string
    viewers_count: number
    is_live: boolean
    profile_pic: string
    category: string
    preview_thumbnail: {
      srcset: string
      src: string
    }
  }
}
