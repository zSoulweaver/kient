export interface GetChannelResponse {
  id: number
  user_id: number
  slug: string
  is_banned: boolean
  playback_url?: string
  vod_enabled: boolean
  subscription_enabled: boolean
  followers_count: number
  following: boolean
  subscription: unknown
  subscriber_badges: Array<{
    id: number
    channel_id: number
    months: number
    badge_image: {
      srcset: string
      src: string
    }
  }>

  banner_image: {
    responsive: string
    url: string
  }

  recent_categories: Array<{
    id: number
    category_id: number
    name: string
    slug: string
    tags: string[]
    description: string
    deleted_at: unknown
    viewers: number
    banner: {
      responsive: string
      url: string
    }
    category: {
      id: number
      name: string
      slug: string
      icon: string
    }
  }>

  livestream: {
    id: number
    slug: string
    channel_id: number
    created_at: Date
    session_title: string
    is_live: boolean
    risk_level_id: unknown
    start_time: Date
    source: unknown
    twitch_channel: unknown
    duration: number
    language: string
    is_mature: boolean
    viewer_count: number
    thumbnail: {
      responsive: string
      url: string
    }
    viewers: number
    categories: Array<{
      id: number
      category_id: number
      name: string
      slug: string
      tags: string[]
      description: string
      deleted_at: unknown
      viewers: number
      category: {
        id: number
        name: string
        slug: string
        icon: string
      }
    }>
    tags: unknown[]
  }

  role: unknown
  muted: boolean
  follower_badges: unknown[]
  offline_banner_image: unknown
  can_host: boolean
  user: {
    id: number
    username: string
    agreed_to_terms: true
    email_verified_at: Date
    bio: string
    country: string
    state: string
    city: string
    instagram: string
    twitter: string
    youtube: string
    discord: string
    tiktok: string
    facebook: string
    profile_pic: string
  }

  chatroom: {
    id: number
    chatable_type: string
    channel_id: string
    created_at: Date
    updated_at: Date
    chat_mode_old: string
    chat_mode: string
    slow_mode: boolean
    chatable_id: number
    followers_mode: boolean
    subscribers_mode: boolean
    emotes_mode: boolean
    message_interval: number
    following_min_duration: number
  }

  ascending_links: Array<{
    id: number
    channel_id: number
    description: string
    link: string
    created_at: Date
    updated_at: Date
    order: number
    title: string
  }>

  plan: {
    id: number
    channel_id: number
    stripe_plan_id: string
    amount: string
    created_at: Date
    updated_at: Date
  }

  previous_livestreams: Array<{
    id: number
    slug: string
    channel_id: number
    created_at: Date
    session_title: string
    is_live: boolean
    risk_level_id: unknown
    start_time: Date
    source: unknown
    twitch_channel: unknown
    duration: number
    language: string
    is_mature: boolean
    viewer_count: number
    thumbnail: {
      responsive: string
      url: string
    }
    views: number
    categories: Array<{
      id: number
      category_id: number
      name: string
      slug: string
      tags: string[]
      description: string
      deleted_at: unknown
      viewers: number
      category: {
        id: number
        name: string
        slug: string
        icon: string
      }
    }>
    video: {
      id: number
      live_stream_id: number
      slug: unknown
      thumb: unknown
      s3: unknown
      trading_platform_id: unknown
      created_at: Date
      updated_at: Date
      uuid: string
      views: number
      delated_at: unknown
    }
  }>

  verified: {
    id: number
    channel_id: number
    created_at: Date
    updated_at: Date
  }

  media: Array<{
    id: number
    model_type: string
    model_id: number
    collection_name: string
    name: string
    file_name: string
    mime_type: string
    disk: string
    size: number
    manipulations: unknown[]
    custom_properties: {
      generated_conversations: {
        fullsize: boolean
        medium: boolean
      }
    }
    responsive_images: unknown[]
    order_column: number
    created_at: Date
    updated_at: Date
    uuid: string
    conversations_disk: string
  }>
}
