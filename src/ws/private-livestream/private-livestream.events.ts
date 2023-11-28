import type { HostReceivedInstance } from './instance/host-received.instance'
import type { MatureModeActivatedInstance } from './instance/mature-mode-activated.instance'
import type { MatureModeDeactivatedInstance } from './instance/mature-mode-deactivated.instance'
import type { TitleChangedInstance } from './instance/title-changed.instance'
import type { UpdatedLiveStreamInstance } from './instance/updated-livestream.instance'

// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateLivestreamEvents = {
  onHostReceived: [hostReceivedInstance: HostReceivedInstance]
  onTitleChanged: [titleChangedInstance: TitleChangedInstance]
  onMatureModeActivated: [matureModeActivatedInstance: MatureModeActivatedInstance]
  onMatureModeDeactivated: [matureModeDeactivatedInstance: MatureModeDeactivatedInstance]
  onLivestreamInformationUpdate: [updatedLiveStreamInstance: UpdatedLiveStreamInstance]
}
