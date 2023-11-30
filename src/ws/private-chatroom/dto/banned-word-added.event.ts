import type { BasePrivateChatroomEvent } from '../base.event'

export interface BannedWordAddedEvent extends BasePrivateChatroomEvent {
  word: string
}
