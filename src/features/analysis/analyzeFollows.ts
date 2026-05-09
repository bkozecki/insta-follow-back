import type { AnalysisResult, User } from '@/types/types'

export const analyzeFollows = (
  followers: User[],
  following: User[]
): AnalysisResult => {
  const followersSet = new Set(followers.map((entry) => entry.username))
  const followingSet = new Set(following.map((entry) => entry.username))

  const notFollowedBackList = followers.filter(
    (user) => !followingSet.has(user.username)
  )

  const mutalFollowList = followers.filter((user) =>
    followingSet.has(user.username)
  )

  const notFollowingBackList = following.filter(
    (user) => !followersSet.has(user.username)
  )

  return {
    notFollowedBack: notFollowedBackList,
    mutualFollow: mutalFollowList,
    notFollowingBack: notFollowingBackList,
  }
}
