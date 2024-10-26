export interface Messages {
  messages: Array<{
    id: string
    chat_id: number
    user_id: number
    content: string
    type: string
    metadata: unknown
    created_at: Date
    sender: {
      id: number
      slug: string
      username: string
      identity: {
        color: string
        badges: Array<{
          type: string
          text: string
          active: boolean
        }>
      }
    }
  }>
  cursor: string
  pinned_message: {
    message: {
      id: string
      chatroom_id: number
      content: string
      type: string
      created_at: Date
      sender: {
        id: number
        username: string
        slug: string
        identity: {
          color: string
          badges: Array<{
            type: string
            text: string
            count?: number
          }>
        }
      }
      metadata: unknown
    }
    finish_at: Date
    pinned_by: {
      id: number
      username: string
      slug: string
      identity: {
        color: string
        badges: Array<{
          type: string
          text: string
          count?: number
        }>
      }
    }
    duration: number
  }
}
