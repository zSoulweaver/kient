import { cast } from '@deepkit/type'
import type { ChannelAuthorizationRequestParams } from 'pusher-js/types/src/core/auth/options'
import { BaseEndpoint } from '../endpoint.base'
import { KientApiError } from '../api.error'
import type { TokensResponse } from './dto/tokens.response'
import { KientAuthenticationError } from './authentication.error'
import type { LoginErrorResponse, LoginResponse } from './dto/login.response'
import type { UserResponse } from './dto/user.response'
import type { PusherAuthenticationResponse } from './dto/pusher-authentication.response'

interface LoginCredentials {
  email: string
  password: string
  otc?: number | string
}

export class AuthenticationEndpoint extends BaseEndpoint {
  public async getTokens() {
    const response = await this._apiClient.callKickApi({ endpoint: 'kick-token-provider' })
    if (response.status !== 200) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to retrieve pre-login tokens',
        cause: response,
      })
    }
    return cast<TokensResponse>(response.body)
  }

  public async login(credentials: LoginCredentials) {
    const tokens = await this.getTokens()
    const body = {
      email: credentials.email,
      password: credentials.password,
      one_time_password: credentials.otc,
      [tokens.nameFieldName]: '',
      [tokens.validFromFieldName]: tokens.encryptedValidFrom,
      isMobileRequest: true,
    }
    const response = await this._apiClient.callKickApi({
      endpoint: 'mobile/login',
      method: 'post',
      options: {
        body: JSON.stringify(body),
      },
    })

    if (response.status === 422) {
      const responseBody = cast<LoginErrorResponse>(response.body)
      if (responseBody.message === 'Username or password is not correct') {
        throw new KientAuthenticationError({
          name: 'INCORRECT_CREDENTIALS',
          message: responseBody.message,
          cause: response,
        })
      }
      if (responseBody.message === 'The given data was invalid.') {
        throw new KientAuthenticationError({
          name: 'INVALID_CREDENTIALS',
          message: responseBody.message,
          cause: response,
        })
      }
    }

    if (response.status === 400) {
      const responseBody = cast<LoginErrorResponse>(response.body)
      if (responseBody.message === 'Invalid OTP') {
        throw new KientAuthenticationError({
          name: 'INVALID_2FA_CODE',
          message: 'Provided one time code is incorrect',
          cause: response,
        })
      }
    }

    if (response.status === 200) {
      const responseBody = cast<LoginResponse>(response.body)
      if (responseBody.token) {
        this._apiClient.setBearerToken(responseBody.token)
        this._client.authenticated = true
        return
      }
      let errorMessage = ''
      if (responseBody.otp_required)
        errorMessage = 'Login requires one time code from email'

      if (responseBody['2fa_required'])
        errorMessage = 'Login requires authenticator app token'

      throw new KientAuthenticationError({
        name: '2FA_REQUIRED',
        message: errorMessage,
        cause: response,
      })
    }

    throw new KientApiError({
      name: 'SOMETHING_WENT_WRONG',
      message: 'Unknown authentication error when attemping login',
      cause: response,
    })
  }

  public async currentUser() {
    this.checkAuthenticated()

    const response = await this._apiClient.callKickApi({ endpoint: 'api/v1/user' })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const deserializedBody = cast<UserResponse>(response.body)
    if (!deserializedBody.id)
      throw new KientApiError({ name: 'UNAUTHENTICATED' })

    return cast<UserResponse>(response.body)
  }

  public async pusherAuthenticate(params: ChannelAuthorizationRequestParams) {
    this.checkAuthenticated()

    const body = {
      socket_id: params.socketId,
      channel_name: params.channelName,
    }
    const response = await this._apiClient.callKickApi({
      endpoint: 'broadcasting/auth',
      method: 'post',
      options: {
        body: JSON.stringify(body),
      },
    })
    if (response.status !== 200) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to get pusher channel authentication token',
        cause: response,
      })
    }

    return cast<PusherAuthenticationResponse>(response.body)
  }
}
