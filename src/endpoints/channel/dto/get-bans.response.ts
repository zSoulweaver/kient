export interface GetBansResponse {
  ban: {
    banned_at: string
    expires_at: string
    permanent: boolean
    reason: string
  }
  banned_by: {
    id: string
    username: string
  }
  banned_user: {
    id: string
    username: string
  }
}
