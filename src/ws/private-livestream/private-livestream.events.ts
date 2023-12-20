import type { HostReceivedInstance } from './instance/host-received.instance'
import type { MatureModeActivatedInstance } from './instance/mature-mode-activated.instance'
import type { MatureModeDeactivatedInstance } from './instance/mature-mode-deactivated.instance'
import type { TitleChangedInstance } from './instance/title-changed.instance'
import type { UpdatedLiveStreamInstance } from './instance/updated-livestream.instance'

export const PrivateLivestreamEvents = {
  HostReceived: 'PRIVATE_LIVESTREAM_HOST_RECEIVED',
  TitleChanged: 'PRIVATE_LIVESTREAM_TITLE_CHANGED',
  MatureModeActivated: 'PRIVATE_LIVESTREAM_MATURE_MODE_ACTIVATED',
  MatureModeDeactivated: 'PRIVATE_LIVESTREAM_MATURE_MODE_DEACTIVATED',
  LivestreamInformationUpdated: 'PRIVATE_LIVESTREAM_LIVESTREAM_INFORMATION_UPDATED',
} as const

/**
 * @outline 3
 * @category Emitters
 */
// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateLivestreamEventEmitters = {
  [PrivateLivestreamEvents.HostReceived]: (hostReceivedInstance: HostReceivedInstance) => void
  [PrivateLivestreamEvents.TitleChanged]: (titleChangedInstance: TitleChangedInstance) => void
  [PrivateLivestreamEvents.MatureModeActivated]: (matureModeActivatedInstance: MatureModeActivatedInstance) => void
  [PrivateLivestreamEvents.MatureModeDeactivated]: (matureModeDeactivatedInstance: MatureModeDeactivatedInstance) => void
  [PrivateLivestreamEvents.LivestreamInformationUpdated]: (updatedLiveStreamInstance: UpdatedLiveStreamInstance) => void
}
