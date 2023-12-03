export const ChatterStatus = {
  BROADCASTER: 'broadcaster',
  MODERATOR: 'moderator',
  SUBSCRIBER: 'subscriber',
  SUB_GIFTER: 'sub_gifter',
  OG: 'og',
  FOUNDER: 'founder',
} as const

export interface ChatMessageEvent {
  id: string
  chatroom_id: number
  content: string
  type: string
  created_at: Date
  sender: {
    id: number
    username: string
    slug?: string
    identity: {
      color: string
      badges: Array<{
        type: string
        text: string
        count?: number
      }>
    }
  }
}
