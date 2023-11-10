export interface UserResponse {
  id: number
  email: string
  username: string
  google_id: null | unknown
  agreed_to_terms: boolean
  email_verified_at: null | Date
  bio: null | string
  country: string
  state: string
  city: string
  enable_live_notifications: boolean
  instagram: string
  twitter: string
  youtube: string
  discord: string
  tiktok: string
  facebook: string
  enable_onscreen_live_notifications: boolean
  apple_id: null | unknown
  phone: null | unknown
  email_updated_at: null | Date
  newsletter_subscribed: boolean
  enable_sms_promo: boolean
  enable_sms_security: boolean
  profilepic: string
  filtered_categories: unknown[]
  is_2fa_setup: boolean
  redirect: null | unknown
  channel_can_be_updated: boolean
  is_live: boolean
  intercom_hash: null | unknown
  roles: unknown[]
  streamer_channel: {
    id: number
    user_id: number
    slug: string
    is_banned: boolean
    playback_url: string
    name_updated_at: null | unknown
    vod_enabled: boolean
    subscription_enabled: boolean
    can_host: boolean
  }
}
