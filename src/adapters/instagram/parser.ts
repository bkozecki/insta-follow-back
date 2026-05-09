import type { User } from '@/types/types'

import type {
  RawInstagramFollowersFile,
  RawInstagramFollowingFile,
} from './types'

export const parseFollowers = (rawFile: RawInstagramFollowersFile): User[] => {
  return rawFile.map((entry) => {
    const data = entry.string_list_data[0]

    return {
      username: data?.value ?? '',
      profileUrl: data?.href ?? '',
      timestamp: data?.timestamp ?? 0,
    }
  })
}

export const parseFollowing = (rawFile: RawInstagramFollowingFile): User[] => {
  return rawFile.relationships_following.map((entry) => {
    const data = entry.string_list_data[0]

    return {
      username: entry.title,
      profileUrl: data?.href ?? '',
      timestamp: data?.timestamp ?? 0,
    }
  })
}
