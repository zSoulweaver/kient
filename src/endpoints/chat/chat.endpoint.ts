import { cast } from '@deepkit/type'
import { BaseEndpoint } from '../endpoint.base'
import { KientApiError } from '../api.error'
import type { SendMessageResponse } from './dto/send-message.response'
import type { PinMessageInput } from './dto/pin-message.input'
import type { GenericApiResponse } from '@/utils/generic-api.response'

export class ChatEndpoint extends BaseEndpoint {
  public async sendMessage(chatroomId: string | number, message: string) {
    this.checkAuthenticated()

    const body = {
      content: message,
      type: 'message',
    }
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/messages/send/${chatroomId}`,
      method: 'post',
      options: {
        body: JSON.stringify(body),
      },
    })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const deserializedResponse = cast<SendMessageResponse>(response.body)
    if (deserializedResponse.status.error) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        code: deserializedResponse.status.code,
        cause: response,
      })
    }
    return deserializedResponse
  }

  public async deleteMessage(chatroomId: string | number, messageId: string) {
    this.checkAuthenticated()

    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/chatrooms/${chatroomId}/messages/${messageId}`,
      method: 'delete',
    })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const deserializedResponse = cast<GenericApiResponse<null>>(response.body)
    if (deserializedResponse.status.error) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        code: deserializedResponse.status.code,
        cause: response,
      })
    }
    return deserializedResponse
  }

  public async pinMessage(channel: string, messageId: string) {
    this.checkAuthenticated()

    const body: PinMessageInput = {
      message: {
        id: messageId,
        content: 'dummy',
        type: 'message',
      },
      duration: 20,
    }
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/channels/${channel}/pinned-message`,
      method: 'post',
      options: {
        body: JSON.stringify(body),
      },
    })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const deserializedResponse = cast<GenericApiResponse<null>>(response.body)
    if (deserializedResponse.status.error) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        code: deserializedResponse.status.code,
        cause: response,
      })
    }
    return deserializedResponse
  }
}
