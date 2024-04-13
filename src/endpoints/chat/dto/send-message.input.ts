export interface SendMessageInput {
  content: string
  type: 'message' | 'reply'
  metadata?: {
    original_message?: {
      id: string
      content: string
    }
    original_sender?: {
      id: number
      username: string
    }
  }
}
