import type { GenericApiResponse } from '@/utils/generic-api.response'

interface PollData {
  poll: {
    title: string
    duration: number
    result_display_duration: number
    created_at: Date
    options: Array<{
      id: number
      label: string
      votes: number
    }>
    remaining: number
    has_voted: boolean
  }
}

export type GetPollsResponse = GenericApiResponse<null | PollData>
