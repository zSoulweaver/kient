import { cast } from '@deepkit/type'
import type { ChannelAuthorizationRequestParams } from 'pusher-js/types/src/core/auth/options'
import { BaseEndpoint } from '../endpoint.base'
import type { TokensResponse } from './dto/tokens.response'
import type { LoginErrorResponse, LoginResponse } from './dto/login.response'
import type { UserResponse } from './dto/user.response'
import type { PusherAuthenticationResponse } from './dto/pusher-authentication.response'
import { KientIncorrectCredentials, KientInvalidCredentials, KientOTPIncorrect, KientOTPRequired } from './error'
import type { LoginCredentials, LoginInput } from './dto/login.input'
import type { PusherAuthenticationInput } from './dto/pusher-authentication.input'
import { KientApiError, KientUnauthenticated } from '@/errors'
import { buildBody } from '@/utils/build-body'

/**
 * @category Endpoints
 */
export class AuthenticationEndpoint extends BaseEndpoint {
  public async getTokens() {
    const response = await this._apiClient.callKickApi({ endpoint: 'kick-token-provider' })
    if (response.status !== 200)
      throw new KientApiError('Failed to retrieve pre-login tokens', { cause: response })

    return cast<TokensResponse>(response.body)
  }

  public async login(credentials: LoginCredentials, kickAuthHeader: string = '') {
    this._apiClient.setKickAuthHeader(kickAuthHeader)
    const tokens = await this.getTokens()

    const body = buildBody<LoginInput>({
      email: credentials.email,
      password: credentials.password,
      one_time_password: credentials.otc,
      isMobileRequest: true,
      [tokens.nameFieldName]: '',
      [tokens.validFromFieldName]: tokens.encryptedValidFrom,
    })
    const response = await this._apiClient.callKickApi({
      endpoint: 'mobile/login',
      method: 'post',
      options: { body },
    })

    if (response.status === 422) {
      const responseBody = cast<LoginErrorResponse>(response.body)
      if (responseBody.message === 'Username or password is not correct')
        throw new KientIncorrectCredentials({ cause: response })

      if (responseBody.message === 'The given data was invalid.')
        throw new KientInvalidCredentials({ cause: response })
    }

    if (response.status === 400) {
      const responseBody = cast<LoginErrorResponse>(response.body)
      if (responseBody.message === 'Invalid OTP')
        throw new KientOTPIncorrect({ cause: response })
    }

    if (response.status === 200) {
      const responseBody = cast<LoginResponse>(response.body)
      if (responseBody.token) {
        this._apiClient.setBearerToken(responseBody.token)
        this._client.authenticated = true
        return
      }
      if (responseBody.otp_required)
        throw new KientOTPRequired('email', { cause: response })

      if (responseBody['2fa_required'])
        throw new KientOTPRequired('authenticator', { cause: response })
    }

    throw new KientApiError('Unknown authentication error when attemping login', { cause: response })
  }

  public async currentUser() {
    this.checkAuthenticated()

    const response = await this._apiClient.callKickApi({ endpoint: 'api/v1/user' })
    if (response.status !== 200)
      throw new KientApiError('', { cause: response })

    const deserializedBody = cast<UserResponse>(response.body)
    if (!deserializedBody.id)
      throw new KientUnauthenticated({ cause: response })

    return cast<UserResponse>(response.body)
  }

  public async pusherAuthenticate(params: ChannelAuthorizationRequestParams) {
    this.checkAuthenticated()

    const body = buildBody<PusherAuthenticationInput>({
      socket_id: params.socketId,
      channel_name: params.channelName,
    })
    const response = await this._apiClient.callKickApi({
      endpoint: 'broadcasting/auth',
      method: 'post',
      options: { body },
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to get pusher channel authentication token', { cause: response })

    return cast<PusherAuthenticationResponse>(response.body)
  }
}
