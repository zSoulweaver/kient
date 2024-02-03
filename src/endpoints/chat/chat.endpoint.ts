import { cast } from '@deepkit/type'
import { BaseEndpoint } from '../endpoint.base'
import type { SendMessageResponse } from './dto/send-message.response'
import type { PinMessageInput } from './dto/pin-message.input'
import type { SendMessageInput } from './dto/send-message.input'
import type { GenericApiResponse } from '@/endpoints/generic-api.response'
import { KientApiError } from '@/errors'
import { buildBody } from '@/utils/build-body'

/**
 * @category Endpoints
 */
export class ChatEndpoint extends BaseEndpoint {
  public async sendMessage(chatroomId: string | number, message: string) {
    this.checkAuthenticated()

    const body = buildBody<SendMessageInput>({
      content: message,
      type: 'message',
    })
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/messages/send/${chatroomId}`,
      method: 'post',
      options: { body },
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to send chatroom message', { cause: response })

    const deserializedResponse = cast<SendMessageResponse>(response.body)
    if (deserializedResponse.status.error)
      throw new KientApiError(deserializedResponse.status, { cause: response })

    return deserializedResponse
  }

  public async deleteMessage(chatroomId: string | number, messageId: string) {
    this.checkAuthenticated()

    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/chatrooms/${chatroomId}/messages/${messageId}`,
      method: 'delete',
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to delete chatroom message', { cause: response })

    const deserializedResponse = cast<GenericApiResponse<null>>(response.body)
    if (deserializedResponse.status.error)
      throw new KientApiError(deserializedResponse.status, { cause: response })

    return deserializedResponse
  }

  public async pinMessage(channel: string, messageId: string) {
    this.checkAuthenticated()

    const body = buildBody<PinMessageInput>({
      message: {
        id: messageId,
        content: 'dummy',
        type: 'message',
      },
      duration: 20,
    })
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/channels/${channel}/pinned-message`,
      method: 'post',
      options: {
        body: JSON.stringify(body),
      },
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to pin chatroom message', { cause: response })

    const deserializedResponse = cast<GenericApiResponse<null>>(response.body)
    if (deserializedResponse.status.error)
      throw new KientApiError(deserializedResponse.status, { cause: response })

    return deserializedResponse
  }
}
