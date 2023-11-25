export interface ChatroomUpdatedEvent {
  id: number
  slow_mode: {
    enabled: boolean
    message_interval: number
  }
  subscribers_mode: {
    enabled: boolean
  }
  followers_mode: {
    enabled: boolean
    min_duration: number
  }
  emotes_mode: {
    enabled: boolean
  }
  advanced_bot_protection: {
    enabled: boolean
    remaining_time: number
  }
}
