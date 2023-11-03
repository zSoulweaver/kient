export interface GetLivestreamResponse {
  id: number
  slug: string
  session_title: string
  created_at: Date
  language: string
  is_mature: boolean
  viewers: number
  category: {
    id: number
    name: string
    slug: string
    tags: string[]
    parent_category: {
      id: number
      slug: string
    }
  }
  playback_url: string
  thumbnail: {
    src: string
    srcset: string
  }
}
