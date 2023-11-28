import type { BasePrivateLivestreamEvent } from '../base.event'

export interface TitleChangedEvent extends BasePrivateLivestreamEvent {
  old_title: string
  title: string
}
