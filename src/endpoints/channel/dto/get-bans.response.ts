export class GetBansResponse {
  banned_user: {
    id: number
    username: string
  }

  banned_by: {
    id: number
    username: string
  }

  ban: {
    reason: string
    banned_at: Date
    permanent: boolean
    expires_at: Date
  }
}
