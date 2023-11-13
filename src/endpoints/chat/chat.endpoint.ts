import { deserialize } from '@deepkit/type'
import { BaseEndpoint } from '../endpoint.base'
import { SendMessageResponse } from './dto/send-message.response'
import { KientApiError } from '../api.error'

export class ChatEndpoint extends BaseEndpoint {
  public async sendMessage(chatroomId: string | number, message: string) {
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
    const deserializedResponse = deserialize<SendMessageResponse>(response.body)
    if (deserializedResponse.status.code === 401) {
      throw new KientApiError({ name: 'UNAUTHENTICATED' })
    }
    if (deserializedResponse.status.code !== 200) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message
      })
    }
    return deserializedResponse
  }
}
