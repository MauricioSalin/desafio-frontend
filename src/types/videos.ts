export interface Thumbnails {
  default: {
    url: string
    width: number
    height: number
  }
  medium: {
    url: string
    width: number
    height: number
  }
  high: {
    url: string
    width: number
    height: number
  }
}

export interface Snippet {
  publishedAt: Date
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
}

export interface VideoId {
  kind: string
  videoId: string
  channelId: string
  playlistId: string
}

export interface Video {
  kind: string
  etag: string
  id: VideoId
  snippet: Snippet
}
