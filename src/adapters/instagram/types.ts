export type RawInstagramFollowerEntry = {
  string_list_data: Array<{
    href: string
    timestamp: number
    value: string
  }>
}

export type RawInstagramFollowersFile = RawInstagramFollowerEntry[]

export type RawInstagramFollowingEntry = {
  title: string

  string_list_data: Array<{
    href: string
    timestamp: number
  }>
}

export type RawInstagramFollowingFile = {
  relationships_following: RawInstagramFollowingEntry[]
}
