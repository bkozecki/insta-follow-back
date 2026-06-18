import type { User } from '@/types/types'

import type {
  RawInstagramFollowersFile,
  RawInstagramFollowingFile,
} from './types'

const isFollowersFile = (raw: unknown): raw is RawInstagramFollowersFile =>
  Array.isArray(raw) &&
  (raw.length === 0 || Array.isArray((raw[0] as Record<string, unknown>)?.string_list_data))

const isFollowingFile = (raw: unknown): raw is RawInstagramFollowingFile =>
  raw !== null &&
  typeof raw === 'object' &&
  Array.isArray((raw as Record<string, unknown>).relationships_following)

export const parseFollowers = (rawFile: unknown): User[] => {
  if (!isFollowersFile(rawFile)) throw new Error('WRONG_FILE')

  return rawFile.map((entry) => {
    const data = entry.string_list_data[0]

    return {
      username: data?.value ?? '',
      profileUrl: data?.href ?? '',
      timestamp: data?.timestamp ?? 0,
    }
  })
}

export const parseFollowing = (rawFile: unknown): User[] => {
  if (!isFollowingFile(rawFile)) throw new Error('WRONG_FILE')

  return rawFile.relationships_following.map((entry) => {
    const data = entry.string_list_data[0]

    return {
      username: entry.title,
      profileUrl: data?.href ?? '',
      timestamp: data?.timestamp ?? 0,
    }
  })
}
