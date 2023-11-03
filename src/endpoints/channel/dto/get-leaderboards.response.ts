interface GifterInformation {
  user_id: number
  username: string
  quantity: number
}

export interface GetLeaderboardsResponse {
  gifts: Array<GifterInformation>
  gifts_enabled: boolean
  gifts_week: Array<GifterInformation>
  gifts_week_enabled: boolean
  gifts_month: Array<GifterInformation>
  gifts_month_enabled: boolean
}
