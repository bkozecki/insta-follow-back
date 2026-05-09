export type User = {
  username: string
  profileUrl: string
  timestamp: number
}

export type FileType = 'followers' | 'following'

export type UploadState =
  | { status: 'idle' }
  | { status: 'uploading'; data: FileType }
  | { status: 'partial'; data: FileType; users: User[] }
  | { status: 'ready'; followers: User[]; following: User[] }
  | { status: 'error'; error: Error }

export type AnalysisResult = {
  mutualFollow: User[]
  notFollowedBack: User[]
  notFollowingBack: User[]
}
