import { deserialize } from '@deepkit/type'
import { BaseEndpoint } from '../endpoint.base'
import { SendMessageResponse } from './dto/send-message.response'
import { KientApiError } from '../api.error'
import { GenericApiResponse } from '@/utils/generic-api.response'

export class ChatEndpoint extends BaseEndpoint {
  public async sendMessage(chatroomId: string | number, message: string) {
    if (!this._client.authenticated) {
      throw new KientApiError({ name: 'UNAUTHENTICATED' })
    }

    const body = {
      content: message,
      type: 'message'
    }
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/messages/send/${chatroomId}`,
      method: 'post',
      options: {
        body: JSON.stringify(body)
      }
    })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    const deserializedResponse = deserialize<SendMessageResponse>(response.body)
    if (deserializedResponse.status.code === 401) {
      throw new KientApiError({ name: 'UNAUTHENTICATED' })
    }
    if (deserializedResponse.status.code !== 200) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        cause: response
      })
    }
    return deserializedResponse
  }

  public async deleteMessage(chatroomId: string | number, messageId: string) {
    if (!this._client.authenticated) {
      throw new KientApiError({ name: 'UNAUTHENTICATED' })
    }

    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/chatrooms/${chatroomId}/messages/${messageId}`,
      method: 'delete'
    })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    const deserializedResponse = deserialize<GenericApiResponse<null>>(response.body)
    if (deserializedResponse.status.code === 401) {
      throw new KientApiError({ name: 'UNAUTHENTICATED' })
    }
    if (deserializedResponse.status.code !== 200) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        cause: response
      })
    }
    return deserializedResponse
  }
}
