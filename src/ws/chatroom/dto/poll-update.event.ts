export interface PollUpdateEvent {
  poll: {
    title: string
    options: Array<{
      id: number
      label: string
      votes: number
    }>
    duration: number
    remaining: number
    result_display_duration: 15
  }
}
